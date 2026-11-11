import * as T from 'three';
import { height } from './world.js';
import { balance } from './balance.js';
import { createServiceNavigation } from './service-navigation.js';

export function createEngineerOrders({ squad, world, base, spawn, defenders = [] }) {
  const anchor = new T.Vector2(spawn.x, spawn.z);
  const state = { mode: 'field', destination: null, settled: spawn, revision: 0 };
  const service = createServiceNavigation(world.canServiceWalk);
  const routing = createServiceNavigation((x, z) => world.canServiceWalk(x, z)
    && !defenders.some(member => member.hp > 0 && !member.inside && Math.hypot(x - member.p.x, z - member.p.y) < .34));
  const routeFor = (from, to) => routing.route(from, to) ?? service.route(from, to);
  const paths = new Map(), slots = new Map();
  const direction = new T.Vector2(), targetVelocity = new T.Vector2(), candidate = new T.Vector2(), away = new T.Vector2();
  const heading = new T.Vector2(), offset = new T.Vector2(), tangent = new T.Vector2(), testPoint = new T.Vector2();
  let job = false;
  const living = () => squad.members.filter(member => member.hp > 0);
  function stopJob() {
    job = false; paths.clear(); slots.clear();
    base.state.extinguishers = 0; base.state.replenishmentBlocked = false;
    state.mode = 'field'; state.destination = null; state.revision++;
    for (const member of squad.members) { member.working = false; member.workProgress = 0; member.workTime = 0; }
    const nearest = [...world.tiles.values()].sort((a, b) => Math.hypot(a.x - anchor.x, a.z - anchor.y) - Math.hypot(b.x - anchor.x, b.z - anchor.y))[0];
    state.settled = nearest ?? spawn;
  }
  function applyPaths(plans) {
    for (const member of squad.members) {
      member.working = false; member.workProgress = 0; member.workTime = 0;
      member.swing = -1; member.ready = 0; member.combatHold = false;
      member.serviceReroute = 0;
    }
    for (const [member, route] of plans) paths.set(member, route.map(p => p.clone()));
  }
  function orderMove(tile) {
    if (!tile || !living().length || base.state.destroyed) return false;
    const facing = new T.Vector2(tile.x - anchor.x, tile.z - anchor.y).normalize();
    if (facing.lengthSq() < .01) facing.set(0, 1);
    const plans = [];
    for (const [i, member] of living().entries()) {
      const offset = i === 0 ? [0, 0] : [i === 1 ? -.31 : .31, -.25];
      const point = new T.Vector2(tile.x + offset[0] * facing.y + offset[1] * facing.x,
        tile.z - offset[0] * facing.x + offset[1] * facing.y);
      const route = routeFor(member.p, point) ?? routeFor(member.p, new T.Vector2(tile.x, tile.z));
      if (!route) return false;
      plans.push([member, route]);
    }
    stopJob(); applyPaths(plans); state.mode = 'moving'; state.destination = tile; state.revision++;
    return true;
  }
  function orderExtinguish() {
    if (base.state.destroyed || base.state.burnSpeed <= 0 || !living().length) return false;
    if (job) return true;
    const { w, d } = world.home.spec;
    base.group.updateWorldMatrix(true, false);
    const sites = [[-w / 2 - .32, 0], [w / 2 + .32, 0], [0, d / 2 + .53]].map(([x, z]) => {
      const p = base.group.localToWorld(new T.Vector3(x, 0, z)); return new T.Vector2(p.x, p.z);
    });
    const plans = [], assigned = new Map();
    for (const member of living()) {
      const ordered = sites.slice().sort((a, b) => a.distanceToSquared(member.p) - b.distanceToSquared(member.p));
      let found = null;
      for (const site of ordered) {
        const route = routeFor(member.p, site);
        if (route) { found = { site, route }; break; }
      }
      if (!found) return false;
      plans.push([member, found.route]); assigned.set(member, found.site);
      sites.splice(sites.indexOf(found.site), 1);
    }
    stopJob(); applyPaths(plans);
    for (const [member, site] of assigned) slots.set(member, site);
    job = true; state.mode = 'approaching'; state.destination = null; state.revision++;
    base.state.replenishmentBlocked = true;
    return true;
  }
  function move(member, dt) {
    const route = paths.get(member) ?? [];
    member.serviceReroute = Math.max(0, (member.serviceReroute ?? 0) - dt);
    if (route.length && member.serviceReroute === 0 && !routing.clear(member.p, route[0])) {
      const detour = routing.route(member.p, route.at(-1));
      if (detour) route.splice(0, route.length, ...detour);
      member.serviceReroute = .35;
    }
    while (route.length && member.p.distanceTo(route[0]) < .045) route.shift();
    if (!route.length || member.combatHold) targetVelocity.set(0, 0);
    else {
      direction.subVectors(route[0], member.p);
      targetVelocity.copy(direction).setLength(Math.min(2.55, direction.length() * 7));
      heading.copy(direction).normalize();
      let blocker = null, closest = Infinity;
      for (const other of [...squad.members, ...defenders]) {
        if (other === member || other.hp <= 0 || other.inside) continue;
        offset.subVectors(other.p, member.p);
        const along = offset.dot(heading), lateral = offset.x * heading.y - offset.y * heading.x;
        if (along > -.06 && along < .78 && Math.abs(lateral) < .38 && offset.lengthSq() < closest) {
          closest = offset.lengthSq(); blocker = { along, lateral };
        }
      }
      if (blocker) {
        const side = Math.abs(blocker.lateral) > .02 ? -Math.sign(blocker.lateral) : member.index % 2 ? 1 : -1;
        tangent.set(heading.y, -heading.x).multiplyScalar(side);
        testPoint.copy(member.p).addScaledVector(tangent, .24);
        if (!world.canServiceWalk(testPoint.x, testPoint.y)) tangent.negate();
        targetVelocity.addScaledVector(tangent, 1.2 + (.78 - blocker.along) * 2).clampLength(0, 2.55);
      }
    }
    member.velocity.lerp(targetVelocity, 1 - Math.exp(-dt * 15));
    candidate.copy(member.p).addScaledVector(member.velocity, dt);
    for (const other of living()) {
      if (other === member) continue;
      away.subVectors(candidate, other.p); const distance = away.length();
      if (distance > .001 && distance < .27) candidate.copy(other.p).addScaledVector(away, .27 / distance);
    }
    if (!service.clear(member.p, candidate)) { candidate.copy(member.p); member.velocity.set(0, 0); }
    const speed = dt ? candidate.distanceTo(member.p) / dt : 0;
    member.p.copy(candidate); member.moving = speed > .10;
    return { arrived: route.length === 0 && member.velocity.length() < .12, speed };
  }
  function update(dt) {
    if (job && (base.state.destroyed || base.state.burnSpeed === 0 || !living().length)) stopJob();
    let workers = 0;
    for (const member of squad.members) {
      if (member.hp <= 0) { member.working = false; member.workProgress = 0; paths.delete(member); continue; }
      const { arrived, speed } = move(member, dt);
      member.working = !!(job && arrived && !member.combatHold && base.state.burnSpeed > 0);
      if (member.working) {
        workers++; member.workTime += dt; member.workProgress += dt;
        while (member.workProgress + 1e-9 >= balance.extinguishSeconds && base.state.burnSpeed > 0) {
          base.extinguish(1); member.workProgress -= balance.extinguishSeconds;
        }
      }
      const site = slots.get(member);
      if (member.working && site) direction.set(base.group.position.x - member.p.x, base.group.position.z - member.p.y);
      else if (member.velocity.lengthSq() > .005) direction.copy(member.velocity);
      else direction.set(Math.sin(member.unit.rotation.y), Math.cos(member.unit.rotation.y));
      squad.poseMember(member, speed, dt, direction);
    }
    const leader = squad.members[0];
    if (leader.hp > 0) anchor.copy(leader.p);
    if (job) {
      base.state.extinguishers = workers;
      if (base.state.burnSpeed === 0) stopJob();
      else state.mode = workers ? 'extinguishing' : 'approaching';
    } else if (state.mode === 'moving' && !(paths.get(leader)?.length)) {
      state.settled = state.destination; state.destination = null; state.mode = 'field'; state.revision++;
    }
  }
  function reset() {
    stopJob(); anchor.set(spawn.x, spawn.z); squad.reset(anchor);
    state.mode = 'field'; state.destination = null; state.settled = spawn;
  }
  reset();
  return { anchor, state, orderMove, orderExtinguish, update, reset, cancel: stopJob, service,
    get working() { return job; } };
}
