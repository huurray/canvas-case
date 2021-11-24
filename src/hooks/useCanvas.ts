import { useEffect, useState } from "react";

export default function useCanvas(canvasRef: React.MutableRefObject<any>, animate: () => void) {
  const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
  const [stageWidth, setStageWidth] = useState(window.innerWidth);
  const [stageHeight, setStageHeight] = useState(window.innerWidth);

  function resize() {
    canvasRef.current.width = window.innerWidth * 2;
    canvasRef.current.height = window.innerHeight * 2;
    setStageWidth(window.innerWidth);
    setStageHeight(window.innerHeight);

    setCanvas(canvasRef.current);
    const newCtx = canvasRef.current.getContext("2d");
    setCtx(newCtx);
    newCtx.scale(2, 2);
  }

  function rafCallback() {
    window.requestAnimationFrame(rafCallback);
    animate();
  }

  useEffect(() => {
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (ctx) {
      window.requestAnimationFrame(rafCallback);
    }
    // eslint-disable-next-line
  }, [JSON.stringify(ctx)]);

  return {
    stageWidth,
    stageHeight,
    canvas,
    ctx,
  };
}
