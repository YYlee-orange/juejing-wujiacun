import * as T from 'three';
import { height } from './world.js';
import { createBlood } from './blood.js';
export { createGreenFire } from './fire.js';

const chunkGeometry = new T.IcosahedronGeometry(1, 0);
const palette = {
  enemy: ['#2d593b', '#406b43', '#254a35', '#34573a', '#d5dfb1'],
  villager: ['#3b5970', '#426881', '#37566b', '#caa366', '#d6a578'],
  engineer: ['#d47732', '#e18a3d', '#c96e31', '#f2edd9', '#d6a578'],
};
const vector = new T.Vector3(), spin = new T.Quaternion();

export function createEffects(scene) {
  const group = new T.Group();
  group.name = '血浆与爆散碎片';
  scene.add(group);
  const fluid = createBlood(group), transform = new T.Object3D();
  const debris = new T.InstancedMesh(chunkGeometry, new T.MeshLambertMaterial({ flatShading: true }), 480);
  debris.name = '死亡碎片';
  debris.frustumCulled = false;
  debris.castShadow = true; debris.receiveShadow = true;
  for (let i = 0; i < debris.count; i++) debris.setColorAt(i, new T.Color('#2d593b'));
  group.add(debris);
  const chunks = Array.from({ length: debris.count }, () => ({
    active: false, p: new T.Vector3(), q: new T.Quaternion(), velocity: new T.Vector3(),
    axis: new T.Vector3(), size: new T.Vector3(), spin: 0, settled: false,
    restAge: 0, hold: 0, support: 0, bounces: 0,
  }));
  let nextChunk = 0;

  function death(actor, direction) {
    fluid.blood(actor, direction, true);
    const alien = actor.kind === 'enemy', origin = actor.group.position;
    const count = alien ? 23 : 19, shades = palette[actor.team === 'engineers' ? 'engineer' : actor.kind];
    for (let i = 0; i < count; i++) {
      const index = nextChunk++ % chunks.length, chunk = chunks[index];
      const angle = Math.random() * Math.PI * 2;
      const large = i < 4, medium = i < 11;
      const radius = (alien ? .109 : .079) * (large ? 1 : medium ? .66 : .37) * (.85 + Math.random() * .3);
      chunk.size.set(radius * (.72 + Math.random() * .6), radius * (.7 + Math.random() * .6), radius * (.65 + Math.random() * .7));
      chunk.p.copy(origin).add(new T.Vector3(Math.cos(angle) * .10, .13 + Math.random() * (alien ? .39 : .29), Math.sin(angle) * .10));
      const speed = (large ? 1.1 : 1.7) + Math.random() * 1.6;
      chunk.velocity.set(Math.cos(angle) * speed + direction.x * .6,
        1.5 + Math.random() * (large ? 1.4 : 2.1), Math.sin(angle) * speed + direction.y * .6);
      chunk.axis.set(Math.random() - .5, Math.random() - .5, Math.random() - .5).normalize();
      if (chunk.axis.lengthSq() < .001) chunk.axis.set(1, 0, 0);
      chunk.q.setFromAxisAngle(chunk.axis, Math.random() * Math.PI * 2);
      chunk.spin = (3 + Math.random() * 7) * (Math.random() < .5 ? -1 : 1);
      chunk.active = true; chunk.settled = false; chunk.restAge = 0;
      chunk.hold = 2.5 + Math.random() * 1.3; chunk.bounces = 0;
      const shade = large ? shades[i % 3] : shades[(i + Math.floor(Math.random() * 3)) % shades.length];
      debris.setColorAt(index, new T.Color(shade));
    }
  }
  function supportHeight(chunk) {
    const positions = chunkGeometry.attributes.position;
    let minimum = Infinity;
    for (let i = 0; i < positions.count; i++) {
      vector.fromBufferAttribute(positions, i).multiply(chunk.size).applyQuaternion(chunk.q);
      minimum = Math.min(minimum, vector.y);
    }
    return -minimum;
  }
  function simulate(dt) {
    for (const chunk of chunks) {
      if (!chunk.active) continue;
      let ground = height(chunk.p.x, chunk.p.z);
      if (chunk.settled) {
        chunk.restAge += dt;
        const sink = T.MathUtils.smoothstep(chunk.restAge, chunk.hold, chunk.hold + 1.5);
        chunk.p.y = ground + chunk.support - sink * (chunk.support * 2 + .12);
        if (sink === 1) chunk.active = false;
        continue;
      }
      chunk.velocity.y -= dt * 8;
      chunk.p.addScaledVector(chunk.velocity, dt);
      ground = height(chunk.p.x, chunk.p.z);
      spin.setFromAxisAngle(chunk.axis, chunk.spin * dt); chunk.q.premultiply(spin);
      if (chunk.p.y > ground + Math.max(chunk.size.x, chunk.size.y, chunk.size.z) * 1.4) continue;
      chunk.support = supportHeight(chunk);
      if (chunk.p.y <= ground + chunk.support) {
        chunk.p.y = ground + chunk.support; chunk.bounces++;
        chunk.velocity.y = Math.abs(chunk.velocity.y) * .20;
        chunk.velocity.x *= .42; chunk.velocity.z *= .42; chunk.spin *= .4;
        if (chunk.velocity.y < .65 || chunk.bounces >= 2) chunk.settled = true;
      }
    }
  }
  function update(dt) {
    fluid.update(dt);
    const steps = Math.max(1, Math.ceil(dt * 60));
    for (let i = 0; i < steps; i++) simulate(dt / steps);
    for (let i = 0; i < chunks.length; i++) {
      const chunk = chunks[i];
      transform.position.copy(chunk.p); transform.quaternion.copy(chunk.q); transform.scale.copy(chunk.size);
      if (!chunk.active) transform.scale.setScalar(0);
      transform.updateMatrix(); debris.setMatrixAt(i, transform.matrix);
    }
    debris.instanceMatrix.needsUpdate = true; debris.instanceColor.needsUpdate = true;
  }
  function reset() { fluid.reset(); chunks.forEach(chunk => { chunk.active = false; }); update(0); }
  reset();
  return { blood: fluid.blood, death, update, reset };
}
