const displayText = document.querySelector(".warning-text");

export function updateTextStyle(scale, opacity, text, duration) {
  displayText.style.opacity = opacity;
  displayText.textContent = text;
  displayText.style.transform = `scale(${scale})`;
  displayText.style.transition = `all ${duration}s`;
}