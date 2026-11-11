import { Vector2 } from 'three';
import { key, tileIndex, tileSize } from './world.js';

export function createNavigation(tiles) {
  const centers = new Map(Array.from(tiles.values(), tile => [tile, new Vector2(tile.x, tile.z)]));
  const tileAt = p => tiles.get(key(tileIndex(p.x), tileIndex(p.y)));
  const adjacent = (from, to) => !!from && from.neighbors.includes(to);

  function trace(from, to, offsetX, offsetZ) {
    const x0 = (from.x + offsetX) / tileSize, z0 = (from.y + offsetZ) / tileSize;
    const x1 = (to.x + offsetX) / tileSize, z1 = (to.y + offsetZ) / tileSize;
    let x = Math.floor(x0 + .5), z = Math.floor(z0 + .5);
    const endX = Math.floor(x1 + .5), endZ = Math.floor(z1 + .5);
    const dx = x1 - x0, dz = z1 - z0;
    const sx = Math.sign(dx), sz = Math.sign(dz);
    let current = tiles.get(key(x, z));
    if (!current) return false;
    while (x !== endX || z !== endZ) {
      const tx = x === endX ? Infinity : (x + sx * .5 - x0) / dx;
      const tz = z === endZ ? Infinity : (z + sz * .5 - z0) / dz;
      if (Math.abs(tx - tz) < 1e-9) {
        const acrossX = tiles.get(key(x + sx, z));
        const acrossZ = tiles.get(key(x, z + sz));
        const acrossBoth = tiles.get(key(x + sx, z + sz));
        if (!adjacent(current, acrossX) || !adjacent(current, acrossZ)
          || !adjacent(acrossX, acrossBoth) || !adjacent(acrossZ, acrossBoth)) return false;
        x += sx;
        z += sz;
        current = acrossBoth;
      } else {
        if (tx < tz) x += sx;
        else z += sz;
        const next = tiles.get(key(x, z));
        if (!adjacent(current, next)) return false;
        current = next;
      }
    }
    return true;
  }

  function clear(from, to, clearance = 0) {
    if (!trace(from, to, 0, 0)) return false;
    const dx = to.x - from.x, dz = to.y - from.y;
    const length = Math.hypot(dx, dz);
    if (!clearance || length < 1e-8) return true;
    const x = dz * clearance / length, z = -dx * clearance / length;
    return trace(from, to, x, z) && trace(from, to, -x, -z);
  }

  function softenCorners(start, waypoints, clearance) {
    const result = [];
    for (let i = 0; i < waypoints.length - 1; i++) {
      const corner = waypoints[i], before = waypoints[i - 1] ?? start, after = waypoints[i + 1];
      const trim = Math.min(.27 * tileSize, before.distanceTo(corner) * .23, after.distanceTo(corner) * .23);
      const enter = corner.clone().lerp(before, trim / before.distanceTo(corner));
      const leave = corner.clone().lerp(after, trim / after.distanceTo(corner));
      const arc = Array.from({ length: 5 }, (_, j) => {
        const t = j / 4;
        return enter.clone().lerp(corner, t).lerp(corner.clone().lerp(leave, t), t);
      });
      if (arc.every((point, j) => clear(arc[j - 1] ?? result.at(-1) ?? start, point, clearance))) {
        result.push(...arc);
      } else result.push(corner);
    }
    result.push(waypoints.at(-1));
    return result;
  }

  function route(from, to, clearance = .23 * tileSize, roundCorners = true) {
    if (clear(from, to, clearance)) return [to.clone()];
    const sourceCenter = centers.get(tileAt(from));
    if (!sourceCenter || !tileAt(to)) return null;
    const start = from.clone(), goal = to.clone();
    const candidates = [...centers.values()].filter(point => point.distanceToSquared(goal) > 1e-8);
    candidates.push(goal);
    const open = new Set([start]), visited = new Set();
    const cost = new Map([[start, 0]]), parent = new Map();
    while (open.size) {
      let current, best = Infinity;
      for (const point of open) {
        const estimate = cost.get(point) + point.distanceTo(goal);
        if (estimate < best) {
          current = point;
          best = estimate;
        }
      }
      if (current === goal) {
        const steps = [];
        for (let step = goal; step !== start; step = parent.get(step)) steps.unshift(step);
        return roundCorners ? softenCorners(start, steps, clearance) : steps;
      }
      open.delete(current);
      visited.add(current);
      for (const point of candidates) {
        if (visited.has(point) || current.distanceToSquared(point) < 1e-8) continue;
        const distance = cost.get(current) + current.distanceTo(point);
        if (distance >= (cost.get(point) ?? Infinity)) continue;
        const recenter = current === start && point === sourceCenter;
        if (!clear(current, point, clearance) && !(recenter && clear(current, point))) continue;
        cost.set(point, distance);
        parent.set(point, current);
        open.add(point);
      }
    }
    return null;
  }

  return { tileAt, clear, route };
}
