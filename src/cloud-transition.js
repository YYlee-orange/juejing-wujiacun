import * as T from 'three';

const clamp = value => Math.max(0, Math.min(1, value));
const smooth = value => { const t = clamp(value); return t * t * (3 - 2 * t); };

export function createCloudTransition(element, { reducedMotion = false } = {}) {
  // Many overlapping billows form the bank itself; there is no giant circular backing mesh.
  const renderer = new T.WebGLRenderer({ canvas: element, alpha: true, antialias: true, powerPreference: 'low-power' });
  renderer.setClearColor(0x000000, 0);
  const scene = new T.Scene();
  const camera = new T.OrthographicCamera(-1, 1, 1, -1, .1, 50);
  camera.position.z = 20;
  const geometry = new T.IcosahedronGeometry(1, 2);
  const positions = geometry.attributes.position;
  for (let i = 0; i < positions.count; i++) {
    const x = positions.getX(i), y = positions.getY(i), z = positions.getZ(i);
    const swell = 1 + .045 * Math.sin(x * 4 + y * 2.7) * Math.cos(z * 3.3 - y * 2);
    positions.setXYZ(i, x * swell, y * swell, z * swell);
  }
  positions.needsUpdate = true;
  const transform = new T.Object3D();
  const random = n => { const value = Math.sin(n * 127.1 + 311.7) * 43758.5453; return value - Math.floor(value); };
  const diagonal = Math.SQRT1_2;
  const banks = [0, 1].map(bank => {
    const group = new T.Group();
    scene.add(group);
    const profile = s => .63 + .10 * Math.sin(s * 6.1 + bank * 2.2) + .055 * Math.cos(s * 13.7 + bank);
    const body = [], crests = [], wisps = [];
    function puff(target, across, forward, size, seed, z) {
      target.push({
        x: (forward + across) * diagonal, y: (forward - across) * diagonal,
        z, size, wide: .90 + random(seed + 5) * .28,
        tall: .82 + random(seed + 13) * .34,
        turn: random(seed + 19) * Math.PI * 2,
        phase: random(seed + 23) * Math.PI * 2,
        lag: random(seed + 31) * .032,
      });
    }
    for (let col = 0; col < 17; col++) {
      const across = (col - 8) * .22;
      const front = profile(across);
      for (let row = 0; row < 9; row++) {
        const seed = bank * 911 + col * 37 + row * 101;
        puff(body, across + (row % 2 ? .105 : 0) + (random(seed + 7) - .5) * .045,
          front - .11 - row * .215 + (random(seed + 11) - .5) * .055,
          .24 + random(seed + 3) * .080, seed, -.9 + random(seed + 29) * 1.15);
      }
      const seed = bank * 977 + col * 61;
      // Large and small, offset lobes make deep scallops instead of an evenly scalloped disk.
      const size = .14 + random(seed + 43) * .115;
      puff(crests, across, front + .02, size, seed, .55 + random(seed + 47) * .45);
      puff(crests, across + .08, front + size * .64, size * .52, seed + 71, .85 + random(seed + 53) * .4);
      if (col % 2 === bank) puff(wisps, across - .06, front + size * 1.15,
        .07 + random(seed + 59) * .055, seed + 131, 1.15);
    }
    // Dense, very pale billows sit behind the readable, translucent cloud surface.
    // This keeps the scene concealed without turning the foreground into intersecting solids.
    const density = body.map(puff => ({ ...puff,
      x: puff.x - .055, y: puff.y - .055, z: puff.z - 1.5, size: puff.size * 1.04,
    }));
    const layers = [
      { puffs: density, opacity: .95, order: 0, rim: .84, shade: .94 },
      { puffs: body, opacity: .56, order: 1, rim: .88, shade: .73 },
      { puffs: crests, opacity: .38, order: 2, rim: .94, shade: .80 },
      { puffs: wisps, opacity: .18, order: 3, rim: .96, shade: .88 },
    ].map(({ puffs, opacity, order, rim, shade }) => {
      puffs.sort((a, b) => a.z - b.z);
      const material = new T.MeshBasicMaterial({
        color: 0xffffff, transparent: true, opacity, depthWrite: false, depthTest: false,
      });
      material.onBeforeCompile = shader => {
        shader.uniforms.cloudRimEnd = { value: rim };
        shader.uniforms.cloudShadeFloor = { value: shade };
        shader.vertexShader = 'varying vec3 cloudNormal; varying vec3 cloudViewPosition;\n' + shader.vertexShader.replace(
          '#include <begin_vertex>', `#include <begin_vertex>
            mat3 puffBasis = mat3(instanceMatrix);
            vec3 puffNormal = normal / vec3(dot(puffBasis[0], puffBasis[0]), dot(puffBasis[1], puffBasis[1]), dot(puffBasis[2], puffBasis[2]));
            cloudNormal = normalMatrix * puffBasis * puffNormal;
          `,
        ).replace('#include <project_vertex>', '#include <project_vertex>\ncloudViewPosition = mvPosition.xyz;');
        shader.fragmentShader = 'uniform float cloudRimEnd; uniform float cloudShadeFloor; varying vec3 cloudNormal; varying vec3 cloudViewPosition;\n' + shader.fragmentShader.replace(
          '#include <alphamap_fragment>', `#include <alphamap_fragment>
            vec3 roundedNormal = normalize(cloudNormal);
            vec3 faceNormal = normalize(cross(dFdx(cloudViewPosition), dFdy(cloudViewPosition)));
            vec3 volumeNormal = normalize(mix(roundedNormal, faceNormal, .16));
            float light = dot(volumeNormal, normalize(vec3(-.48, .64, .80)));
            // Neutral white highlights and restrained pearl-white folds reveal the actual 3D faces.
            float whiteVolume = mix(cloudShadeFloor, 1.0, smoothstep(-.18, .83, light));
            diffuseColor.rgb *= whiteVolume;
            diffuseColor.a *= smoothstep(.16, cloudRimEnd, abs(roundedNormal.z));
          `,
        );
      };
      material.customProgramCacheKey = () => 'white-billow-volume-v4';
      const mesh = new T.InstancedMesh(geometry, material, puffs.length);
      mesh.frustumCulled = false; mesh.renderOrder = order;
      mesh.instanceMatrix.setUsage(T.DynamicDrawUsage);
      group.add(mesh);
      return { mesh, puffs, opacity };
    });
    return { group, layers };
  });
  const state = { phase: 'idle', progress: 0, age: 0, busy: false, swapped: false, waiting: false };
  const duration = reducedMotion ? .10 : .62, hold = reducedMotion ? .04 : .12;
  let aspect = 1, swap, complete;
  function resize() {
    const bounds = element.parentElement.getBoundingClientRect();
    const width = Math.max(1, bounds.width), height = Math.max(1, bounds.height);
    aspect = width / height;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.25, 1400 / Math.max(width, height)));
    renderer.setSize(width, height, false);
    camera.left = -aspect; camera.right = aspect; camera.updateProjectionMatrix();
    if (state.busy) draw();
  }
  function draw() {
    for (const [i, { group, layers }] of banks.entries()) {
      const t = reducedMotion ? 1 : smooth(i ? (state.progress - .035) / .965 : state.progress);
      const travel = -.90 + 1.24 * t;
      const center = i ? 1 - travel : travel;
      const direction = i ? -1 : 1;
      group.position.set((center - .5) * aspect * 2, (.5 - center) * 2, 0);
      for (const { mesh, puffs, opacity } of layers) {
        mesh.material.opacity = opacity * (reducedMotion ? state.progress : 1);
        for (const [index, puff] of puffs.entries()) {
          // Deterministic billowing is sampled in reverse on exit, including the small individual lag.
          const local = smooth(clamp((t - puff.lag) / (1 - puff.lag)));
          const drift = Math.sin(local * 2.5 + puff.phase) * .018;
          const follow = (local - t) * .13;
          transform.position.set(direction * (puff.x + drift + follow) * aspect * 2,
            -direction * (puff.y - drift * .6 + follow) * 2, puff.z);
          transform.rotation.set(puff.turn * .43, puff.turn + local * .09, puff.phase * .4);
          const size = puff.size * (1 + Math.sin(local * 2.1 + puff.phase) * .045);
          transform.scale.set(size * aspect * 2 * puff.wide, size * 2 * puff.tall, size * 2.2);
          transform.updateMatrix(); mesh.setMatrixAt(index, transform.matrix);
        }
        mesh.instanceMatrix.needsUpdate = true;
      }
    }
    renderer.render(scene, camera);
  }
  function play(onCovered, onComplete = () => {}) {
    if (state.busy) return false;
    swap = onCovered; complete = onComplete;
    Object.assign(state, { phase: 'closing', progress: 0, age: 0, busy: true, swapped: false, waiting: false });
    element.hidden = false;
    resize(); draw();
    return true;
  }
  function update(dt) {
    if (!state.busy) return;
    if (state.phase === 'closing') {
      state.age += dt; state.progress = clamp(state.age / duration);
      if (state.progress === 1) { state.phase = 'covered'; state.age = 0; }
    } else if (state.phase === 'covered') {
      // This branch runs after the fully opaque closing frame has been presented.
      if (!state.swapped) {
        state.swapped = true;
        try {
          const result = swap?.();
          if (result?.then) {
            state.waiting = true;
            Promise.resolve(result).catch(error => console.error(error)).finally(() => { state.waiting = false; });
          }
        } catch (error) { console.error(error); }
      }
      state.age += dt;
      if (!state.waiting && state.age >= hold) { state.phase = 'opening'; state.age = 0; }
    } else if (state.phase === 'opening') {
      state.age += dt; state.progress = 1 - clamp(state.age / duration);
      if (state.progress === 0) {
        const onComplete = complete;
        swap = complete = null;
        state.phase = 'idle'; state.busy = false;
        element.hidden = true; onComplete?.();
        return;
      }
    }
    draw();
  }
  new ResizeObserver(resize).observe(element.parentElement);
  return { state, play, update, get busy() { return state.busy; } };
}
