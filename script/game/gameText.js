import { updateTextStyle } from "../dom/messages/text.js";

export function warningText(scale, duration, opacity, text) {
  return new Promise((resolve) => {
    setTimeout(() => {
      updateTextStyle(scale, opacity, text, 0.8);
      resolve();
    }, duration);
  });
}

export async function warningEmptySpace() {
  await warningText("100%", 500, 1, "Choose an empty space");
  await warningText("150%", 500, 0, "Choose an empty space");
}

export async function warningNotYourTime() {
  await warningText("100%", 500, 1, "It's not your time now!");
  await warningText("150%", 800, 0, "It's not your time now!");
}
