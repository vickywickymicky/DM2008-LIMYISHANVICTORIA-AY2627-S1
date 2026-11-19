// DM2008 — Activity 4b [Guided]
// Objects in Motion (50 min)
//
// You have a working Agent class to start with — your job is to bring it to life.
// Each agent moves, changes over time, and is drawn to the screen.
// Mouse click adds a new agent. C clears them all.
//
// Things to try:
// - Change the starting values (size, speed, color) to see what happens
// - Make agents bounce instead of wrap — what needs to change?
// - Add a second method to your class beyond update() and show()
//
// Stretch: give each agent a lifespan — shrink or fade it over time, then remove it.
// Hint: a backward loop lets you safely splice items while iterating.


 // DM2008 — Activity 4b
 // Objects in Motion

 let agents = [];
 const NUM_START = 12;

 function setup() {
   createCanvas(600, 400);
   noStroke();

   for (let i = 0; i < NUM_START; i++) {
     let x = random(width);
     let y = random(height);
     let sz = random(12, 36);
     let speedX = random(-2, 2);
     let speedY = random(-2, 2);

     agents.push(new Agent(x, y, sz, speedX, speedY));
   }
 }

 function draw() {
   background(230);

   for (let i = 0; i < agents.length; i++) {
     agents[i].update();
     agents[i].show();
   }
 }

 function mousePressed() {
   // Only add an agent when clicking inside the canvas
   if (mouseX >= 0 && mouseX <= width &&
       mouseY >= 0 && mouseY <= height) {

     let sz = random(16, 40);
     let speedX = random(-2, 2);
     let speedY = random(-2, 2);

     agents.push(new Agent(mouseX, mouseY, sz, speedX, speedY));
   }
 }

 function keyPressed() {
   if (key === "C" || key === "c") {
     agents = [];
   }
 }

 class Agent {
   constructor(x, y, sz, speedX, speedY) {
     this.x = x;
     this.y = y;
     this.sz = sz;
     this.dx = speedX;
     this.dy = speedY;

     // Colour and pulsing properties
     this.col = random(255);
     this.pulse = random(TWO_PI);
     this.displaySize = sz;
   }

   update() {
     // Move the agent
     this.x += this.dx;
     this.y += this.dy;

     // Gradually change its colour
     this.col = (this.col + 1) % 255;

     // Change its size over time
     this.pulse += 0.05;
     this.displaySize = this.sz + sin(this.pulse) * 5;

     // Check for bouncing
     this.bounce();
   }

   // Additional method: bounce off canvas edges
   bounce() {
     let radius = this.displaySize / 2;

     if (this.x + radius >= width) {
       this.x = width - radius;
       this.dx *= -1;
     }

     if (this.x - radius <= 0) {
       this.x = radius;
       this.dx *= -1;
     }

     if (this.y + radius >= height) {
       this.y = height - radius;
       this.dy *= -1;
     }

     if (this.y - radius <= 0) {
       this.y = radius;
       this.dy *= -1;
     }
   }

   show() {
     noStroke();
     fill(this.col, 150, 220);
     ellipse(this.x, this.y, this.displaySize);
   }
 }
