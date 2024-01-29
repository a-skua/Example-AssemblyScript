// The entry file of your WebAssembly module.

class Point {
  constructor(
    readonly x: i32,
    readonly y: i32,
  ) {}
}

export function newPoint(x: i32, y: i32): Point {
  return new Point(x, y);
}

export function pointX(p: Point): i32 {
  return p.x;
}

export function pointY(p: Point): i32 {
  return p.y;
}

export function pointToString(p: Point): string {
  return `P(x=${p.x}, y=${p.y})`;
}
