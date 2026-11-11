import * as T from 'three';

function flameGeometry() {
  const levels = [[0, .13], [.08, .24], [.22, .285], [.40, .235], [.58, .17], [.75, .11], [.90, .05], [1, 0]];
  const sides = 12, positions = [], colors = [], indices = [];
  const warm = new T.Color('#c9ff9b'), middle = new T.Color('#59df65'), tip = new T.Color('#087b38');
  const color = new T.Color();
  for (const [row, [y, radius]] of levels.entries()) {
    for (let side = 0; side < sides; side++) {
      const turn = side * Math.PI * 2 / sides;
      const shape = radius * (1 + .075 * Math.sin(side * 2.3 + row));
      positions.push(Math.cos(turn) * shape + y * y * .10, y, Math.sin(turn) * shape * .86);
      color.copy(warm).lerp(middle, T.MathUtils.smoothstep(y, .18, .64))
        .lerp(tip, T.MathUtils.smoothstep(y, .64, 1));
      colors.push(color.r, color.g, color.b);
      if (row === levels.length - 1) continue;
      const a = row * sides + side, b = row * sides + (side + 1) % sides;
      indices.push(a, a + sides, b, b, a + sides, b + sides);
    }
  }
  const center = positions.length / 3;
  positions.push(0, 0, 0);
  colors.push(warm.r, warm.g, warm.b);
  for (let side = 0; side < sides; side++) indices.push(center, side, (side + 1) % sides);
  const geometry = new T.BufferGeometry();
  geometry.setAttribute('position', new T.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('color', new T.Float32BufferAttribute(colors, 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  return geometry;
}

const volume = flameGeometry();
const smokeGeometry = new T.IcosahedronGeometry(1, 1);

export function createGreenFire(parent, sites, { smoke = true } = {}) {
  const group = new T.Group();
  group.name = '立体绿色火焰';
  parent.add(group);
  const time = { value: 0 };
  const material = new T.MeshLambertMaterial({
    vertexColors: true, emissive: '#1b7432', emissiveIntensity: .45,
    transparent: true, opacity: .86, depthWrite: false,
  });
  material.onBeforeCompile = shader => {
    shader.uniforms.flameTime = time;
    shader.vertexShader = 'uniform float flameTime; varying float flameHeight;\n' + shader.vertexShader.replace(
      '#include <begin_vertex>', `#include <begin_vertex>
        float phase = flameTime * 5.2 + dot(instanceMatrix[3].xz, vec2(1.7, 1.1));
        flameHeight = position.y;
        float heightWeight = position.y * position.y;
        transformed.x += sin(phase + position.y * 7.0) * .13 * heightWeight;
        transformed.z += cos(phase * .83 + position.y * 6.0) * .10 * heightWeight;
        transformed.xz *= 1.0 + sin(phase * 1.3 + position.y * 12.0) * .08;
      `,
    );
    shader.fragmentShader = 'varying float flameHeight;\n' + shader.fragmentShader.replace('#include <tonemapping_fragment>', `
      float core = 1.0 - smoothstep(.12, .58, flameHeight);
      gl_FragColor.rgb = gl_FragColor.rgb * .45 + vec3(.48, .85, .20) * core;
      gl_FragColor.a *= mix(.82, .18, smoothstep(.08, 1.0, flameHeight));
      #include <tonemapping_fragment>`);
  };
  material.customProgramCacheKey = () => 'translucent-fire-v2';
  const tongues = new T.InstancedMesh(volume, material, sites.length * 3);
  tongues.frustumCulled = false;
  group.add(tongues);
  const haze = smoke ? new T.InstancedMesh(smokeGeometry, new T.MeshLambertMaterial({
    color: '#71816c', transparent: true, opacity: .19, depthWrite: false,
  }), sites.length * 2) : null;
  if (haze) { haze.frustumCulled = false; group.add(haze); }
  const transform = new T.Object3D();

  function update(age, amount) {
    time.value = age;
    group.visible = amount > .001;
    const dying = Math.sqrt(Math.min(1, Math.max(0, amount) / .12));
    material.opacity = .86 * dying;
    for (let i = 0; i < tongues.count; i++) {
      const site = sites[Math.floor(i / 3)], lobe = i % 3;
      const phase = age * (4.3 + lobe * .6) + i * 1.83;
      const cycle = (age * (1.15 + lobe * .13) + i * .381) % 1;
      const envelope = lobe === 0 ? 1 : .25 + .75 * Math.sin(cycle * Math.PI);
      const width = (.53 + amount * .64) * (lobe === 0 ? 1 : .73) * envelope;
      const rise = (.35 + amount * 1.65) * (lobe === 0 ? 1 : .55 + lobe * .10)
        * (.82 + Math.sin(phase) * .18) * envelope * (.80 + Math.sin(i * 2.77) * .19);
      transform.position.set(site[0] + (lobe - 1) * .10 * amount,
        site[1] + (lobe === 0 ? 0 : cycle * (.16 + amount * .38)),
        site[2] + Math.sin(i * 2.39) * .08 * amount);
      transform.rotation.set(.08 * Math.sin(phase * .7), i * 2.399 + Math.sin(phase * .4) * .25, .06 * Math.cos(phase));
      transform.scale.set(width * dying, rise * dying, width * dying);
      transform.updateMatrix();
      tongues.setMatrixAt(i, transform.matrix);
    }
    tongues.instanceMatrix.needsUpdate = true;
    if (haze) {
      for (let i = 0; i < haze.count; i++) {
        const site = sites[Math.floor(i / 2)], cycle = (age * .34 + i * .618) % 1;
        const size = Math.sin(cycle * Math.PI) * (.09 + amount * .24 + cycle * .24) * amount;
        transform.position.set(site[0] + cycle * cycle * .43, site[1] + .35 + cycle * (1 + amount * 2),
          site[2] + Math.sin(i * 1.7) * cycle * .14);
        transform.rotation.set(i * .7, age * .2 + i, i * .17);
        transform.scale.set(size * 1.1, size, size);
        transform.updateMatrix();
        haze.setMatrixAt(i, transform.matrix);
      }
      haze.instanceMatrix.needsUpdate = true;
    }
  }
  update(0, 0);
  return { group, update };
}
