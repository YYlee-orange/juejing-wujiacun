import * as T from 'three';
import { height, tileSize } from './world.js';
import { createMarch } from './squad.js';
import { enemyRoadAt } from './waves.js';
import { balance } from './balance.js';
import { createEngineerOrders } from './engineers.js';
import { createServiceNavigation } from './service-navigation.js';

export function createBattle({ world, navigation, squad, waves, base, effects, spawn, engineers = null, engineerSpawn = spawn }) {
  const anchor = new T.Vector2(spawn.x, spawn.z), march = createMarch(anchor);
  const state = { mode: 'field', result: null, resultAge: 0, settled: spawn, destination: null,
    replenish: 0, kills: 0, message: '', revision: 0 };
  const engineerOrders = engineers ? createEngineerOrders({ squad: engineers, world, base, spawn: engineerSpawn, defenders: squad.members }) : null;
  const homeNavigation = engineerOrders?.service ?? createServiceNavigation(world.canServiceWalk);
  const reachable = new Set([spawn]), queue = [spawn];
  for (let i = 0; i < queue.length; i++) {
    for (const tile of queue[i].neighbors) {
      if (!reachable.has(tile)) { reachable.add(tile); queue.push(tile); }
    }
  }
  const tiles = [...reachable];
  const baseTile = tiles.reduce((best, tile) =>
    Math.hypot(tile.x - base.approach.x, tile.z - base.approach.y)
      < Math.hypot(best.x - base.approach.x, best.z - base.approach.y) ? tile : best);
  const basePoint = new T.Vector2(baseTile.x, baseTile.z);
  const direction = new T.Vector2(), desired = new T.Vector2(), candidate = new T.Vector2();
  const force = new T.Vector2(), face = new T.Vector2(), point = {};
  let elapsed = 0, alertTime = 0, engineerAlertTime = 0, transitTime = 0;
  let transit = new Map(), exitTile = null, pendingMove = null;
  const living = () => squad.members.filter(member => member.hp > 0);
  const engineerLiving = () => engineers?.members.filter(member => member.hp > 0) ?? [];
  const allLiving = () => [...living(), ...engineerLiving()];
  const outside = () => allLiving().filter(member => !member.inside);
  const enemyOutside = () => waves.actors.filter(enemy => enemy.active && !enemy.inside);
  function changed() { state.revision++; }

  function orderMove(tile) {
    if (state.result || !tile || !reachable.has(tile) || !living().length) return false;
    if (['entering', 'recovering', 'exiting'].includes(state.mode)) {
      pendingMove = tile;
      return leaveBase();
    }
    const route = navigation.route(anchor, new T.Vector2(tile.x, tile.z));
    if (!route) return false;
    squad.beginOrder(anchor);
    march.setRoute(route);
    state.destination = tile;
    state.mode = 'moving';
    for (const member of living()) {
      member.swing = -1; member.ready = 0; member.combatHold = false; member.battleStep.set(0, 0);
    }
    changed();
    return true;
  }

  function orderReturn() {
    if (state.result || base.state.destroyed || !living().length) return false;
    if (['entering', 'recovering', 'exiting'].includes(state.mode)) return leaveBase();
    if (base.state.replenishmentBlocked) return false;
    const plans = new Map();
    for (const member of living()) {
      const route = homeNavigation.route(member.p, base.approach);
      if (!route) return false;
      plans.set(member, [...route, base.entrance, base.inside]);
    }
    beginEntering(plans);
    state.mode = 'returning';
    return true;
  }

  function beginEntering(plans) {
    state.mode = 'entering';
    state.destination = null;
    state.replenish = 0;
    transitTime = 0;
    transit = new Map(living().map((member, i) => [member, { stage: 0, delay: i * .16,
      route: plans.get(member) }]));
    march.setRoute([]);
    for (const member of living()) { member.swing = -1; member.ready = 0; member.combatHold = false; member.working = false; }
    changed();
  }
  function nearestEmptyTile() {
    const enemies = enemyOutside();
    return tiles.filter(tile => !enemies.some(enemy => enemy.p.distanceTo(new T.Vector2(tile.x, tile.z)) < .90))
      .sort((a, b) => Math.hypot(a.x - base.entrance.x, a.z - base.entrance.y)
        - Math.hypot(b.x - base.entrance.x, b.z - base.entrance.y))[0];
  }
  function leaveBase() {
    if (state.result || !living().length || base.state.destroyed) return false;
    if (state.mode === 'exiting') return true;
    state.replenish = 0;
    state.mode = 'exiting';
    exitTile = nearestEmptyTile();
    transitTime = 0;
    transit = new Map(living().map((member, i) => [member, {
      stage: member.inside ? 0 : 1, delay: i * .23,
    }]));
    changed();
    return true;
  }

  function walkMember(member, target, dt) {
    direction.subVectors(target, member.p);
    const distance = direction.length();
    member.stowed = member.p.distanceTo(base.entrance) < .78;
    desired.copy(direction).setLength(Math.min(2.35, distance * 8));
    member.velocity.lerp(desired, 1 - Math.exp(-dt * 14));
    candidate.copy(member.p).addScaledVector(member.velocity, dt);
    if (!member.stowed && !homeNavigation.clear(member.p, candidate)) {
      member.velocity.copy(desired); candidate.copy(member.p).addScaledVector(member.velocity, dt);
    }
    const speed = dt ? member.p.distanceTo(candidate) / dt : 0;
    member.p.copy(candidate); member.moving = speed > .08;
    squad.poseMember(member, speed, dt, direction);
    return distance < .055;
  }

  function transitSquad(dt) {
    transitTime += dt;
    if (state.mode === 'exiting' && !exitTile) {
      exitTile = nearestEmptyTile();
      if (!exitTile) {
        state.message = '出口被堵，正在寻找空地';
        return;
      }
      state.message = '';
    }
    const nearDoor = living().some(member => !member.inside && member.p.distanceTo(base.entrance) < 1.1);
    if (nearDoor || state.mode === 'exiting') base.keepDoorOpen();
    if (nearDoor && state.mode === 'returning') { state.mode = 'entering'; changed(); }
    let complete = true;
    let slot = 0;
    for (const member of living()) {
      const item = transit.get(member);
      if (!item || transitTime < item.delay) { complete = false; continue; }
      const entering = state.mode !== 'exiting';
      const exitCenter = exitTile && new T.Vector2(exitTile.x, exitTile.z);
      const spread = !entering && squad.standPoint(exitCenter, slot++, new T.Vector2());
      if (!entering && !item.exitRoute) {
        const tail = homeNavigation.route(member.inside ? base.approach : member.p, spread) ?? [spread];
        item.route = member.inside ? [base.entrance, base.approach, ...tail] : tail;
        item.stage = 0; item.exitRoute = true;
      }
      if (!entering && item.stage === 0 && member.inside) {
        member.p.copy(base.inside); member.inside = false; member.unit.visible = true;
      }
      const route = item.route;
      if (item.stage < route.length && walkMember(member, route[item.stage], dt)) item.stage++;
      if (item.stage < route.length) complete = false;
      else if (entering) {
        member.inside = true;
        member.unit.visible = false;
      }
    }
    if (!squad.members[0].inside) anchor.copy(squad.members[0].p);
    if (!complete) return;
    state.message = '';
    if (state.mode !== 'exiting') {
      state.mode = 'recovering';
      state.replenish = 0;
    } else {
      anchor.set(exitTile.x, exitTile.z);
      state.settled = exitTile;
      state.mode = 'field';
      squad.beginOrder(anchor);
      if (pendingMove) {
        const tile = pendingMove;
        pendingMove = null;
        orderMove(tile);
      }
    }
    changed();
  }

  function hurtVillager(member, amount, impact) {
    function apply(victim, damage, protect = false) {
      if (victim.hp <= 0 || damage <= 0) return 0;
      const dealt = Math.min(damage, Math.max(0, victim.hp - Number(protect)));
      if (!dealt) return 0;
      victim.hp -= dealt;
      victim.lastHurt = elapsed;
      victim.lastFight = elapsed;
      victim.recoil = .22;
      if (victim.hp <= 0) {
        effects.death(victim, impact);
        victim.unit.visible = false;
        victim.swing = -1;
        victim.working = false;
        changed();
      } else effects.blood(victim, impact);
      return dealt;
    }
    const getTeam = member.team === 'engineers' ? engineerLiving : living;
    if (member.index !== 0 || getTeam().length === 1) { apply(member, amount); return; }
    const team = getTeam(), share = amount / team.length;
    let overflow = amount;
    for (const other of team.slice(1)) overflow -= apply(other, share);
    overflow -= apply(member, share, getTeam().length > 1);
    while (overflow > .001) {
      const others = getTeam().filter(other => other.index !== 0);
      if (!others.length) { apply(member, overflow); break; }
      const portion = overflow / others.length;
      let distributed = 0;
      for (const other of others) distributed += apply(other, portion);
      if (distributed < .001) break;
      overflow -= distributed;
    }
  }

  function hurtEnemy(enemy, amount, impact, attacker = null) {
    if (!enemy.active) return;
    enemy.hp -= amount;
    enemy.lastAttacker = attacker;
    enemy.stun = .09;
    if (enemy.hp <= 0) {
      effects.death(enemy, impact);
      waves.kill(enemy);
      state.kills++;
      changed();
    } else effects.blood(enemy, impact);
  }

  function prepareTeam(team, orders, dt, alertAge) {
    const center = orders.anchor, current = orders.state;
    const teamLiving = team.members.filter(member => member.hp > 0);
    const enemies = enemyOutside();
    const nearest = enemies.slice().sort((a, b) => a.p.distanceToSquared(center) - b.p.distanceToSquared(center))[0];
    const atDestination = member => {
      const tile = current.destination, margin = tileSize * .5 + (member.combatHold ? .08 : 0);
      return current.mode === 'moving' && tile && Math.abs(member.p.x - tile.x) <= margin
        && Math.abs(member.p.y - tile.z) <= margin;
    };
    const arriving = current.mode === 'moving' && teamLiving.some(atDestination);
    const servicing = current.mode === 'approaching' || current.mode === 'extinguishing';
    const alert = nearest && nearest.p.distanceTo(center) < 3.1 && (current.mode === 'field' || arriving || servicing);
    alertAge = alert ? alertAge + dt : 0;
    if (alert) team.faceThreat(direction.subVectors(nearest.p, center).normalize());
    for (const member of teamLiving) {
      member.cooldown = Math.max(0, member.cooldown - dt);
      member.recoil = Math.max(0, member.recoil - dt);
      member.battleStep.set(0, 0);
      const target = member.inside ? null
        : enemies.slice().sort((a, b) => a.p.distanceToSquared(member.p) - b.p.distanceToSquared(member.p))[0];
      member.targetEnemy = target;
      const eligible = !member.inside && (current.mode === 'field' || atDestination(member) || servicing);
      const reach = target ? target.p.distanceTo(member.p) : Infinity;
      const contact = reach < member.attackReach;
      const ready = eligible && target && (contact || (alert && alertAge > member.slot * .075));
      member.ready = T.MathUtils.damp(member.ready, ready ? 1 : 0, 9, dt);
      member.combatHold = !!(eligible && !member.inside && target?.active && member.ready > .1
        && (contact || (member.swing >= 0 && reach < member.attackReach + .12)));
      member.canEngage = !!eligible;
      if (ready && target) {
        member.lastFight = elapsed;
        member.combatFace.subVectors(target.p, member.p).normalize();
        if (!member.inside && reach < 1.18) {
          member.battleStep.copy(member.combatFace).multiplyScalar(Math.min(.22, Math.max(0, reach - .58)));
        }
      }
      const engaged = target && (member.inside || target.p.distanceTo(member.p) < 2.2);
      const resting = member.team !== 'engineers' || (current.mode === 'field' && !member.moving);
      if (!engaged && resting && elapsed - Math.max(member.lastFight, member.lastHurt) > member.recoveryDelay) {
        member.hp = Math.min(member.maxHp, member.hp + member.recoveryRate * dt);
      }
    }
    return alertAge;
  }
  function prepareSquad(dt) {
    alertTime = prepareTeam(squad, { anchor, state }, dt, alertTime);
    if (engineers) engineerAlertTime = prepareTeam(engineers, engineerOrders, dt, engineerAlertTime);
  }

  function updateVillagerAttacks(dt) {
    for (const member of allLiving()) {
      const target = member.targetEnemy;
      const canFight = member.canEngage;
      if (member.swing < 0 && target?.active && canFight && member.ready > .45
        && member.cooldown === 0 && target.p.distanceTo(member.p) < member.attackReach) {
        member.swing = 0; member.hit = false; member.cooldown = member.attackInterval;
        member.strikeTarget = target;
      }
      if (member.swing < 0) continue;
      member.swing += dt;
      if (!member.hit && member.swing >= .29) {
        member.hit = true;
        const struck = member.strikeTarget;
        if (struck?.active && struck.p.distanceTo(member.p) < member.attackReach + .12) {
          face.subVectors(struck.p, member.p).normalize();
          if (face.lengthSq() === 0) face.set(0, 1);
          hurtEnemy(struck, member.damage, face, member);
        }
      }
      if (member.swing >= .70) member.swing = -1;
    }
  }

  function steerEnemy(enemy, target, dt) {
    direction.subVectors(target, enemy.p);
    if (direction.lengthSq() < .0001) return 0;
    direction.normalize();
    desired.copy(direction).multiplyScalar(enemy.speed * T.MathUtils.smoothstep(enemy.age, 0, .42));
    for (const other of waves.actors) {
      if (other === enemy || !other.active || other.inside) continue;
      force.subVectors(enemy.p, other.p);
      const distance = force.length(), gap = (enemy.radius + other.radius) * .90 + .02;
      if (distance > 0 && distance < gap + .16) {
        desired.addScaledVector(force, (gap + .16 - distance) * 2.5 / distance);
        if (force.dot(direction) < 0 && distance < gap + .20) {
          desired.x += direction.y * (enemy.index % 2 ? -.55 : .55);
          desired.y -= direction.x * (enemy.index % 2 ? -.55 : .55);
        }
      }
    }
    desired.clampLength(0, enemy.speed);
    enemy.velocity.lerp(desired, 1 - Math.exp(-dt * 10));
    candidate.copy(enemy.p).addScaledVector(enemy.velocity, dt);
    for (let iteration = 0; iteration < 3; iteration++) {
      for (const other of waves.actors) {
        if (other === enemy || !other.active || other.inside) continue;
        const gap = (enemy.radius + other.radius) * .90 + .02;
        force.subVectors(candidate, other.p);
        const distance = force.length();
        if (distance > .0001 && distance < gap) candidate.copy(other.p).addScaledVector(force, gap / distance);
      }
      for (const member of outside()) {
        force.subVectors(candidate, member.p);
        const distance = force.length();
        if (distance > .0001 && distance < .51) candidate.copy(member.p).addScaledVector(force, .51 / distance);
      }
    }
    if (enemy.mode === 'base' && !navigation.clear(enemy.p, candidate)) return 0;
    const advance = enemy.p.distanceTo(candidate);
    enemy.p.copy(candidate);
    return advance;
  }

  function updateEnemy(enemy, dt) {
    if (!enemy.active) return;
    enemy.age += dt;
    enemy.cooldown = Math.max(0, enemy.cooldown - dt);
    enemy.repathTimer = Math.max(0, enemy.repathTimer - dt);
    enemy.stun = Math.max(0, (enemy.stun ?? 0) - dt);
    if (enemy.inside) return;
    if (enemy.mode === 'enter') {
      enemy.group.scale.y = enemy.group.scale.x * .88;
      direction.subVectors(base.inside, enemy.p);
      const distance = direction.length();
      const travel = Math.min(distance, dt * 2.0);
      if (distance > .001) enemy.p.addScaledVector(direction, travel / distance);
      enemy.group.rotation.y = Math.atan2(direction.x, direction.y);
      enemy.group.position.set(enemy.p.x, height(enemy.p.x, enemy.p.y) + .015, enemy.p.y);
      enemy.pose(travel, dt);
      if (distance < .075) base.enter(enemy);
      return;
    }
    if (enemy.mode === 'road') {
      enemyRoadAt(enemy.side, enemy.roadDistance + .35, point, enemy.lane);
      desired.set(point.x, point.z);
      if (reachable.has(navigation.tileAt(enemy.p))) {
        const route = navigation.route(enemy.p, basePoint, .10, false);
        if (route) { enemy.mode = 'base'; enemy.route = route; enemy.routeIndex = 0; }
      }
    }
    if (enemy.mode === 'base') {
      const waypoint = enemy.route[enemy.routeIndex];
      if (waypoint && enemy.repathTimer === 0 && !navigation.clear(enemy.p, waypoint)) {
        const reroute = navigation.route(enemy.p, basePoint, .08, false);
        if (reroute) { enemy.route = reroute; enemy.routeIndex = 0; }
        enemy.repathTimer = .35;
      }
      while (enemy.routeIndex < enemy.route.length) {
        const distance = enemy.p.distanceTo(enemy.route[enemy.routeIndex]);
        const last = enemy.routeIndex === enemy.route.length - 1;
        const shortcut = last ? distance < .50 : distance < .28
          && navigation.clear(enemy.p, enemy.route[enemy.routeIndex + 1]);
        if (distance >= .10 && !shortcut) break;
        enemy.routeIndex++;
      }
      desired.copy(enemy.route[enemy.routeIndex] ?? base.approach);
      if (enemy.routeIndex >= enemy.route.length) enemy.mode = 'door';
    }
    if (enemy.mode === 'door') desired.copy(base.entrance);
    const goal = desired.clone();
    direction.subVectors(goal, enemy.p).normalize();
    let blocker = null, nearest = Infinity;
    for (const member of outside()) {
      force.subVectors(member.p, enemy.p);
      const distance = force.length();
      const along = force.dot(direction);
      const lateral = Math.abs(force.x * direction.y - force.y * direction.x);
      const retaliating = enemy.lastAttacker === member && distance < 1.1;
      if (distance < 1.25 && distance < nearest && ((along > -.12 && lateral < .52) || retaliating)) {
        blocker = member; nearest = distance;
      }
    }
    enemy.target = blocker;
    let advance = 0;
    const atDoor = enemy.mode === 'door' && enemy.p.distanceTo(base.entrance) < .78;
    const doorBlocks = base.state.doorHp > 0 && base.state.open < .70;
    if (enemy.swing < 0 && enemy.cooldown === 0 && enemy.stun === 0
      && ((blocker && nearest < balance.enemyReach) || (!blocker && atDoor && doorBlocks))) {
      enemy.swing = 0; enemy.hit = false; enemy.cooldown = balance.enemyAttack;
      enemy.strikeTarget = blocker ?? 'door';
    }
    if (enemy.swing >= 0) {
      enemy.swing += dt;
      if (!enemy.hit && enemy.swing >= .34) {
        enemy.hit = true;
        const target = enemy.strikeTarget;
        if (target === 'door') {
          if (!base.state.destroyed && base.state.open < .70) base.strikeDoor();
        } else if (target?.hp > 0 && !target.inside && enemy.p.distanceTo(target.p) < balance.enemyReach + .14) {
          hurtVillager(target, balance.enemyDamage, face.subVectors(target.p, enemy.p).normalize());
        }
      }
      if (enemy.swing >= .76) enemy.swing = -1;
    } else if (enemy.stun === 0) {
      const movingTarget = blocker ? blocker.p : goal;
      if ((!blocker || nearest > balance.enemyReach * .95) && !(atDoor && doorBlocks && !blocker)) {
        advance = steerEnemy(enemy, movingTarget, dt);
      }
      if (enemy.mode === 'road') enemy.roadDistance += advance;
    }
    if (enemy.mode === 'door' && !blocker) {
      if (doorBlocks) {
        force.subVectors(base.approach, base.inside).normalize();
        const distance = direction.subVectors(enemy.p, base.entrance).dot(force);
        if (distance < .40) enemy.p.addScaledVector(force, .40 - distance);
      } else if (enemy.p.distanceTo(base.entrance) < .85
        && !waves.actors.some(other => other.active && !other.inside && other.mode === 'enter')) {
        enemy.mode = 'enter';
        enemy.swing = -1;
      }
    }
    const facing = blocker ? face.subVectors(blocker.p, enemy.p) : direction.subVectors(goal, enemy.p);
    if (facing.lengthSq() > .0001) {
      const yaw = Math.atan2(facing.x, facing.y);
      const turn = Math.atan2(Math.sin(yaw - enemy.group.rotation.y), Math.cos(yaw - enemy.group.rotation.y));
      enemy.group.rotation.y += turn * (1 - Math.exp(-dt * 12));
    }
    enemy.group.position.set(enemy.p.x, height(enemy.p.x, enemy.p.y) + .015, enemy.p.y);
    enemy.pose(advance, dt, enemy.swing);
  }

  function step(dt) {
    elapsed += dt;
    if (state.result) return;
    waves.update(dt);
    prepareSquad(dt);
    if (state.mode === 'moving') {
      const fighting = squad.members[0].combatHold;
      if (fighting) march.pause(dt);
      const walking = fighting ? false : march.advance(dt);
      squad.follow(anchor, walking, dt);
      if (!fighting && !walking) {
        state.settled = state.destination;
        state.destination = null;
        state.mode = 'field'; changed();
      }
    } else if (state.mode === 'field') squad.follow(anchor, false, dt);
    else if (state.mode === 'returning' || state.mode === 'entering' || state.mode === 'exiting') transitSquad(dt);
    engineerOrders?.update(dt);
    if (engineers) for (const worker of engineerLiving()) for (const defender of living()) {
      if (defender.inside) continue;
      force.subVectors(worker.p, defender.p); const distance = force.length();
      if (distance < .27 && distance > .001) {
        candidate.copy(defender.p).addScaledVector(force, .27 / distance);
        if (engineerOrders.service.clear(worker.p, candidate)) {
          worker.p.copy(candidate); worker.unit.position.set(candidate.x, height(candidate.x, candidate.y), candidate.y);
        }
      }
    }
    for (const enemy of waves.actors) updateEnemy(enemy, dt);
    updateVillagerAttacks(dt);
    base.advance(dt);
    if (state.mode === 'recovering' && living().length > 0 && !base.state.destroyed && !base.state.replenishmentBlocked) {
      for (const member of living()) member.hp = Math.min(balance.villagerHp, member.hp + balance.indoorRecoveryRate * dt);
      if (living().length < balance.squadSize) {
        state.replenish += dt;
        if (state.replenish >= balance.replenishSeconds) {
          const recruit = squad.members.find(member => member.hp <= 0);
          recruit.hp = balance.villagerHp; recruit.inside = true; recruit.unit.visible = false;
          recruit.p.copy(base.inside);
          recruit.unit.position.set(base.inside.x, height(base.inside.x, base.inside.y), base.inside.y);
          recruit.swing = -1; recruit.ready = 0; recruit.stains.clear();
          state.replenish -= balance.replenishSeconds;
          changed();
        }
      } else state.replenish = 0;
      if (living().length === balance.squadSize && living().every(member => member.hp >= balance.villagerHp - .01)) leaveBase();
    }
    if (base.state.destroyed) {
      for (const member of living().filter(member => member.inside && member.index !== 0)) {
        hurtVillager(member, balance.villagerHp, face.set(0, 1));
      }
      if (squad.members[0].inside && squad.members[0].hp > 0) hurtVillager(squad.members[0], 1000, face.set(0, 1));
      engineerOrders?.cancel();
      state.result = 'lost'; changed();
    }
    else if (waves.state.complete) { engineerOrders?.cancel(); state.result = 'won'; changed(); }
  }

  function update(dt) {
    if (dt <= 0) {
      base.animate(elapsed, 0);
      effects.update(0);
      squad.animateFlag(elapsed, 0);
      engineers?.animateFlag(elapsed, 0);
      return;
    }
    const steps = Math.max(1, Math.ceil(dt * 60));
    for (let i = 0; i < steps; i++) step(dt / steps);
    if (state.result) state.resultAge += dt;
    base.animate(elapsed, dt);
    effects.update(dt);
    squad.animateFlag(elapsed, dt);
    engineers?.animateFlag(elapsed, dt);
  }
  function reset() {
    elapsed = 0; alertTime = 0; engineerAlertTime = 0; transitTime = 0;
    pendingMove = null; exitTile = null; transit.clear();
    Object.assign(state, { mode: 'field', result: null, resultAge: 0, settled: spawn, destination: null,
      replenish: 0, kills: 0, message: '' });
    anchor.set(spawn.x, spawn.z);
    march.setRoute([]);
    squad.reset(anchor); base.reset(); waves.reset(); effects.reset();
    engineerOrders?.reset();
    changed();
  }
  reset();
  return { anchor, state, reachable, orderMove, orderReturn, leaveBase, update, reset, hurtVillager, hurtEnemy, engineerOrders };
}
