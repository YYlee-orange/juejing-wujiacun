import * as T from 'three';

const base = new T.Color('#637a43');
const mid = new T.Color('#829a51');
const tip = new T.Color('#b1bf72');
const petalRoot = new T.Color('#e6e7c9');
const petalTip = new T.Color('#fffdee');
const pollen = new T.Color('#dbb95b');
const goldRoot = new T.Color('#d6a435');
const goldTip = new T.Color('#f6d962');
const goldCenter = new T.Color('#ad771e');
const bladeProfile = [[0, .22, 0], [.30, .72, .09], [.61, 1, .32], [.90, .73, .66], [1, .09, 1]];

export function meadow(parent, { grass, tussocks, yellow }, plantHeight) {
  const positions = [], colors = [], breeze = [], indices = [];
  const color = new T.Color();
  let seed = 43278;
  const random = () => {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    return seed / 4294967296;
  };

  function vertex(x, y, z, shade, rootX, rootZ, weight) {
    positions.push(x, y, z);
    colors.push(shade.r, shade.g, shade.b);
    breeze.push(rootX, rootZ, weight);
  }

  function blade(x, y, z, turn, rise, width, reach, stem = false) {
    const dx = Math.cos(turn), dz = Math.sin(turn);
    const offset = positions.length / 3;
    const weight = Math.min(1.22, rise / .205);
    for (const [t, breadth, lean] of bladeProfile) {
      const bx = x + dx * reach * lean, bz = z + dz * reach * lean;
      const by = y + rise * (stem ? t : t - .10 * t ** 5);
      const flex = weight * t ** 2;
      color.copy(base).lerp(mid, t).lerp(tip, t * (stem ? .28 : .57));
      vertex(bx - dz * width * breadth, by, bz + dx * width * breadth, color, x, z, flex);
      vertex(bx + dz * width * breadth, by, bz - dx * width * breadth, color, x, z, flex);
    }
    for (let i = 0; i < bladeProfile.length - 1; i++) {
      const a = offset + i * 2;
      indices.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
    }
  }

  function flower(x, y, z, turn, height, radius, low = false) {
    const reach = low ? .008 + random() * .013 : .025 + random() * .028;
    blade(x, y, z, turn, height, .009, reach, true);
    blade(x, y, z, turn + Math.PI, height * .57, low ? .019 : .022, .062);
    const px = x + Math.cos(turn) * reach, py = y + height, pz = z + Math.sin(turn) * reach;
    const flex = Math.min(1.22, height / .205);
    const petal = [[.16, -.18, 0], [.49, -.37, .035], [.91, -.24, .14],
      [1, 0, .19], [.88, .24, .12], [.48, .37, .035], [.16, .18, 0]];
    for (let i = 0; i < 5; i++) {
      const angle = turn + i * Math.PI * 2 / 5, dx = Math.cos(angle), dz = Math.sin(angle);
      const offset = positions.length / 3;
      const lobe = radius * (.90 + random() * .17);
      for (const [forward, sideways, lift] of petal) {
        color.copy(low ? goldRoot : petalRoot).lerp(low ? goldTip : petalTip, Math.min(1, forward * 1.4));
        vertex(px + (dx * forward - dz * sideways) * lobe, py + lift * lobe,
          pz + (dz * forward + dx * sideways) * lobe, color, x, z, flex);
      }
      for (let p = 1; p < petal.length - 1; p++) indices.push(offset, offset + p, offset + p + 1);
    }
    const disk = positions.length / 3;
    const center = low ? goldCenter : pollen;
    vertex(px, py + .007, pz, center, x, z, flex);
    for (let i = 0; i < 6; i++) {
      const angle = i * Math.PI / 3;
      vertex(px + Math.cos(angle) * radius * .24, py + .003, pz + Math.sin(angle) * radius * .24,
        center, x, z, flex);
      indices.push(disk, disk + 1 + (i + 1) % 6, disk + 1 + i);
    }
  }

  function scatter(x, z, radius, count, place) {
    for (let i = 0; i < count; i++) {
      const turn = random() * Math.PI * 2;
      const r = Math.sqrt(random());
      const distance = radius * r;
      const px = x + Math.cos(turn) * distance, pz = z + Math.sin(turn) * distance * .76;
      const y = plantHeight(px, pz);
      if (y === null) continue;
      place(px, y, pz, turn, (.75 + random() * .39) * (1 - .27 * r), i);
    }
  }

  function tuft(x, y, z, turn, size, large = false) {
    const leafCount = (large ? 10 : 5) + Math.floor(random() * 4);
    const spread = large ? .057 : .028;
    for (let k = 0; k < leafCount; k++) {
      const angle = turn + (k + random() * .58) * Math.PI * 2 / leafCount;
      const reach = large ? .135 + random() * .17 : .055 + random() * .10;
      const rise = (large ? .25 + random() * .29 : .116 + random() * .139) * size;
      const width = (large ? .032 + random() * .026 : .020 + random() * .018) * size;
      blade(x + Math.cos(angle) * spread, y - .014, z + Math.sin(angle) * spread,
        angle, rise, width, reach * size);
    }
  }

  for (const [x, z, radius, blossoms] of grass) {
    scatter(x, z, radius, 11, (px, y, pz, turn, size, i) => {
      tuft(px, y, pz, turn, size);
      if (i < blossoms) {
        const y1 = plantHeight(px + .082, pz - .055);
        if (y1 !== null) flower(px + .082, y1, pz - .055, turn, (.175 + random() * .080) * size, (.048 + random() * .024) * size);
        if (i % 2 === 0) {
          const y2 = plantHeight(px - .095, pz + .064);
          if (y2 !== null) flower(px - .095, y2, pz + .064, turn + 2, (.143 + random() * .072) * size, .057 * size);
        }
      }
    });
  }
  for (const [x, z, radius] of tussocks) {
    const y = plantHeight(x, z);
    if (y !== null) tuft(x, y, z, random() * Math.PI * 2, 1.08 + random() * .23, true);
    scatter(x, z, radius, 6, (px, py, pz, turn, size, i) => {
      tuft(px, py, pz, turn, size, i < 3);
    });
  }
  for (const [x, z, radius, count] of yellow) {
    scatter(x, z, radius, count, (px, y, pz, turn, size) => {
      flower(px, y - .008, pz, turn, (.035 + random() * .050) * size, (.052 + random() * .032) * size, true);
    });
  }

  const geometry = new T.BufferGeometry();
  geometry.setAttribute('position', new T.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('color', new T.Float32BufferAttribute(colors, 3));
  geometry.setAttribute('breeze', new T.Float32BufferAttribute(breeze, 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  geometry.computeBoundingSphere();
  geometry.boundingSphere.radius += .14;
  const time = { value: 0 };
  const material = new T.MeshLambertMaterial({ vertexColors: true, side: T.DoubleSide });
  material.onBeforeCompile = shader => {
    shader.uniforms.meadowTime = time;
    shader.vertexShader = 'uniform float meadowTime;\n attribute vec3 breeze;\n' + shader.vertexShader.replace(
      '#include <begin_vertex>', `#include <begin_vertex>
        float phase = meadowTime * 2.45 - dot(breeze.xy, vec2(.91, .64));
        float ripple = sin(phase) * .084 + sin(phase * 1.82 + breeze.x) * .019;
        transformed.xz += vec2(.85, .53) * breeze.z * ripple;
        transformed.y -= breeze.z * (ripple * ripple * 2.65);
      `,
    );
  };
  const mesh = new T.Mesh(geometry, material);
  mesh.receiveShadow = true;
  parent.add(mesh);
  return value => { time.value = value; };
}
