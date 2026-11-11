import * as T from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { animateCanopy, boulder, canopyGeometry, groundShadows, ledge, tintGeometry, tintedProp, tones } from './scenery.js';
import { addTree } from './trees.js';
import { meadow } from './meadow.js';
import { buildCreek } from './creek.js';

const sides = [[0, -1], [1, 0], [0, 1], [-1, 0]];
const cube = new T.BoxGeometry();
const paints = new Map();
const stone = [
  tones('#696d71', '#929798', '#c9c8b7'),
  tones('#73706d', '#9a9789', '#cbc1a9'),
];

function paint(color) {
  if (!paints.has(color)) paints.set(color, new T.MeshLambertMaterial({ color }));
  return paints.get(color);
}

export function piece(parent, geometry, color, x, y, z, sx = 1, sy = 1, sz = 1, shadow = true) {
  const mesh = new T.Mesh(geometry, paint(color));
  mesh.position.set(x, y, z);
  mesh.scale.set(sx, sy, sz);
  mesh.castShadow = shadow;
  mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
}

export function box(parent, color, x, y, z, sx, sy, sz, shadow = true) {
  return piece(parent, cube, color, x, y, z, sx, sy, sz, shadow);
}

function softBox(parent, color, x, y, z, sx, sy, sz, radius) {
  return piece(parent, new RoundedBoxGeometry(sx, sy, sz, 1, radius), color, x, y, z);
}

function noise(x, z) {
  const n = Math.sin(x * 127.1 + z * 311.7) * 43758.5453123;
  return n - Math.floor(n);
}

export const key = (x, z) => `${x},${z}`;
export const tileSize = 1.25;
export const tileIndex = value => Math.round(value / tileSize);
const smooth = T.MathUtils.smoothstep;
const mix = T.MathUtils.lerp;
const waterY = .115;
const bridgeStart = 3.65;
const bridgeEnd = 6.35;
const bridgeWidth = 1.56;
const creekZ = x => 5 + .75 * Math.sin(x * .28) + .24 * Math.sin(x * .77) + .55 * Math.sin(x * .096);
const creekWidth = x => .58 + .17 * (.5 + .5 * Math.sin(x * .49 + 1));

const hills = [
  [-6.5, -4.9, 5.2, 4.0, 3.45], [-9.1, -1.2, 4.1, 5.0, 2.25],
  [4.6, -6.6, 6.7, 4.9, 2.75], [8.0, -1.1, 4.2, 4.2, 1.55],
  [-14, -13, 9, 6.5, 6.2], [1, -17, 12, 7, 5.4], [15, -10, 9, 6, 6.9],
  [17, 10, 9, 6, 4.5], [-13, 12.5, 8, 6, 4.1], [2, 19, 12, 6.5, 4.3],
  [-24, -16, 11, 12, 8.2], [22, -22, 10, 8, 7.5], [-21, 21, 12, 7, 6.4],
  [29, 12, 11, 9, 7.8], [-33, -3, 12, 9, 8.2], [0, -35, 15, 8, 8.9],
];

function naturalHeight(x, z) {
  let y = .49 + .13 * Math.sin(x * .34 + z * .28) + .12 * Math.cos(x * .57 - z * .36);
  for (const [cx, cz, rx, rz, rise] of hills) {
    const distance = ((x - cx) / rx) ** 2 + ((z - cz) / rz) ** 2;
    y += rise * Math.exp(-distance * 1.5);
  }
  const creekDistance = Math.abs(z - creekZ(x));
  return mix(-.20, y, smooth(creekDistance, creekWidth(x) * .48, creekWidth(x) + .63));
}

const bridgeBanks = [bridgeStart, bridgeEnd].map(z => ({ z, y: naturalHeight(0, z) }));

function foundationDistance(building, x, z) {
  const dx = x - building.x, dz = z - building.z;
  const c = Math.cos(building.angle), s = Math.sin(building.angle);
  const u = c * dx - s * dz, v = s * dx + c * dz;
  return Math.max(Math.abs(u) - building.w / 2, Math.abs(v) - building.d / 2);
}

function shapedHeight(x, z) {
  let y = naturalHeight(x, z) + .031 * Math.sin(x * 1.45 + z * .55) * Math.sin(z * 1.33);
  for (const building of buildings) {
    const influence = 1 - smooth(foundationDistance(building, x, z), .56, 1.27);
    y = mix(y, building.floor, influence);
  }
  for (const bank of bridgeBanks) {
    const apron = (1 - smooth(Math.abs(x), bridgeWidth / 2 + .10, bridgeWidth / 2 + .57))
      * (1 - smooth(Math.abs(z - bank.z), .23, .71));
    y = mix(y, bank.y, apron);
  }
  return y;
}

// Concentrate the mesh near the village and keep a coarser landscape beyond it.
const nearStep = .375;
const outerStep = .72;
const nearCells = 32;
const nearRadius = nearStep * nearCells;
const groundLimit = 72;
const groundPoints = new Map();

function groundAxis(index) {
  const n = Math.abs(index);
  return Math.sign(index) * (Math.min(n, nearCells) * nearStep + Math.max(0, n - nearCells) * outerStep);
}

function groundIndex(value) {
  const n = Math.abs(value);
  const cells = n <= nearRadius ? n / nearStep : nearCells + (n - nearRadius) / outerStep;
  return Math.floor(Math.sign(value) * cells);
}

