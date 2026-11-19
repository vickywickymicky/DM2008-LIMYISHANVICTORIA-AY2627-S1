// DM2008 — Activity 2a [Guided]
// Mode Switch (20 min)
//
// Keys 1, 2, 3 switch between modes — each one changes the background color.
// Try extending each mode to also change the fill, size, or speed of the ellipse.
// Keep it simple: one clear change per mode that's easy to see on screen.
//
// Stretch: add a 4th mode, or make the ellipse change shape between modes.

let x = 0;
let y = 200;
let size = 50;

let speedX = 2;
let speedY = 2;

let mode = 1;
let bgColor;

function setup() {
  createCanvas(600, 400);
  bgColor = color(230);
}


function draw() {
  background(bgColor);

  // mode 1 
  if (mode === 1) {

    fill(255, 180, 100);
    noStroke();

    // circle
    ellipse(x, height / 2, size);

    // speed
    x += 2; 
  }

    
  // mode 2 
  else if (mode === 2) {

    fill(100, 220, 150);
    noStroke();

    // square
    rectMode(CENTER);
    rect(x, y, size, size);

    // faster movement
    x += 5;
    y += speedY;

    // bounce vertically
    if (y > height - size / 2 || y < size / 2) {
      speedY *= -1;
    }
  }

    
  // mode 3 
  else if (mode === 3) {

    fill(random(150, 255), random(100, 255), random(100, 255));

    stroke(255);
    strokeWeight(2);

    // triangle
    triangle(
      x,
      y - size / 2,

      x - size / 2,
      y + size / 2,

      x + size / 2,
      y + size / 2
    );

    // faster movement + randomness
    x += 4;
    y += random(-10,10)
  }

    
  // mode 4 
  else if (mode === 4) {

    fill(180, 120, 255);
    noStroke();

    // size changes depending on mouse
    let mouseSize = map(mouseX, 0, width, 20, 120);

    ellipse(mouseX, mouseY, mouseSize);
  }


  // wrap object based on where mouse is 
  if (x > width + size) {
    x = -size;
  }

  if (y > height) {
    y = height;
  }

  if (y < 0) {
    y = 0;
  }
}


// mode switch

function keyPressed() {
 switch (key) {

    case "1":
      mode = 1;
      bgColor = color(255, 230, 200);
// reset position
      x = 0;
      y = height / 2;
      break;

    case "2":
      mode = 2;
      bgColor = color(190, 240, 210);
      break;

    case "3":
      mode = 3;
      bgColor = color(40, 40, 60);
      break;

    case "4":
      mode = 4;
      bgColor = color(220, 210, 255);
      break;

    default:
      mode = 1;
      bgColor = color(230);
  }
}