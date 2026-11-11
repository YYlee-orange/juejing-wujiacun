import * as T from 'three';
import { createClothBurn } from './cloth-burn.js';

const columns = 14;
const rows = 4;
const stride = columns + 1;
const skinSize = stride * (rows + 1);
const halfThickness = .010;

function clothMaterial(burn, heat, mask, engineer) {
  const fabric = new T.MeshLambertMaterial({ color: engineer ? '#387cac' : '#bb593c' });
  fabric.onBeforeCompile = shader => {
    shader.uniforms.clothBurn = burn;
    shader.uniforms.clothHeat = heat;
    shader.uniforms.clothMask = { value: mask.texture };
    shader.vertexShader = 'varying vec2 vCloth;\n' + shader.vertexShader.replace(
      '#include <uv_vertex>', '#include <uv_vertex>\n vCloth = uv;',
    );
    shader.fragmentShader = `varying vec2 vCloth;
      uniform float clothBurn;
      uniform float clothHeat;
      uniform sampler2D clothMask;
    ` + shader.fragmentShader.replace(
      '#include <color_fragment>', `#include <color_fragment>
        ${engineer ? `
          bool notch = (vCloth.y > .18 && vCloth.y < .42) || (vCloth.y > .58 && vCloth.y < .82);
          if (vCloth.x > .86 && notch) discard;
          vec2 emblem = vec2((vCloth.x - .44) * 1.96, .5 - vCloth.y);
          emblem = mat2(.819, -.574, .574, .819) * emblem;
          vec2 handle = abs(emblem - vec2(.0, -.035)) - vec2(.027, .205);
          vec2 head = abs(emblem - vec2(.0, .165)) - vec2(.145, .063);
          float hammer = 1.0 - smoothstep(-.004, .007, min(max(handle.x, handle.y), max(head.x, head.y)));
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(.94, .94, .88), hammer);
        ` : `
          float crest = 1.0 - smoothstep(.129, .153, abs(vCloth.x - .29) * 1.8 + abs(vCloth.y - .5));
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(.77, .56, .24), crest);
        `}
        float edgeDistance = (texture2D(clothMask, vCloth).r - .5) * .20;
        if (edgeDistance < 0.0) discard;
        float enabled = step(.01, clothBurn);
        float charred = (1.0 - smoothstep(.008, .048, edgeDistance)) * enabled;
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(.035, .055, .025), charred);
      `,
    ).replace('#include <tonemapping_fragment>', `
        float ember = (1.0 - smoothstep(.0, .013, edgeDistance)) * enabled * clothHeat;
        float halo = (1.0 - smoothstep(.008, .026, edgeDistance)) * enabled * clothHeat;
        gl_FragColor.rgb += vec3(.22, 1.65, .13) * ember + vec3(.02, .19, .015) * halo;
        #include <tonemapping_fragment>`);
  };
  fabric.customProgramCacheKey = () => engineer ? 'engineer-three-tab-banner-v1' : 'attached-cloth-dissolve-v3';
  const rim = fabric.clone();
  rim.color.set(engineer ? '#2c5e86' : '#98503a');
  rim.onBeforeCompile = fabric.onBeforeCompile;
  return [fabric, rim];
}

