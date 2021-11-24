import { useRef } from "react";
import styled from "@emotion/styled";
// hooks
import useCanvas from "hooks/useCanvas";

function PopCircle({ radius = 60, speed = 15 }) {
  const canvasRef = useRef(null);
  const { stageWidth, stageHeight, ctx } = useCanvas(canvasRef, animate);

  let r = useRef(radius);
  let vx = useRef(speed);
  let vy = useRef(speed);
  let di = radius * 2;
  let x = useRef(Math.floor(di + (Math.random() * stageWidth - di)));
  let y = useRef(Math.floor(di + (Math.random() * stageHeight - di)));

  function animate() {
    if (!ctx) return;
    ctx.clearRect(0, 0, stageWidth, stageHeight);
    draw();
  }

  function draw() {
    if (!ctx) return;
    x.current += vx.current;
    y.current += vy.current;

    bounceWindow();

    ctx.fillStyle = "#fdd700";
    ctx.beginPath();
    ctx.arc(x.current, y.current, r.current, 0, 2 * Math.PI);
    ctx.fill();
  }

  function bounceWindow() {
    const minX = r.current;
    const maxX = stageWidth - r.current;
    const minY = r.current;
    const maxY = stageHeight - r.current;

    if (x.current <= minX || x.current >= maxX) {
      vx.current *= -1;
      x.current += vx.current;
    } else if (y.current <= minY || y.current >= maxY) {
      vy.current *= -1;
      y.current += vy.current;
    }
  }

  return (
    <Container>
      <canvas ref={canvasRef} />
    </Container>
  );
}

export default PopCircle;

const Container = styled.div`
  width: 100%;
  height: 100%;

  canvas {
    width: 100%;
    height: 100%;
  }
`;