function groundVertex(i, j) {
  const id = key(i, j);
  if (!groundPoints.has(id)) {
    const localStep = index => Math.abs(index) <= nearCells ? nearStep : outerStep;
    const x = groundAxis(i) + (noise(i, j + 17) - .5) * localStep(i) * .44;
    const z = groundAxis(j) + (noise(i - 12, j) - .5) * localStep(j) * .44;
    groundPoints.set(id, [x, shapedHeight(x, z), z]);
  }
  return groundPoints.get(id);
}

function groundFaces(i, j) {
  const a = groundVertex(i, j), b = groundVertex(i + 1, j);
  const c = groundVertex(i + 1, j + 1), d = groundVertex(i, j + 1);
  return (i + j) % 2 === 0 ? [[a, d, b], [b, d, c]] : [[a, d, c], [a, c, b]];
}

function groundHeight(x, z) {
  const i = groundIndex(x), j = groundIndex(z);
  for (let di = -1; di <= 1; di++) {
    for (let dj = -1; dj <= 1; dj++) {
      for (const [a, b, c] of groundFaces(i + di, j + dj)) {
        const bx = b[0] - a[0], bz = b[2] - a[2], cx = c[0] - a[0], cz = c[2] - a[2];
        const px = x - a[0], pz = z - a[2];
        const area = bx * cz - bz * cx;
        const u = (px * cz - pz * cx) / area, v = (bx * pz - bz * px) / area;
        if (u >= -1e-7 && v >= -1e-7 && u + v <= 1 + 1e-7) return a[1] + u * (b[1] - a[1]) + v * (c[1] - a[1]);
      }
    }
  }
  return shapedHeight(x, z);
}

function deckHeight(z) {
  const t = (z - bridgeStart) / (bridgeEnd - bridgeStart);
  return mix(bridgeNorth, bridgeSouth, t) + Math.sin(t * Math.PI) * .29;
}

export function height(x, z) {
  const ground = groundHeight(x, z);
  if (Math.abs(x) <= bridgeWidth / 2 && z >= bridgeStart && z <= bridgeEnd) return Math.max(ground, deckHeight(z));
  return ground;
}

function geometry(points) {
  const g = new T.BufferGeometry();
  g.setAttribute('position', new T.Float32BufferAttribute(points.flat(), 3));
  g.computeVertexNormals();
  return g;
}

function quad(points, a, b, c, d) {
  points.push(a, b, d, b, c, d);
}

function section(parent, points, color, shadow = true) {
  if (points.length) return piece(parent, geometry(points), color, 0, 0, 0, 1, 1, 1, shadow);
}

const paths = [
  [1.10, [
    [-16.5, 43], [-10.6, 34], [-9.6, 27], [-5.8, 20], [-2.0, 13], [-.65, 9], [-.16, 7.2],
    [0, 6.52], [0, 6.30], [0, 3.68], [.07, 3.44], [.65, 2.8], [.33, 1.15], [-.50, -.15], [-1.08, -1.70], [-1.17, -3.35],
    [-1.54, -5.6], [-3.35, -7.8], [-3.05, -13], [-3.8, -17], [-1.10, -23], [-1.90, -30], [-6.2, -37], [-6.8, -43],
  ]],
  [.77, [[.25, 1.14], [1.4, .79], [2.32, -.02], [3.04, -1.05], [3.94, -1.52]]],
  [.70, [[2.16, .13], [2.74, .78], [3.62, 1.0], [4.2, .89]]],
  [.67, [[-.99, -1.52], [.30, -1.38], [1.06, -1.31]]],
  [.64, [[.04, .70], [-1.08, .95], [-2.15, 1.05], [-2.72, .91]]],
  [.56, [[-1.03, -1.61], [-1.63, -1.53], [-2.65, -1.72]]],
  [.57, [[-1.27, -4.02], [.17, -4.27], [1.52, -3.93]]],
];

const pathSpan = { x: 48, z: 86 };
const tracks = paths.map(([width, points], index) => {
  const curve = new T.CatmullRomCurve3(points.map(([x, z]) => new T.Vector3(x, 0, z)));
  const length = curve.getLength();
  const steps = Math.ceil(length * 15);
  return Array.from({ length: steps + 1 }, (_, i) => {
    const t = i / steps;
    const at = curve.getPointAt(t);
    const tangent = curve.getTangentAt(t);
    const distance = t * length;
    const end = .57 + .43 * smooth(t, 0, .05) * (1 - smooth(t, .94, 1));
    const bank = index === 0 ? Math.max(...bridgeBanks.map(b => 1 - smooth(Math.abs(at.z - b.z), .22, .80))) : 0;
    const half = width * .5 * end * (1 + bank * .24);
    const edge = side => half * (1 + .094 * Math.sin(distance * 1.47 + index + side)
      + .024 * Math.sin(distance * 3.1 + side * 2));
    return { x: at.x, z: at.z, dx: tangent.z, dz: -tangent.x, left: edge(1), right: edge(-1) };
  });
});

export const mainRoad = tracks[0];

function onTrack(x, z, margin) {
  return tracks.some(track => track.some(point => {
    const dx = x - point.x, dz = z - point.z;
    const half = (dx * point.dx + dz * point.dz > 0 ? point.left : point.right) + margin;
    return dx * dx + dz * dz < half * half;
  }));
}

