import * as T from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { buildWorld, height, key, tileIndex, tileSize } from './world.js';
import { createNavigation } from './navigation.js';
import { createSquad } from './squad.js';
import { createWaves } from './waves.js';
import { createBase } from './base.js';
import { createEffects } from './effects.js';
import { createBattle } from './battle.js';
import { balance } from './balance.js';
import { createDeployment } from './deployment.js';
import { installInkUi } from './ui.js';

const viewport = document.querySelector('#viewport');
const errorMessage = document.querySelector('#error');
const squadButton = document.querySelector('#squad-card');
const engineerButton = document.querySelector('#engineer-card');
const waveStatus = document.querySelector('#wave-status');
const pauseButton = document.querySelector('#pause-game');
const game = document.querySelector('#game');
const startScreen = document.querySelector('#start-screen');
const startButton = document.querySelector('#start-game');
const inkUi = installInkUi();
const initialAngle = .66;
const minZoom = .925;
const menuZoom = 1.30;

function createRenderer() {
  try {
    return new T.WebGLRenderer({ alpha: true, antialias: true });
  } catch {
    errorMessage.hidden = false;
  }
}

const renderer = createRenderer();
if (renderer) run(renderer);

function run(view) {
  view.setClearColor(0xe5ede4, 1);
  view.shadowMap.enabled = true;
  view.shadowMap.type = T.PCFShadowMap;
  view.shadowMap.autoUpdate = false;
  view.localClippingEnabled = true;
  view.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
  viewport.append(view.domElement);

  const scene = new T.Scene();
  scene.fog = new T.Fog(0xe5ede4, 36, 63);
  const camera = new T.OrthographicCamera(-10, 10, 8, -8, .1, 100);
  const focus = new T.Vector3(0, .85, .50);
  const world = buildWorld(scene);
  const navigation = createNavigation(world.tiles);
  const squad = createSquad(navigation);
  const engineers = createSquad(navigation, { engineer: true });
  const base = createBase(world.home);
  const waves = createWaves();
  scene.add(waves.group);
  const effects = createEffects(scene);
  const pickSurfaces = [...world.terrain, ...world.deck];
  const cast = new T.Raycaster();
  const pointer = new T.Vector2();
  const spawn = world.tiles.get(key(1, 0)) ?? world.tiles.get(key(0, 0));
  const engineerSpawn = world.tiles.get(key(-1, 1)) ?? world.tiles.get(key(0, 1)) ?? spawn;
  const battle = createBattle({ world, navigation, squad, waves, base, effects, spawn, engineers, engineerSpawn });
  let angle = initialAngle;
  let zoom = 1;
  let selected = false;
  let selectedTeam = 'militia';
  let paused = false;
  let phase = 'menu', sceneryElapsed = 0, entranceProgress = 0, entranceAngle = initialAngle, entranceTurn = 0, entranceZoom = menuZoom;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const canPlay = () => phase === 'playing';
  const activeSquad = () => selectedTeam === 'engineers' ? engineers : squad;
  const activeOrders = () => selectedTeam === 'engineers' ? battle.engineerOrders : battle;
  const deployment = createDeployment({ reducedMotion });
  let confirmationAge = 1;
  const reachable = new Set();
  let hovered = null;
  let drag = null;
  const touches = new Map();
  let pinch = null;
  let previousTime = 0;
  let contextAvailable = true;
  let canvasWidth = 0;
  let canvasHeight = 0;
  let lastWaveStatus = '';

  scene.add(new T.HemisphereLight(0xf5fbf5, 0xcbdcda, 2.36));
  const sunlight = new T.DirectionalLight(0xffefd6, 1.60);
  sunlight.position.set(-7.8, 22, 9.3);
  sunlight.castShadow = true;
  sunlight.shadow.mapSize.set(2048, 2048);
  Object.assign(sunlight.shadow.camera, { left: -15, right: 15, top: 14, bottom: -14, near: .5, far: 48 });
  sunlight.shadow.bias = -.0003;
  sunlight.shadow.normalBias = .022;
  sunlight.shadow.radius = 4.5;
  scene.add(sunlight);
  scene.add(squad.group);
  scene.add(engineers.group);

  const terrainGrid = new T.Group();
  terrainGrid.name = '部署移动格';
  const gridShadow = deployment.tileMaterial(new T.MeshBasicMaterial({
    color: '#596641', transparent: true, opacity: .21, depthWrite: false, toneMapped: false,
  }));
  const quietFill = deployment.tileMaterial(new T.MeshBasicMaterial({
    color: '#f1f1c2', transparent: true, opacity: .32, depthWrite: false, toneMapped: false,
  }));
  const hoverFill = deployment.tileMaterial(new T.MeshBasicMaterial({
    color: '#dcf6c7', transparent: true, opacity: .89, depthWrite: false, toneMapped: false,
  }));
  const currentFill = deployment.tileMaterial(new T.MeshBasicMaterial({
    color: '#f0bc76', transparent: true, opacity: .72, depthWrite: false, toneMapped: false,
  }));
  const cream = new T.MeshBasicMaterial({ color: '#fff4d4', transparent: true, depthWrite: false, toneMapped: false });
  scene.add(terrainGrid);
  const hover = new T.Group();
  const order = new T.Group();
  const current = new T.Group();
  hover.name = '指向移动格'; order.name = '部署确认落点'; current.name = '当前部署格';
  scene.add(hover, order, current);
  const orderPin = new T.Group();
  orderPin.name = '部署确认标记';
  const pin = new T.Shape().moveTo(0, -.15).quadraticCurveTo(-.12, 0, -.12, .06)
    .quadraticCurveTo(-.12, .18, 0, .18).quadraticCurveTo(.12, .18, .12, .06)
    .quadraticCurveTo(.12, 0, 0, -.15);
  const pinBack = new T.Mesh(new T.ShapeGeometry(pin), new T.MeshBasicMaterial({ color: '#645848', transparent: true, depthWrite: false }));
  const pinFront = new T.Mesh(pinBack.geometry, cream);
  pinBack.renderOrder = 6;
  pinFront.renderOrder = 7;
  pinFront.position.set(0, .003, .006);
  pinFront.scale.setScalar(.82);
  orderPin.add(pinBack, pinFront);
  scene.add(orderPin);
  orderPin.visible = false;
  view.domElement.addEventListener('webglcontextlost', event => {
    event.preventDefault();
    contextAvailable = false;
    if (phase === 'menu') startButton.disabled = true;
    errorMessage.hidden = false;
  });
  view.domElement.addEventListener('webglcontextrestored', () => {
    errorMessage.hidden = true;
    contextAvailable = true;
    if (phase === 'menu') startButton.disabled = false;
    view.shadowMap.needsUpdate = true;
  });

  function refreshCamera() {
    const { width, height: viewportHeight } = viewport.getBoundingClientRect();
    if (!width || !viewportHeight) return;
    const aspect = width / viewportHeight;
    const framingWidth = width <= 620 ? 14.8 : 20.1;
    const framingHeight = T.MathUtils.clamp(32.8 / aspect, 16.4, 17.9);
    const span = Math.max(framingHeight, framingWidth / aspect) / zoom;
    camera.left = -span * aspect / 2;
    camera.right = span * aspect / 2;
    camera.top = span / 2;
    camera.bottom = -span / 2;
    camera.position.copy(focus).add(new T.Vector3(Math.sin(angle) * 25, 21, Math.cos(angle) * 25));
    camera.lookAt(focus);
    camera.updateProjectionMatrix();
    camera.updateMatrixWorld();
    if (width !== canvasWidth || viewportHeight !== canvasHeight) {
      canvasWidth = width;
      canvasHeight = viewportHeight;
      view.setSize(width, viewportHeight, false);
    }
    orderPin.quaternion.copy(camera.quaternion);
  }

  function clearGroup(group) {
    for (const child of group.children) child.geometry.dispose();
    group.clear();
  }

  function showMarker(group, tile, fill, lift, renderOrder) {
    clearGroup(group);
    if (tile) group.add(tilePad(tile, fill, .475, lift, renderOrder));
  }

  function buildMoveGrid() {
    const queue = [spawn];
    reachable.add(spawn);
    for (let i = 0; i < queue.length; i++) {
      const tile = queue[i];
      for (const neighbor of tile.neighbors) {
        if (reachable.has(neighbor)) continue;
        reachable.add(neighbor);
        queue.push(neighbor);
      }
    }
    for (const [material, half, lift, drawOrder] of [[gridShadow, .481, .020, 1], [quietFill, .468, .033, 2]]) {
      const pads = queue.map(tile => tilePadGeometry(tile, half, lift));
      const mesh = new T.Mesh(mergeGeometries(pads), material);
      mesh.renderOrder = drawOrder;
      terrainGrid.add(mesh);
      for (const pad of pads) pad.dispose();
    }
  }

  function setHovered(tile, overSquad = false) {
    if (hovered !== tile) {
      hovered = tile;
      showMarker(hover, tile, hoverFill, .045, 3);
    }
    view.domElement.classList.toggle('is-target', !!tile || overSquad);
  }

  function refreshSelection() {
    const { mode } = activeOrders().state, { result } = battle.state;
    squadButton.setAttribute('aria-pressed', String(selected && selectedTeam === 'militia'));
    engineerButton.setAttribute('aria-pressed', String(selected && selectedTeam === 'engineers'));
    inkUi.setSelection(selected && !result, selectedTeam);
    const count = activeSquad().members.filter(member => member.hp > 0).length;
    const deploying = selected && count > 0 && !result && ['field', 'moving', 'returning', 'approaching', 'extinguishing'].includes(mode);
    deployment.setActive(deploying, activeOrders().anchor);
    terrainGrid.visible = deployment.state.progress > 0;
    current.visible = terrainGrid.visible;
    hover.visible = terrainGrid.visible;
  }

  function select(value, team = selectedTeam) {
    if (value && !canPlay()) return;
    selectedTeam = team;
    selected = !!value && !battle.state.result && activeSquad().members.some(member => member.hp > 0 && !member.inside);
    if (selected) {
      const orders = activeOrders();
      const tile = navigation.tileAt(orders.anchor) ?? orders.state.settled;
      showMarker(current, tile, currentFill, .051, 4);
      setHovered(null);
    } else {
      // Keep the last hover mesh during the exit so it folds away with the board.
      hovered = null;
      view.domElement.classList.remove('is-target');
    }
    refreshSelection();
  }

  function updateDestination() {
    const { destination } = activeOrders().state;
    showMarker(order, destination, cream, .054, 5);
    confirmationAge = destination ? 0 : 1;
    orderPin.visible = !!destination;
    order.visible = !!destination;
    if (destination) {
      cream.opacity = pinBack.material.opacity = 1;
      orderPin.position.set(destination.x, height(destination.x, destination.z) + .39, destination.z);
    }
  }

  function issueMove(tile) {
    if (!selected || !reachable.has(tile) || !activeOrders().orderMove(tile)) return;
    updateDestination();
    select(false);
  }

  function tileUnder(event) {
    const rect = view.domElement.getBoundingClientRect();
    pointer.set((event.clientX - rect.left) / rect.width * 2 - 1, 1 - (event.clientY - rect.top) / rect.height * 2);
    cast.setFromCamera(pointer, camera);
    squad.group.updateMatrixWorld(true);
    engineers.group.updateMatrixWorld(true);
    const militiaHit = cast.intersectObjects(squad.targets, false)[0];
    const engineerHit = cast.intersectObjects(engineers.targets, false)[0];
    const unit = engineerHit && (!militiaHit || engineerHit.distance < militiaHit.distance)
      ? { ...engineerHit, team: 'engineers' } : militiaHit ? { ...militiaHit, team: 'militia' } : null;
    base.group.updateMatrixWorld(true);
    const home = !base.state.destroyed && cast.intersectObjects(base.targets, false)[0];
    if (home && (!unit || home.distance < unit.distance)) return { home: true };
    if (!unit && !selected) return {};
    const ground = cast.intersectObjects(pickSurfaces, false)[0];
    const obstacle = cast.intersectObjects(world.blockers, false)[0];
    const obstacleDistance = obstacle?.distance ?? Infinity;
    if (unit && unit.distance <= (ground?.distance ?? Infinity) && unit.distance < obstacleDistance) return { unit: unit.team };
    if (!ground || obstacleDistance < ground.distance - .045) return {};
    const column = world.deck.includes(ground.object) ? 0 : tileIndex(ground.point.x);
    const tile = world.tiles.get(key(column, tileIndex(ground.point.z)));
    return reachable.has(tile) ? { tile } : {};
  }

  function applyPointer(event) {
    if (!canPlay()) return;
    const { unit, tile, home } = tileUnder(event);
    if (home) {
      if (selected) {
        const accepted = selectedTeam === 'engineers' ? battle.engineerOrders.orderExtinguish() : battle.orderReturn();
        if (accepted) select(false);
      }
      else if (['entering', 'recovering', 'exiting'].includes(battle.state.mode)) {
        if (battle.orderReturn()) select(false);
      } else if (!base.state.replenishmentBlocked) select(true, 'militia');
      refreshSelection();
    } else if (unit) select(!(selected && selectedTeam === unit), unit);
    else if (tile && selected) issueMove(tile);
    else if (selected) select(false);
  }

  const canvas = view.domElement;
  function pinchDistance() {
    const [a, b] = touches.values();
    return a && b ? a.distanceTo(b) : 0;
  }

  canvas.addEventListener('contextmenu', event => { event.preventDefault(); select(false); });
  canvas.addEventListener('pointerdown', event => {
    if (!canPlay()) return;
    if (event.pointerType === 'touch') {
      touches.set(event.pointerId, new T.Vector2(event.clientX, event.clientY));
      canvas.setPointerCapture(event.pointerId);
      if (touches.size >= 2) {
        pinch = { distance: Math.max(1, pinchDistance()), zoom };
        drag = null;
        canvas.classList.remove('is-dragging');
        setHovered(null);
        return;
      }
    }
    if (drag || event.button !== 0) return;
    drag = { id: event.pointerId, x: event.clientX, y: event.clientY, angle, moved: false };
    canvas.setPointerCapture(event.pointerId);
  });
  canvas.addEventListener('pointermove', event => {
    if (!canPlay()) return;
    touches.get(event.pointerId)?.set(event.clientX, event.clientY);
    if (pinch) {
      const distance = pinchDistance();
      if (distance) {
        zoom = T.MathUtils.clamp(pinch.zoom * distance / pinch.distance, minZoom, 1.85);
        refreshCamera();
      }
      return;
    }
    if (drag && drag.id !== event.pointerId) return;
    if (drag) {
      const dx = event.clientX - drag.x;
      if (drag.moved || Math.hypot(dx, event.clientY - drag.y) > 5) {
        drag.moved = true;
        angle = drag.angle - dx * .009;
        canvas.classList.add('is-dragging');
        setHovered(null);
        refreshCamera();
      }
      return;
    }
    const { unit, tile, home } = tileUnder(event);
    setHovered(selected ? tile ?? null : null, unit || home);
  });
  function finishPointer(event, allowClick) {
    touches.delete(event.pointerId);
    if (pinch) {
      if (!touches.size) pinch = null;
      return;
    }
    if (drag?.id !== event.pointerId) return;
    const { moved } = drag;
    drag = null;
    canvas.classList.remove('is-dragging');
    if (allowClick && !moved) applyPointer(event);
  }
  canvas.addEventListener('pointerup', event => finishPointer(event, true));
  canvas.addEventListener('lostpointercapture', event => finishPointer(event, false));
  canvas.addEventListener('pointerleave', () => setHovered(null));
  canvas.addEventListener('wheel', event => {
    event.preventDefault();
    if (!canPlay()) return;
    zoom = T.MathUtils.clamp(zoom * Math.exp(-event.deltaY * .001), minZoom, 1.85);
    setHovered(null);
    refreshCamera();
  }, { passive: false });
  squadButton.addEventListener('click', () => select(!(selected && selectedTeam === 'militia'), 'militia'));
  engineerButton.addEventListener('click', () => select(!(selected && selectedTeam === 'engineers'), 'engineers'));
  document.querySelector('#wave-replay').addEventListener('click', () => {
    reset();
  });
  document.querySelector('#restart-battle').addEventListener('click', reset);
  function togglePause() {
    if (!canPlay() || battle.state.result) return;
    paused = !paused;
    inkUi.setPaused(paused);
  }
  pauseButton.addEventListener('click', togglePause);

  function refreshWaveStatus() {
    const { wave, waves: totalWaves } = waves.state;
    const text = `第 ${wave} / ${totalWaves} 波`;
    if (text === lastWaveStatus) return;
    lastWaveStatus = text;
    waveStatus.textContent = text;
  }

  function refreshBattleUi() {
    pauseButton.disabled = !!battle.state.result;
    for (const [team, button, counter] of [[squad, squadButton, '#squad-state'], [engineers, engineerButton, '#engineer-state']]) {
      const alive = team.members.filter(member => member.hp > 0);
      document.querySelector(counter).textContent = `${alive.length} / ${team.members.length}`;
      button.disabled = alive.length === 0 || !!battle.state.result;
      button.querySelectorAll('.pips i').forEach((pip, i) => {
        const member = team.members[i];
        pip.classList.toggle('is-dead', member.hp <= 0);
        pip.style.opacity = member.hp > 0 ? String(.35 + .65 * member.hp / member.maxHp) : '';
        pip.title = member.hp > 0 ? `${i === 0 ? '领队' : '队员'} · ${Math.ceil(member.hp)} / ${member.maxHp}` : '已阵亡';
      });
    }
    const work = document.querySelector('#engineer-work');
    work.hidden = !battle.engineerOrders.working;
    engineerButton.classList.toggle('is-working', battle.engineerOrders.working);
    work.querySelectorAll('i').forEach((fill, i) => {
      const member = engineers.members[i];
      fill.style.transform = `scaleX(${member.hp > 0 ? T.MathUtils.clamp(member.workProgress / balance.extinguishSeconds, 0, 1) : 0})`;
      fill.parentElement.classList.toggle('is-dead', member.hp <= 0);
    });
    const result = document.querySelector('#battle-result');
    result.hidden = !battle.state.result || battle.state.resultAge <
      (battle.state.result === 'won' ? balance.victoryDelay : balance.defeatDelay);
    if (battle.state.result) {
      document.querySelector('#result-title').textContent = battle.state.result === 'won' ? '村庄守住了' : '旗帜落下了';
      document.querySelector('#result-detail').textContent = battle.state.result === 'won'
        ? `击退全部 ${waves.state.waves} 波敌人 · 基地余血 ${Math.ceil(base.state.hp)}`
        : `基地已被绿色火焰吞没 · 击败 ${battle.state.kills} 只入侵者`;
    }
  }

  function rotate(amount) {
    if (!canPlay()) return;
    angle += amount;
    setHovered(null);
    refreshCamera();
  }
  const directionKeys = new Map([
    ['ArrowUp', [0, -1]], ['ArrowRight', [1, 0]], ['ArrowDown', [0, 1]], ['ArrowLeft', [-1, 0]],
  ]);
  window.addEventListener('keydown', event => {
    if (event.ctrlKey || event.altKey || event.metaKey) return;
    if (!canPlay()) {
      if (phase === 'menu' && event.code === 'Enter' && !event.repeat && !(event.target instanceof HTMLButtonElement)) {
        event.preventDefault(); startGame();
      }
      return;
    }
    if (event.code === 'Space' && !(event.target instanceof HTMLButtonElement)) {
      event.preventDefault();
      if (!event.repeat) togglePause();
      return;
    }
    if (event.key === 'Escape') select(false);
    if (event.key.toLowerCase() === 'q') rotate(-Math.PI / 4);
    if (event.key.toLowerCase() === 'e') rotate(Math.PI / 4);
    if (event.key === '1') select(true, 'militia');
    if (event.key === '2') select(true, 'engineers');
    const direction = directionKeys.get(event.key);
    if (!direction || !selected) return;
    event.preventDefault();
    const orders = activeOrders();
    const from = orders.state.destination ?? orders.state.settled;
    issueMove(world.tiles.get(key(from.column + direction[0], from.row + direction[1])));
  });
  new ResizeObserver(refreshCamera).observe(viewport);

  function reset() {
    sceneryElapsed = 0;
    paused = false;
    inkUi.setPaused(false);
    angle = initialAngle;
    zoom = phase === 'menu' ? menuZoom : 1;
    selectedTeam = 'militia';
    battle.reset();
    squad.group.visible = engineers.group.visible = waves.group.visible = phase !== 'menu';
    deployment.reset();
    view.domElement.style.filter = '';
    setHovered(null);
    updateDestination();
    showMarker(current, spawn, currentFill, .051, 4);
    select(false);
    refreshWaveStatus();
    view.shadowMap.needsUpdate = true;
    refreshCamera();
  }

  function finishEntrance() {
    phase = 'playing';
    game.dataset.screen = phase;
    startScreen.hidden = true;
    angle = initialAngle;
    zoom = 1;
    refreshCamera();
  }
  function startGame() {
    if (phase !== 'menu' || startButton.disabled) return;
    const previewTime = sceneryElapsed, previewAngle = angle, previewZoom = zoom;
    phase = 'entering';
    startButton.disabled = true;
    startScreen.inert = true;
    startScreen.setAttribute('aria-hidden', 'true');
    game.dataset.screen = phase;
    reset();
    sceneryElapsed = previewTime;
    entranceAngle = angle = previewAngle;
    entranceZoom = zoom = previewZoom;
    entranceTurn = Math.atan2(Math.sin(initialAngle - angle), Math.cos(initialAngle - angle));
    entranceProgress = 0;
    refreshCamera();
    if (reducedMotion) finishEntrance();
  }
  startButton.addEventListener('click', startGame);

  function animateScenery() {
    world.animateWater(sceneryElapsed);
    world.animateMeadow(sceneryElapsed);
    world.animateCanopy(sceneryElapsed);
  }
  function frame(time) {
    const dt = previousTime ? Math.min((time - previousTime) / 1000, .12) : 0;
    previousTime = time;
    if (contextAvailable) {
      if (!canPlay()) {
        // The menu has its own scenery clock; waves and combat have not started.
        sceneryElapsed += dt;
        if (phase === 'menu') angle = (angle + (reducedMotion ? 0 : dt * .028)) % (Math.PI * 2);
        else {
          entranceProgress = Math.min(1, entranceProgress + dt / .65);
          const blend = 1 - (1 - entranceProgress) ** 3;
          angle = entranceAngle + entranceTurn * blend;
          zoom = T.MathUtils.lerp(entranceZoom, 1, blend);
          if (entranceProgress === 1) finishEntrance();
        }
        refreshCamera();
        base.animate(sceneryElapsed, dt);
        if (phase !== 'menu') { squad.animateFlag(sceneryElapsed, dt); engineers.animateFlag(sceneryElapsed, dt); }
        animateScenery();
        view.shadowMap.needsUpdate = true;
        view.render(scene, camera);
        requestAnimationFrame(frame);
        return;
      }
      refreshSelection();
      const worldDt = deployment.update(dt, paused);
      sceneryElapsed += worldDt;
      battle.update(worldDt);
      if (selected && (battle.state.result || !activeSquad().members.some(member => member.hp > 0 && !member.inside))) select(false);
      view.shadowMap.needsUpdate = true;
      refreshSelection();
      const focusAmount = deployment.state.focus;
      view.domElement.style.filter = focusAmount > .0001
        ? `grayscale(${focusAmount * .94}) brightness(${1 - focusAmount * .10})` : '';
      confirmationAge += dt;
      const confirm = T.MathUtils.clamp(confirmationAge / .44, 0, 1);
      order.visible = orderPin.visible = confirmationAge < .44;
      cream.opacity = pinBack.material.opacity = 1 - T.MathUtils.smoothstep(confirm, .22, 1);
      orderPin.scale.setScalar(1 + Math.sin(confirm * Math.PI) * .13);
      refreshBattleUi();
      refreshWaveStatus();
      animateScenery();
      view.render(scene, camera);
    }
    requestAnimationFrame(frame);
  }

  buildMoveGrid();
  reset();
  startButton.disabled = false;
  requestAnimationFrame(frame);
}

