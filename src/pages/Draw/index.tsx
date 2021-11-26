import { useCallback, useEffect, useRef, useState } from "react";
import useScreenSize from "hooks/useScreenSize";

const RotateBox = () => {
  const { screenWidth, screenHeight, pixelRatio } = useScreenSize();

  const canvasRef = useRef<HTMLCanvasElement | any>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | any>(null);
  const ctx = ctxRef.current;

  const [isDrawing, setIsDrawing] = useState(false);

  const resize = useCallback(() => {
    const canvas = canvasRef.current;
    canvas.width = screenWidth * pixelRatio;
    canvas.height = screenHeight * pixelRatio;
    canvas.style.width = `${screenWidth}px`;
    canvas.style.height = `${screenHeight}px`;

    const context = canvas.getContext("2d");
    context.scale(pixelRatio, pixelRatio);
    ctxRef.current = context;
  }, [pixelRatio, screenWidth, screenHeight]);

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    ctx?.beginPath();
    ctx?.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    ctx?.closePath();
    setIsDrawing(false);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = nativeEvent;
    ctx?.lineTo(offsetX, offsetY);
    ctx?.stroke();
  };

  useEffect(() => {
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [resize]);

  return (
    <canvas
      ref={canvasRef}
      onMouseDown={startDrawing}
      onMouseUp={finishDrawing}
      onMouseMove={draw}
    />
  );
};

export default RotateBox;
