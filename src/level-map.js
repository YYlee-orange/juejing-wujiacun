import { createMapAtmosphere } from './map-atmosphere.js';
import { createMapMount } from './map-mount.js';

const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
const smooth = value => { const t = clamp(value, 0, 1); return t * t * (3 - 2 * t); };
const svgNamespace = 'http://www.w3.org/2000/svg';

// These are clearings in the painted geography, not five enabled levels.
// Later locations can replace the reserved sites without repainting the whole scroll.
export const levelMapSites = [
  { id: 'wujiacun', x: .195, y: .73, playable: true },
  { id: 'reserved-pass', x: .44, y: .42, playable: false },
  { id: 'reserved-island', x: .56, y: .73, playable: false },
  { id: 'reserved-town', x: .76, y: .48, playable: false },
  { id: 'reserved-foothill', x: .91, y: .73, playable: false },
];

function brushCircle(container) {
  const count = 180, samples = [];
  for (let i = 0; i <= count; i++) {
    const t = i / count, angle = .48 + t * 5.47;
    const radius = 1 + Math.sin(angle * 3.1 + .7) * .040 + Math.cos(angle * 5.2) * .018;
    const x = 198 + Math.cos(angle) * 174 * radius;
    const y = 150 + Math.sin(angle) * 111 * radius + Math.sin(angle * 2) * 3;
    const pressure = Math.pow(Math.sin(Math.PI * t), .48);
    const width = .65 + pressure * (11.6 + Math.sin(t * 13 + .4) * 3.0);
    samples.push({ t, x, y, angle, width });
  }
  const line = points => points.map((point, i) => `${i ? 'L' : 'M'}${point[0].toFixed(2)} ${point[1].toFixed(2)}`).join(' ');
  const edge = (sample, side, size = 1) => [
    sample.x + Math.cos(sample.angle) * sample.width * side * size,
    sample.y + Math.sin(sample.angle) * sample.width * side * size,
  ];
  const ribbon = line(samples.map(point => edge(point, 1))) + ' ' +
    line([...samples].reverse().map(point => edge(point, -1))).replace(/^M/, 'L') + ' Z';
  const dry = [[.20, .28], [.40, .46], [.66, .77], [.84, .91]].map(([start, end], index) => {
    const points = samples.filter(point => point.t >= start && point.t <= end);
    return `<path d="${line(points.map(point => edge(point, index % 2 ? -.24 : .26, .75)))}" fill="none" stroke="#000" stroke-width="${index % 2 ? .9 : 1.3}" stroke-linecap="round"/>`;
  }).join('');
  const svg = document.createElementNS(svgNamespace, 'svg');
  svg.setAttribute('viewBox', '0 0 400 300');
  svg.setAttribute('preserveAspectRatio', 'none');
  svg.setAttribute('aria-hidden', 'true');
  svg.classList.add('level-brush-ring');
  svg.innerHTML = `<defs>
    <mask id="level-ring-reveal" maskUnits="userSpaceOnUse" x="0" y="0" width="400" height="300">
      <path class="brush-reveal" d="${line(samples.map(point => [point.x, point.y]))}" pathLength="1" fill="none" stroke="white" stroke-width="38" stroke-linecap="round" stroke-dasharray="1" stroke-dashoffset="1"/>
    </mask>
    <mask id="level-ring-dry" maskUnits="userSpaceOnUse" x="0" y="0" width="400" height="300"><rect width="400" height="300" fill="white"/>${dry}</mask>
  </defs>
  <g mask="url(#level-ring-reveal)"><path d="${ribbon}" fill="#b43c28" opacity=".91" mask="url(#level-ring-dry)"/></g>
  <ellipse class="brush-tip" cx="0" cy="0" rx="6" ry="3.6" fill="#ad3928" opacity="0"/>`;
  container.append(svg);
  const reveal = svg.querySelector('.brush-reveal'), tip = svg.querySelector('.brush-tip');
  function setProgress(value) {
    const progress = clamp(value, 0, 1), point = samples[Math.round(progress * count)];
    reveal.setAttribute('stroke-dashoffset', String(1 - progress));
    tip.setAttribute('transform', `translate(${point.x} ${point.y}) rotate(${point.angle * 180 / Math.PI + 30}) scale(${.32 + point.width / 8})`);
    tip.setAttribute('opacity', progress > 0 && progress < 1 ? '.8' : '0');
  }
  return { setProgress };
}

