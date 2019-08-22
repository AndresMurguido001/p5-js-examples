class Cell {
  constructor() {
    this.pos = createVector(random(width), random(height));
    this.r = 20;
  }

  move() {
    let vel = p5.Vector.random2D();
    this.pos.add(vel);
  }

  show() {
    ellipse(this.pos.x, this.pos.y, this.r, this.r);
  }
}
