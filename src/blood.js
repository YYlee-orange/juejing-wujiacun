import * as T from 'three';
import { MarchingCubes } from 'three/addons/objects/MarchingCubes.js';
import { height } from './world.js';

const colors = ['#98382b', '#2d7845'];
const up = new T.Vector3(0, 1, 0), scratch = new T.Vector3(), inverse = new T.Matrix4();
const dropletGeometry = new T.SphereGeometry(1, 8, 5);
const liquidPaints = colors.map(color => new T.MeshPhysicalMaterial({ color,
  roughness: .62, metalness: 0, clearcoat: .08, clearcoatRoughness: .58 }));
const grid = 30, maxVertices = grid * grid * 12;

export function createBlood(parent) {
  const air = new T.Group(), ground = new T.Group();
  air.name = '黏稠融合血浆'; ground.name = '连片地表血液';
  ground.renderOrder = -1;
  parent.add(air, ground);
  const bursts = Array.from({ length: 10 }, () => {
    const mesh = new MarchingCubes(28, liquidPaints[0], false, false, 2500);
    mesh.isolation = 36;
    mesh.visible = false;
    mesh.frustumCulled = false;
    air.add(mesh);
    return { mesh, active: false, age: 0, nodes: [], alien: false, heavy: false };
  });
  const spray = new T.InstancedMesh(dropletGeometry, liquidPaints[0].clone(), 128);
  spray.material.color.set('#ffffff');
  spray.name = '断开的细小血滴'; spray.frustumCulled = false;
  for (let i = 0; i < spray.count; i++) spray.setColorAt(i, new T.Color(colors[0]));
  air.add(spray);
  const droplets = Array.from({ length: spray.count }, () => ({ active: false,
    p: new T.Vector3(), v: new T.Vector3(), radius: 0, alien: false }));
  const pools = Array.from({ length: 24 }, () => {
    const geometry = new T.BufferGeometry();
    for (const attr of ['position', 'normal', 'color']) geometry.setAttribute(attr,
      new T.BufferAttribute(new Float32Array(maxVertices * 3), 3).setUsage(T.DynamicDrawUsage));
    geometry.setDrawRange(0, 0);
    const material = new T.MeshPhysicalMaterial({ vertexColors: true, roughness: .68,
      clearcoat: .06, clearcoatRoughness: .60, metalness: 0, transparent: true, depthWrite: false });
    const origin = { value: new T.Vector2() };
    geometry.setAttribute('liquidDepth', new T.BufferAttribute(new Float32Array(maxVertices), 1).setUsage(T.DynamicDrawUsage));
    material.onBeforeCompile = shader => {
      shader.uniforms.liquidOrigin = origin;
      shader.vertexShader = 'attribute float liquidDepth; varying float bloodDepth; varying vec2 bloodWorld;\n' + shader.vertexShader.replace(
        '#include <begin_vertex>', '#include <begin_vertex>\n bloodDepth = liquidDepth; bloodWorld = (modelMatrix * vec4(position, 1.0)).xz;');
      shader.fragmentShader = 'varying float bloodDepth; varying vec2 bloodWorld; uniform vec2 liquidOrigin;\n' + shader.fragmentShader.replace(
        '#include <tonemapping_fragment>', `
          vec2 flow = bloodWorld - liquidOrigin;
          float arc = abs(flow.y + .11 * sin(flow.x * 7.0) + .16);
          float sheen = (1.0 - smoothstep(.009, .026, arc)) * exp(-flow.x * flow.x * 14.0)
            * smoothstep(.05, .13, bloodDepth);
          gl_FragColor.rgb += vec3(.025, .032, .021) * sheen;
          #include <tonemapping_fragment>`);
    };
    material.customProgramCacheKey = () => 'wet-pooled-blood-v1';
    const mesh = new T.Mesh(geometry, material);
    mesh.visible = false; mesh.frustumCulled = false; mesh.receiveShadow = true;
    ground.add(mesh);
    return { mesh, origin, active: false, alien: false, age: 0, born: 0, layer: 0,
      sinkAt: 0, goneAt: 0, bounds: new T.Box2(), refresh: 0, dirty: false, blobs: [] };
  });
  const transform = new T.Object3D(), center = new T.Vector3(), low = new T.Vector3(), high = new T.Vector3();
  const tint = new T.Color(), edge = new T.Color(), shade = new T.Color();
  let nextBurst = 0, nextDroplet = 0, clock = 0, layer = 0;

  function scheduleSinking() {
    const ordered = pools.filter(pool => pool.active).sort((a, b) => a.layer - b.layer);
    for (let i = 0; i < ordered.length; i++) {
      const pool = ordered[i];
      let start = Math.max(pool.sinkAt, pool.born + 44);
      for (let j = 0; j < i; j++) if (pool.bounds.intersectsBox(ordered[j].bounds)) {
        start = Math.max(start, ordered[j].goneAt + .08);
      }
      pool.sinkAt = start;
      pool.goneAt = start + 1.4;
    }
  }

  function deposit(x, z, radius, alien) {
    // Nearby impacts feed one implicit surface instead of stacking separate disks.
    let topLayer = 0;
    for (const other of pools) if (other.active && other.alien !== alien && other.blobs.some(blob =>
      Math.hypot(blob.x - x, blob.z - z) < blob.r + radius + .18)) topLayer = Math.max(topLayer, other.layer);
    let pool = pools.find(candidate => candidate.active && candidate.alien === alien
      && candidate.layer >= topLayer && clock - candidate.born <= 1.2
      && candidate.blobs.some(blob => Math.hypot(blob.x - x, blob.z - z) < blob.r + radius + .28)
      && candidate.blobs.every(blob => Math.abs(blob.x - x) < 2 && Math.abs(blob.z - z) < 2));
    if (!pool) {
      pool = pools.find(candidate => !candidate.active)
        ?? pools.reduce((oldest, candidate) => candidate.layer < oldest.layer ? candidate : oldest);
      pool.blobs.length = 0; pool.alien = alien; pool.active = true; pool.mesh.visible = true;
      pool.born = clock; pool.age = 0; pool.layer = ++layer; pool.mesh.renderOrder = pool.layer;
      pool.sinkAt = clock + 44; pool.goneAt = pool.sinkAt + 1.4;
      pool.mesh.position.y = 0; pool.bounds.makeEmpty();
      pool.mesh.geometry.setDrawRange(0, 0); pool.mesh.material.opacity = 1; pool.refresh = 1 / 24;
    }
    function grow(blob, amount) {
      const current = blob.r * (blob.start + (1 - blob.start) * T.MathUtils.smoothstep(blob.age, 0, .48));
      blob.r = Math.min(.62, Math.sqrt(blob.r ** 2 + amount));
      blob.start = Math.min(1, current / blob.r); blob.age = 0;
    }
    const nearby = pool.blobs.find(blob => Math.hypot(blob.x - x, blob.z - z) < .10);
    if (nearby) {
      grow(nearby, radius ** 2 * .7);
    } else if (pool.blobs.length < 22) {
      pool.blobs.push({ x, z, r: radius, start: .38, age: 0, seed: Math.random() * 7 });
    } else {
      const closest = pool.blobs.reduce((a, b) => Math.hypot(a.x - x, a.z - z) < Math.hypot(b.x - x, b.z - z) ? a : b);
      grow(closest, radius ** 2 * .35);
    }
    for (const blob of pool.blobs) {
      pool.bounds.min.x = Math.min(pool.bounds.min.x, blob.x - blob.r - .15);
      pool.bounds.min.y = Math.min(pool.bounds.min.y, blob.z - blob.r - .15);
      pool.bounds.max.x = Math.max(pool.bounds.max.x, blob.x + blob.r + .15);
      pool.bounds.max.y = Math.max(pool.bounds.max.y, blob.z + blob.r + .15);
    }
    pool.dirty = true;
    scheduleSinking();
  }

  function surfaceBlood(actor, direction) {
    if (!actor.stains) return;
    const alien = actor.kind === 'enemy';
    actor.group.updateWorldMatrix(true, false); inverse.copy(actor.group.matrixWorld).invert();
    scratch.set(-direction.x, 0, -direction.y).transformDirection(inverse);
    const turn = Math.atan2(scratch.x, scratch.z), vertices = [], indices = [];
    const radius = alien ? .078 : .047, y = alien ? .38 : .21;
    for (let ring = 0; ring <= 3; ring++) for (let i = 0; i <= 16; i++) {
      const angle = i / 16 * Math.PI * 2, r = ring / 3 * radius * (1 + .13 * Math.sin(angle * 3 + turn));
      const a = turn + Math.cos(angle) * r / (alien ? .30 : .115);
      vertices.push(Math.sin(a) * (alien ? .307 : .116), y + Math.sin(angle) * r,
        Math.cos(a) * (alien ? .31 * (actor.bodyDepth ?? .79) : .102));
      if (ring < 3 && i < 16) { const a = ring * 17 + i; indices.push(a, a + 17, a + 1, a + 1, a + 17, a + 18); }
    }
    const geometry = new T.BufferGeometry();
    geometry.setAttribute('position', new T.Float32BufferAttribute(vertices, 3)); geometry.setIndex(indices);
    geometry.computeVertexNormals();
    const mark = new T.Mesh(geometry, liquidPaints[Number(alien)]);
    actor.stains.add(mark);
    while (actor.stains.children.length > 5) {
      const old = actor.stains.children[0]; actor.stains.remove(old); old.geometry.dispose();
    }
  }

  function blood(actor, direction, heavy = false) {
    const alien = actor.kind === 'enemy', origin = actor.group.position;
    const burst = bursts[nextBurst++ % bursts.length];
    burst.active = true; burst.age = 0; burst.nodes.length = 0; burst.alien = alien; burst.heavy = heavy;
    burst.mesh.material = liquidPaints[Number(alien)]; burst.mesh.visible = true;
    const base = origin.clone().add(new T.Vector3(-direction.x * (heavy ? 0 : .17), alien ? .34 : .28,
      -direction.y * (heavy ? 0 : .17)));
    burst.nodes.push({ p: base.clone(), v: new T.Vector3(0, .65, 0), r: heavy ? .145 : .087,
      active: true, branch: -1, segment: 0 });
    const yaw = Math.atan2(-direction.x, -direction.y), branches = heavy ? 4 : 3;
    for (let branch = 0; branch < branches; branch++) {
      const turn = heavy ? branch / branches * Math.PI * 2 + Math.random() * .75
        : yaw + (branch - 1) * .67;
      const speed = heavy ? 1.65 + Math.random() * 1.15 : 1.65 + Math.random() * .65;
      const lift = heavy ? 1.55 + Math.random() * .8 : 1.2 + Math.random() * .65;
      for (let segment = 1; segment <= 2; segment++) {
        const fraction = segment / 2;
        burst.nodes.push({ p: base.clone().add(new T.Vector3(Math.sin(turn) * .055 * fraction,
          .015 * fraction, Math.cos(turn) * .055 * fraction)),
        v: new T.Vector3(Math.sin(turn) * speed * fraction, lift * (.70 + fraction * .30),
          Math.cos(turn) * speed * fraction), r: (heavy ? .095 : .062) * (segment === 1 ? 1 : .76),
        active: true, branch, segment });
      }
    }
    for (let i = 0; i < (heavy ? 10 : 5); i++) {
      const index = nextDroplet++ % droplets.length, drop = droplets[index];
      const turn = heavy ? Math.random() * Math.PI * 2 : yaw + (Math.random() - .5) * 1.9;
      const speed = 1.7 + Math.random() * 1.2;
      drop.p.copy(base); drop.v.set(Math.sin(turn) * speed, 1.2 + Math.random() * 1.8, Math.cos(turn) * speed);
      drop.radius = .012 + Math.random() * .013; drop.active = true; drop.alien = alien;
      spray.setColorAt(index, new T.Color(colors[Number(alien)]));
    }
    if (!heavy) surfaceBlood(actor, direction);
    rebuildBurst(burst);
  }

  function rebuildBurst(burst) {
    const mesh = burst.mesh;
    low.setScalar(Infinity); high.setScalar(-Infinity);
    const active = burst.nodes.filter(node => node.active);
    if (!active.length) { burst.active = false; mesh.visible = false; return; }
    for (const node of active) { low.min(node.p); high.max(node.p); }
    center.addVectors(low, high).multiplyScalar(.5);
    const flatten = .68;
    const half = Math.max(.40, (high.x - low.x) * .5 + .30, (high.z - low.z) * .5 + .30,
      (high.y - low.y) * .5 / flatten + .30);
    mesh.position.copy(center); mesh.scale.set(half, half * flatten, half); mesh.reset();
    const add = (p, radius) => {
      // addBall's field radius is normalized to a two-unit marching-cubes box.
      const normalized = radius / (half * 2);
      mesh.addBall(.5 + (p.x - center.x) / (half * 2), .5 + (p.y - center.y) / (half * 2 * flatten),
        .5 + (p.z - center.z) / (half * 2), normalized ** 2 * (mesh.isolation + 12), 12);
    };
    for (const node of active) add(node.p, node.r);
    // Soft necks keep the first part of the burst connected; stretching pinches them off.
    const neck = 1 - T.MathUtils.smoothstep(burst.age, .14, burst.heavy ? .42 : .34);
    if (neck > .04) for (const node of active) {
      if (node.segment !== 2) continue;
      const previous = burst.nodes.find(other => other.branch === node.branch && other.segment === 1);
      if (!previous?.active) continue;
      const length = previous.p.distanceTo(node.p), steps = Math.min(5, Math.ceil(length / .07));
      for (let i = 1; i < steps; i++) {
        scratch.lerpVectors(previous.p, node.p, i / steps);
        add(scratch, Math.min(node.r, previous.r) * (.45 + neck * .38));
      }
    }
    mesh.update();
  }

  function poolField(pool, x, z) {
    let distance = 100;
    for (const blob of pool.blobs) {
      const turn = Math.atan2(z - blob.z, x - blob.x);
      const radius = blob.r * (blob.start + (1 - blob.start) * T.MathUtils.smoothstep(blob.age, 0, .48))
        * (1 + .055 * Math.sin(turn * 3 + blob.seed) + .035 * Math.cos(turn * 5 - blob.seed));
      const next = Math.hypot(x - blob.x, z - blob.z) - radius;
      const blend = Math.max(.13 - Math.abs(distance - next), 0) / .13;
      distance = Math.min(distance, next) - blend * blend * .0325;
    }
    return distance;
  }

  function rebuildPool(pool) {
    let minX = Infinity, maxX = -Infinity, minZ = Infinity, maxZ = -Infinity;
    for (const blob of pool.blobs) {
      minX = Math.min(minX, blob.x - blob.r - .14); maxX = Math.max(maxX, blob.x + blob.r + .14);
      minZ = Math.min(minZ, blob.z - blob.r - .14); maxZ = Math.max(maxZ, blob.z + blob.r + .14);
    }
    const points = [], dx = (maxX - minX) / grid, dz = (maxZ - minZ) / grid;
    for (let row = 0; row <= grid; row++) for (let col = 0; col <= grid; col++) {
      const x = minX + col * dx, z = minZ + row * dz, d = poolField(pool, x, z);
      const fluid = T.MathUtils.smoothstep(-d, 0, .13);
      points.push({ x, z, d, y: height(x, z) + .009 + fluid * .006,
        nx: 0, ny: 1, nz: 0 });
    }
    for (let row = 0; row <= grid; row++) for (let col = 0; col <= grid; col++) {
      const point = points[row * (grid + 1) + col];
      const left = points[row * (grid + 1) + Math.max(0, col - 1)], right = points[row * (grid + 1) + Math.min(grid, col + 1)];
      const front = points[Math.max(0, row - 1) * (grid + 1) + col], back = points[Math.min(grid, row + 1) * (grid + 1) + col];
      scratch.set((left.y - right.y) / (right.x - left.x), 1, (front.y - back.y) / (back.z - front.z)).normalize();
      point.nx = scratch.x; point.ny = scratch.y; point.nz = scratch.z;
    }
    pool.origin.value.set((minX + maxX) / 2, (minZ + maxZ) / 2);
    const geometry = pool.mesh.geometry, positions = geometry.attributes.position,
      normals = geometry.attributes.normal, vertexColors = geometry.attributes.color, depths = geometry.attributes.liquidDepth;
    tint.set(colors[Number(pool.alien)]); edge.copy(tint).multiplyScalar(.72);
    let cursor = 0;
    function write(p) {
      positions.setXYZ(cursor, p.x, p.y, p.z); normals.setXYZ(cursor, p.nx, p.ny, p.nz);
      depths.setX(cursor, -p.d);
      shade.copy(edge).lerp(tint, .28 + .72 * T.MathUtils.smoothstep(-p.d, 0, .16));
      vertexColors.setXYZ(cursor++, shade.r, shade.g, shade.b);
    }
    function triangle(a, b, c) {
      const polygon = [], input = [a, b, c];
      for (let i = 0; i < 3; i++) {
        const p = input[i], q = input[(i + 1) % 3];
        if (p.d <= 0) polygon.push(p);
        if ((p.d <= 0) !== (q.d <= 0)) {
          const t = p.d / (p.d - q.d), at = { d: 0 };
          for (const prop of ['x', 'y', 'z', 'nx', 'ny', 'nz']) at[prop] = T.MathUtils.lerp(p[prop], q[prop], t);
          polygon.push(at);
        }
      }
      for (let i = 1; i < polygon.length - 1; i++) { write(polygon[0]); write(polygon[i]); write(polygon[i + 1]); }
    }
    for (let row = 0; row < grid; row++) for (let col = 0; col < grid; col++) {
      const a = row * (grid + 1) + col, b = a + 1, c = a + grid + 1, d = c + 1;
      triangle(points[a], points[c], points[b]); triangle(points[b], points[c], points[d]);
    }
    geometry.setDrawRange(0, cursor);
    positions.needsUpdate = normals.needsUpdate = vertexColors.needsUpdate = depths.needsUpdate = true;
  }

  function update(dt) {
    const steps = Math.max(1, Math.ceil(dt * 60)), step = dt / steps;
    for (let i = 0; i < steps; i++) {
      clock += step;
      for (const burst of bursts) {
        if (!burst.active) continue;
        burst.age += step;
        for (const node of burst.nodes) {
          if (!node.active) continue;
          node.v.multiplyScalar(Math.exp(-step * .65)); node.v.y -= 9.5 * step;
          node.p.addScaledVector(node.v, step);
          if (node.p.y - node.r <= height(node.p.x, node.p.z)) {
            deposit(node.p.x, node.p.z, node.r * (node.segment === 0 ? 3.0 : 2.65), burst.alien);
            node.active = false;
          }
        }
      }
      for (const drop of droplets) {
        if (!drop.active) continue;
        drop.v.y -= 9.8 * step; drop.p.addScaledVector(drop.v, step);
        if (drop.p.y <= height(drop.p.x, drop.p.z)) {
          deposit(drop.p.x, drop.p.z, drop.radius * 2.3, drop.alien); drop.active = false;
        }
      }
      for (const pool of pools) {
        if (!pool.active) continue;
        pool.age = clock - pool.born; pool.refresh += step;
        for (const blob of pool.blobs) { if (blob.age < .5) pool.dirty = true; blob.age += step; }
      }
    }
    for (const burst of bursts) if (burst.active) rebuildBurst(burst);
    for (let i = 0; i < droplets.length; i++) {
      const drop = droplets[i]; transform.position.copy(drop.p); transform.quaternion.identity();
      if (drop.active) {
        scratch.copy(drop.v).normalize(); transform.quaternion.setFromUnitVectors(up, scratch);
        transform.scale.set(drop.radius, drop.radius * 1.6, drop.radius);
      } else transform.scale.setScalar(0);
      transform.updateMatrix(); spray.setMatrixAt(i, transform.matrix);
    }
    spray.instanceMatrix.needsUpdate = true;
    if (spray.instanceColor) spray.instanceColor.needsUpdate = true;
    for (const pool of pools) {
      if (!pool.active) continue;
      if (pool.dirty && pool.refresh >= 1 / 24) { rebuildPool(pool); pool.dirty = false; pool.refresh = 0; }
      pool.mesh.position.y = -T.MathUtils.smoothstep(clock, pool.sinkAt, pool.goneAt) * .04;
      if (clock >= pool.goneAt) { pool.active = false; pool.mesh.visible = false; }
    }
  }
  function reset() {
    clock = 0; layer = 0;
    bursts.forEach(burst => { burst.active = false; burst.mesh.visible = false; });
    pools.forEach(pool => { pool.active = false; pool.mesh.visible = false; pool.blobs.length = 0; pool.mesh.position.y = 0; });
    droplets.forEach(drop => { drop.active = false; });
    update(0);
  }
  reset();
  return { blood, update, reset };
}
