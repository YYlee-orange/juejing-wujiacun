import * as T from 'three';

const { clamp, smoothstep } = T.MathUtils;
const stoneOutline = [[1, -.21], [.71, .61], [.18, .88], [-.62, .70], [-.99, .16], [-.72, -.64], [-.17, -.86], [.62, -.69]];
const ridgeOutline = [[1, -.36], [.78, .53], [.16, .82], [-.61, .67], [-1, .19], [-.78, -.66], [.12, -.83]];
const leafOutline = [[.91, -.30], [.78, .55], [.15, .88], [-.59, .72], [-.93, .14], [-.69, -.63], [.09, -.88]];
const narrowOutline = [[.93, -.14], [.61, .66], [-.10, .83], [-.75, .47], [-.83, -.29], [-.31, -.78], [.46, -.73]];

// The straight spans between corners form broad faces. Each corner gets a short curved transition.
function beveledVolume(outline, levels, trim, slope, cornerSteps = 3) {
  const loop = [];
  const lerp = (a, b, t) => a.map((value, i) => T.MathUtils.lerp(value, b[i], t));
  for (let i = 0; i < outline.length; i++) {
    const corner = outline[i];
    const enter = lerp(corner, outline[(i + outline.length - 1) % outline.length], trim);
    const exit = lerp(corner, outline[(i + 1) % outline.length], trim);
    for (let j = 0; j <= cornerSteps; j++) {
      const t = j / cornerSteps;
      loop.push(lerp(lerp(enter, corner, t), lerp(corner, exit, t), t));
    }
  }
  const positions = [], faces = [];
  const count = loop.length;
  for (const [y, scale, drift] of levels) {
    for (const [x, z] of loop) positions.push(x * scale + drift, y + (x * .74 - z * .38) * slope, z * scale);
  }
  for (let row = 0; row < levels.length - 1; row++) {
    for (let i = 0; i < count; i++) {
      const a = row * count + i, b = row * count + (i + 1) % count;
      faces.push(a, a + count, b, b, a + count, b + count);
    }
  }
  const top = (levels.length - 1) * count, lowerCenter = positions.length / 3;
  const last = levels.at(-1);
  positions.push(levels[0][2], levels[0][0], 0, last[2], last[0] + .018, 0);
  for (let i = 0; i < count; i++) {
    const next = (i + 1) % count;
    faces.push(lowerCenter, i, next, lowerCenter + 1, top + next, top + i);
  }
  const geometry = new T.BufferGeometry();
  geometry.setAttribute('position', new T.Float32BufferAttribute(positions, 3));
  geometry.setIndex(faces);
  geometry.computeVertexNormals();
  return geometry;
}

function definedPlanes(geometry, weight) {
  const surface = geometry.toNonIndexed();
  const { position, normal } = surface.attributes;
  const a = new T.Vector3(), b = new T.Vector3(), c = new T.Vector3();
  const plane = new T.Vector3(), shade = new T.Vector3();
  for (let i = 0; i < position.count; i += 3) {
    a.fromBufferAttribute(position, i);
    b.fromBufferAttribute(position, i + 1).sub(a);
    c.fromBufferAttribute(position, i + 2).sub(a);
    plane.crossVectors(b, c).normalize();
    for (let j = i; j < i + 3; j++) {
      shade.fromBufferAttribute(normal, j).lerp(plane, weight).normalize();
      normal.setXYZ(j, shade.x, shade.y, shade.z);
    }
  }
  geometry.dispose();
  return surface;
}

export const boulder = definedPlanes(beveledVolume(stoneOutline, [
  [-.93, .63, .04], [-.49, .98, 0], [.05, 1, -.015], [.47, .79, -.12], [.66, .55, -.23],
], .09, .24, 2), .72);
export const ledge = definedPlanes(beveledVolume(ridgeOutline, [
  [-1.70, .81, .07], [-.71, 1, .03], [.30, .99, -.02], [.37, .98, -.035],
  [.58, .78, -.14], [.66, .64, -.16],
], .08, .19, 2), .66);
export const broadCrown = definedPlanes(beveledVolume(leafOutline, [
  [-.49, .66, .02], [-.35, .98, 0], [-.08, 1.02, .04], [.29, .82, -.02], [.48, .42, -.11],
], .14, .11, 2), .63);
export const uprightCrown = definedPlanes(beveledVolume(narrowOutline, [
  [-.72, .48, 0], [-.41, .92, 0], [.05, 1, .05], [.50, .76, .01], [.74, .36, -.13],
], .13, .13, 2), .59);
export const distantCrown = definedPlanes(beveledVolume(leafOutline, [
  [-.56, .62, 0], [-.28, .97, 0], [.16, 1, .04], [.52, .56, -.09],
], .13, .11, 1), .56);

