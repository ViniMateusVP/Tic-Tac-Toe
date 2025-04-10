const renderPlayerX = document.querySelector(".player_1");
const renderPlayerO = document.querySelector(".player_2");

export function updatePlayerX(playerX) {
  renderPlayerX.textContent = `${playerX}`;
}

export function updatePlayerO(playerO) {
  renderPlayerO.textContent = `${playerO}`;
}