function pathTexture() {
  const resolution = 2048;
  const mask = document.createElement('canvas');
  mask.width = mask.height = resolution;
  const ctx = mask.getContext('2d');
  const toPixel = (x, z) => [(x / pathSpan.x + .5) * resolution, (z / pathSpan.z + .5) * resolution];
  ctx.fillStyle = '#ddd';
  for (const track of tracks) {
    const left = track.map(({ x, z, dx, dz, left }) => toPixel(x + dx * left, z + dz * left));
    const right = track.map(({ x, z, dx, dz, right }) => toPixel(x - dx * right, z - dz * right));
    const pointsAround = [...left, ...right.reverse()];
    ctx.beginPath();
    pointsAround.forEach(([x, y], i) => i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y));
    ctx.closePath();
    ctx.fill();
  }
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = resolution;
  const softened = canvas.getContext('2d');
  softened.fillStyle = '#000';
  softened.fillRect(0, 0, resolution, resolution);
  softened.filter = 'blur(1.65px)';
  softened.drawImage(mask, 0, 0);
  const texture = new T.CanvasTexture(canvas);
  texture.anisotropy = 4;
  return texture;
}

function buildTerrain(parent) {
  const material = new T.MeshLambertMaterial({ vertexColors: true, map: pathTexture() });
  material.onBeforeCompile = shader => {
    shader.uniforms.trackColor = { value: new T.Color('#cbb686') };
    shader.fragmentShader = 'uniform vec3 trackColor;\n' + shader.fragmentShader.replace(
      '#include <map_fragment>\n\t#include <color_fragment>',
      '#include <color_fragment>\n diffuseColor.rgb = mix(diffuseColor.rgb, trackColor, texture2D(map, vMapUv).r);',
    );
  };
  const grass = new T.Color('#a8bf7c'), grove = new T.Color('#7f9e6c');
  const rock = new T.Color('#b9b3a2'), riverbank = new T.Color('#c9bf96'), distant = new T.Color('#a9bdb3');
  const attributes = new WeakMap();
  function surfaceAt(point) {
    if (attributes.has(point)) return attributes.get(point);
    const [x, y, z] = point;
    const d = .23;
    const normal = new T.Vector3(
      shapedHeight(x - d, z) - shapedHeight(x + d, z),
      2 * d,
      shapedHeight(x, z - d) - shapedHeight(x, z + d),
    ).normalize();
    const shade = .42 + .27 * Math.sin(x * .33 + z * .22) + .09 * Math.cos(z * .62 - x * .27);
    const color = grass.clone().lerp(grove, shade)
      .lerp(rock, smooth(1 - normal.y, .12, .34) * smooth(y, 1.2, 2.9) * .78)
      .lerp(riverbank, 1 - smooth(Math.abs(z - creekZ(x)), creekWidth(x) * .87, creekWidth(x) + .36))
      .lerp(distant, smooth(Math.hypot(x, z), 11, 31) * .73);
    const surface = { normal, color };
    attributes.set(point, surface);
    return surface;
  }
  const meshes = [];
  const chunk = 16;
  for (let j = -groundLimit; j < groundLimit; j += chunk) {
    for (let i = -groundLimit; i < groundLimit; i += chunk) {
      const points = [], normals = [], colors = [], uvs = [];
      for (let dz = 0; dz < chunk; dz++) {
        for (let dx = 0; dx < chunk; dx++) {
          for (const face of groundFaces(i + dx, j + dz)) {
            for (const point of face) {
              const { normal, color } = surfaceAt(point);
              points.push(...point);
              normals.push(normal.x, normal.y, normal.z);
              colors.push(color.r, color.g, color.b);
              uvs.push(point[0] / pathSpan.x + .5, .5 - point[2] / pathSpan.z);
            }
          }
        }
      }
      const geo = new T.BufferGeometry();
      geo.setAttribute('position', new T.Float32BufferAttribute(points, 3));
      geo.setAttribute('normal', new T.Float32BufferAttribute(normals, 3));
      geo.setAttribute('color', new T.Float32BufferAttribute(colors, 3));
      geo.setAttribute('uv', new T.Float32BufferAttribute(uvs, 2));
      geo.computeBoundingBox();
      const mesh = new T.Mesh(geo, material);
      mesh.receiveShadow = true;
      parent.add(mesh);
      meshes.push(mesh);
    }
  }
  return meshes;
}

