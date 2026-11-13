import { createMapWater } from './map-water.js';

const clamp = (value, min = 0, max = 1) => Math.max(min, Math.min(max, value));
const smooth = value => { const t = clamp(value); return t * t * (3 - 2 * t); };
const width = 2172, height = 724;

function mistTexture() {
  const texture = document.createElement('canvas');
  texture.width = 640; texture.height = 150;
  const context = texture.getContext('2d');
  for (let i = 0; i < 15; i++) {
    const x = 42 + i * 39, y = 78 + Math.sin(i * 1.8) * 13, radius = 40 + Math.sin(i * 2.1) * 11;
    const gradient = context.createRadialGradient(x, y, 0, x, y, radius);
    gradient.addColorStop(0, 'rgba(255,250,233,.6)');
    gradient.addColorStop(.5, 'rgba(255,250,233,.3)');
    gradient.addColorStop(1, 'rgba(255,250,233,0)');
    context.fillStyle = gradient;
    context.save(); context.translate(x, y); context.scale(1.6, .64); context.translate(-x, -y);
    context.fillRect(x - radius, y - radius, radius * 2, radius * 2); context.restore();
  }
  return texture;
}

const mists = [
  { x: .105, y: .28, w: .23, h: .15, cycle: 29, phase: .21 },
  { x: .245, y: .37, w: .18, h: .12, cycle: 33, phase: .64 },
  { x: .43, y: .28, w: .23, h: .13, cycle: 31, phase: .43 },
  { x: .59, y: .19, w: .20, h: .12, cycle: 38, phase: .81 },
  { x: .835, y: .30, w: .24, h: .15, cycle: 35, phase: .34 },
  { x: .91, y: .48, w: .17, h: .12, cycle: 30, phase: .76 },
];

export function createMapAtmosphere(canvas, { reducedMotion = false } = {}) {
  const context = canvas.getContext('2d', { alpha: true });
  const mist = mistTexture();
  const water = createMapWater();
  const state = { elapsed: 0, nextFlock: .7, flocks: [], spawned: 0, frameAge: 0, rendered: 0 };
  let seed = 0x62f13, scale = 1;
  const random = () => { seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0; return seed / 4294967296; };
  canvas.hidden = reducedMotion;

  function resize(mapState) {
    const pixels = Math.round(Math.min(2400, mapState.mapWidth * Math.min(window.devicePixelRatio || 1, 1.25)));
    if (pixels <= 0 || pixels === canvas.width) return;
    canvas.width = pixels; canvas.height = Math.round(pixels * height / width);
    scale = pixels / width;
    render();
  }
  function spawn(mapState) {
    const worldScale = mapState.mapWidth / width;
    const left = (-mapState.offset - mapState.artLeft) / worldScale, visibleWidth = mapState.width / worldScale;
    const fromLeft = random() < .5;
    const fromX = fromLeft ? left - 65 : left + visibleWidth + 65;
    const toX = left + visibleWidth * (.43 + random() * .13);
    const baseY = (mapState.height * (.16 + random() * .46) - mapState.top - mapState.artTop) / worldScale;
    const birds = Array.from({ length: 5 + Math.floor(random() * 4) }, (_, i) => ({
      dx: -(i % 2 ? 1 : -1) * (14 + i * 8), dy: (i - 3) * (6 + random() * 3),
      size: 6.5 + random() * 3.0, flap: .85 + random() * .38, phase: random() * Math.PI * 2,
    }));
    state.flocks.push({ id: ++state.spawned, fromX, toX, baseY, x: fromX, y: baseY, age: 0, duration: 19 + random() * 7, opacity: 0, birds });
    state.nextFlock = 12 + random() * 8;
  }
  function render() {
    if (reducedMotion) return;
    context.setTransform(scale, 0, 0, scale, 0, 0);
    context.clearRect(0, 0, width, height);
    context.lineCap = 'round'; context.lineJoin = 'round';
    water.render(context, state.elapsed);
    for (const cloud of mists) {
      const phase = (state.elapsed / cloud.cycle + cloud.phase) % 1;
      const alpha = Math.sin(phase * Math.PI) ** 2 * .46;
      const x = (cloud.x - cloud.w / 2) * width + (phase - .5) * 66;
      const y = (cloud.y - cloud.h / 2) * height + Math.sin(phase * Math.PI) * 4;
      context.globalAlpha = alpha;
      context.drawImage(mist, x, y, cloud.w * width, cloud.h * height * 1.2);
    }
    context.strokeStyle = '#504f40'; context.fillStyle = '#504f40';
    for (const flock of state.flocks) {
      const direction = Math.sign(flock.toX - flock.fromX);
      context.globalAlpha = flock.opacity * .62;
      for (const bird of flock.birds) {
        const x = flock.x + bird.dx * direction, y = flock.y + bird.dy;
        const wing = Math.sin(state.elapsed * bird.flap * Math.PI * 2 + bird.phase) * bird.size * .62;
        context.lineWidth = 1.15;
        context.beginPath(); context.moveTo(x - bird.size, y + wing);
        context.quadraticCurveTo(x - bird.size * .4, y - 1, x, y + .8);
        context.quadraticCurveTo(x + bird.size * .4, y - 1, x + bird.size, y + wing);
        context.stroke();
        context.globalAlpha *= .75;
        context.fillRect(x - .5, y + .2, 1, 2.6);
        context.globalAlpha = flock.opacity * .62;
      }
    }
    context.globalAlpha = 1; state.rendered++;
  }
  function update(dt, mapState) {
    if (reducedMotion) return;
    state.elapsed += dt; state.frameAge += dt; state.nextFlock -= dt;
    if (state.nextFlock <= 0 && mapState.mapWidth) spawn(mapState);
    for (const flock of state.flocks) {
      flock.age += dt;
      const progress = clamp(flock.age / flock.duration);
      // Destinations are captured in scroll coordinates at birth, never tied to the camera later.
      flock.x = flock.fromX + (flock.toX - flock.fromX) * progress;
      flock.y = flock.baseY + Math.sin(progress * Math.PI) * 10;
      flock.opacity = smooth(progress / .09) * (1 - smooth((progress - .40) / .60));
    }
    state.flocks = state.flocks.filter(flock => flock.age < flock.duration);
    if (state.frameAge >= 1 / 30) { state.frameAge %= 1 / 30; render(); }
  }
  return { state, water, resize, update, render };
}
