import { useEffect, useRef } from "react";
// lib
import { randomColor } from "lib/tools";
import { getMedia } from "lib/media";

export default function useCanvas(ctx: CanvasRenderingContext2D | null) {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  const media = getMedia();

  const pointRef = useRef({ x: screenWidth / 2, y: screenHeight / 2 });

  const colors = ["#e76f51", "#f4a261", "#e9c46a", "#2a9d8f", "#264653"];

  let particleLength = 25;
  if (media === "tablet") particleLength = 20;
  if (media === "phone") particleLength = 15;

  const particles = Array(particleLength)
    .fill(null)
    .map(
      (_) =>
        new (Particle as any)(
          screenWidth / 2,
          screenHeight / 2,
          Math.random() * 2 * 0.8,
          randomColor(colors)
        )
    );

  function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function Particle(x: number, y: number, radius: number, color: string) {
    let size = 60;
    if (media === "tablet") size = 35;
    if (media === "phone") size = 20;

    const distance = randomIntFromRange(size, size * 2.4);

    let radians = Math.random() * Math.PI * 2;
    let velocity = 0.05;
    let distanceFromCenter = {
      x: distance,
      y: distance,
    };
    let prevDistanceFromCenter = {
      x: distance,
      y: distance,
    };
    let lastMouse = { x, y };

    function update() {
      const lastPoint = { x, y };
      radians += velocity;

      // Move
      lastMouse.x += (pointRef.current.x - lastMouse.x) * 0.02;
      lastMouse.y += (pointRef.current.y - lastMouse.y) * 0.02;

      // Motion
      distanceFromCenter.x = prevDistanceFromCenter.x + Math.cos(radians);
      distanceFromCenter.y = prevDistanceFromCenter.x + Math.sin(radians);

      x = lastMouse.x + Math.cos(radians) * distanceFromCenter.x;
      y = lastMouse.y + Math.sin(radians) * distanceFromCenter.y;

      draw(lastPoint);
    }

    function draw(lastPoint) {
      if (!ctx) return;
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineWidth = radius;
      ctx.moveTo(lastPoint.x, lastPoint.y);
      ctx.lineTo(x, y);
      ctx.stroke();
      ctx.closePath();
    }

    return {
      update,
      draw,
    };
  }

  function animate() {
    if (!ctx) return;
    window.requestAnimationFrame(animate);

    particles.forEach((particle) => {
      particle.update();
    });
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
