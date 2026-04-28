"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-03

      Project to show a recipe with expanding/contracting content
      Author: 
      Date:    

      Filename: project12-03.js
*/

$(document).ready(function() {

   $("article > h2").click(function() {

      // Declare variables
      let heading = $(this);
      let list = heading.next();
      let headingImage = heading.children("img");

      // Toggle the list display
      list.slideToggle(500);

      // Change the image source
      let imgSrc = headingImage.attr("src");

      if (imgSrc === "plus.png") {
         headingImage.attr("src", "minus.png");
      } else {
         headingImage.attr("src", "plus.png");
      }

   });

});