function roof(parent, w, d, eave, ridge, color, damageable = false) {
  const halfZ = d / 2 + .215, halfX = w / 2 + .205;
  const columns = 16, rows = 12;
  const width = v => halfX * (.965 + .035 * v);
  const curve = (u, v, side) => [
    u * width(v),
    eave + ridge * (1 - v) ** 1.64 + .044 * v ** 7 + .116 * Math.abs(u) ** 7 * (.46 + .54 * v),
    side * v * halfZ,
  ];
  const lower = ([x, y, z]) => [x, y - .067, z];
  const rim = [];
  for (const side of [-1, 1]) {
    const panels = damageable ? 4 : 1, panelColumns = columns / panels;
    for (let panel = 0; panel < panels; panel++) {
      const points = [], indices = [];
      for (let row = 0; row <= rows; row++) {
        for (let col = 0; col <= panelColumns; col++) {
          points.push(...curve((panel * panelColumns + col) * 2 / columns - 1, row / rows, side));
          if (row === rows || col === panelColumns) continue;
          const a = row * (panelColumns + 1) + col, b = a + 1, d = a + panelColumns + 1, c = d + 1;
          if (side > 0) indices.push(a, d, b, b, d, c);
          else indices.push(a, b, d, b, c, d);
        }
      }
      if (damageable) {
        const count = points.length / 3, top = indices.slice(), boundary = new Map();
        for (let i = 0; i < count; i++) points.push(points[i * 3], points[i * 3 + 1] - .067, points[i * 3 + 2]);
        for (let i = 0; i < top.length; i += 3) {
          const triangle = top.slice(i, i + 3);
          indices.push(triangle[2] + count, triangle[1] + count, triangle[0] + count);
          for (let edge = 0; edge < 3; edge++) {
            const a = triangle[edge], b = triangle[(edge + 1) % 3], id = `${Math.min(a, b)},${Math.max(a, b)}`;
            if (boundary.has(id)) boundary.delete(id);
            else boundary.set(id, [a, b]);
          }
        }
        for (const [a, b] of boundary.values()) indices.push(b, a, a + count, b, a + count, b + count);
      }
      const surface = new T.BufferGeometry();
      surface.setAttribute('position', new T.Float32BufferAttribute(points, 3));
      surface.setIndex(indices);
      surface.computeVertexNormals();
      const mesh = piece(parent, surface, color, 0, 0, 0);
      if (damageable) {
        mesh.userData.breakStage = (side > 0 ? [1, 2, 3, 3] : [3, 2, 4, 4])[panel];
        mesh.userData.roofPanel = { side, panel };
      }
    }

    for (let col = 0; col < columns; col++) {
      const a = curve(col * 2 / columns - 1, 1, side);
      const b = curve((col + 1) * 2 / columns - 1, 1, side);
      if (side > 0) quad(rim, b, a, lower(a), lower(b));
      else quad(rim, a, b, lower(b), lower(a));
    }
    for (const edge of [-1, 1]) {
      for (let row = 0; row < rows; row++) {
        const a = curve(edge, row / rows, side), b = curve(edge, (row + 1) / rows, side);
        if (side === edge) quad(rim, a, b, lower(b), lower(a));
        else quad(rim, b, a, lower(a), lower(b));
      }
    }
  }
  if (!damageable) section(parent, rim, '#4d6265');

  let gables = [];
  for (const edge of [-1, 1]) {
    const x = edge * w / 2;
    const wallTop = z => curve(x / width(Math.abs(z) / halfZ), Math.abs(z) / halfZ, Math.sign(z))[1] - .035;
    for (let i = 0; i < 16; i++) {
      const z = d * (i / 16 - .5), next = z + d / 16;
      const a = [x, eave - .095, z], b = [x, eave - .095, next];
      const c = [x, wallTop(next), next], e = [x, wallTop(z), z];
      if (edge > 0) quad(gables, a, e, c, b);
      else quad(gables, a, b, c, e);
    }
    if (damageable) {
      const gable = section(parent, gables, '#f0e7d0');
      gable.userData.breakStage = edge < 0 ? 3 : 4;
      gables = [];
    }
  }
  if (!damageable) section(parent, gables, '#f0e7d0');

  const ridgeColor = '#4c6064';
  const ridgeBeam = softBox(parent, ridgeColor, 0, eave + ridge + .029, 0, w + .42, .113, .115, .047);
  if (damageable) ridgeBeam.userData.breakStage = 3;
  for (const edge of [-1, 1]) {
    const tip = softBox(parent, ridgeColor, edge * (halfX - .019), eave + ridge + .079, 0, .225, .087, .11, .032);
    tip.rotation.z = edge * .24;
    if (damageable) tip.userData.breakStage = 3;
  }
}

const buildings = [
  { x: 1.07, z: -2.35, w: 2.52, d: 1.47, h: .98, angle: -.11, hall: true },
  { x: -2.79, z: -2.56, w: 1.48, d: 1.12, h: .78, angle: .18 },
  { x: 4.05, z: -2.42, w: 1.68, d: 1.12, h: .83, angle: -.24 },
  { x: 4.36, z: .18, w: 1.40, d: .92, h: .67, angle: -.42 },
  { x: 1.54, z: -4.79, w: 1.48, d: 1.02, h: .72, angle: .04 },
  { x: -2.89, z: .19, w: 1.43, d: .93, h: .73, angle: .32 },
].map(b => ({ ...b, w: b.w * 1.08, d: b.d * 1.08, h: b.h * 1.08, floor: naturalHeight(b.x, b.z) }));

const bridgeNorth = groundHeight(0, bridgeStart) + .014;
const bridgeSouth = groundHeight(0, bridgeEnd) + .014;

