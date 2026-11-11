import * as T from 'three';
import { broadCrown, distantCrown, tintedProp, tones, uprightCrown } from './scenery.js';

const bark = [
  new T.MeshLambertMaterial({ color: '#806548' }),
  new T.MeshLambertMaterial({ color: '#8a6e4e' }),
  new T.MeshLambertMaterial({ color: '#795d42' }),
];
const leaves = [
  tones('#546f3e', '#819d50', '#b0c576', true),
  tones('#50704a', '#789650', '#a5be73', true),
  tones('#647a42', '#8da753', '#bac877', true),
];
const gold = tones('#8a7837', '#c1a54f', '#e6ce78', true);
const crownShapes = [broadCrown, uprightCrown];

// Each tree is described by tapering limbs and the canopies they support.
const forms = [
  {
    trunk: [[0, -.075, 0, .106], [-.09, .26, .01, .083], [-.16, .51, 0, .061],
      [-.30, .81, -.07, .047], [-.43, 1.09, -.10, .027], [-.44, 1.34, -.09, .013]],
    limbs: [
      [[-.18, .54, -.02, .057], [.08, .69, .025, .039], [.42, .73, .09, .023], [.65, .91, .16, .012]],
      [[-.31, .82, -.06, .042], [-.07, .96, -.19, .027], [.24, 1.15, -.25, .012]],
      [[-.41, 1.02, -.09, .028], [-.58, 1.10, .10, .012]],
    ],
    crowns: [
      [-.45, 1.39, -.13, .40, .44, .38, 1], [.65, 1.03, .16, .38, .40, .34, 1],
      [.22, 1.25, -.25, .38, .37, .37, 0], [-.62, 1.19, .12, .25, .29, .23, 1],
      [.47, 1.21, .10, .23, .26, .25, 1],
    ],
  },
  {
    trunk: [[0, -.075, 0, .089], [-.04, .32, .01, .068], [-.095, .59, -.03, .049],
      [-.055, .89, -.05, .036], [-.06, 1.20, -.045, .021], [-.10, 1.49, -.055, .012]],
    limbs: [
      [[-.07, .49, -.02, .048], [.13, .73, .028, .030], [.38, .94, .09, .014]],
      [[-.09, .70, -.03, .036], [-.30, .85, .08, .023], [-.52, .96, .16, .011]],
      [[-.06, 1.06, -.043, .022], [-.32, 1.13, -.21, .011]],
    ],
    crowns: [
      [-.10, 1.54, -.055, .67, .55, .49, 0], [.38, 1.10, .09, .43, .43, .37, 0],
      [-.51, 1.05, .16, .21, .23, .20, 0], [-.32, 1.24, -.21, .27, .28, .23, 1],
    ],
  },
  {
    trunk: [[0, -.095, 0, .159], [.018, .18, -.01, .122], [-.022, .44, 0, .098],
      [.04, .75, -.02, .072], [.09, 1.02, -.05, .046], [.07, 1.38, -.09, .017]],
    limbs: [
      [[.01, .55, 0, .078], [-.24, .75, .08, .053], [-.52, .95, .12, .022]],
      [[.04, .73, -.02, .072], [.30, .97, -.02, .043], [.54, 1.16, .015, .018]],
      [[-.01, .51, .055, .047], [.24, .69, .27, .016]],
    ],
    crowns: [
      [.01, 1.48, -.11, .58, .53, .51, 1], [-.51, 1.13, .14, .43, .40, .36, 0],
      [.52, 1.29, .015, .43, .46, .37, 0], [.22, .82, .29, .25, .27, .24, 1],
      [.27, 1.54, -.16, .39, .35, .40, 1],
    ],
  },
];

function branch(nodes, material, sides) {
  const center = nodes.map(([x, y, z]) => new T.Vector3(x, y, z));
  const points = [], indices = [];
  const axis = new T.Vector3(), across = new T.Vector3(1, 0, 0), up = new T.Vector3();
  for (let row = 0; row < center.length; row++) {
    axis.subVectors(center[Math.min(row + 1, center.length - 1)], center[Math.max(0, row - 1)]).normalize();
    across.addScaledVector(axis, -across.dot(axis));
    if (across.lengthSq() < .001) across.set(0, 0, 1).addScaledVector(axis, -axis.z);
    across.normalize();
    up.crossVectors(axis, across).normalize();
    for (let i = 0; i < sides; i++) {
      const angle = (i + .23) * Math.PI * 2 / sides;
      const radius = nodes[row][3] * (1 + .095 * Math.sin(i * 1.98));
      const p = center[row].clone().addScaledVector(across, radius * Math.cos(angle))
        .addScaledVector(up, radius * Math.sin(angle));
      points.push(p.x, p.y, p.z);
      if (row === center.length - 1) continue;
      const a = row * sides + i, b = row * sides + (i + 1) % sides;
      indices.push(a, b, a + sides, b, b + sides, a + sides);
    }
  }
  const geometry = new T.BufferGeometry();
  geometry.setAttribute('position', new T.Float32BufferAttribute(points, 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  const mesh = new T.Mesh(geometry, material);
  mesh.castShadow = true;
  return mesh;
}

const fraction = n => n - Math.floor(n);

export function addTree(parent, surface, [x, z, size, yellow], distant = false) {
  const seed = fraction(Math.sin(x * 31.12 + z * 71.76) * 8123.93);
  const variation = Math.floor(seed * forms.length);
  const shape = forms[variation];
  const rootY = surface(x, z);
  const angle = seed * Math.PI * 2;
  const tree = new T.Group();
  tree.position.set(x, rootY, z);
  tree.rotation.y = angle;
  tree.scale.setScalar(size);
  parent.add(tree);

  const sides = distant ? 5 : 7;
  tree.add(branch(shape.trunk, bark[variation], sides));
  for (const limb of shape.limbs.slice(0, distant ? 2 : shape.limbs.length)) {
    tree.add(branch(limb, bark[variation], sides));
  }
  for (const [i, [px, py, pz, sx, sy, sz, form]] of shape.crowns.entries()) {
    if (distant && i > 2) break;
    const palette = yellow && i % 4 !== 3 ? gold : leaves[(variation + Number(i % 3 === 1)) % leaves.length];
    const foliage = tintedProp(tree, distant ? distantCrown : crownShapes[form], palette,
      px, py, pz, sx, sy, sz);
    foliage.userData.canopyRoot = [x, rootY, z, size];
    foliage.rotation.set(.13 * Math.sin(i + seed), i * 1.81, .13 * Math.cos(i * 2 + seed));
  }

  if (!distant && variation !== 1) {
    const rootCount = variation === 2 ? 4 : 3;
    for (let i = 0; i < rootCount; i++) {
      const turn = i * Math.PI * 2 / rootCount + seed;
      const length = (variation === 2 ? .39 : .25) * (.8 + .32 * Math.sin(i * 2.31 + seed));
      const rx = Math.cos(turn) * length, rz = Math.sin(turn) * length;
      const ground = t => {
        const dx = rx * size * t, dz = rz * size * t;
        return (surface(x + dx * Math.cos(angle) + dz * Math.sin(angle),
          z - dx * Math.sin(angle) + dz * Math.cos(angle)) - rootY) / size;
      };
      tree.add(branch([[0, .105, 0, .078], [rx * .47, ground(.47) + .037, rz * .47, .052],
        [rx, ground(1) - .013, rz, .008]], bark[variation], 5));
    }
  }
  return tree;
}
