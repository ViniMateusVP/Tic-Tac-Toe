import { checkWin } from "./game/checkEndGame.js";
import { animateCurrentPlayer, makeMove } from "./ia/movement.js";
import { getBoardState, getCellValue } from "./game/cellStates.js";
import { isAnimationRunning } from "./game/statusGame.js";
import { warningEmptySpace } from "./game/gameText.js";

let currentPlayer = 0;

const cells = document.querySelectorAll(".cell");

animateCurrentPlayer(currentPlayer);

cells.forEach((cell) => {
  cell.addEventListener("click", async () => {
    const index = cell.dataset.index;
    if (getCellValue(index) !== null) {
      warningEmptySpace();
      return;
    }
    if (isAnimationRunning) {
      return;
    }
    if (getCellValue(index) === null) {
      if (currentPlayer === 0) {
        await makeMove(index, 0, "url(../sources/images/icon_X_white.png)");
      } else {
        await makeMove(index, 1, "url(../sources/images/icon_O_white.png)");
      }
    }
    const message = currentPlayer === 0 ? "Player X win" : "Player O win";
    await checkWin(getBoardState(), currentPlayer, message);
    currentPlayer = currentPlayer === 0 ? 1 : 0;
  });
});