function house(parent, { x, z, w, d, h, hall, angle, floor }) {
  const group = new T.Group();
  group.position.set(x, floor, z);
  group.rotation.y = angle;
  parent.add(group);
  const wall = hall ? '#f7eedb' : '#f0e7d0';
  softBox(group, '#ada58e', 0, -.038, 0, w + .12, .235, d + .13, .045);
  const walls = new T.Group();
  group.add(walls);
  if (hall) {
    const thickness = .15, sideWidth = (w - .62) / 2;
    function wallPanel(x, z, width, depth, stage) {
      box(walls, wall, x, .073 + .14, z, width, .28, depth);
      const upper = softBox(walls, wall, x, .073 + .28 + (h - .28) / 2, z,
        width, h - .28, depth, .022);
      upper.userData.breakStage = stage;
    }
    for (let i = 0; i < 3; i++) {
      wallPanel((i - 1) * w / 3, -d / 2 + thickness / 2, w / 3, thickness, i === 0 ? 3 : 4);
    }
    for (const side of [-1, 1]) {
      for (let i = 0; i < 3; i++) {
        wallPanel(side * (w / 2 - thickness / 2), (i - 1) * d / 3, thickness, d / 3,
          side < 0 ? [2, 3, 4][i] : [3, 4, 4][i]);
      }
      wallPanel(side * (.31 + sideWidth / 2), d / 2 - thickness / 2,
        sideWidth, thickness, side < 0 ? 2 : 3);
    }
    const header = box(walls, wall, 0, .081 + .60 + (h - .60) / 2, d / 2 - thickness / 2,
      .63, h - .60, thickness);
    header.userData.breakStage = 3;
    box(walls, '#333c30', 0, .13, 0, w - .30, .035, d - .25, false);
  } else softBox(walls, wall, 0, h / 2 + .073, 0, w, h, d, .052);
  if (hall) {
    for (const sign of [-1, 1]) {
      const cross = box(group, '#a27c60', 0, h + .037, sign * d / 2, w + .055, .10, .10);
      const side = box(group, '#a27c60', sign * w / 2, h + .037, 0, .10, .10, d);
      cross.userData.breakStage = sign < 0 ? 4 : 3;
      side.userData.breakStage = sign < 0 ? 3 : 4;
    }
  } else softBox(group, '#a27c60', 0, h + .037, 0, w + .055, .10, d + .045, .021);
  const roofGroup = new T.Group();
  group.add(roofGroup);
  roof(roofGroup, w, d, h + .13, hall ? .60 : .44, hall ? '#566c71' : '#617578', hall);
  if (hall) {
    const frame = new T.Group();
    frame.name = '基地木屋架';
    group.add(frame);
    const halfZ = d / 2 + .215, halfX = w / 2 + .205;
    function rafterHeight(x, z) {
      const v = Math.abs(z) / halfZ, u = x / (halfX * (.965 + .035 * v));
      return h + .13 + .60 * (1 - v) ** 1.64 + .044 * v ** 7
        + .116 * Math.abs(u) ** 7 * (.46 + .54 * v) - .12;
    }
    for (const x of [-w * .37, 0, w * .37]) {
      for (const side of [-1, 1]) {
        for (let segment = 0; segment < 4; segment++) {
          const za = side * d * .48 * segment / 4, zb = side * d * .48 * (segment + 1) / 4;
          const from = new T.Vector3(x, rafterHeight(x, za), za);
          const to = new T.Vector3(x, rafterHeight(x, zb), zb);
          const delta = to.clone().sub(from);
          const beam = box(frame, '#76583e', x, (from.y + to.y) / 2, (za + zb) / 2, .055, delta.length(), .055);
          beam.name = '屋内曲线椽木';
          beam.quaternion.setFromUnitVectors(new T.Vector3(0, 1, 0), delta.normalize());
          beam.userData.breakStage = x < 0 ? 3 : 4;
        }
      }
      const tie = box(frame, '#76583e', x, h + .04, 0, .065, .055, d * .95);
      tie.userData.breakStage = x < 0 ? 3 : 4;
    }
    for (const x of [-w * .44, w * .44]) for (const z of [-d * .4, d * .4]) {
      const post = box(frame, '#76583e', x, h / 2 + .06, z, .075, h, .075);
      post.userData.breakStage = 4;
    }
  }
  const doorHeight = hall ? .60 : .49;
  const door = new T.Group(), planks = [];
  const doorWidth = hall ? .56 : .32;
  door.position.set(-doorWidth / 2, .081, d / 2 + .053);
  group.add(door);
  for (let i = 0; i < 5; i++) {
    planks.push(box(door, i % 2 ? '#835438' : '#8f6141', (i + .5) * doorWidth / 5,
      doorHeight / 2, 0, doorWidth / 5 - .006, doorHeight, .052));
  }
  for (const y of [.12, doorHeight - .12]) box(door, '#66513b', doorWidth / 2, y, .035, doorWidth, .035, .025);
  const lintel = box(group, '#b4855b', 0, .081 + doorHeight, d / 2 + .053, hall ? .65 : .40, .075, .11);
  if (hall) lintel.userData.breakStage = 3;
  for (const sign of [-1, 1]) {
    const window = box(group, '#725b47', sign * w * .30, h * .57, d / 2 + .021, .19, .24, .045);
    const bar = box(group, '#b19572', sign * w * .30, h * .57, d / 2 + .048, .026, .21, .022);
    if (hall) {
      window.userData.breakStage = sign < 0 ? 2 : 3;
      bar.userData.breakStage = sign < 0 ? 2 : 3;
      const post = box(group, '#906246', sign * w * .44, h * .51 + .05, d / 2 + .106, .075, h, .075);
      post.userData.breakStage = 4;
    }
  }
  softBox(group, '#c6bba3', 0, .016, d / 2 + .15, hall ? .95 : .54, .135, .36, .025);
  if (hall) softBox(group, '#c8bda4', 0, -.007, d / 2 + .34, .90, .092, .23, .023);
  return { group, walls, roof: roofGroup, door, planks, spec: { x, z, w, d, h, angle, floor } };
}

