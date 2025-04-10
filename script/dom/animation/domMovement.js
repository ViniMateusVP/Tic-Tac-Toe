const cellsData = document.querySelectorAll(".dataCell");

const playerX = document.querySelector(".data-X");
const playerO = document.querySelector(".data-O");

export function applyPlayerX(scale, contrast) {
  playerX.style.transition = "all 1s";
  playerX.style.transform = `scale(${scale}%)`;
  playerX.style.filter = `contrast(${contrast}%)`;
}

export function applyPlayerO(scale, contrast) {
  playerO.style.transition = "all 1s";
  playerO.style.transform = `scale(${scale}%)`;
  playerO.style.filter = `contrast(${contrast}%)`;
}

export async function applyCellsData(index, image) {
  cellsData[index].style.backgroundImage = image;
  cellsData[index].style.transition = "all 1s";
  cellsData[index].style.transform = "scale(100%)";
}