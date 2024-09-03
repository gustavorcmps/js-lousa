function setup() {
  createCanvas(600, 600);
  background("white");
}

function draw() {
  
if (mouseIsPressed) {
  fill("blue")
  rect(mouseX, mouseY, 20, 35);
}

}
