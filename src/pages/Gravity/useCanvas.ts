// lib
import { randomColor } from "lib/tools";
import { getMedia } from "lib/media";

export default function useCanvas(ctx: CanvasRenderingContext2D | null) {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  const media = getMedia();

  const balls = init();

  function Ball() {
    const gravity = 0.2;
    const friction = 0.92;
    const colors = ["#cb997e", "#ddbea9", "#ffe8d6", "#b7b7a4", "#a5a58d"];

    let radius = randomIntFromRange(16, 40);
    let x = randomIntFromRange(radius, screenWidth - radius);
    let y = randomIntFromRange(0, screenHeight - radius);
    let dx = randomIntFromRange(-5, 5);
    let dy = randomIntFromRange(-3, 3);
    const color = randomColor(colors);

    if (media === "tablet") radius -= 7;
    if (media === "phone") radius -= 12;

    function randomIntFromRange(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function update() {
      if (y + radius + dy > screenHeight) {
        dy = -dy;
        dy = dy * friction;
        dx = dx * friction;
      } else {
        dy += gravity;
      }

      if (x + radius >= screenWidth || x - radius <= 0) {
        dx = -dx * friction;
      }

      x += dx;
      y += dy;

      draw();
    }

    function draw() {
      if (!ctx) return;

      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2, false);
      ctx.fillStyle = color;
      ctx.fill();
      ctx.closePath();
    }

    return { update, draw };
  }
  function animate() {
    if (!ctx) return;
    window.requestAnimationFrame(animate);

    ctx.fillStyle = "#6b705c";
    ctx.fillRect(0, 0, screenWidth, screenHeight);

    for (let i = 0; i < balls.length; i++) {
      balls[i].update();
    }
  }

  function init() {
    const newBalls: any = [];
    for (let i = 0; i < 200; i++) {
      newBalls.push(new (Ball as any)());
    }
    return newBalls;
  }

  return {
    animate,
  };
}
