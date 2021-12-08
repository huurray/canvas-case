import { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
// hooks
import useCanvas from "./useCanvas";
// styles
import { Header } from "styles/ui";

const RubberBand = () => {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  const canvasRef = useRef<HTMLCanvasElement | any>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);

  const { animate } = useCanvas(ctx);

  function init() {
    if (!canvasRef?.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    setCtx(context);

    canvas.width = screenWidth;
    canvas.height = screenHeight;
  }

  useEffect(() => {
    if (!ctx) return;
    animate();
    // eslint-disable-next-line
  }, [ctx]);

  useEffect(() => {
    init();
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <Header />
      <canvas ref={canvasRef} />
    </Container>
  );
};

export default RubberBand;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.green};

  canvas {
    width: 100%;
    height: 100%;
    touch-action: none;
  }
`;
