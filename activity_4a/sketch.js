// DM2008 — Activity 4a [Guided]
// Bake a Cookie (30 min)
//
// A class is a blueprint — Cookie describes what every cookie has and can do.
// Your job is to complete the class, then add movement and a flavor randomizer.
//
// Suggested order:
// 1. Add the missing properties to the constructor (sz, x, y)
// 2. Fix show() so it uses this.flavor, this.x, this.y, this.sz
// 3. Implement move() and randomFlavor()
// 4. Wire them up in keyPressed() and mousePressed()
//
// Stretch: add a second cookie with different starting values.

 
 // DM2008 — Activity 4a
 // Bake a Cookie

 let cookie;

 function setup() {
   createCanvas(400, 400);
   noStroke();

   cookie = new Cookie("chocolate", 80, width / 2, height / 2);
 }

 function draw() {
   background(230);

   // Check for movement continuously
   cookie.move();

   // Display the cookie
   cookie.show();
 }

 class Cookie {
   constructor(flavor, sz, x, y) {
     this.flavor = flavor;
     this.sz = sz;
     this.x = x;
     this.y = y;
   }

   show() {
     noStroke();

     // Cookie base colour
     switch (this.flavor) {
       case "chocolate":
         fill(196, 146, 96);
         break;

       case "vanilla":
         fill(255, 223, 150);
         break;

       case "strawberry":
         fill(255, 160, 180);
         break;

       default:
         fill(220, 180, 120);
     }

     // Draw cookie base
     ellipse(this.x, this.y, this.sz);

     // Chocolate cookie toppings
     if (this.flavor === "chocolate") {
       fill(80, 45, 25);

       circle(this.x - 15, this.y - 15, 10);
       circle(this.x + 18, this.y - 12, 10);
       circle(this.x, this.y + 8, 10);
       circle(this.x - 20, this.y + 15, 10);
       circle(this.x + 17, this.y + 20, 10);

     // Vanilla cookie toppings
     } else if (this.flavor === "vanilla") {
       fill(255, 250, 230);

       circle(this.x - 15, this.y - 15, 10);
       circle(this.x + 18, this.y - 12, 10);
       circle(this.x, this.y + 8, 10);
       circle(this.x - 20, this.y + 15, 10);
       circle(this.x + 17, this.y + 20, 10);

     // Strawberry cookie toppings
     } else if (this.flavor === "strawberry") {
       push();
       translate(this.x, this.y);

       strokeWeight(4);

       // White sprinkles
       stroke(255, 255, 255);
       line(-20, -15, -12, -10);
       line(15, 10, 22, 15);

       // Pink sprinkles
       stroke(230, 60, 100);
       line(10, -20, 17, -15);
       line(-15, 15, -8, 20);

       // Yellow sprinkles
       stroke(255, 220, 100);
       line(-5, 0, 3, 5);
       line(20, -5, 25, 0);

       pop();
       noStroke();
     }
   }

   // Move cookie using arrow keys
   move() {
     let speed = 3;

     if (keyIsDown(LEFT_ARROW)) {
       this.x -= speed;
     }

     if (keyIsDown(RIGHT_ARROW)) {
       this.x += speed;
     }

     if (keyIsDown(UP_ARROW)) {
       this.y -= speed;
     }

     if (keyIsDown(DOWN_ARROW)) {
       this.y += speed;
     }

     // Keep the cookie inside the canvas
     let radius = this.sz / 2;

     this.x = constrain(this.x, radius, width - radius);
     this.y = constrain(this.y, radius, height - radius);
   }

   // Randomly change the cookie flavour
   randomFlavor() {
     let flavors = ["chocolate", "vanilla", "strawberry"];

     // Choose a flavour different from the current one
     let newFlavors = flavors.filter(f => f !== this.flavor);

     this.flavor = random(newFlavors);
   }
 }

 // Prevent arrow keys from scrolling the page
 function keyPressed() {
   if (
     keyCode === LEFT_ARROW ||
     keyCode === RIGHT_ARROW ||
     keyCode === UP_ARROW ||
     keyCode === DOWN_ARROW
   ) {
     return false;
   }
 }

 // Change flavour when mouse is clicked
 function mousePressed() {
   cookie.randomFlavor();
 }
