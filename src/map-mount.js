const svgNS = 'http://www.w3.org/2000/svg';
const fmt = value => Number(value.toFixed(3));
const line = points => points.map(([x, y], index) => `${index ? 'L' : 'M'}${fmt(x)} ${fmt(y)}`).join(' ');
const noise = (n, seed) => {
  const value = Math.sin(n * 127.1 + seed * 311.7) * 43758.5453;
  return value - Math.floor(value);
};

function brushTrace(from, to, weight, seed) {
  const dx = to[0] - from[0], dy = to[1] - from[1], distance = Math.hypot(dx, dy);
  const normal = [-dy / distance, dx / distance], count = Math.max(20, Math.ceil(distance / 10));
  return Array.from({ length: count + 1 }, (_, i) => {
    const t = i / count;
    const wobble = Math.sin(t * 19 + seed) * weight * .18 + (noise(i, seed) - .5) * weight * .28;
    const pressure = .44 + Math.sin(Math.PI * t) ** .24 * .52 + Math.sin(t * 31 + seed) * .17;
    return { x: from[0] + dx * t + normal[0] * wobble, y: from[1] + dy * t + normal[1] * wobble, half: weight * pressure * .5, t };
  });
}

// A filled ribbon follows brush pressure; dry fibres cut into its belly locally.
// This is a single uneven brush impression, rather than parallel outline strokes.
function brush(from, to, weight, seed) {
  const dx = to[0] - from[0], dy = to[1] - from[1], distance = Math.hypot(dx, dy);
  const normal = [-dy / distance, dx / distance], points = brushTrace(from, to, weight, seed);
  const edge = side => points.map(p => [p.x + normal[0] * p.half * side, p.y + normal[1] * p.half * side]);
  const ribbon = line([...edge(1), ...edge(-1).reverse()]) + 'Z';
  // Holes use even-odd fill. Their intermittent shapes follow the stroke, without a second line.
  const fibres = [[.10, .17], [.32, .37], [.56, .64], [.81, .87]].map(([start, end], i) => {
    const part = points.filter(p => p.t >= start && p.t <= end);
    if (part.length < 2) return '';
    const side = i % 2 ? -.32 : .29;
    const a = part.map(p => [p.x + normal[0] * p.half * side, p.y + normal[1] * p.half * side]);
    const b = [...part].reverse().map(p => [p.x + normal[0] * (p.half * side + weight * .13), p.y + normal[1] * (p.half * side + weight * .13)]);
    return line([...a, ...b]) + 'Z';
  }).join('');
  return `<path d="${ribbon}${fibres}" fill-rule="evenodd"/>`;
}

function paperEdge(width, height) {
  const points = [];
  const corners = [[0, 0], [width, 0], [width, height], [0, height], [0, 0]];
  for (let side = 0; side < 4; side++) {
    const a = corners[side], b = corners[side + 1], count = Math.ceil(Math.hypot(b[0] - a[0], b[1] - a[1]) / 4);
    for (let i = 0; i < count; i++) {
      const t = i / count, chip = noise(i, side + 9) > .96 ? 1.4 : 0;
      const rough = .7 + noise(i, side + 1) * .8 + Math.sin(i * .7) * .35 + chip;
      const x = a[0] + (b[0] - a[0]) * t + (side === 1 ? -rough : side === 3 ? rough : 0);
      const y = a[1] + (b[1] - a[1]) * t + (side === 0 ? rough : side === 2 ? -rough : 0);
      points.push([x / width, y / height]);
    }
  }
  return points.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(6)} ${y.toFixed(6)}`).join(' ') + 'Z';
}

function svg(container, viewBox, markup) {
  const node = container.matches('svg') ? container : document.createElementNS(svgNS, 'svg');
  node.setAttribute('viewBox', viewBox); node.setAttribute('preserveAspectRatio', 'none'); node.setAttribute('aria-hidden', 'true');
  node.innerHTML = markup;
  if (node !== container) container.append(node);
  return node;
}

export function createMapMount(root) {
  const width = 2172, height = 724, gutter = 25, outerWidth = width + gutter * 2, outerHeight = height + gutter * 2;
  const edges = [
    [[10, 12], [width - 11, 10], 4.1, 2],
    [[width - 11, 9], [width - 13, height - 10], 3.8, 6],
    [[width - 8, height - 11], [10, height - 12], 4.3, 4],
    [[12, height - 8], [10, 11], 4.0, 9],
  ];
  // The picture ends on the ink impression, leaving unpainted paper between ink and cloth.
  const pictureEdge = edges.flatMap(edge => brushTrace(...edge)).map((p, i) => `${i ? 'L' : 'M'}${(p.x / width).toFixed(6)} ${(p.y / height).toFixed(6)}`).join(' ') + 'Z';
  const scuffs = Array.from({ length: 110 }, (_, i) => {
    const side = i % 4, u = noise(i, 4), v = noise(i, 8);
    const x = side === 1 ? outerWidth - v * gutter : side === 3 ? v * gutter : u * outerWidth;
    const y = side === 0 ? v * gutter : side === 2 ? outerHeight - v * gutter : u * outerHeight;
    return `<path d="M${fmt(x)} ${fmt(y)}q${fmt(5 + v * 16)} ${fmt((u - .5) * 4)} ${fmt(14 + u * 31)} ${fmt((v - .5) * 3)}" fill="none" stroke="${i % 3 ? '#d0c9a6' : '#536553'}" stroke-width="${fmt(.6 + v * 1.8)}" opacity="${fmt(.08 + u * .16)}"/>`;
  }).join('');
  svg(root.querySelector('.map-mount'), `0 0 ${outerWidth} ${outerHeight}`, `<defs>
    <filter id="map-cloth-grain"><feTurbulence type="fractalNoise" baseFrequency=".045 .21" numOctaves="2" seed="8"/><feColorMatrix type="saturate" values="0"/></filter>
    <clipPath id="map-paper-edge" clipPathUnits="objectBoundingBox"><path d="${paperEdge(width, height)}"/></clipPath>
    <clipPath id="map-picture-edge" clipPathUnits="objectBoundingBox"><path d="${pictureEdge}"/></clipPath>
    <linearGradient id="map-cloth-tone"><stop stop-color="#879580"/><stop offset=".48" stop-color="#9ba38c"/><stop offset="1" stop-color="#7f907a"/></linearGradient>
  </defs><rect width="100%" height="100%" fill="url(#map-cloth-tone)"/><rect width="100%" height="100%" filter="url(#map-cloth-grain)" opacity=".10"/>${scuffs}`);
  const border = root.querySelector('.map-ink-border');
  svg(border, `0 0 ${width} ${height}`, `<g fill="#4d493a" opacity=".76">
    ${edges.map(edge => brush(...edge)).join('')}
  </g>`);
  const title = root.querySelector('.map-title');
  const titleFrame = document.createElementNS(svgNS, 'svg');
  titleFrame.classList.add('map-title-paper'); title.prepend(titleFrame);
  svg(titleFrame, '0 0 72 230', `<path d="M5 5 35 3 66 6 67 91 65 159 67 224 34 226 5 223 6 146 4 70Z" fill="#efe4c5" fill-opacity=".88"/><g fill="#4b4839" opacity=".88">${brush([5, 5], [67, 6], 2.5, 12)}${brush([66, 4], [66, 225], 2.6, 14)}${brush([68, 224], [4, 224], 2.5, 17)}${brush([5, 226], [5, 4], 2.8, 19)}</g>`);
  return { gutter, width, height };
}
