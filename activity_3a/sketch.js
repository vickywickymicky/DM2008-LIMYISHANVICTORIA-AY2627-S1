// DM2008 — Activity 3a [Guided]
// Array Sampler (20 min)
//
// An array stores a list of values — here it's colors, but it could be
// sizes, positions, or anything else.
// Press any key to cycle through the array one item at a time.
//
// Try these:
// - Replace the colors with your own values (sizes, positions, text).
// - Use mousePressed() instead of keyPressed().
// - Use push() to add new items or splice() to remove them.
// - Loop through the whole array to draw all items at once.
//
// Stretch: visualize all items in the array simultaneously instead of one at a time.

let sizes = [40, 70, 100, 60, 90];
let currentIndex = 0;

function setup() {
  createCanvas(500, 500);
  noStroke();
}

function draw() {
  background(240);

  for (let i = 0; i < sizes.length; i++) {
    let x = 70 + i * 90;

    fill(80, 150, 220);

    // Every 3rd key press, draw rectangles,
    if (currentIndex % 3 == 0) {
      rectMode(CENTER);
      fill (245, 159, 228)
      rect(x, height / 2, sizes[i], sizes[i]);
    // else, it will draw circles
    } else {
      ellipse(x, height / 2, sizes[i]);
    }
  }
}

function keyPressed() {
  // Randomise all the sizes
  for (let i = 0; i < sizes.length; i++) {
    sizes[i] = random(30, 120);
  }

  // Count how many times a key has been pressed
  currentIndex++;
  if (currentIndex % 3 == 2) {
    console.log("Key press", currentIndex, "→ rectangles");
  } else {
    console.log("Key press", currentIndex, "→ circles");
  }
}