var prompt = require('prompt-sync')();
var num1 = Number(prompt("Enter First number:"))
var num2 = Number(prompt("Enter second number:"))
var sum = 0
for(i= num1; i<=num2; i++){
    sum = sum + i
}
console.log("Sum is:",sum)

var i = 2
var sum = 0
for (; i<500; i=i+2){
    sum = sum + i
}
console.log("The sum of all even umber under 500 is",sum)

var i = 1
var sum = 0
for (; i<500; i=i+2){
    sum = sum + i
}
console.log("The sum of all even umber under 500 is",sum)

var a = 3
var d = 5
var n = 100
var nth_term = a + (n - 1) * d
var sum = 0
for (var i=a; i<=498; i=i+5){
    sum = sum + i
}
console.log("100th term:", nth_term)
console.log("The sum of the series up to the 100th term is",sum)