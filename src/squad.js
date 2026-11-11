import * as T from 'three';
import { box, height, piece, tileSize } from './world.js';
import { createPennant } from './pennant.js';
import { createFarmTool, createHammer } from './weapons.js';
import { balance } from './balance.js';

const formation = [[0, 0], [-.27, -.11], [.26, -.08], [-.29, .23], [-.01, .29], [.27, .25]];
const cadence = [12.8, 13.5, 12.1, 14.0, 12.6, 13.2];
const delays = [0, .08, .13, .19, .24, .31];
const gaps = [0, .25, .34, .49, .62, .73].map(distance => distance * tileSize);
const lanes = [0, -.17, .19, -.21, .02, .23].map(distance => distance * tileSize);
const unitScale = 1.19;
const marchingPace = 2.83;
const tunic = turnedForm([
  [0, .043], [.084, .048], [.117, .065], [.127, .105], [.115, .211],
  [.088, .294], [.065, .329], [.049, .344], [0, .345],
], 18, 22);
const head = new T.SphereGeometry(.116, 16, 12);
const hat = turnedForm([
  [0, -.05], [.117, -.05], [.151, -.043], [.145, -.032], [.113, -.006],
  [.077, .027], [.046, .051], [.027, .058], [0, .059],
], 20, 22);
const brim = turnedForm([
  [.131, -.009], [.149, -.009], [.158, -.004], [.160, .002],
  [.152, .009], [.134, .010], [.131, -.009],
], 20, 13);
const shoe = new T.SphereGeometry(1, 10, 7);

function turnedForm(profile, segments, samples) {
  const curve = new T.SplineCurve(profile.map(([radius, y]) => new T.Vector2(radius, y)));
  const points = curve.getPoints(samples);
  for (const point of points) point.x = Math.max(0, point.x);
  return new T.LatheGeometry(points, segments);
}

export function createMarch(anchor) {
  let points = [], remainder = [], next = 0, speed = 0;
  const heading = new T.Vector2();
  const direction = new T.Vector2();
  const outgoing = new T.Vector2();

  function setRoute(route) {
    points = route;
    next = 0;
    remainder = points.map(() => 0);
    for (let i = points.length - 2; i >= 0; i--) {
      remainder[i] = remainder[i + 1] + points[i].distanceTo(points[i + 1]);
    }
    if (!points.length) speed = 0;
    else if (speed > .1) {
      direction.subVectors(points[0], anchor).normalize();
      speed *= T.MathUtils.clamp(.72 + heading.dot(direction) * .32, .45, 1);
    }
  }

  function advance(dt) {
    while (next < points.length && anchor.distanceToSquared(points[next]) < 1e-10) next++;
    if (next >= points.length) return false;
    const target = points[next], distance = anchor.distanceTo(target);
    const remaining = distance + remainder[next];
    direction.subVectors(target, anchor).normalize();
    let targetSpeed = Math.min(marchingPace, Math.sqrt(14.5 * remaining));
    if (next + 1 < points.length) {
      outgoing.subVectors(points[next + 1], target).normalize();
      const cornerSpeed = marchingPace - (1 - direction.dot(outgoing)) * .88;
      targetSpeed = Math.min(targetSpeed, Math.sqrt(cornerSpeed ** 2 + 13 * distance));
    }
    const previous = speed;
    speed += T.MathUtils.clamp(targetSpeed - speed, -9.2 * dt, 7.5 * dt);
    let travel = (previous + speed) * .5 * dt;
    while (next < points.length && travel > 0) {
      direction.subVectors(points[next], anchor);
      const left = direction.length();
      if (left > .00001) heading.copy(direction).multiplyScalar(1 / left);
      if (travel < left) {
        anchor.addScaledVector(heading, travel);
        break;
      }
      anchor.copy(points[next++]);
      travel -= left;
    }
    if (next < points.length) return true;
    speed = 0;
    return false;
  }

  return { setRoute, advance, pause: dt => { speed = Math.max(0, speed - dt * 9.2); } };
}

