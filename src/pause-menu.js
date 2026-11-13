export function createPauseMenu(element, { reducedMotion = false, onPauseChange, returnFocus }) {
  const state = { status: 'closed', progress: 0, target: 0 };
  let previousFocus, restoreFocus = true;
  const panel = element.querySelector('.pause-panel');
  function paint() {
    const t = state.progress, eased = 1 - (1 - t) ** 3;
    element.style.setProperty('--pause-opacity', String(eased));
    panel.style.transform = reducedMotion ? 'none' : `translateY(${(1 - eased) * 12}px) scale(${.965 + .035 * eased})`;
  }
  function finishClose() {
    state.status = 'closed'; state.progress = 0;
    element.hidden = true; element.inert = true;
    element.setAttribute('aria-hidden', 'true');
    onPauseChange(false);
    const target = returnFocus?.() ?? previousFocus;
    if (restoreFocus && target?.isConnected && !target.disabled) target.focus({ preventScroll: true });
  }
  function open() {
    if (state.status === 'open' || state.status === 'opening') return false;
    if (state.status === 'closed') previousFocus = document.activeElement;
    restoreFocus = true;
    state.status = 'opening'; state.target = 1;
    element.hidden = false; element.inert = false;
    element.setAttribute('aria-hidden', 'false');
    onPauseChange(true); paint();
    element.querySelector('#resume-game').focus({ preventScroll: true });
    if (reducedMotion) { state.progress = 1; state.status = 'open'; paint(); }
    return true;
  }
  function close({ restore = true } = {}) {
    if (state.status === 'closed') return false;
    restoreFocus = restore;
    state.status = 'closing'; state.target = 0;
    if (reducedMotion) finishClose();
    return true;
  }
  function dismiss() { restoreFocus = false; state.target = 0; finishClose(); paint(); }
  function update(dt) {
    if (state.status === 'closed' || state.status === 'open') return;
    const duration = state.target ? .24 : .18;
    state.progress = Math.max(0, Math.min(1, state.progress + (state.target ? 1 : -1) * dt / duration));
    paint();
    if (state.target && state.progress === 1) state.status = 'open';
    else if (!state.target && state.progress === 0) finishClose();
  }
  function handleKey(event) {
    if (state.status === 'closed') return false;
    if (event.key === 'Escape' || (event.code === 'Space' && !(event.target instanceof HTMLButtonElement))) {
      event.preventDefault(); close();
    } else if (event.key === 'Tab') {
      const buttons = [...element.querySelectorAll('button:not(:disabled)')];
      const first = buttons[0], last = buttons.at(-1);
      if (event.shiftKey && (document.activeElement === first || !element.contains(document.activeElement))) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && (document.activeElement === last || !element.contains(document.activeElement))) { event.preventDefault(); first.focus(); }
    }
    return true;
  }
  element.querySelector('#resume-game').addEventListener('click', () => close());
  element.querySelector('#close-pause').addEventListener('click', () => close());
  element.querySelector('.pause-backdrop').addEventListener('click', () => close());
  return { state, open, close, dismiss, update, handleKey, get active() { return state.status !== 'closed'; } };
}
