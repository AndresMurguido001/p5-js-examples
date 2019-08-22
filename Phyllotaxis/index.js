let n = 1;
let c = 4;

setup = () => {
  createCanvas(600, 600);
  background(0);
  colorMode(HSB);
  angleMode(DEGREES);
};

draw = () => {
  let a = n * 137.3;
  let r = c * sqrt(n);

  let x = r * cos(a) + width / 2;
  let y = r * sin(a) + height / 2;
  rotate(-0.01);
  fill(n % 256);
  noStroke();
  ellipse(x, y, 4, 4);
  n++;
  if (r > width / 4) {
    console.log("FINISH");
    noLoop();
  }
};
