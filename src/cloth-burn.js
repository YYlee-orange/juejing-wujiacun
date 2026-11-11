import * as T from 'three';

const width = 128, height = 40, count = width * height;
const smooth = (a, b, x) => T.MathUtils.smoothstep(x, a, b);
function noise(x, y) {
  const hash = (a, b) => T.MathUtils.euclideanModulo(Math.sin(a * 127.1 + b * 311.7) * 43758.5453, 1);
  const ix = Math.floor(x), iy = Math.floor(y);
  const fx = smooth(0, 1, x - ix), fy = smooth(0, 1, y - iy);
  return T.MathUtils.lerp(T.MathUtils.lerp(hash(ix, iy), hash(ix + 1, iy), fx),
    T.MathUtils.lerp(hash(ix, iy + 1), hash(ix + 1, iy + 1), fx), fy);
}

// Burn starts at exposed edges; a few enclosed hot spots form interior holes.
// Every surviving texel must still have a four-neighbour path to the mast hem.
export function createClothBurn() {
  const data = new Uint8Array(count).fill(255), field = new Float32Array(count);
  const alive = new Uint8Array(count), attached = new Uint8Array(count);
  const queue = new Uint16Array(count), distance = new Float32Array(count);
  const holes = [[.23, .32, .10, .20], [.40, .69, .12, .21], [.65, .40, .12, .22]];
  const texture = new T.DataTexture(data, width, height, T.RedFormat);
  texture.minFilter = texture.magFilter = T.LinearFilter;
  texture.generateMipmaps = false;
  texture.needsUpdate = true;
  let previous = -1;
  for (let y = 0; y < height; y++) for (let x = 0; x < width; x++) {
    const u = x / (width - 1), v = y / (height - 1), n = noise(u * 13 + 1.7, v * 6 + 3.1);
    let resistance = .66 * (1 - u) + .22 * Math.sin(v * Math.PI)
      + .075 * n + .07 * Math.exp(-u * 22);
    for (const [hx, hy, rx, ry] of holes) {
      const radius = Math.hypot((u - hx) / rx, (v - hy) / ry);
      resistance = Math.min(resistance, .24 + radius * .19 + n * .045);
    }
    field[y * width + x] = resistance;
  }
  function setBurn(value) {
    const quantized = Math.round(Math.max(0, value) * 768);
    if (previous === quantized) return;
    previous = quantized;
    if (quantized === 0) {
      data.fill(255); alive.fill(1); attached.fill(1); texture.needsUpdate = true;
      return;
    }
    const cut = -.035 + quantized / 768 * .75;
    attached.fill(0);
    for (let i = 0; i < count; i++) alive[i] = Number(field[i] > cut);
    let head = 0, tail = 0;
    for (let y = 0; y < height; y++) {
      const i = y * width;
      if (alive[i]) { attached[i] = 1; queue[tail++] = i; }
    }
    function visit(i) {
      if (alive[i] && !attached[i]) { attached[i] = 1; queue[tail++] = i; }
    }
    while (head < tail) {
      const i = queue[head++], x = i % width;
      if (x > 0) visit(i - 1);
      if (x < width - 1) visit(i + 1);
      if (i >= width) visit(i - width);
      if (i < count - width) visit(i + width);
    }
    // Signed distance to burned cloth, without treating intact original edges as fire.
    for (let i = 0; i < count; i++) {
      const x = i % width, v = attached[i];
      distance[i] = (x && attached[i - 1] !== v) || (x < width - 1 && attached[i + 1] !== v)
        || (i >= width && attached[i - width] !== v) || (i < count - width && attached[i + width] !== v) ? .5 : 1000;
    }
    for (let i = 0; i < count; i++) {
      if (i % width) distance[i] = Math.min(distance[i], distance[i - 1] + 1);
      if (i >= width) distance[i] = Math.min(distance[i], distance[i - width] + 1);
      if (i >= width && i % width) distance[i] = Math.min(distance[i], distance[i - width - 1] + 1.414);
    }
    for (let i = count - 1; i >= 0; i--) {
      if (i % width < width - 1) distance[i] = Math.min(distance[i], distance[i + 1] + 1);
      if (i < count - width) distance[i] = Math.min(distance[i], distance[i + width] + 1);
      if (i < count - width && i % width < width - 1) distance[i] = Math.min(distance[i], distance[i + width + 1] + 1.414);
      data[i] = Math.round(T.MathUtils.clamp(.5 + (attached[i] ? 1 : -1) * distance[i] / 24, 0, 1) * 255);
    }
    texture.needsUpdate = true;
  }
  setBurn(0);
  return { texture, setBurn, attached, width, height };
}
