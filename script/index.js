const btnSinglePlayer = document.querySelector(".single-player");
const difficultyLevel = document.querySelector(".difficulty-level");
const optionsDifficuly = document.querySelectorAll(".difficulty-level p");

let checkViewDifficuly = false;

btnSinglePlayer.addEventListener("click", (e) => {
  e.preventDefault();
  difficultyLevel.style.display = "flex";
  checkViewDifficuly = true;
});

optionsDifficuly.forEach((option) => {
  option.addEventListener("click", () => {
    const difficulty = option.textContent.toLowerCase();
    window.location.href = `html/single-player.html?difficulty=${difficulty}`;
  });
});

function handleClickOutside(event) {
  if (
    !btnSinglePlayer.contains(event.target) &&
    !difficultyLevel.contains(event.target)
  ) {
    difficultyLevel.style.display = "none";
    checkViewDifficuly = false;
  }
}

document.addEventListener("click", handleClickOutside);
