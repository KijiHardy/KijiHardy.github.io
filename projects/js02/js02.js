/*    JavaScript 7th Edition
      Chapter 2
      Chapter case

      Fan Trick Fine Art Photography
      Variables and functions
      Author: Da'shawn Hardy
      Date: 10/12/25  

      Filename: js02.js
 */
// global constants
const EMP_COST = 100;
const BOOK_COST = 350;
const REPRO_COST = 1250;
const TRAVEL_COST = 2;

      // setup form when page loads 
      window.addEventListener("load", setupForm);

// set form's default values
function setupForm(){
    document.getElementById("photoNum").value = 1;
    document.getElementById("photoHrs").value = 2;
    document.getElementById("makeBook").checked = false;
    document.getElementById("photoRights").checked = false;
    document.getElementById("photoDist").value = 0;
    getEstimate();

    // Add event handlers for each input contrtol
    document.getElementById("photoNum").onchange = getEstimate;
    document.getElementById("photoHrs").onchange = getEstimate
    document.getElementById("photoDist").onchange = getEstimate;
    document.getElementById("makeBook").onchange = getEstimate;
    document.getElementById("photoRights").onchange = getEstimate;
}

// To estimate the cotal cost
function getEstimate(){
    let totalCost = 0;
    let photographers = document.getElementById("photoNum").value;
    let hours = document.getElementById("photoHrs").value;
    let distance = document.getElementById("photoDist").value;
    let buyBook = document.getElementById("makeBook").checked;
    let buyRights = document.getElementById("photoRights").checked;

    // Add the cost of photographers for the hours covered
    totalCost += photographers * hours * EMP_COST;

    //Add the cost of distance per photographer per mile
    totalCost += photographers * distance * TRAVEL_COST;

    //Add bookCost and reproduction rights if checked
    totalCost += buyBook ? BOOK_COST : 0;
    totalCost += buyRights ? REPRO_COST : 0;
    document.getElementById("estimate").innerHTML = "$" + totalCost;
}