let cell;

setup = () => {
  createCanvas(400, 400);
  cell = new Cell();
};

draw = () => {
  background(51);
  cell.move();
  cell.show();
};