const stonePaint = new T.MeshLambertMaterial({ vertexColors: true });
const leafPaint = new T.MeshLambertMaterial({ vertexColors: true });
const canopyTime = { value: 0 };
leafPaint.onBeforeCompile = shader => {
  shader.uniforms.canopyTime = canopyTime;
  shader.vertexShader = 'uniform float canopyTime;\n attribute vec3 leafSway;\n' + shader.vertexShader.replace(
    '#include <begin_vertex>', `#include <begin_vertex>
      float breezePhase = canopyTime * 1.02 - dot(leafSway.xy, vec2(.63, .44));
      float lean = .029 * sin(breezePhase) + .008 * sin(breezePhase * 1.84 + leafSway.x * .12);
      transformed.xz += leafSway.z * vec2(lean, lean * .48 + .009 * cos(breezePhase * .86));
    `,
  );
  shader.fragmentShader = shader.fragmentShader.replace('#include <opaque_fragment>',
    'outgoingLight = mix(outgoingLight, diffuseColor.rgb, .32);\n#include <opaque_fragment>');
};

export function animateCanopy(time) {
  canopyTime.value = time;
}

export function canopyGeometry(geometry, [x, y, z, size]) {
  const sway = [];
  const points = geometry.attributes.position;
  for (let i = 0; i < points.count; i++) {
    const aboveTrunk = (points.getY(i) - y) / size;
    sway.push(x, z, size * smoothstep(aboveTrunk, .60, 1.69));
  }
  geometry.setAttribute('leafSway', new T.Float32BufferAttribute(sway, 3));
}

export function tones(base, middle, tip, foliage = false) {
  return {
    colors: [new T.Color(base), new T.Color(middle), new T.Color(tip)],
    material: foliage ? leafPaint : stonePaint,
  };
}

export function tintedProp(parent, shape, palette, x, y, z, sx, sy, sz) {
  const mesh = new T.Mesh(shape, palette.material);
  mesh.position.set(x, y, z);
  mesh.scale.set(sx, sy, sz);
  mesh.castShadow = true;
  mesh.userData.tint = palette.colors;
  parent.add(mesh);
  return mesh;
}

export function tintGeometry(geometry, tones) {
  if (!tones) return;
  const local = geometry.attributes.position;
  const [base, middle, tip] = tones;
  const paint = [];
  const color = new T.Color();
  for (let i = 0; i < local.count; i++) {
    const rise = clamp((local.getY(i) + .76) / 1.52, 0, 1);
    const upper = smoothstep(rise, .49, .97);
    color.copy(base).lerp(middle, smoothstep(rise, .06, .51)).lerp(tip, upper);
    paint.push(color.r, color.g, color.b);
  }
  geometry.setAttribute('color', new T.Float32BufferAttribute(paint, 3));
}

export function groundShadows(parent, stamps, surface) {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 64;
  const ctx = canvas.getContext('2d');
  const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  gradient.addColorStop(0, '#fff');
  gradient.addColorStop(.33, '#c4c4c4');
  gradient.addColorStop(.71, '#494949');
  gradient.addColorStop(1, '#000');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 64, 64);

  const positions = [], uv = [], indices = [];
  const divisions = 8;
  for (const [x, z, width, depth] of stamps) {
    const offset = positions.length / 3;
    for (let row = 0; row <= divisions; row++) {
      for (let col = 0; col <= divisions; col++) {
        const u = col / divisions, v = row / divisions;
        const px = x + (2 * u - 1) * width, pz = z + (2 * v - 1) * depth;
        positions.push(px, surface(px, pz) + .019, pz);
        uv.push(u, v);
        if (row === divisions || col === divisions) continue;
        const a = offset + row * (divisions + 1) + col, b = a + 1, d = a + divisions + 1, c = d + 1;
        indices.push(a, d, b, b, d, c);
      }
    }
  }
  const geometry = new T.BufferGeometry();
  geometry.setAttribute('position', new T.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('uv', new T.Float32BufferAttribute(uv, 2));
  geometry.setIndex(indices);
  const material = new T.MeshBasicMaterial({
    color: '#556b44', alphaMap: new T.CanvasTexture(canvas), transparent: true, opacity: .35, depthWrite: false,
  });
  parent.add(new T.Mesh(geometry, material));
}
