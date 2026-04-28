"use strict";

/*  JavaScript 7th Edition
    Chapter 12
    Chapter case
 
    Bonsai Expressions FAQ 
    Author: 
    Date:   

    Filename: js12.js
*/

//Run when page is ready 
$( () => {
    
    //animate the h1 heading
    $("section > h1").css({
        fontsize: 0,
        opacity: 0
    })
    .animate({
        fontsize: "2.3em", 
        opacity: 1
    }, 600);

    //Reveal questions when page opens
    $("dl#faq")
    .hide()
    .effect("clip", {
        mode: "show",
        direction: "horizontal"
    }, 600);
    // add click events to each question in the FAQ
    $("dl#faq dt").click( e => {

        // alternate between hiding and showing the answer
        let question = $(e.target);
        let answer = $(question.next());

        $(question).toggleClass("hiddenAnswer");

        if($(question).hasClass("hiddenAnswer")){
            $(answer).slideUp(600);
        }else{
            $(answer).slideDown(600);
        }
    });
});