const trees = [
  [-4.15, -5.73, 1.36, true], [-5.88, -6.54, .74], [-4.81, -7.36, .68], [-8.77, -5.03, .80],
  [.29, -7.0, .97], [3.39, -4.72, .74], [5.62, -4.17, .68], [6.31, -1.79, .79],
  [6.93, .38, 1.43], [8.30, 1.67, .67], [5.98, 2.43, .75], [-5.94, 1.87, 1.47],
  [-4.62, 3.43, .69], [3.75, 7.29, .89], [-3.92, 6.67, 1.24], [-8.13, -1.91, .79],
];

const grassPatches = [
  [-4.82, 2.95, .71, 7], [-3.87, 2.01, .53, 3], [-4.38, .32, .58, 0],
  [-2.61, 3.59, .68, 6], [-1.66, 3.83, .48, 4], [1.76, 3.68, .49, 5],
  [3.12, 4.12, .50, 2], [4.36, 3.65, .66, 6], [5.71, 3.22, .76, 3], [6.63, 2.05, .60, 0],
  [-4.78, -1.94, .75, 2], [-3.72, -1.28, .48, 4], [-2.94, -.65, .50, 5],
  [1.38, -.56, .42, 4], [2.21, -.22, .52, 3], [5.53, -.11, .63, 6],
  [5.27, -3.60, .68, 0], [-5.05, -2.70, .54, 3], [-6.37, -2.45, .80, 0],
  [-3.42, 6.63, .62, 5], [-2.51, 7.14, .61, 5], [1.36, 6.90, .56, 4],
  [2.33, 7.34, .64, 7], [4.23, 7.48, .68, 2], [-5.13, 7.87, .85, 0], [6.91, 5.00, .76, 0],
  [-8.16, 1.46, .95, 1], [-7.31, .56, .78, 0], [-5.84, -.56, .82, 2], [-5.24, .81, .66, 2],
  [-5.01, 5.64, .73, 0], [-3.02, 5.81, .66, 2], [2.87, 6.53, .67, 0], [4.38, 5.96, .68, 2],
  [6.44, 4.31, .79, 1], [7.31, 2.96, .88, 0], [8.22, 2.49, .84, 2], [8.77, -.27, .90, 0],
  [4.39, -5.60, .79, 0], [-4.36, -7.94, .78, 1], [-2.55, 8.76, .97, 2], [3.31, 8.63, .83, 1],
  [-11.70, 7.63, 1.08, 2], [-13.28, 9.92, 1.14, 0], [-14.60, 8.37, .88, 0],
  [-15.12, 1.55, .94, 1], [-13.98, 3.32, 1.05, 0], [-11.29, 11.66, .97, 3],
  [-5.87, 13.53, 1.10, 0], [-4.20, 15.10, .89, 1], [7.65, 11.78, 1.14, 2],
  [9.41, 13.68, .92, 0], [12.66, 6.87, 1.06, 0], [14.33, 7.91, .91, 2],
  [15.71, 5.31, .97, 0], [13.92, 2.31, 1.04, 1], [15.22, -1.46, 1.08, 0],
  [16.28, -4.17, .93, 0], [13.92, -5.83, .98, 2], [8.22, -11.71, .92, 0],
  [5.76, -13.19, 1.04, 1], [-10.64, -10.83, .89, 0], [-12.82, -8.77, 1.08, 2],
];

const tallerGrass = [
  [-6.71, -1.48, .75], [-5.46, -2.47, .66], [-7.76, -2.86, .62], [-6.77, 2.55, .76],
  [-4.12, 2.98, .57], [-3.86, 5.98, .53], [-1.77, 6.26, .48], [2.59, 6.25, .48],
  [4.87, 4.64, .61], [6.01, 3.16, .66], [7.31, 1.18, .80], [6.92, -1.94, .69],
  [4.92, -5.65, .80], [8.63, -3.40, .79], [-3.84, -8.36, .72], [4.56, 8.57, .81],
  [-12.60, 8.85, .78], [-14.75, 2.56, .69], [-10.76, 12.30, .73],
  [-5.18, 14.62, .76], [8.42, 12.61, .72], [13.51, 7.15, .78],
  [15.36, 3.61, .68], [15.81, -2.63, .74], [6.62, -12.48, .69],
  [-11.81, -9.59, .71],
];

const yellowFlowers = [
  [-5.26, 2.18, .59, 24], [-4.72, 1.71, .39, 11], [-3.16, .07, .56, 21], [-2.87, -3.88, .59, 18],
  [-2.26, 3.48, .49, 19], [-2.22, 6.76, .69, 25], [1.29, 6.48, .47, 19],
  [2.63, 2.81, .60, 22], [3.19, 3.39, .37, 10], [5.18, .95, .55, 20], [6.66, 2.47, .66, 22],
  [7.93, -1.75, .58, 16], [-7.08, 1.23, .56, 16],
];

function bridge(parent) {
  const count = 20;
  const span = (bridgeEnd - bridgeStart) / count;
  const rails = [-1, 1].map(side => side * (bridgeWidth / 2 - .060));
  for (let i = 0; i < count; i++) {
    const front = bridgeStart + span * i, back = front + span;
    const z = (front + back) / 2, y = deckHeight(z);
    const tilt = Math.atan2(deckHeight(front) - deckHeight(back), span);
    softBox(parent, i % 3 ? '#b79a73' : '#c2a47e', 0, y - .034, z, bridgeWidth, .068, span * 1.015, .009).rotation.x = tilt;
    if (i % 5 === 0 || i === count - 1) {
      for (const x of rails) softBox(parent, '#907453', x, y + .108, z, .084, .30, .085, .019);
    }
  }
  for (const x of rails) {
    const line = new T.CatmullRomCurve3(Array.from({ length: 13 }, (_, i) => {
      const z = mix(bridgeStart, bridgeEnd, i / 12);
      return new T.Vector3(x, deckHeight(z) + .239, z);
    }));
    piece(parent, new T.TubeGeometry(line, 24, .029, 8, false), '#a1815d', 0, 0, 0);
  }
  for (const [z, y, side] of [[bridgeStart, bridgeNorth, -1], [bridgeEnd, bridgeSouth, 1]]) {
    softBox(parent, '#b8ae92', 0, y - .063, z + .064 * side, bridgeWidth + .11, .138, .258, .024);
  }
}

