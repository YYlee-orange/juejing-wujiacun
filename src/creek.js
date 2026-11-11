import * as T from 'three';

export function buildCreek(parent, surface, centerline, waterY, limit) {
  function bankAt(x, center, side) {
    let wet = 0;
    for (let dry = .08; dry <= 2.36; dry += .08) {
      if (surface(x, center + side * dry) < waterY) {
        wet = dry;
        continue;
      }
      for (let i = 0; i < 7; i++) {
        const middle = (wet + dry) * .5;
        if (surface(x, center + side * middle) < waterY) wet = middle;
        else dry = middle;
      }
      return (wet + dry) * .5;
    }
    return wet;
  }

  const points = [], shore = [], triangles = [];
  const sections = Math.ceil(2 * limit / .205);
  const overlap = .16;
  for (const side of [-1, 1]) {
    const offset = points.length / 3;
    for (let i = 0; i <= sections; i++) {
      const x = T.MathUtils.lerp(-limit, limit, i / sections);
      const center = centerline(x);
      const bank = bankAt(x, center, side);
      points.push(x, waterY, center + side * (bank + overlap), x, waterY, center);
      shore.push(-overlap, side, bank, side);
      if (i === sections) continue;
      const a = offset + i * 2, b = a + 1, c = a + 2, d = a + 3;
      if (side < 0) triangles.push(a, b, c, b, d, c);
      else triangles.push(a, c, b, b, c, d);
    }
  }
  const geometry = new T.BufferGeometry();
  geometry.setAttribute('position', new T.Float32BufferAttribute(points, 3));
  geometry.setAttribute('shore', new T.Float32BufferAttribute(shore, 2));
  geometry.setIndex(triangles);
  geometry.computeVertexNormals();

  const time = { value: 0 };
  const water = new T.MeshLambertMaterial();
  water.onBeforeCompile = shader => {
    shader.uniforms.flowTime = time;
    shader.uniforms.deepWater = { value: new T.Color('#6c9fa4') };
    shader.uniforms.shallowWater = { value: new T.Color('#99c3b8') };
    shader.uniforms.whiteWater = { value: new T.Color('#f7fcef') };
    shader.vertexShader = 'attribute vec2 shore;\n varying vec4 vRiver;\n' + shader.vertexShader.replace(
      '#include <begin_vertex>', '#include <begin_vertex>\n vRiver = vec4(position.xz, shore);',
    );
    shader.fragmentShader = 'uniform float flowTime;\n uniform vec3 deepWater, shallowWater, whiteWater;\n varying vec4 vRiver;\n' +
      shader.fragmentShader.replace('#include <color_fragment>', `#include <color_fragment>
        float along = vRiver.x;
        float bankDist = vRiver.z;
        float side = vRiver.w;
        float phase = along * 1.18 - flowTime * 1.32 + side * 1.8;
        float aa = min(.038, fwidth(bankDist) * .56);
        float shoreWave = .039 + .013 * sin(phase * 1.33) + .006 * sin(phase * 3.0);
        float brightRim = 1.0 - smoothstep(.015, .029 + aa, abs(bankDist - shoreWave));
        float cycle = fract(flowTime * .42 + side * .21 + .105 * sin(along * .69 + side));
        float advance = .091 + .165 * cycle + .016 * sin(phase * 1.68);
        float crest = 1.0 - smoothstep(.012, .026 + aa, abs(bankDist - advance));
        float fade = smoothstep(0.0, .20, cycle) * (1.0 - smoothstep(.61, 1.0, cycle));
        float broken = .29 + .71 * smoothstep(-.44, .55, sin(along * 1.85 - flowTime * 1.14 + side));
        float foam = max(brightRim * (.84 + .11 * sin(phase)), crest * fade * broken * .67);
        float shallows = 1.0 - smoothstep(.03, .54, bankDist);
        float glint = .014 * sin(along * 3.1 - flowTime * 1.64 + vRiver.y * 4.7)
          + .009 * sin(along * 5.4 + vRiver.y * 3.3 - flowTime * 2.3);
        vec3 channel = mix(deepWater, shallowWater, shallows) * (1.0 + glint);
        diffuseColor.rgb = mix(channel, whiteWater, foam);
      `);
  };
  const mesh = new T.Mesh(geometry, water);
  mesh.receiveShadow = true;
  parent.add(mesh);
  return value => { time.value = value; };
}
