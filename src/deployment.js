import * as T from 'three';

export function createDeployment({ reducedMotion = false } = {}) {
  const state = { active: false, progress: 0, focus: 0, timeScale: 1, elapsed: 0 };
  const progress = { value: 0 }, origin = { value: new T.Vector2() };
  const targetOrigin = new T.Vector2(), reduced = { value: Number(reducedMotion) };
  const slowSpeed = .12;

  function setActive(active, anchor) {
    state.active = active;
    if (active && anchor) {
      targetOrigin.copy(anchor);
      if (state.progress === 0) origin.value.copy(anchor);
    }
  }
  function update(dt) {
    const duration = reducedMotion ? .12 : state.active ? .26 : .25;
    state.progress = T.MathUtils.clamp(state.progress + (state.active ? 1 : -1) * dt / duration, 0, 1);
    progress.value = state.progress;
    origin.value.lerp(targetOrigin, 1 - Math.exp(-dt * 16));
    const target = state.active ? slowSpeed : 1, rate = state.active ? 20 : 16;
    const decay = Math.exp(-rate * dt), before = state.timeScale;
    // Integrate the speed transition rather than multiplying by the end-of-frame speed.
    // The same input gives the same simulation time at 30, 60 and 120 fps.
    const worldDt = target * dt + (before - target) * (1 - decay) / rate;
    state.timeScale = target + (before - target) * decay;
    if (Math.abs(state.timeScale - target) < .00005) state.timeScale = target;
    state.focus = T.MathUtils.clamp((1 - state.timeScale) / (1 - slowSpeed), 0, 1);
    state.elapsed += worldDt;
    return worldDt;
  }
  function tileMaterial(material) {
    material.onBeforeCompile = shader => {
      Object.assign(shader.uniforms, { deployProgress: progress, deployOrigin: origin, deployReduced: reduced });
      shader.vertexShader = `attribute vec3 deployCenter;
        uniform float deployProgress;
        uniform vec2 deployOrigin;
        uniform float deployReduced;
        varying float deployAlpha;
      ` + shader.vertexShader.replace('#include <begin_vertex>', `#include <begin_vertex>
        float delay = min(length(deployCenter.xz - deployOrigin) / 12.0, 1.0) * .28;
        delay *= 1.0 - deployReduced;
        float reveal = clamp((deployProgress - delay) / (1.0 - .28 * (1.0 - deployReduced)), 0.0, 1.0);
        deployAlpha = reveal * reveal * (3.0 - 2.0 * reveal);
        float size = mix(.24, 1.0, deployAlpha);
        size = mix(size, 1.0, deployReduced);
        transformed = deployCenter + (transformed - deployCenter) * size;
        transformed.y -= (1.0 - deployAlpha) * .012 * (1.0 - deployReduced);
      `);
      shader.fragmentShader = 'varying float deployAlpha;\n' + shader.fragmentShader.replace(
        '#include <color_fragment>', `#include <color_fragment>
          diffuseColor.a *= deployAlpha;
          if (diffuseColor.a < .003) discard;`);
    };
    material.customProgramCacheKey = () => 'deploy-grid-transition-v1';
    return material;
  }
  function reset() {
    Object.assign(state, { active: false, progress: 0, focus: 0, timeScale: 1, elapsed: 0 });
    progress.value = 0;
  }
  return { state, setActive, update, tileMaterial, reset };
}
