export class Block {
  width;
  height;
  x;
  y;

  // 공을 추적 하기 위한 값
  maxX;
  maxY;

  constructor(width: number, height: number, x: number, y: number) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.maxX = width + x;
    this.maxY = height + y;
  }

  draw(ctx: CanvasRenderingContext2D | null) {
    if (ctx === null) return;

    ctx.fillStyle = "#ff384e";
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fill();
  }
}
