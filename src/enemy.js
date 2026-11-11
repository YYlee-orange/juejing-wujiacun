import * as T from 'three';
import { height } from './world.js';

const segments = 20;
const bodyDepth = .97;
const profile = [[.16, .22], [.24, .31], [.43, .32], [.66, .29],
  [.83, .24], [.94, .15], [.99, .055], [1.0, 0]];
const bodyGeometry = new T.LatheGeometry(profile.map(([y, radius]) => new T.Vector2(radius, y)), segments);
const colors = [];
const color = new T.Color();
const base = new T.Color('#153e30'), top = new T.Color('#46714a');
const bodyPosition = bodyGeometry.attributes.position;
for (let i = 0; i < bodyPosition.count; i++) {
  const y = bodyPosition.getY(i);
  const shade = .055 * Math.sin(Math.atan2(bodyPosition.getX(i), bodyPosition.getZ(i)) * 5 + y * 4);
  color.copy(base).lerp(top, T.MathUtils.clamp(y * .86 + shade, 0, 1));
  colors.push(color.r, color.g, color.b);
}
bodyGeometry.setAttribute('color', new T.Float32BufferAttribute(colors, 3));
const footPhases = [0, .47, .19, .71, .39, .90];
const tentacleReach = 2 / 3;
const shaftRings = 13, rings = 16, sides = 8;
const axis = new T.Vector3(), across = new T.Vector3(), around = new T.Vector3();
const a = new T.Vector3(), b = new T.Vector3(), c = new T.Vector3(), d = new T.Vector3();
const center = new T.Vector3(), next = new T.Vector3();

