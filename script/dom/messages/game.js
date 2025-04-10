import { warningText } from "../../game/gameText.js";
import { resetBoardState } from "../../game/cellStates.js";

const cellsData = document.querySelectorAll(".dataCell");

export function renderRestart() {
  resetBoardState();
  cellsData.forEach((cell) => {
    cell.style.backgroundImage = "none";
    cell.style.transform = "scale(200%)";
  });
}

export async function renderWin(message) {
  warningText("100%", 700, 1, message);
  warningText("150%", 1700, 0, message);
}

export async function renderTie() {
  await warningText("100%", 500, 1, "Game Tied");
  await warningText("150%", 1000, 0, "Game Tied");
}