function details(parent, stamps) {
  const occupied = [];
  function place(rock, shadow) {
    const bounds = new T.Box3().setFromObject(rock, true).expandByScalar(.035);
    if (occupied.some(previous => previous.intersectsBox(bounds))) {
      rock.removeFromParent();
      return;
    }
    occupied.push(bounds);
    stamps.push(shadow);
  }
  const outcrops = [
    [-7.71, -3.76, 1.32, 1.17, .84, .25], [-5.42, -3.60, .94, 1.35, .78, .07],
    [-6.56, -2.18, .82, .78, .49, -.31],
    [7.40, -2.91, .74, .76, .62, -.08], [8.23, -4.36, .94, 1.00, .64, -.33],
  ];
  for (const [i, [x, z, sx, sy, sz, turn]] of outcrops.entries()) {
    const y = groundHeight(x, z);
    const rock = tintedProp(parent, ledge, stone[i % 2], x, y + sy * .18, z, sx, sy, sz);
    rock.rotation.y = turn;
    place(rock, [x, z + .16, sx * 1.17, sz * 1.35]);
  }
  const scree = [[-6.25, -4.14, .73], [-4.93, -2.82, .52], [-7.29, -2.60, .68], [-7.62, -1.44, .56],
    [6.24, -5.52, .72], [5.82, -4.64, .59], [7.87, 3.01, .59], [-6.27, 7.73, .64], [4.87, 7.31, .46],
    [10.35, 2.27, .61], [-10.27, .63, .64], [6.1, 9.87, .67]];
  for (const [x, z, radius] of scree) {
    for (let i = 0; i < 4; i++) {
      const dx = (noise(i, x) - .5) * radius * 1.8, dz = (noise(i, z) - .5) * radius * 1.55;
      const size = radius * (.22 + noise(i + 6, x) * .43);
      const rock = tintedProp(parent, boulder, stone[i % 2],
        x + dx, groundHeight(x + dx, z + dz) + size * .095, z + dz, size, size * (.52 + noise(i, z) * .37), size * .82);
      rock.rotation.set(i * .14, i * 1.42, -.20);
      place(rock, [x + dx, z + dz + .04, size * 1.18, size * .96]);
    }
  }
  return occupied;
}

function bakeProps(props, parent) {
  props.updateMatrixWorld(true);
  const groups = new Map();
  props.traverse(mesh => {
    if (!mesh.isMesh) return;
    const id = `${mesh.material.id}-${mesh.castShadow}`;
    if (!groups.has(id)) groups.set(id, { material: mesh.material, shadow: mesh.castShadow, parts: [] });
    const copy = mesh.geometry.index ? mesh.geometry.toNonIndexed() : mesh.geometry.clone();
    copy.deleteAttribute('uv');
    tintGeometry(copy, mesh.userData.tint);
    copy.applyMatrix4(mesh.matrixWorld);
    if (mesh.userData.canopyRoot) canopyGeometry(copy, mesh.userData.canopyRoot);
    groups.get(id).parts.push(copy);
  });
  const meshes = [];
  for (const { material, shadow, parts } of groups.values()) {
    const mesh = new T.Mesh(mergeGeometries(parts), material);
    mesh.castShadow = shadow;
    mesh.receiveShadow = true;
    parent.add(mesh);
    meshes.push(mesh);
    parts.forEach(part => part.dispose());
  }
  return meshes;
}

export function buildTiles(treeSites = trees) {
  const tiles = new Map();
  const edge = .33 * tileSize;
  // Keep deployment around the village, the road entrances and both bridgeheads.
  const columnsByRow = [[-1, 1], [-3, 3], [-4, 4], [-4, 4], [-4, 4], [-4, 4],
    [-4, 4], [-3, 4], [-2, 2], [-1, 1], [-2, 2], [-1, 1]];
  for (let row = -5; row <= 6; row++) {
    const z = row * tileSize;
    const [left, right] = columnsByRow[row + 5];
    for (let column = left; column <= right; column++) {
      const x = column * tileSize;
      if (buildings.some(b => foundationDistance(b, x, z) < .51)) continue;
      if (treeSites.some(([tx, tz]) => Math.hypot(x - tx, z - tz) < .60)) continue;
      if (!(column === 0 && z >= bridgeStart && z <= bridgeEnd)) {
        const rim = [[0, 0], [-edge, -edge], [-edge, edge], [edge, -edge], [edge, edge]]
          .map(([dx, dz]) => groundHeight(x + dx, z + dz));
        if (Math.min(...rim) <= waterY + .025 || Math.max(...rim) - Math.min(...rim) > .59 * tileSize) continue;
      }
      tiles.set(key(column, row), { x, z, column, row, neighbors: [] });
    }
  }
  for (const tile of tiles.values()) {
    tile.neighbors = sides.map(([dx, dz]) => tiles.get(key(tile.column + dx, tile.row + dz)))
      .filter(other => other && Math.abs(height(tile.x, tile.z) - height(other.x, other.z)) < .65 * tileSize);
  }
  const origin = tiles.get(key(1, 0)) ?? tiles.get(key(0, 0));
  if (origin) {
    const connected = new Set([origin]), queue = [origin];
    for (let i = 0; i < queue.length; i++) for (const next of queue[i].neighbors) {
      if (!connected.has(next)) { connected.add(next); queue.push(next); }
    }
    for (const [id, tile] of tiles) if (!connected.has(tile)) tiles.delete(id);
  }
  return tiles;
}

