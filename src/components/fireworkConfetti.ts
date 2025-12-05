import confetti from 'canvas-confetti';

export function fireworkConfetti() {
  const duration = 900;
  const animationEnd = Date.now() + duration;
  const defaults = {
    startVelocity: 35,
    spread: 360,
    ticks: 60,
    zIndex: 9999,
    colors: ["#00eaff", "#7f5cff", "#00ffa6", "#fff700", "#ff3c6e"],
    shapes: ["circle" as const],
    scalar: 1.1,
    origin: { y: 0.6 }
  };

  function randomInRange(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function() {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      clearInterval(interval);
      return;
    }

    confetti({
      ...defaults,
      particleCount: randomInRange(40, 70),
      angle: randomInRange(55, 125),
      origin: { x: 0.5, y: 0.6 }
    });
    confetti({
      ...defaults,
      particleCount: randomInRange(40, 70),
      angle: randomInRange(235, 305),
      origin: { x: 0.5, y: 0.6 }
    });
  }, 200);
}
