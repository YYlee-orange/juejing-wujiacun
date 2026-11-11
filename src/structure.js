import * as T from 'three';
import { height } from './world.js';

export function createStructureDamage(home) {
  const root = home.group;
  const rubble = new T.Group();
  rubble.name = '阶段性结构坍塌';
  root.add(rubble);
  root.updateWorldMatrix(true, true);
  const inverse = root.matrixWorld.clone().invert(), sources = [];
  root.traverse(mesh => { if (mesh.isMesh && mesh.userData.breakStage) sources.push(mesh); });
  const scratch = new T.Vector3(), up = new T.Vector3(0, 1, 0), matrix = new T.Matrix4();
  const rotation = new T.Quaternion(), identity = new T.Quaternion();
  let stage = 0;
  const parts = sources.map((source, index) => {
    matrix.multiplyMatrices(inverse, source.matrixWorld);
    const geometry = source.geometry.clone().applyMatrix4(matrix);
    geometry.computeBoundingBox();
    const center = geometry.boundingBox.getCenter(new T.Vector3());
    const size = geometry.boundingBox.getSize(new T.Vector3());
    geometry.translate(-center.x, -center.y, -center.z);
    geometry.computeBoundingSphere();
    const normal = new T.Vector3();
    if (source.userData.roofPanel) {
      // Closed slabs have cancelling top/bottom normals. Rest on their upper surface plane.
      const vertices = geometry.attributes.position, index = geometry.index, topCount = vertices.count / 2;
      const a = new T.Vector3(), b = new T.Vector3(), c = new T.Vector3();
      for (let i = 0; i < index.count; i += 3) {
        const ia = index.getX(i), ib = index.getX(i + 1), ic = index.getX(i + 2);
        if (ia >= topCount || ib >= topCount || ic >= topCount) continue;
        a.fromBufferAttribute(vertices, ia); b.fromBufferAttribute(vertices, ib); c.fromBufferAttribute(vertices, ic);
        normal.add(scratch.crossVectors(b.sub(a), c.sub(a)));
      }
    } else {
      const normals = geometry.attributes.normal;
      for (let i = 0; i < normals.count; i++) normal.add(scratch.fromBufferAttribute(normals, i));
    }
    if (normal.lengthSq() < .01) {
      if (size.x < size.y && size.x < size.z) normal.set(1, 0, 0);
      else if (size.z < size.y) normal.set(0, 0, 1);
      else normal.set(0, 1, 0);
    }
    normal.normalize();
    if (normal.y < 0) normal.negate();
    const rest = new T.Quaternion().setFromUnitVectors(normal, up);
    rotation.setFromAxisAngle(up, Math.sin(index * 2.39) * .65);
    rest.premultiply(rotation);
    const positions = geometry.attributes.position;
    let bottom = Infinity;
    for (let i = 0; i < positions.count; i++) {
      scratch.fromBufferAttribute(positions, i).applyQuaternion(rest);
      bottom = Math.min(bottom, scratch.y);
    }
    const mesh = new T.Mesh(geometry, source.material);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.visible = false;
    rubble.add(mesh);
    const exit = source.userData.roofPanel && source.userData.breakStage === 1 ? {
      duration: .30,
      target: new T.Vector3(center.x - .065, center.y,
        home.spec.d / 2 + geometry.boundingSphere.radius + .18),
    } : null;
    return { source, mesh, origin: center, rest, support: -bottom + .015, exit,
      threshold: source.userData.breakStage, age: 0, falling: false,
      velocity: new T.Vector3(), active: false };
  });

  function localFloor(x, z) {
    const worldX = home.spec.x + x * Math.cos(home.spec.angle) + z * Math.sin(home.spec.angle);
    const worldZ = home.spec.z + z * Math.cos(home.spec.angle) - x * Math.sin(home.spec.angle);
    const ground = height(worldX, worldZ) - home.spec.floor;
    return Math.abs(x) < home.spec.w / 2 + .06 && Math.abs(z) < home.spec.d / 2 + .065
      ? Math.max(.09, ground) : ground;
  }
  function reset() {
    stage = 0;
    parts.forEach(part => {
      part.source.visible = true;
      part.mesh.visible = false;
      part.active = false;
      part.falling = false;
      part.age = 0;
    });
  }
  function terrainContact(part) {
    const positions = part.mesh.geometry.attributes.position;
    let floor = -Infinity;
    for (let i = 0; i < positions.count; i++) {
      scratch.fromBufferAttribute(positions, i).applyQuaternion(part.mesh.quaternion);
      floor = Math.max(floor, localFloor(part.mesh.position.x + scratch.x,
        part.mesh.position.z + scratch.z) - scratch.y + .018);
    }
    return floor;
  }
  function setStage(nextStage) {
    if (nextStage < stage) reset();
    if (nextStage === stage) return;
    stage = nextStage;
    parts.forEach((part, index) => {
      if (part.threshold > stage || part.active) return;
      part.source.visible = false;
      part.mesh.position.copy(part.origin);
      part.mesh.quaternion.identity();
      part.mesh.visible = true;
      part.active = true;
      part.falling = true;
      part.age = 0;
      const outward = new T.Vector3(part.origin.x, 0, part.origin.z).normalize();
      part.velocity.copy(outward).multiplyScalar(.22 + index % 3 * .10);
      part.velocity.y = .25 + index % 4 * .08;
    });
  }
  function update(dt) {
    const steps = Math.max(1, Math.ceil(dt * 60));
    const step = dt / steps * .52;
    for (let i = 0; i < steps; i++) {
      for (const part of parts) {
        if (!part.falling) continue;
        const partStep = part.exit ? dt / steps : step;
        part.age += partStep;
        if (part.exit && part.age <= part.exit.duration) {
          const t = T.MathUtils.smoothstep(part.age, 0, part.exit.duration);
          part.mesh.position.lerpVectors(part.origin, part.exit.target, t);
          part.mesh.position.y -= t * .045;
          part.mesh.quaternion.identity();
          part.velocity.set(0, 0, .08);
          continue;
        }
        const flightAge = part.age - (part.exit?.duration ?? 0);
        part.velocity.y -= partStep * (part.exit ? 9.8 : 7.5);
        part.mesh.position.addScaledVector(part.velocity, partStep);
        part.mesh.quaternion.slerpQuaternions(identity, part.rest,
          T.MathUtils.smoothstep(flightAge, 0, part.exit ? .35 : .48));
        let floor = localFloor(part.mesh.position.x, part.mesh.position.z) + part.support;
        if (part.mesh.position.y < floor + .15 || flightAge >= 1.25) floor = terrainContact(part);
        if (part.mesh.position.y <= floor || flightAge >= 1.25) {
          part.mesh.quaternion.copy(part.rest);
          floor = terrainContact(part);
          part.mesh.position.y = floor;
          part.falling = false;
        }
      }
    }
  }
  reset();
  return { setStage, update, reset };
}
