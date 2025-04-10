import { iaAttackMoves, archAttackMoves, lastMoveToWin } from "./attack.js";
import { iaDefensesMoves, playerHasEdge } from "./defend.js";
import { getBoardState, containsValue, getCellValue } from "../game/cellStates.js";

export function iaModeEasy() {
  return randomCell();
}

export function iaModeMedium() {
  const board = getBoardState();

  if (!containsValue(0) && getCellValue(4) === null) return 4;

  const edgeMove = playerHasEdge(board);
  if (edgeMove !== null && getCellValue(edgeMove) === null) return edgeMove;

  return lastMoveToWin() || iaDefensesMoves(board) || iaAttackMoves() || randomCell();
}

export function iaModeHard() {
  const board = getBoardState();

  return (
    lastMoveToWin() ||
    iaDefensesMoves(board) ||
    (containsValue(0) && !containsValue(1) && getCellValue(4) === null && 4) ||
    archAttackMoves() ||
    randomCell()
  );
}

function randomCell() {
  let index;
  do {
    index = Math.floor(Math.random() * 9);
  } while (getCellValue(index) !== null);
  return index;
}
