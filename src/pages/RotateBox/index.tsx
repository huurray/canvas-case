import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import styled from "@emotion/styled";
// hooks
import useScreenSize from "hooks/useScreenSize";
import { Polygon } from "./Polygon";

function RotateBox() {
  const pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;
  const { screenWidth, screenHeight } = useScreenSize();

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [pointer, setPointer] = useState({ isDown: false, moveX: 0, offsetX: 0 });
  const polygon = useMemo(
    () => new Polygon(screenWidth / 2, screenHeight + screenHeight / 4, screenHeight / 1.5, 15),
    [screenWidth, screenHeight]
  );

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    setPointer((prev) => ({ ...prev, isDown: true, moveX: 0, offsetX: e.clientX }));
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!pointer?.isDown) return;
    setPointer((prev) => ({ ...prev, moveX: e.clientX - prev.offsetX, offsetX: e.clientX }));
  };

  const handlePointerUp = () => {
    setPointer((prev) => ({ ...prev, isDown: false }));
  };

  const resize = useCallback(() => {
    if (!canvasRef?.current) return;
    canvasRef.current.width = screenWidth * pixelRatio;
    canvasRef.current.height = screenHeight * pixelRatio;
    const ctx = canvasRef.current.getContext("2d");
    ctx?.scale(pixelRatio, pixelRatio);
  }, [pixelRatio, screenWidth, screenHeight]);

  const animate = useCallback(() => {
    if (!canvasRef?.current) return;
    const ctx = canvasRef.current.getContext("2d");
    ctx?.clearRect(0, 0, screenWidth, screenHeight);

    setPointer((prev) => ({ ...prev, moveX: prev.moveX * 0.92 }));

    polygon.animate(ctx, pointer.moveX);
  }, [polygon, screenWidth, screenHeight, pointer.moveX]);

  useEffect(() => {
    resize();
  }, [resize, screenWidth, screenHeight]);

  useEffect(() => {
    const raf = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(raf);
  }, [animate]);

  return (
    <Container>
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      />
    </Container>
  );
}

export default RotateBox;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.beige};

  canvas {
    width: 100%;
    height: 100%;
  }
`;
