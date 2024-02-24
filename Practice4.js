var mat= [
    [2, 7, 89, 6],
    [90, 45,3, 7],
    [78, 56, 4, 2]]
var oneD = []
for (var i=0; i<mat.length;i++){
    for (var j=0; j<4;j++){
        oneD.push(mat[i][j])
    }
}
console.log("Final 1D array", oneD)

var prompt = require('prompt-sync')();
var ar = []
var oddEven = []
for (var i=0;i<5;i++){
    var a = Number(prompt("Enter number:", i))
    ar.push(a)
    if (a%2 == 0){
        oddEven.push("even")
    }else{
        oddEven.push("odd")
    }
}
console.log(ar)
console.log(oddEven)

var mat= [ [1, 2, 3],
[4, 5, 6],
[7, 8, 9] ]
var oneP = []
for (var i=0; i<mat.length;i++){
    for (var j=0; j<3;j++){
        console.log(mat[i][j]+1)
        oneP.push(mat[i][j]+1)
    }
}
console.log("Final 1D array", oneP)

var prompt = require('prompt-sync')();
var ar = []
for (var i=0;i<5;i++){
    var a = Number(prompt("Enter number:", i))
    ar.push(a)
}
console.log(ar)
console.log(ar.sort())