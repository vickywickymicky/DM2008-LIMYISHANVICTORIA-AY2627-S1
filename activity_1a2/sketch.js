// DM2008 — Activity 1a
// Simple Creatures (20 min)

// Run the sketch, then click on the preview to enable keyboard
// Use the 'Option' ('Alt' on Windows) key to view or hide the grid
// Use the 'Shift' key to change overlays between black & white
// Write the code for your creature within the space provided

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(153);
  stroke(0);
  strokeWeight(2);
  fill(0);
  ellipse(200, 200, 150, 150);
  ellipse(125, 125, 80, 80);
  ellipse(275, 125, 80, 80);
  fill(161, 6, 6);
  arc(200,200,150,150,0, PI, CHORD);
  fill(237, 177, 26);
  ellipse(175, 230, 20, 35);
  ellipse(226, 230, 20, 35);
  
  
  helperGrid(); // do not edit or remove this line
}