export function createPennant({ engineer = false } = {}) {
  const burn = { value: 0 }, heat = { value: 0 };
  const mask = createClothBurn();
  const pattern = [], uv = [], indices = [];
  for (let row = 0; row <= rows; row++) {
    const v = row / rows;
    const length = engineer ? .94 : 1.13 - .254 * (1 - Math.abs(v * 2 - 1));
    for (let col = 0; col <= columns; col++) {
      const u = col / columns;
      pattern.push(new T.Vector3(.009 + u * length, .075 - v * ((engineer ? .48 : .326) - u * .044) - u * .030, 0));
      uv.push(u, v);
      if (row === rows || col === columns) continue;
      const a = row * stride + col, b = a + 1, d = a + stride, c = d + 1;
      indices.push(a, d, b, b, d, c);
      indices.push(a + skinSize, b + skinSize, d + skinSize, b + skinSize, c + skinSize, d + skinSize);
    }
  }
  const faceIndices = indices.length;
  const outline = [];
  for (let col = 0; col < columns; col++) outline.push(col);
  for (let row = 0; row < rows; row++) outline.push(row * stride + columns);
  for (let col = columns; col > 0; col--) outline.push(rows * stride + col);
  for (let row = rows; row > 0; row--) outline.push(row * stride);
  for (let i = 0; i < outline.length; i++) {
    const a = outline[i], b = outline[(i + 1) % outline.length];
    indices.push(a, b, a + skinSize, b, b + skinSize, a + skinSize);
  }
  const geometry = new T.BufferGeometry();
  const position = new T.BufferAttribute(new Float32Array(skinSize * 6), 3).setUsage(T.DynamicDrawUsage);
  geometry.setAttribute('position', position);
  geometry.setAttribute('uv', new T.Float32BufferAttribute([...uv, ...uv], 2));
  geometry.setIndex(indices);
  geometry.addGroup(0, faceIndices, 0);
  geometry.addGroup(faceIndices, indices.length - faceIndices, 1);
  geometry.boundingSphere = new T.Sphere(new T.Vector3(), 1.46);
  const mesh = new T.Mesh(geometry, clothMaterial(burn, heat, mask, engineer));
  mesh.name = engineer ? '蓝色三齿锤纹旗' : '守村队燕尾旗';

  const world = pattern.map(p => p.clone());
  const local = pattern.map(p => p.clone());
  const velocity = pattern.map(() => new T.Vector3());
  const previous = pattern.map(() => new T.Vector3());
  const links = [];
  const attach = Array.from({ length: rows + 1 }, () => new T.Vector3());
  const guide = attach.map(p => p.clone());
  const previousAttach = attach.map(p => p.clone());
  const previousGuide = guide.map(p => p.clone());
  const stepGuide = guide.map(p => p.clone());
  const tangent = new T.Vector3(), vertical = new T.Vector3(), normal = new T.Vector3();
  const force = new T.Vector3(), offset = new T.Vector3();
  const inverse = new T.Matrix4();
  let initialized = false;

  function link(a, b, strength) {
    links.push({
      a, b, strength,
      rest: pattern[a].distanceTo(pattern[b]),
      weightA: a % stride === 0 ? 0 : 1,
      weightB: b % stride === 0 ? 0 : 1,
    });
  }
  for (let row = 0; row <= rows; row++) {
    for (let col = 0; col <= columns; col++) {
      const i = row * stride + col;
      if (col < columns) link(i, i + 1, .97);
      if (row < rows && col) link(i, i + stride, .96);
      if (row < rows && col < columns) {
        link(i, i + stride + 1, .70);
        link(i + 1, i + stride, .70);
      }
      if (col < columns - 1) link(i, i + 2, .18);
      if (row < rows - 1 && col) link(i, i + stride * 2, .24);
    }
  }

  function surfaceNormal(points, index) {
    const col = index % stride, row = Math.floor(index / stride);
    tangent.subVectors(points[index + Number(col < columns)], points[index - Number(col > 0)]);
    vertical.subVectors(points[index - (row > 0 ? stride : 0)], points[index + (row < rows ? stride : 0)]);
    return normal.crossVectors(tangent, vertical).normalize();
  }

  function writeSkin() {
    for (let i = 0; i < skinSize; i++) {
      const p = local[i], n = surfaceNormal(local, i);
      position.setXYZ(i, p.x + n.x * halfThickness, p.y + n.y * halfThickness, p.z + n.z * halfThickness);
      position.setXYZ(i + skinSize, p.x - n.x * halfThickness, p.y - n.y * halfThickness, p.z - n.z * halfThickness);
    }
    position.needsUpdate = true;
    geometry.computeVertexNormals();
  }

  function constrain({ a, b, rest, strength, weightA, weightB }, scale) {
    offset.subVectors(world[b], world[a]);
    const distance = offset.length();
    if (distance < 1e-6) return;
    const correction = (distance - rest * scale) * strength / (distance * (weightA + weightB));
    world[a].addScaledVector(offset, correction * weightA);
    world[b].addScaledVector(offset, -correction * weightB);
  }

  function simulate(time, step, fraction, scale) {
    for (let row = 0; row <= rows; row++) {
      world[row * stride].lerpVectors(previousAttach[row], attach[row], fraction);
      stepGuide[row].lerpVectors(previousGuide[row], guide[row], fraction);
    }
    const damping = Math.exp(-1.62 * step);
    const mainWind = 4.05 + .51 * Math.sin(time * .92);
    for (let i = 0; i < skinSize; i++) {
      if (i % stride === 0) continue;
      const p = world[i], v = velocity[i], u = (i % stride) / columns;
      const row = Math.floor(i / stride) / rows;
      const gust = Math.sin(time * 5.65 - u * 8.9 + row * .87);
      const flutter = Math.sin(time * 8.3 - u * 13.6 + row * 1.38);
      force.set(mainWind + .20 * gust, .32 + .28 * flutter, -.46 + .99 * gust + .41 * flutter).sub(v);
      const direction = surfaceNormal(world, i);
      const pressure = force.dot(direction);
      previous[i].copy(p);
      v.multiplyScalar(damping).addScaledVector(force, 1.72 * step)
        .addScaledVector(direction, pressure * Math.abs(pressure) * .41 * step);
      v.y -= 1.85 * step;
      p.addScaledVector(v, step);
    }

    // The pole holds the hem. A soft guide lets the cloth near the pole start a turn
    // while the unsupported cloth keeps its own momentum in world space.
    for (let iteration = 0; iteration < 7; iteration++) {
      for (let row = 0; row <= rows; row++) world[row * stride + 1].lerp(stepGuide[row], .092);
      if (iteration % 2 === 0) {
        for (const edge of links) constrain(edge, scale);
      } else {
        for (let i = links.length - 1; i >= 0; i--) constrain(links[i], scale);
      }
    }
    for (let i = 0; i < skinSize; i++) {
      if (i % stride !== 0) velocity[i].subVectors(world[i], previous[i]).multiplyScalar(1 / step).clampLength(0, 8.5);
    }
  }

  function animate(time, dt, mast) {
    for (let row = 0; row <= rows; row++) {
      attach[row].copy(pattern[row * stride]).applyMatrix4(mast);
      guide[row].copy(pattern[row * stride + 1]).applyMatrix4(mast);
    }
    if (!initialized || attach[0].distanceToSquared(previousAttach[0]) > 1.2) {
      for (let i = 0; i < skinSize; i++) {
        world[i].copy(pattern[i]).applyMatrix4(mast);
        velocity[i].set(0, 0, 0);
      }
      for (let row = 0; row <= rows; row++) {
        previousAttach[row].copy(attach[row]);
        previousGuide[row].copy(guide[row]);
      }
      initialized = true;
    }
    const duration = Math.min(Math.max(dt, 0), .10);
    const steps = Math.ceil(duration * 120);
    const scale = Math.hypot(mast.elements[0], mast.elements[1], mast.elements[2]);
    for (let step = 1; step <= steps; step++) {
      simulate(time - duration + duration * step / steps, duration / steps, step / steps, scale);
    }
    for (let row = 0; row <= rows; row++) {
      previousAttach[row].copy(attach[row]);
      previousGuide[row].copy(guide[row]);
    }
    inverse.copy(mast).invert();
    for (let i = 0; i < skinSize; i++) local[i].copy(world[i]).applyMatrix4(inverse);
    writeSkin();
  }

  writeSkin();
  return { mesh, animate, setBurn: (value, warmth = 1) => { burn.value = value; heat.value = warmth; mask.setBurn(value); },
    reset: () => { initialized = false; burn.value = 0; heat.value = 0; mask.setBurn(0); } };
}
