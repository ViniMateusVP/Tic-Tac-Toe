import { updatePlayerX, updatePlayerO } from "../dom/messages/scoreboard.js";

let player1Score = 0;
let player2Score = 0;

export function countPoint(player) {
  if (player === 0) {
    player1Score++;
    updatePlayerX(player1Score);
  } else {
    player2Score++;
    updatePlayerO(player2Score);
  }
  return { player1Score, player2Score };
}
