import * as T from 'three';
import { box, height } from './world.js';
import { createPennant } from './pennant.js';
import { createGreenFire } from './effects.js';
import { balance } from './balance.js';
import { createStructureDamage } from './structure.js';

export function createBase(home) {
  const { group, roof, door, planks, spec } = home;
  const state = { hp: balance.baseHp, maxHp: balance.baseHp, doorHp: balance.doorHits,
    open: 0, destroyed: false, burnSpeed: 0, stage: 0, invasions: 0,
    extinguishers: 0, replenishmentBlocked: false };
  const burn = { value: 0 };
  const original = [];
  group.traverse(mesh => {
    if (!mesh.isMesh) return;
    mesh.material = mesh.material.clone();
    mesh.material.onBeforeCompile = shader => {
      shader.uniforms.houseBurn = burn;
      shader.vertexShader = 'varying vec3 housePoint;\n' + shader.vertexShader.replace(
        '#include <begin_vertex>', '#include <begin_vertex>\n housePoint = position;',
      );
      shader.fragmentShader = 'varying vec3 housePoint; uniform float houseBurn;\n' + shader.fragmentShader.replace(
        '#include <color_fragment>', `#include <color_fragment>
          float scorch = sin(housePoint.x * 3.7 + housePoint.y * 4.1) * .16
            + sin(housePoint.z * 4.3 - housePoint.y * 5.2) * .14;
          float mask = smoothstep(.03, .92, houseBurn + scorch * houseBurn * .9);
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(.035, .044, .029), mask * .96);`,
      ).replace('#include <tonemapping_fragment>', `
        gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(.026, .030, .018), mask * .75);
        #include <tonemapping_fragment>`);
    };
    mesh.material.customProgramCacheKey = () => 'burnt-house-v1';
    original.push({ mesh, p: mesh.position.clone(), r: mesh.rotation.clone(), visible: mesh.visible });
  });
  const structure = createStructureDamage(home);
  group.updateMatrixWorld(true);
  function worldPoint(x, z) {
    const p = group.localToWorld(new T.Vector3(x, 0, z));
    return new T.Vector2(p.x, p.z);
  }
  const approach = worldPoint(0, spec.d / 2 + .82);
  const entrance = worldPoint(0, spec.d / 2 + .17);
  const inside = worldPoint(0, spec.d / 2 - .28);
  const target = new T.Mesh(new T.BoxGeometry(spec.w + .10, spec.h + .85, spec.d + .12));
  target.position.y = (spec.h + .85) / 2;
  target.visible = false;
  group.add(target);

  const flagRoot = new T.Group();
  flagRoot.name = '基地旗帜';
  const flagRest = new T.Vector3(.12, spec.h + .76, -.01);
  flagRoot.position.copy(flagRest);
  group.add(flagRoot);
  const pole = box(flagRoot, '#927248', 0, .66, 0, .043, 1.37, .043);
  pole.material = pole.material.clone();
  const cloth = createPennant();
  cloth.mesh.position.y = 1.28;
  cloth.mesh.scale.set(1.50, 1.65, 1.50);
  flagRoot.add(cloth.mesh);
  const fireSites = [
    [-spec.w * .40, .15, spec.d * .42], [spec.w * .39, .13, spec.d * .41],
    [-spec.w * .43, .45, -spec.d * .2], [spec.w * .42, .35, -spec.d * .3],
    [0, .23, spec.d / 2 + .04], [-.74, spec.h + .12, .31],
    [.78, spec.h + .08, -.28], [.13, spec.h + .44, .06],
  ];
  const roofFireHeights = fireSites.slice(5).map(site => site[1]);
  const fire = createGreenFire(group, fireSites);
  const poleFires = [.32, .72, 1.10].map((y, index) => {
    const flame = createGreenFire(flagRoot, [[0, 0, 0]], { smoke: false });
    flame.group.position.set(0, y, 0);
    flame.group.scale.setScalar(.20 + index * .025);
    return flame;
  });
  const poleColors = ['#927248', '#74563b', '#51422e', '#302f23', '#171e16'];
  const cracks = new T.Group();
  door.add(cracks);
  for (let i = 0; i < 4; i++) {
    const crack = box(cracks, '#342c22', .10 + i * .10, .23 + i % 2 * .13, .030,
      .012, .22 + i % 2 * .12, .008, false);
    crack.rotation.z = i % 2 ? .42 : -.34;
  }
  const doorDebris = new T.Group();
  group.add(doorDebris);
  for (let i = 0; i < 5; i++) {
    const plank = box(doorDebris, '#614a32', -.28 + i * .14, .05,
      spec.d / 2 + .26 + i % 2 * .16, .105, .035, .48);
    plank.rotation.y = (i - 2) * .39;
  }
  const targets = [target, cloth.mesh];
  let holdOpen = 0, shake = 0, fireAmount = 0, fallAge = 0;

  function keepDoorOpen(seconds = .6) { holdOpen = Math.max(holdOpen, seconds); }
  function strikeDoor() {
    if (state.destroyed || state.doorHp <= 0) return;
    state.doorHp--;
    shake = .18;
  }
  function enter(enemy) {
    if (state.destroyed || !enemy.active || enemy.consumed) return false;
    enemy.consumed = true;
    enemy.active = false;
    enemy.inside = false;
    enemy.mode = 'consumed';
    enemy.group.visible = false;
    state.burnSpeed = Math.min(balance.burnSpeedCap, state.burnSpeed + 1);
    state.invasions++;
    return true;
  }
  function extinguish(amount = 1) {
    if (state.destroyed) return 0;
    const removed = Math.min(state.burnSpeed, Math.max(0, Math.floor(amount)));
    state.burnSpeed -= removed;
    return removed;
  }
  function advance(dt) {
    if (!state.destroyed) {
      state.hp = Math.max(0, state.hp - state.burnSpeed * balance.burnPerInvader * dt);
      if (state.hp === 0) {
        state.destroyed = true;
        state.doorHp = 0;
        fallAge = 0;
      }
    }
    holdOpen = Math.max(0, holdOpen - dt);
    state.open = T.MathUtils.damp(state.open, holdOpen > 0 ? 1 : 0, 10, dt);
  }
  function animate(time, dt) {
    const damage = 1 - state.hp / state.maxHp;
    state.stage = state.destroyed ? 4 : damage >= .75 ? 3 : damage >= .50 ? 2 : damage >= .25 ? 1 : 0;
    burn.value = [0, .16, .32, .52, .90][state.stage];
    structure.setStage(state.stage);
    structure.update(dt);
    shake = Math.max(0, shake - dt);
    door.rotation.y = -state.open * 1.55 + Math.sin(shake * 110) * shake * .30;
    door.visible = state.doorHp > 0;
    cracks.visible = state.doorHp < balance.doorHits;
    cracks.children.forEach((mesh, i) => { mesh.visible = i < (balance.doorHits - state.doorHp) * 2; });
    planks.forEach((plank, i) => {
      plank.rotation.z = state.doorHp === 1 ? (i % 2 ? -.08 : .11) : 0;
      plank.position.y = .30 - (state.doorHp === 1 && i === 2 ? .075 : 0);
      plank.visible = !(state.doorHp === 1 && i === 3);
    });
    doorDebris.visible = state.doorHp === 0;
    fireSites.slice(5).forEach((site, i) => {
      site[1] = state.stage < 2 ? roofFireHeights[i] : state.stage === 2
        ? spec.h * .8 : state.stage === 3 ? .30 : .12;
    });
    fireAmount = T.MathUtils.damp(fireAmount,
      state.destroyed ? 1 : state.burnSpeed > 0
        ? [.30, .42, .60, .84][state.stage] * (.28 + .72 * Math.sqrt(state.burnSpeed / balance.burnSpeedCap))
        : 0, 2.4, dt);
    fire.update(time, fireAmount * (state.destroyed ? Math.max(.18, 1 - fallAge / 12) : 1));
    if (state.destroyed) fallAge += dt;
    const fall = T.MathUtils.smoothstep(fallAge, .15, 1.6);
    const drop = worldPoint(.38, spec.d / 2 + .45);
    flagRoot.position.set(T.MathUtils.lerp(flagRest.x, .38, fall),
      T.MathUtils.lerp(flagRest.y, height(drop.x, drop.y) - spec.floor + .075, fall),
      T.MathUtils.lerp(flagRest.z, spec.d / 2 + .45, fall));
    flagRoot.rotation.x = fall * Math.PI / 2;
    pole.material.color.set(poleColors[state.stage]);
    const heat = Math.min(1, fireAmount * 3);
    cloth.setBurn(damage * .70 + T.MathUtils.smoothstep(fallAge, 1.7, 4.5) * .85, heat);
    flagRoot.visible = fallAge < 4.7;
    poleFires.forEach((flame, index) => {
      flame.group.rotation.x = -flagRoot.rotation.x;
      flame.update(time + index * .7, state.stage > 0 ? Math.min(.65, damage * .5 + fallAge * .08) * heat : 0);
    });
    cloth.mesh.updateWorldMatrix(true, false);
    cloth.animate(time, dt, cloth.mesh.matrixWorld);
  }
  function reset() {
    Object.assign(state, { hp: balance.baseHp, maxHp: balance.baseHp, doorHp: balance.doorHits,
      open: 0, destroyed: false, burnSpeed: 0, stage: 0, invasions: 0,
      extinguishers: 0, replenishmentBlocked: false });
    holdOpen = 0; shake = 0; fireAmount = 0; fallAge = 0;
    burn.value = 0;
    structure.reset();
    original.forEach(({ mesh, p, r, visible }) => {
      mesh.position.copy(p); mesh.rotation.copy(r); mesh.visible = visible;
    });
    roof.position.set(0, 0, 0); roof.rotation.set(0, 0, 0);
    flagRoot.position.copy(flagRest); flagRoot.rotation.set(0, 0, 0); flagRoot.visible = true;
    cloth.reset();
    animate(0, 0);
  }
  reset();
  return { group, state, approach, entrance, inside, targets,
    strikeDoor, keepDoorOpen, enter, extinguish, advance, animate, reset };
}
