import { winning, corner, arch } from "../data/gameCombinations.js";

export function iaDefensesMoves(cells) {
  for (const [a, b, c] of winning) {
    if (cells[a] === 0 && cells[b] === 0 && cells[c] === null) return c;
    if (cells[a] === 0 && cells[b] === null && cells[c] === 0) return b;
    if (cells[a] === null && cells[b] === 0 && cells[c] === 0) return a;
  }
  return checkStrategicPatterns(cells);
}

export function checkStrategicPatterns(cells) {
  let count = 0;
  for (const [first] of arch) {
    if (cells[first] === 0) {
      count++;
      if (count >= 2) return getRandomCrossPosition(cells);
    }
  }
}

function getRandomCrossPosition(cells) {
  const available = [1, 3, 5, 7].filter((pos) => cells[pos] === null);
  return available.length
    ? available[Math.floor(Math.random() * available.length)]
    : null;
}

export function playerHasEdge(cells) {
  return corner.find(([a]) => cells[a] === 0)?.[0] ?? null;
}
