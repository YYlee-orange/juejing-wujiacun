import * as T from 'three';
import { height, mainRoad } from './world.js';
import { createEnemy, enemyMaterials } from './enemy.js';
import { createRift } from './rift.js';
import { balance } from './balance.js';

const roads = [
  mainRoad.slice().reverse().filter(point => point.z >= -6.65),
  mainRoad.filter(point => point.z <= 8.7),
];
const paths = roads.map((road, side) => {
  const distances = [0];
  for (let i = 1; i < road.length; i++) {
    distances.push(distances[i - 1] + Math.hypot(road[i].x - road[i - 1].x, road[i].z - road[i - 1].z));
  }
  return { road, distances, sign: side ? -1 : 1 };
});

export function enemyRoadAt(side, distance, target, lane = 0) {
  const { road, distances, sign } = paths[side];
  let low = 0, high = road.length - 1;
  while (high - low > 1) {
    const middle = (low + high) >> 1;
    if (distances[middle] > distance) high = middle;
    else low = middle;
  }
  const a = road[low], b = road[high];
  const t = T.MathUtils.clamp((distance - distances[low]) / (distances[high] - distances[low]), 0, 1);
  target.x = T.MathUtils.lerp(a.x, b.x, t);
  target.z = T.MathUtils.lerp(a.z, b.z, t);
  target.dx = T.MathUtils.lerp(a.dz, b.dz, t) * sign;
  target.dz = -T.MathUtils.lerp(a.dx, b.dx, t) * sign;
  const magnitude = Math.hypot(target.dx, target.dz);
  target.dx /= magnitude;
  target.dz /= magnitude;
  if (distance < 0) {
    target.x += target.dx * distance;
    target.z += target.dz * distance;
  }
  target.x += target.dz * lane;
  target.z -= target.dx * lane;
  return target;
}

export function createWaves() {
  const group = new T.Group();
  group.name = '村道入侵波次';
  const point = {};
  const portals = [0, 1].map(side => {
    enemyRoadAt(side, 0, point);
    const origin = new T.Vector3(point.x, height(point.x, point.z), point.z);
    const normal = new T.Vector3(point.dx, 0, point.dz);
    const plane = new T.Plane().setFromNormalAndCoplanarPoint(normal, origin);
    const rift = createRift(origin, normal);
    group.add(rift.group);
    return { rift, origin, paints: enemyMaterials(plane), used: false };
  });
  const actors = Array.from({ length: 24 }, (_, index) => {
    const side = Number(index >= 12), model = createEnemy(portals[side].paints, index);
    group.add(model.group);
    return { ...model, side, index, active: false, inside: false, hp: balance.enemyHp,
      p: new T.Vector2(), roadDistance: -.76, mode: 'road', route: [], routeIndex: 0,
      velocity: new T.Vector2(), age: 0, swing: -1, hit: false, target: null,
      cooldown: .4, repathTimer: 0, speed: 1.65 + .17 * Math.sin(index * 2.3), lane: Math.sin(index * 2.77) * .05 };
  });
  const state = { wave: 1, waves: balance.waves.length, total: balance.waves[0].count,
    emitted: 0, active: 0, killed: 0, phase: 'opening', countdown: 0, complete: false };
  let age = 0, nextSpawn = 5.5, closeAt = Infinity, cooldown = 0;

  function reset() {
    Object.assign(state, { wave: 1, total: balance.waves[0].count, emitted: 0, active: 0,
      killed: 0, phase: 'opening', countdown: 0, complete: false });
    age = 0; nextSpawn = 5.5; closeAt = Infinity; cooldown = 0;
    for (const actor of actors) {
      actor.active = false;
      actor.inside = false;
      actor.consumed = false;
      actor.group.visible = false;
      actor.stains.clear();
    }
    portals.forEach(portal => { portal.used = false; portal.rift.update(0, 0, 0); });
  }

  function kill(actor) {
    if (!actor.active) return;
    actor.active = false;
    actor.hp = 0;
    actor.group.visible = false;
    state.killed++;
  }

  function spawn(side) {
    const actor = actors.find(candidate => !candidate.active && candidate.side === side);
    if (!actor) return false;
    enemyRoadAt(side, -.76, point, actor.lane);
    if (actors.some(other => other.active && !other.inside
      && Math.hypot(other.p.x - point.x, other.p.y - point.z) < .94)) return false;
    Object.assign(actor, { active: true, inside: false, consumed: false, hp: balance.enemyHp, mode: 'road',
      roadDistance: -.76, routeIndex: 0, age: 0, swing: -1, hit: false, target: null,
      strikeTarget: null, lastAttacker: null, stun: 0, repathTimer: 0, cooldown: .5 });
    actor.route.length = 0;
    actor.velocity.set(0, 0);
    actor.p.set(point.x, point.z);
    actor.reset(point.x, point.z, Math.atan2(point.dx, point.dz));
    actor.stains.clear();
    actor.group.visible = true;
    portals[side].used = true;
    state.emitted++;
    state.active++;
    nextSpawn = age + balance.waves[state.wave - 1].interval;
    if (state.emitted === state.total) closeAt = age + 1.75;
    return true;
  }

  function update(dt) {
    if (state.complete) return;
    age += dt;
    state.active = actors.filter(actor => actor.active).length;
    if (state.emitted < state.total && age >= nextSpawn) {
      const side = state.wave === 3 ? state.emitted % 2 : 0;
      spawn(side);
    }
    const opening = T.MathUtils.smoothstep(age, .28, 1.4);
    const closing = T.MathUtils.smoothstep(age - closeAt, 0, .72);
    const openness = opening * (1 - closing) * (1 + .025 * Math.sin(age * 3.4));
    const vertical = T.MathUtils.smoothstep(age, .03, .44)
      * (1 - T.MathUtils.smoothstep(age - closeAt, .4, .95));
    portals.forEach((portal, side) => {
      const enabled = side === 0 || state.wave === 3;
      portal.rift.update(age, enabled ? openness : 0, enabled ? vertical : 0);
    });
    state.phase = age < 5.5 ? 'opening' : age < closeAt ? 'spawning'
      : age < closeAt + .95 ? 'closing' : state.active ? 'marching' : 'waiting';
    state.countdown = state.phase === 'opening' ? Math.max(0, Math.ceil(5.5 - age)) : 0;
    if (state.phase === 'waiting') {
      if (state.wave === balance.waves.length) {
        state.complete = true;
        state.phase = 'complete';
        return;
      }
      cooldown += dt;
      state.countdown = Math.max(0, Math.ceil(8 - cooldown));
      if (cooldown >= 8) {
        state.wave++;
        state.total = balance.waves[state.wave - 1].count;
        state.emitted = 0;
        age = 0; nextSpawn = 5.5; closeAt = Infinity; cooldown = 0;
      }
    }
  }

  reset();
  return { group, state, actors, update, reset, kill };
}
