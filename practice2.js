var prompt = require('prompt-sync')();

/*var name = prompt("Enter your name: ");
if (name === "Rahi"){
    console.log("Welcome!");
} else if (name === "Atikul"){
    console.log("Welcome!");
} else if (name === "Ramiz"){
    console.log("Welcome!");
} else {
    console.log("Sorry! We don't find you in the system")
}*/

/*var year = prompt("Enter year:");
if (year % 4 == 0){
    console.log("year is a leap year");
}else {
    console.log("not a leap year")
}*/

/*var item1 = Number(prompt("Enter the price of item 1: "));
var item2 = Number(prompt("Enter the price of item 2: "));
var item3 = Number(prompt("Enter the price of item 3: "));
var totalCost = item1 + item2 + item3;
var discount = 0;
if (totalCost > 50) {
    discount = 0.1;  
} else if (totalCost > 100) {
    discount = 0.2;  
}
var discountedCost = totalCost - (totalCost * discount);
console.log(discountedCost);*/

var prompt = require('prompt-sync')();
var mathScore = Number(prompt("Enter score of math:"));
var englishScore = Number(prompt("Enter score of english:"));
var scienceScore = Number(prompt("Enter score of science:"));
var average = (mathScore + englishScore + scienceScore) / 3;
if (mathScore > 60) {
    console.log("MATH: A");
}else {
    console.log("MATH: F");
}
if (englishScore > 60) {
    console.log("ENGLISH: A");
}else{
    console.log("ENGLISH: F");
}
if (scienceScore > 60) {
    console.log("SCIENCE: A");
}else{
    console.log("SCIENCE: F");
}
console.log(average);

