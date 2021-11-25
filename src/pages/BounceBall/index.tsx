import { useCallback, useEffect, useMemo, useRef } from "react";
import styled from "@emotion/styled";
// hooks
import useScreenSize from "hooks/useScreenSize";
import { Ball } from "./Ball";
import { Block } from "./Block";

const BounceBall = () => {
  const ref = useRef<HTMLCanvasElement>(null);
  const { screenWidth, screenHeight } = useScreenSize();

  const ball = useMemo(
    () => new Ball(screenWidth, screenHeight, 60, 8),
    [screenWidth, screenHeight]
  );
  const block = useMemo(() => new Block(700, 30, 300, 450), []);

  const resize = useCallback(() => {
    if (!ref?.current) return;
    const ctx = ref.current.getContext("2d");
    const pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

    ref.current.width = screenWidth * pixelRatio;
    ref.current.height = screenHeight * pixelRatio;

    ctx?.scale(pixelRatio, pixelRatio);
  }, [screenWidth, screenHeight]);

  const animate = useCallback(() => {
    if (!ref?.current) return;
    const ctx = ref.current.getContext("2d");
    ctx?.clearRect(0, 0, screenWidth, screenHeight);

    window.requestAnimationFrame(animate);

    block.draw(ctx);
    ball.draw(ctx, screenWidth, screenHeight, block);
  }, [screenWidth, screenHeight, ball, block]);

  useEffect(() => {
    window.addEventListener("resize", resize, false);
    resize();

    return () => window.removeEventListener("resize", resize, false);
  }, [resize]);

  useEffect(() => {
    const raf = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(raf);
  }, [animate]);

  return (
    <Container>
      <canvas ref={ref} />
    </Container>
  );
};

export default BounceBall;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.beige};

  canvas {
    width: 100%;
    height: 100%;
  }
`;