function tilePadGeometry(tile, half, lift) {
  const positions = [];
  const radius = .17 * tileSize;
  const rim = half * tileSize - radius;
  const elevations = [[0, 0], [-rim, -rim], [-rim, rim], [rim, -rim], [rim, rim]]
    .map(([dx, dz]) => height(tile.x + dx, tile.z + dz));
  const subdivisions = Math.max(...elevations) - Math.min(...elevations) > .30 ? 3 : 2;
  const corners = [[rim, rim], [-rim, rim], [-rim, -rim], [rim, -rim]];
  const outline = corners.flatMap(([x, z], i) => Array.from({ length: 4 }, (_, j) => {
    const angle = i * Math.PI / 2 + j * Math.PI / 6;
    return [x + Math.cos(angle) * radius, z + Math.sin(angle) * radius];
  }));
  const sampled = new Map();
  function point([dx, dz]) {
    const id = key(dx, dz);
    if (!sampled.has(id)) {
      const x = tile.x + dx, z = tile.z + dz;
      sampled.set(id, [x, height(x, z) + lift, z]);
    }
    return sampled.get(id);
  }
  const midpoint = (a, b) => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
  function surface(a, b, c, depth) {
    if (!depth) {
      positions.push(...point(a), ...point(b), ...point(c));
      return;
    }
    const ab = midpoint(a, b), bc = midpoint(b, c), ca = midpoint(c, a);
    surface(a, ab, ca, depth - 1);
    surface(ab, b, bc, depth - 1);
    surface(ca, bc, c, depth - 1);
    surface(ab, bc, ca, depth - 1);
  }
  for (let i = 0; i < outline.length; i++) {
    surface([0, 0], outline[(i + 1) % outline.length], outline[i], subdivisions);
  }
  const geometry = new T.BufferGeometry();
  geometry.setAttribute('position', new T.Float32BufferAttribute(positions, 3));
  const centers = new Float32Array(positions.length), centerY = height(tile.x, tile.z) + lift;
  for (let i = 0; i < centers.length; i += 3) centers.set([tile.x, centerY, tile.z], i);
  geometry.setAttribute('deployCenter', new T.BufferAttribute(centers, 3));
  return geometry;
}

function tilePad(tile, material, half, lift, renderOrder) {
  const mesh = new T.Mesh(tilePadGeometry(tile, half, lift), material);
  mesh.renderOrder = renderOrder;
  return mesh;
}
