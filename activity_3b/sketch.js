// DM2008 — Activity 3b
// One Function Wonder (20 min)
//
// Write a function that draws a shape or group of shapes.
// It should take at least one parameter — try x, y, size, or color.
// Call it several times with different values to create variation.
//
// Ideas: a simple face, a flower, a house, an icon.
// Example: myShape(100, 200, 50); myShape(300, 200, 80);
//
// Stretch: call your function inside a for loop to create a repeating pattern.

function setup() {
  createCanvas(500, 500);
  noStroke();
}

function draw() {
  background(141, 217, 252);

  // Call the same custom function with different values
  flower(100, 150, 50, "pink");
  flower(200, 200, 60, "red");
  flower(300, 300, 30, "green");
  flower(370, 250, 40, "blue");
  flower(400, 380, 50, "pink");
  flower(130, 60, 30, "green");
  flower(280, 100, 40, "orange");
  flower(125, 360, 80, "orange");
  flower(400, 150, 40, "purple");
  flower(270, 410, 50, "red");
}

// Custom function
function flower(x, y, s, c) {

  // petals
  fill(c);
  ellipse(x, y - s / 2, s, s);
  ellipse(x, y + s / 2, s, s);
  ellipse(x - s / 2, y, s, s);
  ellipse(x + s / 2, y, s, s);

  // centre
  fill("yellow");
  ellipse(x, y, s, s);
}