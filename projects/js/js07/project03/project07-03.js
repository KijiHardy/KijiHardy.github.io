"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-03

      Project to create a New Year's Eve countdown clock
      Author: Da'shawn Hardy
      Date:   4/14

      Filename: project07-03.js
*/

let currentTime = document.getElementById("currentTime");
let daysLeftBox = document.getElementById("days");
let hrsLeftBox = document.getElementById("hours");
let minsLeftBox = document.getElementById("minutes");
let secsLeftBox = document.getElementById("seconds");

// Run countdown every 1000 milliseconds (1 second)
setInterval(countdown, 1000);

// Countdown function
function countdown() {

   // Current date and time
   let now = new Date();

   // Display current time
   currentTime.textContent = now.toLocaleString();

   // Create New Year date (base year doesn't matter, we reset it)
   let newYear = new Date("January 1, 2027");

   // Get next year
   let nextYear = now.getFullYear() + 1;

   // Set New Year to next year
   newYear.setFullYear(nextYear);

   // Time difference in milliseconds
   let timeDiff = newYear - now;

   // Convert to days
   let daysLeft = timeDiff / (1000 * 60 * 60 * 24);

   // Convert remaining time
   let hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24;
   let minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60;
   let secsLeft = (minsLeft - Math.floor(minsLeft)) * 60;

   // Display values (rounded down)
   daysLeftBox.textContent = Math.floor(daysLeft);
   hrsLeftBox.textContent = Math.floor(hrsLeft);
   minsLeftBox.textContent = Math.floor(minsLeft);
   secsLeftBox.textContent = Math.floor(secsLeft);
}
