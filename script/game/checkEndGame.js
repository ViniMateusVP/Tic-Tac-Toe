import { winGameAnimation } from "../game/statusGame.js";
import { winning } from "../data/gameCombinations.js";
import { animateCurrentPlayer } from "../ia/movement.js";
import { isBoardFull } from "../game/cellStates.js";
import { countPoint } from "../game/scoreboard.js";
import { renderRestart, renderWin, renderTie } from "../dom/messages/game.js";

export function checkWinLogic(cells) {
  for (const combination of winning) {
    const [a, b, c] = combination;
    if (
      !isNaN(parseInt(cells[a])) &&
      parseInt(cells[a]) === parseInt(cells[b]) &&
      parseInt(cells[a]) === parseInt(cells[c])
    ) {
      return { winner: cells[a], combination: [a, b, c] };
    }
  }
  if (isBoardFull()) {
    return { tie: true };
  }
  return null;
}

export async function checkWin(cells, player, message) {
  const result = checkWinLogic(cells);
  if (result?.winner !== undefined) {
    renderWin(message);
    await winGameAnimation(...result.combination);
    countPoint(result.winner);
    renderRestart();
    animateCurrentPlayer(player);
    return true;
  }
  if (result?.tie) {
    await renderTie();
    renderRestart();
  }
  
  animateCurrentPlayer(player);
}