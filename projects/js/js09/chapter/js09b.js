"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Chapter case
      
      Eating Well in Season 
      Author: Da'shawn Hardy
      Date:   
      
      Filename: js09b.js
 */

      // Retrieve the text of the query string
      let qString = location.search.slice(1);

      //Replace the encoded characters in the query string
      qString = qString.replace(/\+/g, " ");
      qString = decodeURIComponent(qString);

      //split the field=name pairs into seperate array items
      let formData = qString.split(/&/g);

      for(let items of formData){
            //extract the field=name pairs into separate array items
            let fieldValuePair = items.split(/=/);
            let fieldName = fieldValuePair[0];
            let fieldValue = fieldValuePair[1];

            // Create a label containing the field name
            let fieldLabel = document.createElement("label");
            fieldLabel.textContent = fieldName;
            document.getElementById("contactInfo").appendChild(fieldLabel);

            //Create a disabled inpt box with the field value
            let inputBox = document.createElement("input");
            inputBox.id = fieldName;
            inputBox.name = fieldName;
            inputBox.value = fieldValue;
            inputBox.disabled = true;
            document.getElementById("contactInfo").appendChild(inputBox);
      }
      //console.log(qString);

      //store data to local storage after sign up
      document.getElementById("signupBtn").onclick = function(){
            //data to save
            let formFields = document.querySelectorAll(
                  "#contactInfo input, input[type=radio], textarea"
            )

            //write each name and value in storage
            for(let fields of formFields){
                  localStorage.setItem(fields.name, fields.value);
            }

            console.log(localStorage);
      }