export function createSquad(navigation, { engineer = false } = {}) {
  const group = new T.Group();
  group.name = engineer ? '工程师小队' : '守村队';
  const stats = engineer ? { maxHp: balance.engineerHp, damage: balance.engineerDamage,
    attackInterval: balance.engineerAttack, attackReach: balance.engineerReach,
    recoveryDelay: balance.engineerRecoveryDelay, recoveryRate: balance.engineerRecoveryRate }
    : { maxHp: balance.villagerHp, damage: balance.villagerDamage, attackInterval: balance.villagerAttack,
      attackReach: balance.villagerReach, recoveryDelay: balance.recoveryDelay, recoveryRate: balance.recoveryRate };
  const colors = engineer ? ['#d47732', '#e18a3d', '#c96e31'] : ['#3b5970', '#426881', '#41657d'];
  const members = formation.slice(0, engineer ? balance.engineerSize : balance.squadSize).map((_, index) => {
    const unit = new T.Group(), body = new T.Group();
    unit.scale.setScalar(unitScale);
    group.add(unit);
    unit.add(body);
    piece(body, tunic, colors[index % 3], 0, 0, 0, 1, 1, .87);
    piece(body, head, '#dfa978', 0, .385, .012, .94, .93, .91);
    if (engineer) {
      const wrap = turnedForm([[0, -.025], [.108, -.025], [.125, 0], [.12, .045], [.080, .074], [0, .078]], 14, 14);
      piece(body, wrap, '#f2edd9', 0, .437, 0);
      piece(body, head, '#dedbc8', 0, .455, -.107, .28, .23, .24);
      for (const side of [-1, 1]) {
        const tail = box(body, '#e8e3cf', side * .024, .412, -.112, .029, .096, .019);
        tail.rotation.z = side * .26;
      }
    } else {
      piece(body, hat, '#cda569', 0, .49, 0);
      piece(body, brim, '#e2c18a', 0, .438, 0);
    }
    const feet = [-1, 1].map(sign =>
      piece(unit, shoe, '#4f4942', sign * .051, .030, .023, .046, .043, .062, false));
    for (const sign of [-1, 1]) box(body, '#4d4035', sign * .033, .383, .11, .016, .023, .012, false);
    const weapon = engineer ? createHammer() : createFarmTool(Math.floor(Math.random() * 3));
    body.add(weapon);
    const stains = new T.Group();
    body.add(stains);
    const target = new T.Mesh(new T.CylinderGeometry(.18, .18, .56, 8));
    target.visible = false;
    target.position.y = .29;
    unit.add(target);
    return { unit, group: unit, body, feet, weapon, stains, target, kind: 'villager', team: engineer ? 'engineers' : 'militia', ...stats,
      p: new T.Vector2(), velocity: new T.Vector2(), detour: null, hp: stats.maxHp,
      inside: false, stowed: false, ready: 0, swing: -1, hit: false, cooldown: index * .07,
      lastHurt: -100, recoil: 0, combatFace: new T.Vector2(0, 1), moving: false,
      combatHold: false, canEngage: false,
      battleStep: new T.Vector2(), lastFight: -100, working: false, workTime: 0, workProgress: 0,
      gait: 0, index, slot: index, stride: index * 1.21 };
  });

  const flag = new T.Group();
  flag.position.set(.070, 1.13, -.05);
  flag.rotation.y = .22;
  members[0].unit.add(flag);
  box(flag, '#b8996d', 0, -.51, 0, .032, 1.19, .032);
  const cloth = createPennant({ engineer });
  flag.add(cloth.mesh);

  const trail = [];
  const direction = new T.Vector2(0, 1);
  const desired = new T.Vector2(), lateral = new T.Vector2(), motion = new T.Vector2();
  const guide = new T.Vector2(), safe = new T.Vector2(), away = new T.Vector2();
  const steering = new T.Vector2(), targetVelocity = new T.Vector2(), change = new T.Vector2();
  let elapsed = 0;

  function restPoint(anchor, index) {
    const [x, z] = formation[index];
    return desired.set(anchor.x + (x * direction.y - z * direction.x) * tileSize,
      anchor.y - (x * direction.x + z * direction.y) * tileSize);
  }

  function pose(member, speed, dt, face) {
    const { unit, body, feet, p } = member;
    if (!member.working && member.ready > .1 && !member.moving) face = member.combatFace;
    if (face.lengthSq() > .00001) {
      const angle = Math.atan2(face.x, face.y);
      const turn = Math.atan2(Math.sin(angle - unit.rotation.y), Math.cos(angle - unit.rotation.y));
      unit.rotation.y += turn * (1 - Math.exp(-dt * 13));
    }
    member.gait = T.MathUtils.damp(member.gait, Math.min(1, speed / 2.2), 16, dt);
    member.stride += dt * cadence[member.index] * Math.min(1.25, speed * .52);
    const phase = Math.sin(member.stride) * member.gait;
    body.position.y = (.5 - Math.cos(member.stride * 2) * .5) * .030 * member.gait;
    body.rotation.z = phase * .068;
    body.rotation.x = member.gait * .052;
    body.rotation.x += member.ready * .075;
    body.position.z = -member.recoil * .17;
    const windup = member.swing < 0 ? 0 : T.MathUtils.smoothstep(member.swing, 0, .24);
    const strike = member.swing < 0 ? 0 : T.MathUtils.smoothstep(member.swing, .24, .38);
    const recover = member.swing < 0 ? 0 : T.MathUtils.smoothstep(member.swing, .40, .68);
    const swing = windup * -.85 + strike * 2.05 - recover * 1.20;
    member.weapon.rotation.x = .22 + member.ready * .65 + swing;
    member.weapon.rotation.z = -.22 - member.ready * .17 + strike * (1 - recover) * .30;
    if (member.stowed) {
      member.weapon.rotation.x = 1.25;
      member.weapon.rotation.z = -.05;
    }
    if (member.working) {
      const cycle = member.workTime % 1;
      const lift = T.MathUtils.smoothstep(cycle, .05, .44);
      const hit = T.MathUtils.smoothstep(cycle, .44, .60);
      const settle = T.MathUtils.smoothstep(cycle, .68, .98);
      member.weapon.rotation.x = .45 - lift * 1.2 + hit * 1.75 - settle * .55;
      member.weapon.rotation.z = -.32 + Math.sin(cycle * Math.PI) * .10;
      body.rotation.x += hit * (1 - settle) * .11;
    }
    body.rotation.z += Math.sin(Math.max(0, member.swing) * 8) * .10 * (1 - recover) * Number(member.swing >= 0);
    feet[0].position.z = .023 + phase * .043;
    feet[1].position.z = .023 - phase * .043;
    feet[0].position.y = .030 + Math.max(0, Math.cos(member.stride)) * .029 * member.gait;
    feet[1].position.y = .030 + Math.max(0, -Math.cos(member.stride)) * .029 * member.gait;
    unit.position.set(p.x, height(p.x, p.y), p.y);
  }

  function beginOrder(anchor) {
    elapsed = 0;
    trail.length = 0;
    trail.push({ p: anchor.clone(), distance: 0 });
  }

  function reset(anchor) {
    beginOrder(anchor);
    cloth.reset();
    direction.set(.42, .91).normalize();
    members.forEach((member, i) => {
      member.hp = member.maxHp;
      member.inside = false;
      member.stowed = false;
      member.ready = 0;
      member.swing = -1;
      member.hit = false;
      member.cooldown = i * .07;
      member.lastHurt = -100;
      member.recoil = 0;
      member.battleStep.set(0, 0);
      member.lastFight = -100;
      member.unit.visible = true;
      member.stains.clear();
      member.p.copy(restPoint(anchor, i));
      member.unit.rotation.y = Math.atan2(direction.x, direction.y);
      member.stride = i * 1.21;
      member.velocity.set(0, 0);
      member.detour = null;
      member.gait = 0;
      member.combatHold = false; member.canEngage = false;
      member.working = false; member.workTime = 0; member.workProgress = 0;
      pose(member, 0, 0, direction);
    });
  }

  function sampleTrail(distance) {
    let i = trail.length - 1;
    while (i > 1 && trail[i - 1].distance > distance) i--;
    const a = trail[Math.max(0, i - 1)], b = trail[i];
    guide.copy(a.p);
    lateral.set(direction.y, -direction.x);
    if (a === b) return;
    const t = T.MathUtils.clamp((distance - a.distance) / (b.distance - a.distance), 0, 1);
    guide.lerp(b.p, t);
    const before = trail[Math.max(0, i - 3)].p, after = trail[Math.min(trail.length - 1, i + 2)].p;
    lateral.set(after.y - before.y, before.x - after.x).normalize();
  }

  function follow(anchor, walking, dt) {
    elapsed += dt;
    const lead = members[0];
    if (lead.hp <= 0 || lead.inside) return true;
    let slot = 0;
    for (const member of members) {
      if (member.hp > 0) member.slot = slot++;
      member.moving = walking && !member.combatHold;
      member.stowed = false;
    }
    motion.subVectors(anchor, lead.p);
    const advance = motion.length();
    if (advance > .00001) {
      direction.copy(motion).normalize();
      trail.push({ p: anchor.clone(), distance: trail.at(-1).distance + advance });
      while (trail.length > 2 && trail[1].distance < trail.at(-1).distance - 1.7) trail.shift();
    }
    lead.p.copy(anchor);
    pose(lead, dt > 0 ? advance / dt : 0, dt, direction);

    let settled = !walking;
    for (let i = 1; i < members.length; i++) {
      const member = members[i];
      if (member.hp <= 0 || member.inside) continue;
      if (elapsed < delays[i]) {
        settled = false;
        continue;
      }
      if (member.combatHold) {
        desired.copy(member.p);
      } else if (walking) {
        const distance = trail.at(-1).distance - gaps[member.slot] * (1 + .10 * Math.sin(elapsed * 3.5 + i));
        sampleTrail(distance);
        desired.copy(guide).addScaledVector(lateral, lanes[member.slot] + Math.sin(elapsed * 4.7 + i * 2) * .04);
        for (const other of members) {
          if (other === member || other.hp <= 0 || other.inside) continue;
          away.subVectors(desired, other.p);
          const d = away.length();
          if (d > 0 && d < .25) desired.addScaledVector(away, (.25 - d) * .39 / d);
        }
        if (!navigation.tileAt(desired)) desired.copy(guide);
      } else {
        restPoint(anchor, member.slot).add(member.battleStep);
        if (!navigation.clear(member.p, desired)) restPoint(anchor, member.slot);
      }

      if (navigation.clear(member.p, desired)) {
        member.detour = null;
        steering.copy(desired);
      } else {
        const detour = member.detour;
        if (!detour || member.p.distanceToSquared(detour) < .02 || !navigation.clear(member.p, detour)) {
          member.detour = navigation.route(member.p, desired, .075, false)?.[0] ?? null;
        }
        steering.copy(member.detour ?? member.p);
      }
      motion.subVectors(steering, member.p);
      const pace = walking ? 3.48 + .16 * Math.sin(elapsed * 4.4 + i * 1.77) : 1.66 + i * .11;
      targetVelocity.copy(motion).setLength(Math.min(pace, motion.length() * (walking ? 9.4 : 6.2)));
      change.subVectors(targetVelocity, member.velocity).clampLength(0, dt * (walking ? 12.8 : 10.6));
      member.velocity.add(change);
      safe.copy(member.p).addScaledVector(member.velocity, dt);
      if (!navigation.clear(member.p, safe)) {
        member.velocity.copy(targetVelocity);
        safe.copy(member.p).addScaledVector(member.velocity, dt);
        if (!navigation.clear(member.p, safe)) {
          member.velocity.set(0, 0);
          safe.copy(member.p);
        }
      }
      if (!walking && member.ready > .2) {
        for (const other of members) {
          if (other === member || other.hp <= 0 || other.inside) continue;
          away.subVectors(safe, other.p);
          const distance = away.length();
          if (distance > .0001 && distance < .29) {
            const separated = other.p.clone().addScaledVector(away, .29 / distance);
            if (navigation.clear(member.p, separated)) safe.copy(separated);
          }
        }
      }
      const speed = dt > 0 ? member.p.distanceTo(safe) / dt : 0;
      member.p.copy(safe);
      pose(member, speed, dt, speed > .11 ? member.velocity : direction);
      if (member.p.distanceToSquared(desired) > .014 ** 2 || member.gait > .028) settled = false;
    }
    return settled && lead.gait <= .028;
  }

  function animateFlag(time, dt) {
    flag.visible = members[0].hp > 0 && !members[0].inside && !members[0].stowed;
    flag.updateWorldMatrix(true, false);
    cloth.animate(time, dt, flag.matrixWorld);
  }

  return { group, members, reset, beginOrder, follow, animateFlag,
    poseMember: pose,
    standPoint(anchor, slot, target) { return target.copy(restPoint(anchor, slot)); },
    get targets() {
      const visible = members.filter(member => member.hp > 0 && !member.inside && member.unit.visible)
        .map(member => member.target);
      if (members[0].hp > 0 && !members[0].inside && members[0].unit.visible && flag.visible) visible.push(cloth.mesh);
      return visible;
    },
    faceThreat(face) { direction.lerp(face, .18).normalize(); },
  };
}
