/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Da'shawn Hardy
      Date:  10/17/25 

      Filename: project02-04.js
 */
 const CHICKEN_PRICE = 10.95;
 const HALIBUT_PRICE = 13.95;
 const BURGER_PRICE = 9.95;
 const SALMON_PRICE = 18.95;
 const SALAD_PRICE = 7.95;
 const SALES_TAX = 0.07;




// Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }
 document.getElementById("chicken").onclick = calcTotal;
 document.getElementById("halibut").onclick = calcTotal;
 document.getElementById("burger").onclick = calcTotal;
 document.getElementById("salmon").onclick = calcTotal;
 document.getElementById("salad").onclick = calcTotal;
 function calcTotal() {
    let cost = 0;
    let buyChicken = document.getElementById("chicken");
    let buyHalibut = document.getElementById("halibut");
    let buyBurger = document.getElementById("burger");
    let buySalmon = document.getElementById("salmon");
    let buySalad = document.getElementById("salad");

    cost += buyChicken.checked ? CHICKEN_PRICE : 0;
    cost += buyHalibut.checked ? HALIBUT_PRICE : 0;
    cost += buyBurger.checked ? BURGER_PRICE : 0;
    cost += buySalmon.checked ? SALMON_PRICE : 0;
    cost += buySalad.checked ? SALAD_PRICE : 0;

    document.getElementById("foodTotal").textContent = formatCurrency(cost);
    let tax = cost * SALES_TAX;
    document.getElementById("foodTax").textContent = formatCurrency(tax);
    let totalCost = cost + tax;
    document.getElementById("totalBill").textContent = formatCurrency(totalCost);
 }
