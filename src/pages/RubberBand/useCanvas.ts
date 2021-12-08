import { useEffect, useRef } from "react";
// lib
import { getMedia } from "lib/media";
import { distance } from "lib/tools";

export default function useCanvas(ctx: CanvasRenderingContext2D | null) {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  const media = getMedia();

  const BOUNCE = 0.92;
  const detect = useRef(10);
  const isDown = useRef(false);
  const pointRef = useRef({ x: -5000, y: -5000 });

  const strings = init();

  function lineCircle(x1, y1, x2, y2, cx, cy, r) {
    const lineLength = distance(x1, y1, x2, y2);
    const p = (cx - x1) * (x2 - x1) + (cy - y1) * (y2 - y1);
    const point = p / Math.pow(lineLength, 2);
    const px = x1 + point * (x2 - x1);
    const py = y1 + point * (y2 - y1);
    return !!(distance(px, py, cx, cy) < r);
  }

  function RubberBand(pos) {
    const middleX = (pos.x2 - pos.x1) / 2 + pos.x1;
    const middleY = (pos.y2 - pos.y1) / 2 + pos.y1;
    const bandColor = "#F3CE6F";
    const mouseColor = "#e76f51";

    const points = [
      {
        x: pos.x1,
        y: pos.y1,
        ox: pos.x1,
        oy: pos.y1,
        vx: 0,
        vy: 0,
      },
      {
        x: middleX,
        y: middleY,
        ox: middleX,
        oy: middleY,
        vx: 0,
        vy: 0,
      },
      {
        x: pos.x2,
        y: pos.y2,
        ox: pos.x2,
        oy: pos.y2,
        vx: 0,
        vy: 0,
      },
    ];

    function draw() {
      if (!ctx) return;
      ctx.beginPath();
      ctx.fillStyle = mouseColor;
      ctx.arc(pointRef.current.x, pointRef.current.y, 20, 0, Math.PI * 2, false);
      ctx.fill();

      ctx.beginPath();
      ctx.strokeStyle = bandColor;

      if (media === "tablet") {
        ctx.lineWidth = 9;
      } else if (media === "phone") {
        ctx.lineWidth = 8;
      } else {
        ctx.lineWidth = 12;
      }

      if (
        lineCircle(
          points[0].x,
          points[0].y,
          points[2].x,
          points[2].y,
          pointRef.current.x,
          pointRef.current.y,
          detect.current
        )
      ) {
        detect.current = 300;
        let tx = (points[1].ox + pointRef.current.x) / 2;
        let ty = pointRef.current.y;
        points[1].vx = tx - points[1].x;
        points[1].vy = ty - points[1].y;
      } else {
        detect.current = 10;
        let tx = points[1].ox;
        let ty = points[1].oy;
        points[1].vx += tx - points[1].x;
        points[1].vx *= BOUNCE;
        points[1].vy += ty - points[1].y;
        points[1].vy *= BOUNCE;
      }

      points[1].x += points[1].vx;
      points[1].y += points[1].vy;

      let prevX = points[0].x;
      let prevY = points[0].y;

      ctx.moveTo(prevX, prevY);

      for (let i = 0; i < points.length; i++) {
        const cx = (prevX + points[i].x) / 2;
        const cy = (prevY + points[i].y) / 2;

        ctx.quadraticCurveTo(prevX, prevY, cx, cy);

        prevX = points[i].x;
        prevY = points[i].y;
      }

      ctx.lineTo(prevX, prevY);
      ctx.stroke();
    }

    return { draw };
  }

  function animate() {
    if (!ctx) return;
    window.requestAnimationFrame(animate);
    ctx.clearRect(0, 0, screenWidth, screenHeight);

    if (strings.length > 0) {
      for (let i = 0; i < strings.length; i++) {
        strings[i].draw();
      }
    }
  }

  function init() {
    const newStrings: any = [];
    let paddingVertical = 100;
    if (media === "tablet") paddingVertical = 50;
    if (media === "phone") paddingVertical = 30;

    for (let i = 0; i < 1; i++) {
      newStrings.push(
        new (RubberBand as any)({
          x1: paddingVertical,
          y1: screenHeight / 2,
          x2: screenWidth - paddingVertical,
          y2: screenHeight / 2,
        })
      );
    }
    return newStrings;
  }

  function onUp() {
    isDown.current = false;
    pointRef.current.x = -5000;
    pointRef.current.y = -5000;
  }

  function onMove(e) {
    if (isDown.current) {
      pointRef.current.x = e.clientX;
      pointRef.current.y = e.clientY;
    }
  }

  function onDown(e) {
    isDown.current = true;
    pointRef.current.x = e.clientX;
    pointRef.current.y = e.clientY;
  }

  useEffect(() => {
    window.addEventListener("pointerup", onUp);
    return () => window.addEventListener("pointerup", onUp);
  }, []);

  useEffect(() => {
    window.addEventListener("pointermove", onMove);
    return () => window.addEventListener("pointermove", onMove);
  }, []);

  useEffect(() => {
    window.addEventListener("pointerdown", onDown);
    return () => window.addEventListener("pointerdown", onDown);
  }, []);

  return {
    animate,
  };
}
