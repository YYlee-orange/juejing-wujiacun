const svg = (content, width, height, className) => `<svg class="${className}" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" aria-hidden="true">${content}</svg>`;
const path = points => points.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(2)} ${y.toFixed(2)}`).join(' ') + 'Z';

// Filled brush bands vary in width around a stable silhouette; no animated noise.
function inkBorder(points, width = 1.6) {
  const inner = points.map(([x, y], i) => {
    const before = points[(i + points.length - 1) % points.length], after = points[(i + 1) % points.length];
    const incoming = [x - before[0], y - before[1]], outgoing = [after[0] - x, after[1] - y];
    const a = Math.hypot(...incoming), b = Math.hypot(...outgoing);
    const normal = [-incoming[1] / a - outgoing[1] / b, incoming[0] / a + outgoing[0] / b];
    const length = Math.hypot(...normal), nx = normal[0] / length, ny = normal[1] / length;
    const pressure = width * (.82 + .20 * Math.sin(i * 1.9) + .12 * Math.cos(i * .7));
    const inset = pressure / Math.max(.38, nx * -outgoing[1] / b + ny * outgoing[0] / b);
    return [x + nx * inset, y + ny * inset];
  });
  return `<path d="${path(points)} ${path(inner.reverse())}" fill="var(--ink)" fill-rule="evenodd"/>`;
}

function frame(width, height) {
  const points = [[8, 1.8], [width * .38, .7], [width - 9, 1.9], [width - 1.5, 9],
    [width - .8, height * .54], [width - 1.8, height - 9], [width - 8.5, height - 1.3],
    [width * .40, height - .6], [8, height - 1.9], [1.2, height - 8], [.7, height * .40], [1.7, 8]];
  return svg(`<path d="${path(points)}" fill="var(--paper)"/>${inkBorder(points)}
    <path d="M${width * .30} 1.6l8 .08-4 .48Z M${width * .65} ${height - 1.5}l6 -.1-2 .5Z" fill="var(--paper)" opacity=".8"/>`, width, height, 'ink-frame');
}

function portraitFrame(front = false) {
  const outer = [[9, 11], [27, 10], [70, 11], [81, 20], [80, 76], [70, 86], [10, 85], [2, 77], [2, 21]];
  const inner = [[13, 17], [68, 16], [75, 23], [75, 73], [67, 79], [14, 79], [8, 73], [8, 24]];
  if (front) return svg(`<path d="${path(outer)} ${path([...inner].reverse())}" fill-rule="evenodd" fill="var(--paper)"/>
    ${inkBorder(outer, 2)}${inkBorder(inner, 1.2)}`, 84, 90, 'portrait-rim');
  return svg(`<path d="${path(outer)}" fill="var(--paper)"/>${inkBorder(outer, 2)}
    <path d="${path(inner)}" fill="var(--portrait-field)"/>${inkBorder(inner, 1.2)}`, 84, 90, 'portrait-frame');
}

function banner(engineer) {
  // A broad front face overlaps a returned cloth end, with a dark connecting fold.
  const tail = engineer
    ? [[164, 17], [192, 15], [218, 16], [219, 33], [207, 33], [207, 42], [219, 42],
      [219, 57], [207, 57], [207, 67], [219, 67], [219, 82], [164, 83]]
    : [[164, 17], [190, 15], [219, 16], [185, 47], [220, 81], [164, 83]];
  const face = [[1, 6], [81, 4], [176, 7], [177, 30], [175, 54], [176, 73], [89, 74], [1, 72]];
  const fold = [[163, 62], [176, 62], [176, 73], [164, 83]];
  const hammer = engineer ? `<g transform="translate(155 42) rotate(-33) scale(.86)" fill="#fffdf5" opacity=".9">
    <path d="M-2-3 2-3 2 14-2 15Z M-9-9 9-9 10-1-9-1Z"/>
    <path d="M-7-8 6-8 6-6-7-6Z" fill="var(--banner)" opacity=".28"/></g>` : '';
  return svg(`<g class="flag-tail"><path d="${path(tail)}" fill="var(--banner-tail)"/>${inkBorder(tail, 1.2)}</g>
    <g class="flag-return"><path d="${path(fold)}" fill="var(--banner-fold)"/>${inkBorder(fold, 1)}</g>
    <g class="flag-face"><path d="${path(face)}" fill="var(--banner)"/>${inkBorder(face, 1.5)}
      <path d="M6 11Q85 8 170 12" fill="none" stroke="#fff6dd" stroke-width=".8" opacity=".23"/>
      <path d="M173 14Q172 42 173 69" fill="none" stroke="var(--banner-fold)" stroke-width="2.4" opacity=".40"/>
    </g>
    ${hammer}`, 222, 84, 'squad-banner');
}

export function installInkUi() {
  for (const element of document.querySelectorAll('[data-ink-frame]')) {
    const type = element.dataset.inkFrame;
    const [width, height] = type === 'pause' ? [54, 54] : type === 'panel' ? [360, 238]
      : type === 'wave' ? [156, 42] : [160, 54];
    element.insertAdjacentHTML('afterbegin', frame(width, height));
  }
  const command = document.querySelector('.command');
  const cards = [...command.querySelectorAll('.squad-card')];
  for (const card of cards) {
    card.insertAdjacentHTML('afterbegin', banner(card.id === 'engineer-card'));
    card.querySelector('.portrait-window').insertAdjacentHTML('afterbegin', portraitFrame());
    card.querySelector('.portrait-window').insertAdjacentHTML('beforeend', portraitFrame(true));
  }
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const canHover = matchMedia('(hover: hover) and (pointer: fine)');
  for (const button of document.querySelectorAll('button')) {
    let press;
    button.addEventListener('click', () => {
      if (button.disabled || reducedMotion.matches) return;
      press?.cancel();
      const rest = canHover.matches && button.matches(':hover') ? -2 : 0;
      press = button.animate([
        { transform: 'translateY(1.5px) scale(.985)' },
        { transform: `translateY(${rest}px) scale(1)` },
      ], { duration: 180, easing: 'cubic-bezier(.16, 1, .3, 1)' });
    });
  }
  let previousSelection = '';
  return {
    setSelection(selected, team) {
      const next = selected ? team : '';
      if (next === previousSelection && command.dataset.open !== undefined) return;
      previousSelection = next;
      command.dataset.open = String(!!next);
      command.setAttribute('aria-hidden', String(!next));
      command.inert = !next;
      if (next) for (const card of cards) card.hidden = (card.id === 'engineer-card') !== (team === 'engineers');
    },
    setPaused(paused) {
      const button = document.querySelector('#pause-game');
      button.setAttribute('aria-pressed', String(paused));
      button.setAttribute('aria-label', paused ? '继续游戏' : '暂停游戏');
      button.title = paused ? '继续游戏（空格）' : '暂停游戏（空格）';
    },
  };
}
