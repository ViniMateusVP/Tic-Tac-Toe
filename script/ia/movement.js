import { iaModeEasy, iaModeMedium, iaModeHard } from "./modeToMove.js";
import { applyPlayerX, applyPlayerO, applyCellsData } from "../dom/animation/domMovement.js";
import { updateCell } from "../game/cellStates.js";

const urlParams = new URLSearchParams(window.location.search);
const difficultyLevel = urlParams.get("difficulty");

export function animateCurrentPlayer(player) {
  if (player === 0) {
    applyPlayerX(120, 100);
    applyPlayerO(100, 0);
  } else {
    applyPlayerO(120, 100);
    applyPlayerX(100, 0);
  }
}

export async function makeMove(index, player, image) {
  updateCell(index, player);
  applyCellsData(index, image);
}

export function iaMoves() {
  const iaStrategies = {
    easy: iaModeEasy,
    medium: iaModeMedium,
    hard: iaModeHard,
  };

  return new Promise((resolve) => {
    setTimeout(() => {
      const move = iaStrategies[difficultyLevel]?.();
      resolve(move);
    }, Math.random() * 500 + 500);
  });
}
