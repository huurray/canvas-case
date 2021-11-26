import { useEffect, useRef } from "react";
import useScreenSize from "hooks/useScreenSize";

const RotateBox = () => {
  const { screenWidth, screenHeight, pixelRatio } = useScreenSize(resize);

  const canvasRef = useRef<HTMLCanvasElement | any>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | any>(null);
  const ctx = ctxRef.current;

  function resize() {
    const canvas = canvasRef.current;
    canvas.width = screenWidth * pixelRatio;
    canvas.height = screenHeight * pixelRatio;
    canvas.style.width = `${screenWidth}px`;
    canvas.style.height = `${screenHeight}px`;

    const context = canvas.getContext("2d");
    context.scale(pixelRatio, pixelRatio);
    ctxRef.current = context;
  }

  function draw({ nativeEvent }) {
    const { offsetX, offsetY } = nativeEvent;
    ctx.fillStyle = "#fdd700";
    ctx.beginPath();
    ctx.arc(offsetX, offsetY, 10, 0, 2 * Math.PI);
    ctx.fill();
  }

  useEffect(() => {
    resize();
    // eslint-disable-next-line
  }, []);

  return <canvas ref={canvasRef} onMouseDown={draw} />;
};

export default RotateBox;
