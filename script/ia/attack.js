import { winning, corner, arch } from "../data/gameCombinations.js";
import { getCellValue } from "../game/cellStates.js";

export function iaAttackMoves() {
  if (isFirstMove()) {
    return firstMoveIA();
  }

  if (getCellValue(4) === 1 && hasEdge()) {
    return findCornerMove();
  }

  return findWinningMove() || findEmptyCorner() || null;
}

function firstMoveIA() {
  const availableArchs = arch.filter(([a]) => getCellValue(a) === null);
  if (availableArchs.length === 0) return null;

  const randomArch =
    availableArchs[Math.floor(Math.random() * availableArchs.length)];
  return randomArch[0];
}

function findCornerMove() {
  return corner.find(([a]) => getCellValue(a) === 1)?.[0] ?? null;
}

function findOpositeCorner() {
  for (const [first] of arch) {
    if (getCellValue(first) === 1) {
      if (first === 0 && getCellValue(8) === null) {
        return 8;
      } else if (first === 2 && getCellValue(6) === null) {
        return 6;
      } else if (first === 6 && getCellValue(2) === null) {
        return 2;
      } else if (first === 8 && getCellValue(0) === null) {
        return 0;
      }
    }
  }
  return null;
}

export function findEmptyCorner() {
  let index = findOpositeCorner();

  if (index === null) {
    index = corner.find(([a, b, c]) => {
      if (
        getCellValue(a) === null &&
        getCellValue(b) !== 0 &&
        getCellValue(c) !== 0
      ) {
        return a;
      }
    });

    return index ? index[0] : null;
  }
  
  return index;
}

function findWinningMove() {
  for (const [a, b, c] of winning) {
    if (
      getCellValue(a) === 1 &&
      getCellValue(b) === 1 &&
      getCellValue(c) == null
    )
      return c;
    if (
      getCellValue(a) === 1 &&
      getCellValue(b) == null &&
      getCellValue(c) === 1
    )
      return b;
    if (
      getCellValue(a) == null &&
      getCellValue(b) === 1 &&
      getCellValue(c) === 1
    )
      return a;
  }
  return null;
}

export function findForkMove() {
  const emptyCells = [0, 1, 2, 3, 4, 5, 6, 7, 8].filter(
    (i) => getCellValue(i) === null
  );

  for (const cell of emptyCells) {
    let threats = 0;
    for (const [a, b, c] of winning) {
      const line = [getCellValue(a), getCellValue(b), getCellValue(c)];
      if (line.filter((v) => v === 1).length === 2 && line.includes(null)) {
        threats++;
      }
    }
    if (threats >= 2) return cell;
  }
  return null;
}

function isFirstMove() {
  return [...Array(9).keys()].every((index) => getCellValue(index) == null);
}

export function lastMoveToWin() {
  return findWinningMove();
}

export function hasEdge() {
  return corner.some(
    ([a, b, c]) =>
      getCellValue(a) === 1 && getCellValue(b) !== 0 && getCellValue(c) !== 0
  );
}
