// DM2008 — Activity 1a
// Simple Creatures (20 min)

// Run the sketch, then click on the preview to enable keyboard
// Use the 'Option' ('Alt' on Windows) key to view or hide the grid
// Use the 'Shift' key to change overlays between black & white
// Write the code for your creature within the space provided

function setup() {
  createCanvas(600, 600);
  background(255);
  noStroke();

  let green = color(0, 160, 75);

  let x = 300;
  let y = 280;

  fill(green);

  arc(x - 60, y, 180, 180, PI, TWO_PI);
  rect(x - 150, y - 5, 90, 5);

  arc(x + 60, y, 180, 180, PI, TWO_PI);
  rect(x, y - 90, 60, 90);
  rect(x, y - 5, 150, 5);

  arc(x - 105, y + 10, 90, 90, 0, PI);
  rect(x - 150, y, 90, 10);

  arc(x - 45, y + 10, 90, 90, 0, PI);
  rect(x - 90, y, 45, 10);

  arc(x + 20, y + 40, 50, 50, PI, TWO_PI);
  rect(x - 5, y + 40, 50, 25);

  arc(x + 75, y + 40, 50, 50, PI, TWO_PI);
  rect(x + 50, y + 40, 50, 25);

  fill(255);

  rect(x - 5, y - 105, 10, 180);
  rect(x - 165, y - 5, 330, 10);
  rect(x - 60, y + 10, 55, 80);

  circle(x + 95, y - 45, 20);
  
  helperGrid(); // do not edit or remove this line
}
