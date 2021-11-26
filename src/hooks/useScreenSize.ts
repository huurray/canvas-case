import { useEffect, useState } from "react";
import { debounce } from "lodash";

export default function useScreenSize(customResize?: Function) {
  const pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  const resize = debounce(() => {
    const newScreenWidth = window.innerWidth;
    const newScreenHeight = window.innerHeight;
    setScreenWidth(newScreenWidth);
    setScreenHeight(newScreenHeight);
    customResize && customResize();
  }, 300);

  useEffect(() => {
    if (!window) return;
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [resize]);

  return {
    screenWidth,
    screenHeight,
    pixelRatio,
  };
}
