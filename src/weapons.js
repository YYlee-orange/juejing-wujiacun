import * as T from 'three';
import { box, piece } from './world.js';

const metal = '#b9beb0', edge = '#e0dfc7', wood = '#8e6a45';

export function createFarmTool(kind) {
  const group = new T.Group();
  group.name = ['镰刀', '锄头', '干草叉'][kind];
  if (kind === 1) {
    piece(group, new T.CylinderGeometry(.014, .018, .66, 7), wood, 0, .115, 0, 1, 1, 1, false);
  } else box(group, wood, 0, .13, 0, .028, .53, .028, false);
  if (kind === 0) {
    const blade = new T.Shape().moveTo(0, .38).quadraticCurveTo(.27, .49, .23, .23)
      .quadraticCurveTo(.19, .40, .005, .335);
    const geometry = new T.ExtrudeGeometry(blade, { depth: .018, bevelEnabled: false, curveSegments: 12 });
    piece(group, geometry, metal, 0, 0, -.009, 1, 1, 1, false);
    box(group, '#b3a17a', 0, .335, 0, .052, .055, .043, false);
  } else if (kind === 1) {
    // A broad, thin iron plate sits across the shaft. The shaft enters its upper back.
    const socket = piece(group, new T.CylinderGeometry(.027, .024, .065, 6),
      '#46534e', 0, .447, 0, 1, 1, 1, false);
    socket.name = '锄头铁箍';
    function plate(start, end, color, name) {
      const width = z => .09 + (z + .045) / .25 * .015;
      const outline = new T.Shape().moveTo(-width(start), start).lineTo(width(start), start)
        .lineTo(width(end), end).lineTo(-width(end), end).closePath();
      const geometry = new T.ExtrudeGeometry(outline, { depth: .012, bevelEnabled: true,
        bevelThickness: .0015, bevelSize: .0015, bevelSegments: 1, steps: 1 });
      geometry.rotateX(Math.PI / 2 - .12);
      const mesh = piece(group, geometry, color, 0, .477, 0, 1, 1, 1, false);
      mesh.name = name;
    }
    plate(-.045, .175, '#53605b', '宽薄铁锄板');
    plate(.175, .205, '#859084', '锄板刃口');
  } else {
    box(group, metal, 0, .37, 0, .22, .035, .032, false);
    for (const x of [-.09, 0, .09]) {
      piece(group, new T.ConeGeometry(.017, .18, 6), edge, x, .455, 0, 1, 1, 1, false);
    }
  }
  group.position.set(.125, kind === 1 ? .225 : .19, .065);
  group.rotation.set(.22, 0, -.22);
  return group;
}

export function createHammer() {
  const group = new T.Group();
  group.name = '工程师小锤';
  piece(group, new T.CylinderGeometry(.012, .014, .27, 7), '#9b764b', 0, .105, 0, 1, 1, 1, false);
  box(group, '#78877e', 0, .245, 0, .17, .072, .070, false);
  box(group, '#9ba69a', -.080, .245, 0, .019, .077, .074, false);
  box(group, '#63746b', .080, .245, 0, .017, .070, .068, false);
  group.position.set(.125, .20, .065);
  group.rotation.set(.22, 0, -.22);
  return group;
}
