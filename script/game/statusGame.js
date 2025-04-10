import { animateCells } from "../dom/animation/statusAnimation.js";
export let isAnimationRunning = false;

export async function winGameAnimation(a, b, c) {
  isAnimationRunning = true;

  const indices = [a, b, c];
  const animationSequence = [
    { scale: "100%", duration: 500 },
    { scale: "120%", duration: 500 },
    { scale: "100%", duration: 500 },
    { scale: "120%", duration: 500 },
    { scale: "100%", duration: 500 },
  ];

  for (const { scale, duration } of animationSequence) {
    await animateCells(indices, scale, duration);
  }

  isAnimationRunning = false;
}
