import { useEffect, useState } from "react";
import { debounce } from "lodash";

export default function useScreenSize() {
  const [screenWidth, setScreenWidth] = useState(document.body.clientWidth);
  const [screenHeight, setScreenHeight] = useState(document.body.clientHeight);

  const resize = debounce(() => {
    const newScreenWidth = document.body.clientWidth;
    const newScreenHeight = document.body.clientHeight;
    setScreenWidth(newScreenWidth);
    setScreenHeight(newScreenHeight);
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
  };
}