function eyePatch(width, rise, inset, offsetX = 0, offsetY = 0) {
  const positions = [], indices = [];
  const columns = 32, rows = 4;
  for (let row = 0; row <= rows; row++) {
    for (let col = 0; col <= columns; col++) {
      const angle = col * Math.PI * 2 / columns, radius = row / rows;
      const x = Math.cos(angle) * width * radius + offsetX;
      const y = Math.sin(angle) * rise * radius + offsetY;
      const level = .64 + y;
      const upper = profile.findIndex(([py]) => py >= level);
      const [y0, r0] = profile[upper - 1], [y1, r1] = profile[upper];
      const bodyRadius = T.MathUtils.lerp(r0, r1, (level - y0) / (y1 - y0));
      const z = Math.sqrt(Math.max(.0001, bodyRadius ** 2 - x ** 2)) * bodyDepth;
      positions.push(x, y, z + inset);
      if (row === rows || col === columns) continue;
      const a = row * (columns + 1) + col, b = a + 1, c = a + columns + 1;
      indices.push(a, c, b, b, c, c + 1);
    }
  }
  const geometry = new T.BufferGeometry();
  geometry.setAttribute('position', new T.Float32BufferAttribute(positions, 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  return geometry;
}

const eyeShapes = {
  lid: eyePatch(.268, .177, .008),
  white: eyePatch(.241, .147, .015),
  iris: eyePatch(.106, .119, .024, .008, -.003),
  pupil: eyePatch(.046, .080, .030, .008, -.003),
  glint: eyePatch(.025, .027, .035, -.022, .037),
  smallGlint: eyePatch(.009, .011, .035, .054, -.040),
};

export function enemyMaterials(plane) {
  const crossing = { value: new T.Vector4(plane.normal.x, plane.normal.y, plane.normal.z, plane.constant) };
  function material(options) {
    const paint = new T.MeshLambertMaterial({ ...options, clippingPlanes: [plane], clipShadows: true });
    paint.onBeforeCompile = shader => {
      shader.uniforms.riftPlane = crossing;
      shader.vertexShader = 'varying vec3 enemyWorld;\n' + shader.vertexShader.replace(
        '#include <project_vertex>',
        '#include <project_vertex>\n enemyWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;',
      );
      shader.fragmentShader = 'varying vec3 enemyWorld; uniform vec4 riftPlane;\n' + shader.fragmentShader.replace(
        '#include <tonemapping_fragment>',
        `float contact = 1.0 - smoothstep(0.006, 0.062, dot(vec4(enemyWorld, 1.0), riftPlane));
         gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(0.12, 1.7, 0.27), contact);
         #include <tonemapping_fragment>`,
      );
    };
    paint.customProgramCacheKey = () => 'rift-contact-v1';
    return paint;
  }
  return {
    skin: material({ color: '#ffffff', vertexColors: true }),
    limb: material({ color: '#28543b' }),
    lid: material({ color: '#214333' }),
    white: material({ color: '#d5dfb1' }),
    iris: material({ color: '#779444' }),
    pupil: material({ color: '#152c24' }),
    glint: material({ color: '#f1f4d3', emissive: '#617a39', emissiveIntensity: .25 }),
  };
}

function tentacleGeometry() {
  const geometry = new T.BufferGeometry();
  geometry.setAttribute('position', new T.BufferAttribute(new Float32Array(rings * sides * 3), 3).setUsage(T.DynamicDrawUsage));
  geometry.setAttribute('normal', new T.BufferAttribute(new Float32Array(rings * sides * 3), 3).setUsage(T.DynamicDrawUsage));
  const indices = [];
  for (let row = 0; row < rings - 1; row++) {
    for (let side = 0; side < sides; side++) {
      const p = row * sides + side, q = row * sides + (side + 1) % sides;
      indices.push(p, q, p + sides, q, q + sides, p + sides);
    }
  }
  geometry.setIndex(indices);
  // The moving feet stay within this local volume, including steep banks.
  geometry.boundingSphere = new T.Sphere(new T.Vector3(0, .25, 0), 1.5);
  return geometry;
}

function tentaclePoint(target, t, phase, turn) {
  const s = 1 - t;
  target.copy(a).multiplyScalar(s ** 3).addScaledVector(b, 3 * s * s * t)
    .addScaledVector(c, 3 * s * t * t).addScaledVector(d, t ** 3);
  const curl = Math.sin(t * 7.2 - phase) * Math.sin(t * Math.PI) * .045 * tentacleReach;
  target.x += Math.cos(turn) * curl;
  target.z -= Math.sin(turn) * curl;
  return target;
}

export function createEnemy(materials, index) {
  const group = new T.Group(), body = new T.Group();
  group.name = '独眼触手怪';
  group.add(body);
  function part(parent, geometry, paint) {
    const mesh = new T.Mesh(geometry, paint);
    mesh.castShadow = true;
    parent.add(mesh);
    return mesh;
  }
  const torso = new T.Mesh(bodyGeometry, materials.skin);
  torso.scale.z = bodyDepth;
  torso.castShadow = true;
  body.add(torso);
  const lid = part(body, eyeShapes.lid, materials.lid);
  lid.position.y = .64;
  const eye = new T.Group();
  eye.position.y = .64;
  body.add(eye);
  part(eye, eyeShapes.white, materials.white);
  const iris = new T.Group();
  eye.add(iris);
  part(iris, eyeShapes.iris, materials.iris);
  part(iris, eyeShapes.pupil, materials.pupil);
  part(iris, eyeShapes.glint, materials.glint);
  part(iris, eyeShapes.smallGlint, materials.glint);
  const stains = new T.Group();
  body.add(stains);
  const feet = footPhases.map((phase, i) => {
    const turn = (i + .5) * Math.PI / 3;
    const geometry = tentacleGeometry();
    const mesh = new T.Mesh(geometry, materials.limb);
    mesh.castShadow = true;
    group.add(mesh);
    return { phase, turn, mesh, planted: new T.Vector3(), takeoff: new T.Vector3(),
      landing: new T.Vector3(), tip: new T.Vector3(), swinging: false };
  });
  const scale = .72 + Math.sin(index * 5.17) * .025;
  group.scale.setScalar(scale);
  let traveled = 0, age = 0;

  function footTarget(foot, ahead, target) {
    const yaw = group.rotation.y;
    const sx = Math.sin(foot.turn) * (.22 + (.44 - .22) * tentacleReach);
    const sz = Math.cos(foot.turn) * (.20 + (.38 - .20) * tentacleReach) + ahead * tentacleReach;
    const x = group.position.x + (sx * Math.cos(yaw) + sz * Math.sin(yaw)) * scale;
    const z = group.position.z + (sz * Math.cos(yaw) - sx * Math.sin(yaw)) * scale;
    return target.set(x, height(x, z) + .018, z);
  }

  function reset(x, z, yaw) {
    group.scale.setScalar(scale);
    group.position.set(x, height(x, z), z);
    group.rotation.y = yaw;
    traveled = 0;
    age = 0;
    for (const foot of feet) {
      footTarget(foot, 0, foot.planted);
      foot.takeoff.copy(foot.planted);
      foot.landing.copy(foot.planted);
      foot.swinging = false;
    }
    pose(0, 0);
  }

  function pose(distance, dt, attack = -1) {
    traveled += distance;
    age += dt;
    const stride = traveled / (.58 * tentacleReach);
    const wave = stride * Math.PI * 2 + index * 1.7;
    body.position.y = .013 + Math.sin(wave) * .012;
    body.scale.set(1 + Math.sin(wave) * .025, 1 - Math.sin(wave) * .036, 1);
    body.rotation.set(.035 + Math.cos(wave) * .025, 0, Math.sin(wave) * .035);
    const liftArms = attack < 0 ? 0 : T.MathUtils.smoothstep(attack, 0, .27)
      * (1 - T.MathUtils.smoothstep(attack, .43, .74));
    const whip = attack < 0 ? 0 : T.MathUtils.smoothstep(attack, .27, .40)
      * (1 - T.MathUtils.smoothstep(attack, .43, .74));
    body.rotation.x += -liftArms * .10 + whip * .19;
    const blinkPhase = ((age + index * .74) % 4.7) / 4.7;
    eye.scale.y = 1 - .94 * Math.exp(-(((blinkPhase - .93) / .023) ** 2));
    iris.position.x = .010 * Math.sin(age * 1.7 + index);
    const yaw = group.rotation.y, cos = Math.cos(yaw), sin = Math.sin(yaw);
    for (const foot of feet) {
      const cycle = (stride + foot.phase) % 1;
      const swinging = cycle >= .60;
      if (swinging && !foot.swinging) {
        foot.takeoff.copy(foot.planted);
        footTarget(foot, .34, foot.landing);
      }
      if (!swinging && foot.swinging) foot.planted.copy(foot.landing);
      foot.swinging = swinging;
      const swing = T.MathUtils.clamp((cycle - .60) / .40, 0, 1);
      const lift = swinging ? Math.sin(swing * Math.PI) * .12 * tentacleReach : 0;
      foot.tip.copy(foot.planted);
      if (swinging) foot.tip.lerpVectors(foot.takeoff, foot.landing, T.MathUtils.smoothstep(swing, 0, 1));
      const dx = (foot.tip.x - group.position.x) / scale;
      const dz = (foot.tip.z - group.position.z) / scale;
      let tx = dx * cos - dz * sin, tz = dz * cos + dx * sin;
      let ty = (foot.tip.y - group.position.y) / scale + lift;
      if (foot === feet[0] || foot === feet[5]) {
        tx = T.MathUtils.lerp(tx, Math.sign(Math.sin(foot.turn)) * (.26 - whip * .08), liftArms);
        tz = T.MathUtils.lerp(tz, .18 + whip * .67, liftArms);
        ty = T.MathUtils.lerp(ty, .64 - whip * .43, liftArms);
      }
      a.set(Math.sin(foot.turn) * .22, .215 + body.position.y, Math.cos(foot.turn) * .20);
      b.set(Math.sin(foot.turn) * .64 + Math.cos(foot.turn) * .07,
        .14 + lift * .7, Math.cos(foot.turn) * .57 - Math.sin(foot.turn) * .07);
      b.x = a.x + (b.x - a.x) * tentacleReach;
      b.z = a.z + (b.z - a.z) * tentacleReach;
      c.set(a.x + (tx - a.x) * 1.10 - Math.cos(foot.turn) * .025 * tentacleReach,
        ty + .010 + lift * .45,
        a.z + (tz - a.z) * 1.10 + Math.sin(foot.turn) * .025 * tentacleReach);
      d.set(a.x + (tx - a.x) * .98, ty + .026, a.z + (tz - a.z) * .98);
      const positions = foot.mesh.geometry.attributes.position;
      const normals = foot.mesh.geometry.attributes.normal;
      const phase = wave - foot.phase * 5;
      for (let row = 0; row < rings; row++) {
        const t = Math.min(1, row / (shaftRings - 1));
        tentaclePoint(center, t, phase, foot.turn);
        tentaclePoint(next, Math.min(1, t + .01), phase, foot.turn);
        if (row >= shaftRings - 1) {
          tentaclePoint(next, t - .01, phase, foot.turn);
          axis.subVectors(center, next);
        } else axis.subVectors(next, center);
        axis.normalize();
        across.set(axis.z, 0, -axis.x).normalize();
        if (across.lengthSq() < .001) across.set(1, 0, 0);
        around.crossVectors(axis, across).normalize();
        const cap = Math.max(0, row - shaftRings + 1) / (rings - shaftRings) * Math.PI / 2;
        const radius = row < shaftRings ? .069 * (1 - t) + .014 : .014 * Math.cos(cap);
        center.addScaledVector(axis, .014 * Math.sin(cap));
        for (let side = 0; side < sides; side++) {
          const turn = side * Math.PI * 2 / sides;
          const nx = across.x * Math.cos(turn) + around.x * Math.sin(turn);
          const ny = across.y * Math.cos(turn) + around.y * Math.sin(turn);
          const nz = across.z * Math.cos(turn) + around.z * Math.sin(turn);
          const vertex = row * sides + side;
          positions.setXYZ(vertex, center.x + nx * radius, center.y + ny * radius, center.z + nz * radius);
          normals.setXYZ(vertex, nx * Math.cos(cap) + axis.x * Math.sin(cap),
            ny * Math.cos(cap) + axis.y * Math.sin(cap), nz * Math.cos(cap) + axis.z * Math.sin(cap));
        }
      }
      positions.needsUpdate = true;
      normals.needsUpdate = true;
    }
  }

  return { group, body, stains, kind: 'enemy', bodyDepth, reset, pose, radius: .65 * scale };
}
