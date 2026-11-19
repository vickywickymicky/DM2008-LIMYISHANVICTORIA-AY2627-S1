// DM2008 — Activity 5a [Guided]
// Colliding Circles (30 min)
//
// A vector stores position and movement together — cleaner than separate x and y variables.
// Your job is to get two balls moving, then detect and respond to their collision.
//
// Suggested order:
// 1. Create two Ball objects in setup()
// 2. Check the distance between them in draw()
// 3. Trigger a visual response when they collide
// 4. Implement edge behaviour in move() — wrap or bounce, your choice
//
// Stretch: add a third ball, or make the collision response affect both balls.

let balls = [];
let wasColliding = false;

function setup() {
  createCanvas(400, 300);
  
  // Create two balls at different starting positions
  balls.push(new Ball(100, 200));
  balls.push(new Ball(300, 200));
}

function draw() {
  background(0);

  // Move all balls first
  for (let i = 0; i < balls.length; i++) {
    balls[i].move();
  }

  // Check every ball against every other ball
  for (let i = 0; i < balls.length; i++) {
    for (let j = i + 1; j < balls.length; j++) {

      let d = dist(
        balls[i].pos.x,
        balls[i].pos.y,
        balls[j].pos.x,
        balls[j].pos.y
      );

      let colliding = d < balls[i].r + balls[j].r;

      if (colliding) {
        balls[i].changeColor();
        balls[j].changeColor();
      }
    }
  }

  // Show all balls
  for (let i = 0; i < balls.length; i++) {
    balls[i].show();
  }
}

class Ball {
  constructor(x, y) {
    // pos and vel are vectors — they store x and y together as one object
    this.pos = createVector(x, y);
    this.vel = createVector(random(-8, 8),random(-8, 8));
    this.r = 30;

    // Starting colour
    this.col = color(100, 180, 220);
  }

  move() {
     // Adding the velocity vector to position moves the ball each frame
    this.pos.add(this.vel);

    // Bounce off left and right edges
    if (this.pos.x + this.r > width) {
      this.pos.x = width - this.r;
      this.vel.x *= -1;
    }

    if (this.pos.x - this.r < 0) {
      this.pos.x = this.r;
      this.vel.x *= -1;
    }

    // Bounce off top and bottom edges
    if (this.pos.y + this.r > height) {
      this.pos.y = height - this.r;
      this.vel.y *= -1;
    }

    if (this.pos.y - this.r < 0) {
      this.pos.y = this.r;
      this.vel.y *= -1;
    }
  }

  changeColor() {
    this.col = color(random(255), random(255), random(255));
  }

  show() {
    fill(this.col);
    noStroke();

    ellipse(this.pos.x, this.pos.y, this.r * 2);
  }
}
