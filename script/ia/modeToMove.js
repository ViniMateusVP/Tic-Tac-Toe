import {
  iaAttackMoves,
  lastMoveToWin,
  findForkMove,
  findEmptyCorner,
} from "../ia/attack.js";
import { iaDefensesMoves, playerHasEdge } from "./defend.js";
import {
  getBoardState,
  containsValue,
  getCellValue,
} from "../game/cellStates.js";

export function iaModeEasy() {
  return randomCell();
}

export function iaModeMedium() {
  const moves = [
    lastMoveToWin(),
    iaDefensesMoves(getBoardState()),
    !containsValue(0) && getCellValue(4) === null ? 4 : null,
    playerHasEdge(getBoardState()),
    iaAttackMoves(),
  ];

  const selectedMove = moves.find(
    (move) => move !== null && move !== undefined && getCellValue(move) === null
  );

  return getCellValue(selectedMove) === null ? selectedMove : randomCell();
}

export function iaModeHard() {
  const moves = [
    lastMoveToWin(),
    findForkMove(),
    iaDefensesMoves(getBoardState()),
    containsValue(0) && !containsValue(1) && getCellValue(4) === null
      ? 4
      : null,
    findEmptyCorner(),
  ];

  const selectedMove = moves.find(
    (move) => move !== null && move !== undefined && getCellValue(move) === null
  );

  return getCellValue(selectedMove) === null ? selectedMove : randomCell();
}

function randomCell() {
  let index;
  do {
    index = Math.floor(Math.random() * 9);
  } while (getCellValue(index) !== null);
  return index;
}
