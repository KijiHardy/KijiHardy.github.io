"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-04

      Project to store high scores from a game in a cookie
      Author: Da'shawn Hardy
      Date:   

      Filename: project09-04.js
*/

/* Page Objects */
let bestText = document.getElementById("best");
let clockTimer = document.getElementById("timer");

// Custom event that runs when the puzzle is solved
window.addEventListener("puzzleSolved", updateRecord);

// Event listener that is run when the page loads
window.addEventListener("load", function () {

   // Check if cookie exists
   if (document.cookie) {
      let best = getBestTime();
      bestText.textContent = best + " seconds";
   }

});


/* Function to get best time from cookie */
function getBestTime() {

   if (document.cookie) {
      let cookieArray = document.cookie.split("=");
      let bestTime = parseInt(cookieArray[1]);
      return bestTime;
   } else {
      return 9999;
   }

}


/* Function to update record */
function updateRecord() {

   // Get current solution time
   let solutionTime = parseInt(clockTimer.value);

   // Get stored best time
   let bestTime = getBestTime();

   // Check if new time is better
   if (solutionTime < bestTime) {
      bestTime = solutionTime;

      // Update display
      bestText.textContent = bestTime + " seconds";

      // Store in cookie (90 days = 90*24*60*60 seconds)
      document.cookie = "puzzle8Best=" + bestTime + "; max-age=" + (90 * 24 * 60 * 60);
   }

}
