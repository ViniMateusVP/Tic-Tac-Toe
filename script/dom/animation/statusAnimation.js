const cellsData = document.querySelectorAll(".dataCell");

export function animateCells(indices, scale, duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      indices.forEach((index) => animateCell(cellsData[index], scale, 1));
      resolve();
    }, duration);
  });

  function animateCell(cell, scale, duration) {
    cell.style.transition = `all ${duration}s`;
    cell.style.transform = `scale(${scale})`;
  }
}