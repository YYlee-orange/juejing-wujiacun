import { mapShallows } from './map-shallows.js';

const width = 2172, height = 724;

// Bank-following flow corridors traced from this painting, with a separate central-island exclusion.
export const waterGeometry = {
  island: [[.391,.825],[.406,.788],[.434,.741],[.460,.707],[.484,.682],[.515,.660],[.550,.650],[.576,.643],[.603,.655],[.628,.669],[.657,.681],[.687,.697],[.716,.720],[.718,.740],[.694,.761],[.663,.784],[.629,.805],[.590,.819],[.550,.830],[.506,.829],[.466,.835],[.428,.838],[.406,.841]],
  channels: [
    { points: [[.800,.130],[.782,.177],[.758,.231],[.735,.282],[.706,.335],[.672,.388],[.641,.440],[.618,.490],[.598,.535],[.580,.570]], lines: 7, spacing: 3.0, speed: 3.2 },
    { points: [[.625,.500],[.600,.540],[.560,.580],[.520,.615],[.480,.650],[.440,.700],[.400,.755],[.350,.810],[.290,.860],[.220,.905],[.130,.940],[.020,.980]], lines: 7, spacing: 3.3, speed: 3.6 },
    { points: [[.740,.665],[.738,.690],[.730,.725],[.710,.765],[.670,.805],[.625,.835],[.590,.845],[.540,.850],[.490,.855],[.440,.850],[.400,.856],[.360,.870],[.320,.900],[.280,.930]], lines: 5, spacing: 2.7, speed: 2.8 },
  ],
};

function polygon(path, points) {
  points.forEach(([x, y], index) => index ? path.lineTo(x * width, y * height) : path.moveTo(x * width, y * height));
  path.closePath();
}
function sampleChannel(points) {
  const samples = [];
  for (let segment = 0; segment < points.length - 1; segment++) {
    const a = points[Math.max(0, segment - 1)], b = points[segment], c = points[segment + 1], d = points[Math.min(points.length - 1, segment + 2)];
    for (let step = 0; step < 12; step++) {
      const t = step / 12, t2 = t * t, t3 = t2 * t;
      const axis = n => .5 * ((2 * b[n]) + (-a[n] + c[n]) * t + (2 * a[n] - 5 * b[n] + 4 * c[n] - d[n]) * t2 + (-a[n] + 3 * b[n] - 3 * c[n] + d[n]) * t3);
      samples.push([axis(0) * width, axis(1) * height]);
    }
  }
  samples.push([points.at(-1)[0] * width, points.at(-1)[1] * height]);
  return samples;
}

export function createMapWater() {
  const mask = new Path2D(), land = new Path2D();
  // Use a union of land silhouettes. An even-odd list of overlapping exclusions can reopen holes.
  const addLand = points => {
    let area = 0;
    points.forEach(([x, y], i) => { const next = points[(i + 1) % points.length]; area += x * next[1] - next[0] * y; });
    polygon(land, area < 0 ? [...points].reverse() : points);
  };
  addLand(waterGeometry.island); mapShallows.forEach(addLand);
  const streams = waterGeometry.channels.flatMap((channel, branch) => {
    const samples = sampleChannel(channel.points);
    const corridor = (channel.lines - 1) * channel.spacing / 2 + 5;
    const normals = samples.map(([x, y], index) => {
      const previous = samples[Math.max(0, index - 1)], next = samples[Math.min(samples.length - 1, index + 1)];
      const dx = next[0] - previous[0], dy = next[1] - previous[1], length = Math.hypot(dx, dy) || 1;
      return [-dy / length, dx / length];
    });
    // Confine each family to its bank-following corridor instead of washing over the entire river basin.
    const edge = side => samples.map(([x, y], index) => [x + normals[index][0] * corridor * side, y + normals[index][1] * corridor * side]);
    const ribbon = [...edge(1), ...edge(-1).reverse()];
    ribbon.forEach(([x, y], index) => index ? mask.lineTo(x, y) : mask.moveTo(x, y)); mask.closePath();
    return Array.from({ length: channel.lines }, (_, line) => {
      const path = new Path2D(), offset = (line - (channel.lines - 1) / 2) * channel.spacing;
      let distance = 0;
      samples.forEach(([x, y], index) => {
        const previous = samples[Math.max(0, index - 1)], next = samples[Math.min(samples.length - 1, index + 1)];
        const dx = next[0] - previous[0], dy = next[1] - previous[1], length = Math.hypot(dx, dy) || 1;
        if (index) distance += Math.hypot(x - previous[0], y - previous[1]);
        const ripple = Math.sin(distance * .055 + line * .4) * 1.5;
        const px = x - dy / length * (offset + ripple), py = y + dx / length * (offset + ripple);
        if (index) path.lineTo(px, py); else path.moveTo(px, py);
      });
      return { path, speed: channel.speed, phase: line * 29 + branch * 57, opacity: .095 + (line % 3) * .016 };
    });
  });
  function render(context, age) {
    context.save(); context.clip(mask);
    context.strokeStyle = '#78745f'; context.lineWidth = .72; context.lineCap = 'round';
    for (const stream of streams) {
      context.setLineDash([]); context.globalAlpha = .035; context.stroke(stream.path);
      // Advect broken brush marks along the local bank tangent, including both sides of the island.
      context.setLineDash([53, 17, 87, 25, 119, 23]);
      context.lineDashOffset = -(age * stream.speed + stream.phase);
      context.globalAlpha = stream.opacity;
      context.stroke(stream.path);
    }
    // This Canvas is a dedicated transparent water layer, so subtract the union of all dry land.
    context.globalCompositeOperation = 'destination-out'; context.globalAlpha = 1;
    context.fill(land);
    context.restore();
  }
  return { render, mask, land, streams };
}