export function buildWorld(scene) {
  const land = new T.Group();
  scene.add(land);
  const terrain = buildTerrain(land);
  const animateWater = buildCreek(land, groundHeight, creekZ, waterY, groundAxis(groundLimit) - .16);
  const stamps = [];
  const scenery = new T.Group();
  const rockBounds = details(scenery, stamps);

  const obstacles = new T.Group();
  let home;
  for (const building of buildings) {
    const model = house(obstacles, building);
    if (building.hall) home = model;
  }
  const occupied = [...rockBounds, ...obstacles.children.map(home => new T.Box3().setFromObject(home, true))];
  const placed = [];
  function placeTree(parent, spec, distant = false) {
    const [x, z, size] = spec;
    if (distant && (onTrack(x, z, size * .39) || placed.some(([tx, tz, scale]) =>
      Math.hypot(x - tx, z - tz) < (size + scale) * .48))) return false;
    const tree = addTree(parent, groundHeight, spec, distant);
    const volume = new T.Box3().setFromObject(tree);
    const nearby = occupied.filter(box => box.intersectsBox(volume));
    if (nearby.length) {
      const partBounds = new T.Box3();
      if (tree.children.some(part => {
        partBounds.setFromObject(part, true);
        return nearby.some(box => box.intersectsBox(partBounds));
      })) {
        tree.removeFromParent();
        return false;
      }
    }
    placed.push(spec);
    stamps.push([x + .08 * size, z, .79 * size, .63 * size]);
    return true;
  }
  const playableTrees = trees.filter(spec => placeTree(obstacles, spec));
  home.group.removeFromParent();
  land.add(home.group);
  const blockers = bakeProps(obstacles, land);
  home.group.traverse(mesh => { if (mesh.isMesh) blockers.push(mesh); });

  const crossing = new T.Group();
  bridge(crossing);
  const deck = bakeProps(crossing, land);

  const treeLineRadius = 19;
  for (const [cx, cz, spread, count] of [
    [-9.3, -5.9, 2.9, 22], [7.3, -7.4, 3.7, 26], [-11.5, 3.8, 3.4, 20],
    [9.5, 6.4, 3.0, 22], [-6.3, 11.0, 3.8, 20], [3.1, 12.4, 3.1, 17],
    [-15.0, -11.9, 4.5, 27], [-3.6, -15.0, 4.2, 20], [12.8, -12.4, 4.5, 24],
    [11.15, -.55, 2.35, 11], [-10.46, .61, 1.88, 8], [1.20, -10.8, 2.45, 8],
    [6.67, 10.57, 2.04, 8],
    [-12.9, 9.6, 2.6, 12], [-15.9, 2.1, 2.5, 10], [-5.5, 15.0, 2.0, 9],
    [8.9, 12.8, 2.4, 10], [14.2, 5.4, 2.6, 12], [16.0, -2.7, 2.3, 11],
    [6.8, -13.3, 2.5, 8], [-11.9, -10.1, 2.4, 7],
  ]) {
    for (let i = 0; i < count; i++) {
      const x = cx + (noise(i, cx) - .5) * 2 * spread;
      const z = cz + (noise(i, cz) - .5) * 1.5 * spread;
      if (Math.hypot(x, z) > treeLineRadius) continue;
      if ((Math.abs(x) < 7 && z > -7.5 && z < 8.5) || Math.abs(z - creekZ(x)) < 1.25) continue;
      const size = .54 + noise(x, z) ** 1.36 * .83;
      placeTree(scenery, [x, z, size, noise(z, x) < .06], true);
    }
  }
  bakeProps(scenery, land);
  groundShadows(land, stamps, groundHeight);
  const animateMeadow = meadow(land, { grass: grassPatches, tussocks: tallerGrass, yellow: yellowFlowers }, (x, z) => {
    const y = groundHeight(x, z);
    const onRock = rockBounds.some(box => x >= box.min.x && x <= box.max.x && z >= box.min.z && z <= box.max.z);
    return y > waterY + .057 && !onRock && !onTrack(x, z, .045)
      && !buildings.some(b => foundationDistance(b, x, z) < .39) ? y : null;
  });
  const canServiceWalk = (x, z) => height(x, z) > waterY + .05
    && !buildings.some(building => foundationDistance(building, x, z) < .20)
    && !playableTrees.some(([tx, tz, size]) => Math.hypot(x - tx, z - tz) < .19 * size + .12)
    && !rockBounds.some(bounds => x > bounds.min.x - .12 && x < bounds.max.x + .12
      && z > bounds.min.z - .12 && z < bounds.max.z + .12);
  return { terrain, blockers, deck, home, tiles: buildTiles(playableTrees), canServiceWalk,
    animateWater, animateMeadow, animateCanopy };
}
