import { animateCurrentPlayer, iaMoves, makeMove } from "./ia/movement.js";
import { getBoardState, getCellValue } from "./game/cellStates.js";
import { isAnimationRunning } from "./game/statusGame.js";
import { checkWin } from "./game/checkEndGame.js";
import { warningNotYourTime, warningEmptySpace } from "./game/gameText.js";

let currentPlayer = 0,
  message;
const cells = document.querySelectorAll(".cell");

animateCurrentPlayer(currentPlayer);

cells.forEach((cell) => {
  cell.addEventListener("click", async () => {
    const index = cell.dataset.index;
    if (currentPlayer !== 0) {
      warningNotYourTime();
    } else if (getCellValue(index) !== null) {
      warningEmptySpace();
    } else if (getCellValue(index) === null && !isAnimationRunning) {
      await makeMove(index, 0, "url(../sources/images/icon_X_white.png)");
      message = currentPlayer === 0 ? "You Win" : "You Lose";
      await checkWin(getBoardState(), currentPlayer, message);
      currentPlayer = currentPlayer === 0 ? 1 : 0;
      animateCurrentPlayer(currentPlayer);

      await iaPlaying();

      message = currentPlayer === 0 ? "You Win" : "You Lose";
      await checkWin(getBoardState(), currentPlayer, message);
      currentPlayer = currentPlayer === 0 ? 1 : 0;
      animateCurrentPlayer(currentPlayer);
    }
  });
});

async function iaPlaying() {
  const index = await iaMoves();
  await makeMove(index, 1, "url(../sources/images/icon_O_white.png)");
}
