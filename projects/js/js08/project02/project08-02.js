"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-02

      Project to add balls bouncing within a container
      Author: 
      Date:   

      Filename: project08-02.js
*/

/*---------------- CONSTANTS ---------------------*/
const BALL_RADIUS = 60; // radius of the ball in pixels
const BOX_HEIGHT = 400; // height of the container in pixels
const BOX_WIDTH = 800;  // width of the container in pixels

/*--------------- Object Code --------------------*/
// Container object
let box = {
   width: BOX_WIDTH,
   height: BOX_HEIGHT,
   xpos: 0,
   ypos: 0
};

// Ball constructor
function Ball(size) {
   this.radius = size;
   this.xpos = null;
   this.ypos = null;
   this.xvelocity = null;
   this.yvelocity = null;
}

// Move ball within container
Ball.prototype.moveWithin = function(container) {

   let ballTop = this.ypos;
   let ballLeft = this.xpos;
   let ballBottom = this.ypos + this.radius;
   let ballRight = this.xpos + this.radius;

   // Vertical bounce
   if (ballTop < 0 || ballBottom > container.height) {
      container.ypos += this.yvelocity;
      this.yvelocity = -this.yvelocity;
   }

   // Horizontal bounce
   if (ballLeft < 0 || ballRight > container.width) {
      container.xpos += this.xvelocity;
      this.xvelocity = -this.xvelocity;
   }

   // Move ball
   this.ypos += this.yvelocity;
   this.xpos += this.xvelocity;
};






/*---------------Interface Code -----------------*/

// Reference to the container box
let boxImage = document.getElementById("box");
boxImage.style.width = BOX_WIDTH + "px";
boxImage.style.height = BOX_HEIGHT + "px";
boxImage.style.top = "0px";
boxImage.style.left = "0px"

// Reference to the Add Ball button
let addBall = document.getElementById("addBall");

addBall.onclick = function() {
      
   let ballImage = document.createElement("div");
   ballImage.className = "ball";
   ballImage.style.width = BALL_RADIUS + "px";
   ballImage.style.height = BALL_RADIUS + "px";
   ballImage.style.left = (BOX_WIDTH - BALL_RADIUS)/2 + "px";
   ballImage.style.top = (BOX_HEIGHT - BALL_RADIUS)/2 + "px";
   
   // Append the ball image to the box
   boxImage.appendChild(ballImage);     
   
   // Create ball object
   let newBall = new Ball(BALL_RADIUS);

   // Center the ball
   newBall.xpos = (BOX_WIDTH - BALL_RADIUS)/2;
   newBall.ypos = (BOX_HEIGHT - BALL_RADIUS)/2;

   // Random velocity
   newBall.xvelocity = rand(-10, 10);
   newBall.yvelocity = rand(-10, 10);

   // Animate movement
   window.setInterval(function() {

      newBall.moveWithin(box);

      // Move ball image
      ballImage.style.top = newBall.ypos + "px";
      ballImage.style.left = newBall.xpos + "px";

      // Move container (shake effect)
      boxImage.style.top = box.ypos + "px";
      boxImage.style.left = box.xpos + "px";

   }, 25);
};


/* Function to return a random value between minVal and maxValue */
function rand(minVal, maxVal) {
   let size = maxVal - minVal + 1;
   return minVal + size*Math.random();
}