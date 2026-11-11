import { Vector2 } from 'three';
import { height } from './world.js';

// Individual workers can use the narrow space beside a house that cannot hold a whole squad.
export function createServiceNavigation(canWalk) {
  const spacing = .25, key = (x, z) => `${x},${z}`;
  function clear(from, to) {
    const distance = from.distanceTo(to), steps = Math.max(1, Math.ceil(distance / .10));
    let previous = height(from.x, from.y);
    for (let i = 0; i <= steps; i++) {
      const t = i / steps, x = from.x + (to.x - from.x) * t, z = from.y + (to.y - from.y) * t;
      const y = height(x, z);
      if (!canWalk(x, z) || Math.abs(y - previous) > .18) return false;
      previous = y;
    }
    return true;
  }
  function nearest(point) {
    const x = Math.round(point.x / spacing), z = Math.round(point.y / spacing);
    const candidates = [];
    for (let dx = -2; dx <= 2; dx++) for (let dz = -2; dz <= 2; dz++) {
      const p = new Vector2((x + dx) * spacing, (z + dz) * spacing);
      if (canWalk(p.x, p.y) && clear(point, p)) candidates.push(p);
    }
    return candidates.sort((a, b) => a.distanceToSquared(point) - b.distanceToSquared(point))[0];
  }
  function route(from, to) {
    if (clear(from, to)) return [to.clone()];
    const start = nearest(from), goal = nearest(to);
    if (!start || !goal) return null;
    const minX = Math.floor((Math.min(from.x, to.x) - 3) / spacing), maxX = Math.ceil((Math.max(from.x, to.x) + 3) / spacing);
    const minZ = Math.floor((Math.min(from.y, to.y) - 3) / spacing), maxZ = Math.ceil((Math.max(from.y, to.y) + 3) / spacing);
    const goalId = key(Math.round(goal.x / spacing), Math.round(goal.y / spacing));
    const startId = key(Math.round(start.x / spacing), Math.round(start.y / spacing));
    const open = new Set([startId]), nodes = new Map([[startId, { p: start, cost: 0, parent: null }]]), done = new Set();
    while (open.size) {
      let id, best = Infinity;
      for (const candidate of open) {
        const node = nodes.get(candidate), estimate = node.cost + node.p.distanceTo(goal);
        if (estimate < best) { id = candidate; best = estimate; }
      }
      if (id === goalId) {
        const points = [to.clone()];
        for (let at = id; at; at = nodes.get(at).parent) points.unshift(nodes.get(at).p);
        const smooth = []; let at = from;
        while (points.length) {
          let next = points.length - 1;
          while (next > 0 && !clear(at, points[next])) next--;
          at = points[next]; smooth.push(at); points.splice(0, next + 1);
        }
        return smooth;
      }
      open.delete(id); done.add(id);
      const current = nodes.get(id), ix = Math.round(current.p.x / spacing), iz = Math.round(current.p.y / spacing);
      for (let dx = -1; dx <= 1; dx++) for (let dz = -1; dz <= 1; dz++) {
        if (!dx && !dz) continue;
        const x = ix + dx, z = iz + dz, nextId = key(x, z);
        if (x < minX || x > maxX || z < minZ || z > maxZ || done.has(nextId)) continue;
        const p = new Vector2(x * spacing, z * spacing);
        if (!clear(current.p, p)) continue;
        const cost = current.cost + current.p.distanceTo(p);
        if (cost >= (nodes.get(nextId)?.cost ?? Infinity)) continue;
        nodes.set(nextId, { p, cost, parent: id }); open.add(nextId);
      }
    }
    return null;
  }
  return { clear, route };
}
