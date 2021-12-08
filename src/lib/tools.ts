export function randomColor(colors: string[]) {
  return colors[Math.floor(Math.random() * colors.length)];
}

export function distance(x1, y1, x2, y2) {
  const x = x2 - x1;
  const y = y2 - y1;
  return Math.sqrt(x * x + y * y);
}
