import * as T from 'three';

export function createRift(origin, normal) {
  const group = new T.Group();
  group.name = '绿色空间裂缝';
  group.position.copy(origin);
  group.rotation.y = Math.atan2(normal.x, normal.z);
  const time = { value: 0 }, aperture = { value: 0 };
  const material = new T.ShaderMaterial({
    transparent: true, depthWrite: false, side: T.DoubleSide, forceSinglePass: true,
    uniforms: { time, aperture },
    vertexShader: `
      varying vec2 riftUv;
      void main() {
        riftUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float time;
      uniform float aperture;
      varying vec2 riftUv;
      float hash(float n) {
        return fract(sin(n * 127.1) * 43758.5453);
      }
      float noise(float x) {
        return mix(hash(floor(x)), hash(floor(x) + 1.0), fract(x));
      }
      float tornEdge(float y, float side) {
        float base = .26 + noise(y * 6.0 + side * 17.0) * .10;
        float peaks = pow(noise(y * 12.0 + time * 2.4 + side * 31.0), 3.0) * .20;
        float teeth = pow(max(0.0, sin(y * 19.0 + side * 4.0 + sin(time * 1.7) * .8)), 14.0) * .15;
        return base + peaks + teeth + noise(y * 32.0 + time * 7.0 + side * 7.0) * .025;
      }
      float stars(vec2 p) {
        float light = 0.0;
        for (int i = 0; i < 28; i++) {
          float id = float(i) + 1.0;
          float seed = hash(id * 41.0);
          float phase = seed * 6.28318;
          vec2 center = vec2((hash(id * 79.0) - .5) * .72, (hash(id * 113.0) - .5) * 1.92);
          center += vec2(sin(time * .45 + phase), cos(time * .36 + phase * 1.7)) * vec2(.025, .045);
          vec2 q = p - center;
          float radius = .006 + seed * .005;
          float point = exp(-dot(q, q) / (radius * radius));
          float cross = exp(-abs(q.x) / (radius * .24) - abs(q.y) / (radius * 3.3))
            + exp(-abs(q.y) / (radius * .24) - abs(q.x) / (radius * 3.3));
          float twinkle = .30 + .70 * pow(.5 + .5 * sin(time * (2.5 + seed * 4.5) + phase), 3.0);
          light += (point * .8 + cross * step(.72, seed)) * twinkle;
        }
        return light;
      }
      void main() {
        vec2 p = (riftUv - .5) * 2.8;
        float taper = pow(max(0.0, 1.0 - abs(p.y) / 1.06), .58);
        float left = -tornEdge(p.y, 1.0) * taper * aperture;
        float right = tornEdge(p.y, 2.0) * taper * aperture;
        float distance = max(max(p.x - right, left - p.x), abs(p.y) - 1.06);
        float edge = 1.0 - smoothstep(.009, .009 + max(.008, fwidth(distance)), abs(distance));
        float halo = exp(-abs(distance) * 22.0) * .50 + exp(-abs(distance) * 9.0) * .09;
        float inside = 1.0 - smoothstep(-.018, .0, distance);
        vec3 glow = vec3(.05, 1.0, .20);
        vec3 voidColor = vec3(.004, .016, .011);
        vec3 color = mix(glow * .22, voidColor, inside);
        color += vec3(.52, 1.0, .68) * edge * 1.9 + glow * halo * .5;
        color += vec3(.42, 1.0, .66) * stars(p) * inside * smoothstep(.018, .085, -distance);
        float alpha = max(inside * .97, max(edge, halo));
        alpha *= smoothstep(.0, .018, aperture);
        if (alpha < .008) discard;
        gl_FragColor = vec4(color, alpha);
        #include <colorspace_fragment>
      }
    `,
  });
  const veil = new T.Mesh(new T.PlaneGeometry(2.8, 2.8), material);
  veil.position.y = 1.06;
  group.add(veil);

  const sparkMaterial = new T.MeshBasicMaterial({ color: '#7dffa0', transparent: true, depthWrite: false });
  const sparks = new T.InstancedMesh(new T.OctahedronGeometry(.028), sparkMaterial, 18);
  sparks.frustumCulled = false;
  group.add(sparks);
  const transform = new T.Object3D();

  function update(age, openness, vertical) {
    time.value = age;
    aperture.value = Math.max(openness, vertical * .026);
    group.visible = vertical > .001;
    veil.scale.y = vertical;
    veil.position.y = 1.06 * vertical;
    sparkMaterial.opacity = Math.min(1, openness * 1.6);
    for (let i = 0; i < sparks.count; i++) {
      const cycle = (age * (.23 + i * .003) + i * .618) % 1;
      const side = i % 2 ? 1 : -1;
      const y = .10 + cycle * 2.1;
      const shape = Math.sin(cycle * Math.PI) ** .68;
      transform.position.set(side * (.35 * shape * openness + .10 * Math.sin(cycle * Math.PI)),
        y * vertical, Math.sin(i * 2.39 + age) * .09);
      transform.rotation.set(age + i, i * 1.3, age * .8);
      transform.scale.setScalar(Math.sin(cycle * Math.PI) * (.55 + i % 3 * .32) * openness);
      transform.updateMatrix();
      sparks.setMatrixAt(i, transform.matrix);
    }
    sparks.instanceMatrix.needsUpdate = true;
  }

  update(0, 0, 0);
  return { group, update };
}
