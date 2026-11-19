// DM2008 — Activity 2b [Guided]
// Pattern Making (40 min)
//
// Use a for loop to draw a repeating row of shapes.
// Add a condition to introduce variation — alternating color, size, or spacing.
// Then add one interaction (mouse or key) that changes the rule.
//
// Stretch: try a second row, or turn your row into a 2D grid.


function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(240);

  let spacing = 50;

  for (let y = 25; y < height; y += spacing) {

    for (let x = 25; x < width; x += spacing) {

      let shapeSize = 30;


        shapeSize = map(mouseX, 0, width, 10, 60);

        if ((x + y) % 100 === 0) {
          fill(180, 100, 220);
        } else {
          fill(80, 180, 220);
        }

        noStroke();
        ellipse(x, y, shapeSize);
      }
    }
  }