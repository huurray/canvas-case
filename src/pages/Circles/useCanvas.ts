import { useEffect, useRef } from "react";
// lib
import { getMedia } from "lib/media";

export default function useCanvas(ctx: CanvasRenderingContext2D | null) {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  const media = getMedia();

  const pointRef = useRef({ x: screenWidth / 2, y: screenHeight / 2 });

  let colors = [
    { r: 255, g: 71, b: 71 },
    { r: 0, g: 206, b: 237 },
    { r: 255, g: 255, b: 255 },
  ];

  function Particle(x: number, y: number, dx: number, dy: number, r: number, ttl: number) {
    let opacity = 1;
    let timeToLive = ttl;
    const randomColor = Math.floor(Math.random() * colors.length);

    function update() {
      if (!ctx) return;
      x += dx;
      y += dy;

      if (x + r >= screenWidth || x - r <= 0) dx = -dx;
      if (y + r >= screenHeight || y - r <= 0) dy = -dy;

      x = Math.min(Math.max(x, 0 + r), screenWidth - r);
      y = Math.min(Math.max(y, 0 + r), screenHeight - r);

      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2, false);
      ctx.strokeStyle =
        "rgba(" +
        colors[randomColor].r +
        "," +
        colors[randomColor].g +
        "," +
        colors[randomColor].b +
        "," +
        opacity +
        ")";
      ctx.fillStyle =
        "rgba(" +
        colors[randomColor].r +
        "," +
        colors[randomColor].g +
        "," +
        colors[randomColor].b +
        "," +
        opacity +
        ")";
      ctx.stroke();
      ctx.closePath();

      opacity -= 1 / (ttl / 0.1);
      r -= r / (ttl / 0.1);

      if (r < 0) r = 0;

      timeToLive -= 0.1;
    }

    function remove() {
      return timeToLive <= 0;
    }

    return { update, remove };
  }

  function Explosion(x: number, y: number) {
    const particles: any = [];
    const randomVelocity = {
      x: (Math.random() - 0.5) * 3.5,
      y: (Math.random() - 0.5) * 3.5,
    };

    let r = 90;
    if (media === "tablet") r = 70;
    if (media === "phone") r = 50;

    let ttl = 15;
    if (media === "tablet") ttl = 11;
    if (media === "phone") ttl = 8;

    const newParticle = new (Particle as any)(x, y, randomVelocity.x, randomVelocity.y, r, ttl);
    particles.push(newParticle);

    function draw() {
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();

        if (particles[i].remove()) {
          particles.splice(i, 1);
        }
      }
    }

    return { draw };
  }

  let explosions: any = [];

  function animate() {
    if (!ctx) return;
    window.requestAnimationFrame(animate);

    ctx.fillStyle = "#14213d";
    ctx.fillRect(0, 0, screenWidth, screenHeight);

    const newExplosion = new (Explosion as any)(pointRef.current.x, pointRef.current.y);
    explosions.push(newExplosion);

    for (let i = 0; i < explosions.length; i++) {
      explosions[i].draw();
    }
  }

  function onChangePoint(e) {
    pointRef.current.x = e.clientX;
    pointRef.current.y = e.clientY;
  }

  useEffect(() => {
    window.addEventListener("mousemove", onChangePoint);
    return () => window.addEventListener("mousemove", onChangePoint);
  }, []);

  useEffect(() => {
    window.addEventListener("onClick", onChangePoint);
    return () => window.addEventListener("onClick", onChangePoint);
  }, []);

  return {
    animate,
  };
}
