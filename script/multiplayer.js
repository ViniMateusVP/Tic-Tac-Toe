import { warningEmptySpace } from "./dom/text.js";
import { checkWin } from "./game/checkEndGame.js";
import { animetionPlayer, makeMove } from "./dom/movement.js";
import { getCellsState, getIndex } from "./game/cellStates.js";
import { isAnimationRunning } from "./dom/statusGame.js";

let currentPlayer = 0;

const cells = document.querySelectorAll(".cell");

animetionPlayer(currentPlayer);

cells.forEach((cell) => {
  cell.addEventListener("click", async () => {
    const index = cell.dataset.index;
    if (getIndex(index) !== null) {
      warningEmptySpace();
      return;
    }
    if (isAnimationRunning) {
      return;
    }
    if (getIndex(index) === null) {
      if (currentPlayer === 0) {
        await makeMove(index, 0, "url(../sources/images/icon_X_white.png)");
      } else {
        await makeMove(index, 1, "url(../sources/images/icon_O_white.png)");
      }
    }
    const message = currentPlayer === 0 ? "Player X win" : "Player O win";
    await checkWin(getCellsState(), currentPlayer, message);
    currentPlayer = currentPlayer === 0 ? 1 : 0;
  });
});