export function createLevelMap(root, { reducedMotion = false, onEnter, onBack, canInteract = () => true } = {}) {
  const viewport = root.querySelector('.map-scroll');
  const track = root.querySelector('.map-track');
  const painting = root.querySelector('.map-painting');
  const sheet = root.querySelector('.map-sheet');
  const art = root.querySelector('.map-art');
  const title = root.querySelector('.map-title');
  const marker = root.querySelector('.map-location');
  const village = root.querySelector('#level-one');
  const back = root.querySelector('#map-back');
  const mount = createMapMount(root);
  const ring = brushCircle(marker);
  const atmosphere = createMapAtmosphere(root.querySelector('.map-atmosphere'), { reducedMotion });
  const state = { active: false, loaded: false, selecting: false, handedOff: false, age: 0, progress: 0, offset: 0, velocity: 0, width: 0, height: 0, mapWidth: 0, mapHeight: 0, outerWidth: 0, outerHeight: 0, artLeft: 0, artTop: 0, unitScale: 1, top: 0, viewed: false, interacted: false };
  const location = levelMapSites[0];
  let drag = null, suppressClickUntil = 0, recenter = null;
  const ready = Promise.all([...root.querySelectorAll('img')].map(image => image.decode())).then(() => { state.loaded = true; });
  // The caller holds the cloud cover while this promise resolves.
  ready.catch(() => {});

  const allowed = () => state.active && !state.selecting && canInteract();
  const minimum = () => Math.min(0, state.width - state.outerWidth);
  const locationX = () => state.artLeft + location.x * state.mapWidth;
  function paintPosition() {
    track.style.transform = `translate3d(${state.offset}px, ${state.top}px, 0)`;
  }
  function layout() {
    const bounds = viewport.getBoundingClientRect();
    if (!bounds.width || !bounds.height) return;
    const center = state.mapWidth ? (state.width * .5 - state.offset - state.artLeft) / state.mapWidth : location.x;
    state.width = bounds.width; state.height = bounds.height;
    const artWidth = painting.naturalWidth || 2172, artHeight = painting.naturalHeight || 724;
    // The painting itself fills the sheet. The title is overpainted, never allocated a side gutter.
    const outerWidth = artWidth + mount.gutter * 2, outerHeight = artHeight + mount.gutter * 2;
    // Camera motion applies to the entire mounted object, including its cloth and annotations.
    const scale = Math.max(bounds.height / outerHeight, bounds.width * 1.04 / outerWidth);
    state.unitScale = scale;
    state.mapWidth = artWidth * scale; state.mapHeight = artHeight * scale;
    state.outerWidth = outerWidth * scale; state.outerHeight = outerHeight * scale;
    state.artLeft = mount.gutter * scale; state.artTop = mount.gutter * scale;
    state.top = (bounds.height - state.outerHeight) / 2;
    track.style.width = `${state.outerWidth}px`; track.style.height = `${state.outerHeight}px`;
    Object.assign(sheet.style, { left: `${state.artLeft}px`, top: `${state.artTop}px`, width: `${state.mapWidth}px`, height: `${state.mapHeight}px` });
    Object.assign(art.style, { left: '0px', top: '0px', width: `${state.mapWidth}px`, height: `${state.mapHeight}px` });
    Object.assign(title.style, { left: `${78 * scale}px`, top: `${47 * scale}px`, width: `${72 * scale}px`, height: `${184 * scale}px`, fontSize: `${Math.max(16, 32 * scale)}px` });
    // Keep Back inside the ink enclosure, including when the camera reaches the right end.
    const backMargin = bounds.height <= 540 ? 10 : 16;
    root.style.setProperty('--map-back-top', `${Math.max(backMargin, state.top + state.artTop + 16 * scale + backMargin)}px`);
    root.style.setProperty('--map-back-right', `${(mount.gutter + 16) * scale + backMargin}px`);
    // Crop the transparent PNG margin in CSS, then size the actual buildings to this one land site.
    marker.style.setProperty('--village-size', `${232 * scale}px`);
    marker.style.left = `${location.x * 100}%`; marker.style.top = `${location.y * 100}%`;
    state.offset = clamp(state.width * .5 - center * state.mapWidth - state.artLeft, minimum(), 0);
    state.velocity = 0; recenter = null;
    paintPosition();
    atmosphere.resize(state);
  }
  function noteInteraction() {
    state.interacted = true; root.classList.add('has-browsed');
  }
  function setOffset(value) {
    state.offset = clamp(value, minimum(), 0); paintPosition();
  }
  function choose() {
    if (!allowed() || performance.now() < suppressClickUntil) return;
    state.selecting = true; state.handedOff = false; state.age = 0; state.progress = 0; state.velocity = 0;
    root.classList.add('is-choosing'); root.setAttribute('aria-busy', 'true');
    village.disabled = back.disabled = true;
    noteInteraction(); ring.setProgress(0);
    const target = clamp(state.width * .5 - locationX(), minimum(), 0);
    if (Math.abs(target - state.offset) > 2) recenter = { from: state.offset, to: target, age: 0 };
  }
  village.addEventListener('click', choose);
  back.addEventListener('click', () => { if (allowed()) onBack?.(); });
  viewport.addEventListener('pointerdown', event => {
    if (!allowed() || !event.isPrimary || event.button !== 0) return;
    state.velocity = 0; recenter = null;
    drag = { id: event.pointerId, x: event.clientX, offset: state.offset, lastX: event.clientX, lastTime: event.timeStamp, velocity: 0, moved: false };
  });
  viewport.addEventListener('pointermove', event => {
    if (!drag || drag.id !== event.pointerId) return;
    const distance = event.clientX - drag.x;
    if (!drag.moved && Math.abs(distance) > 7) {
      drag.moved = true; viewport.setPointerCapture(event.pointerId);
      root.classList.add('is-dragging'); noteInteraction();
    }
    if (!drag.moved) return;
    event.preventDefault();
    const dt = Math.max(.008, (event.timeStamp - drag.lastTime) / 1000);
    drag.velocity = drag.velocity * .35 + clamp((event.clientX - drag.lastX) / dt, -1800, 1800) * .65;
    drag.lastX = event.clientX; drag.lastTime = event.timeStamp;
    setOffset(drag.offset + distance);
  });
  function release(event) {
    if (!drag || drag.id !== event.pointerId) return;
    const moved = drag.moved;
    state.velocity = moved && !reducedMotion && event.type !== 'pointercancel' && event.timeStamp - drag.lastTime < 90 ? drag.velocity : 0;
    if (moved) suppressClickUntil = performance.now() + 320;
    drag = null; root.classList.remove('is-dragging');
    if (viewport.hasPointerCapture(event.pointerId)) viewport.releasePointerCapture(event.pointerId);
  }
  viewport.addEventListener('pointerup', release);
  viewport.addEventListener('pointercancel', release);
  viewport.addEventListener('lostpointercapture', event => {
    // Touch starts with implicit capture on the hit child. Its loss bubbles when
    // capture moves to the viewport; that is not the end of this drag.
    if (event.target !== viewport || viewport.hasPointerCapture(event.pointerId)) return;
    if (drag?.id === event.pointerId) { drag = null; root.classList.remove('is-dragging'); }
  });
  viewport.addEventListener('wheel', event => {
    if (!state.active) return;
    event.preventDefault();
    if (!allowed()) return;
    noteInteraction(); state.velocity = 0; recenter = null;
    const scale = event.deltaMode === 1 ? 20 : event.deltaMode === 2 ? state.width : 1;
    setOffset(state.offset - (Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY) * scale);
  }, { passive: false });

  function show() {
    root.hidden = false; root.inert = false; root.setAttribute('aria-hidden', 'false'); root.removeAttribute('aria-busy');
    state.active = true; state.selecting = false; state.handedOff = false; state.age = 0; state.progress = 0; state.velocity = 0;
    village.disabled = back.disabled = false; root.classList.remove('is-choosing', 'is-dragging');
    ring.setProgress(0); layout();
    if (!state.viewed) { setOffset(state.width * .5 - locationX()); state.viewed = true; }
  }
  function hide() {
    root.hidden = true; root.inert = true; root.setAttribute('aria-hidden', 'true'); root.removeAttribute('aria-busy');
    state.active = false; state.selecting = false; state.velocity = 0; drag = null; recenter = null;
  }
  function update(dt) {
    if (!state.active) return;
    atmosphere.update(dt, state);
    if (recenter) {
      recenter.age += dt;
      const t = reducedMotion ? 1 : smooth(recenter.age / .24);
      setOffset(recenter.from + (recenter.to - recenter.from) * t);
      if (t === 1) recenter = null;
    } else if (!drag && Math.abs(state.velocity) > 2 && !state.selecting) {
      const decay = Math.exp(-9 * dt), before = state.offset;
      setOffset(state.offset + state.velocity * (1 - decay) / 9);
      state.velocity *= decay;
      if (state.offset === before || state.offset === minimum() || state.offset === 0) state.velocity = 0;
    }
    if (!state.selecting || state.handedOff) return;
    state.age += dt;
    const duration = reducedMotion ? .12 : .52;
    state.progress = smooth(state.age / duration);
    ring.setProgress(state.progress);
    if (state.age >= duration + .12) {
      state.handedOff = true;
      if (onEnter?.() === false) {
        state.selecting = false; root.classList.remove('is-choosing'); root.removeAttribute('aria-busy');
        village.disabled = back.disabled = false;
      }
    }
  }
  function handleKey(event) {
    if (!state.active) return false;
    if (state.selecting && ['Escape', 'Enter', 'Space', 'ArrowLeft', 'ArrowRight'].includes(event.code)) {
      event.preventDefault(); return true;
    }
    if (!allowed()) return false;
    if (event.key === 'Escape') { event.preventDefault(); onBack?.(); return true; }
    if (['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) {
      event.preventDefault(); state.velocity = 0; recenter = null; noteInteraction();
      setOffset(event.key === 'Home' ? 0 : event.key === 'End' ? minimum() : state.offset + state.width * (event.key === 'ArrowLeft' ? .18 : -.18));
      return true;
    }
    return false;
  }
  new ResizeObserver(layout).observe(viewport);
  ready.then(layout).catch(() => {});
  return { state, atmosphere, ready, show, hide, update, handleKey, focus: () => village.focus({ preventScroll: true }) };
}
