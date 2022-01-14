function setup() {
  createCanvas(1920, 1080);
  background(0);
}

function draw() {
  if (mouseIsPressed) {
    fill(random(255),random(255),random(255));
  } else {
    fill(125,37,206);
  }
  circle(mouseX,mouseY,100,100);
}
