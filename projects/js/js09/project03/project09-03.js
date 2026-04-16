"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-03

      Project to retrieve date of last visit from web storage and mark new article
      Author: Da'shawn Hardy
      Date:   

      Filename: project09-03.js
*/

/* Page Objects */
let lastVisitDate = document.getElementById("lastVisitDate");
let articleDates = document.getElementsByClassName("posttime");

/* Check if previous visit exists */
if (localStorage.sbloggerVisit) {

   // Retrieve stored date
   let storedLastDate = localStorage.sbloggerVisit;

   // Display last visit date
   lastVisitDate.textContent = storedLastDate;

   // Convert to Date object
   let lastDate = new Date(storedLastDate);

   // Loop through articles
   for (let item of articleDates) {
      let articleDate = new Date(item.textContent);

      if (articleDate > lastDate) {
         item.innerHTML += " <strong>new</strong>";
      }
   }

} else {

   // First visit
   lastVisitDate.textContent = "Welcome to SBlogger!";

   // Mark all articles as new
   for (let item of articleDates) {
      item.innerHTML += " <strong>new</strong>";
   }
}

/* Update stored visit date */
let currentDate = new Date("9/12/2024");
localStorage.sbloggerVisit = currentDate.toLocaleDateString();


