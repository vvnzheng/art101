/*
 * Author: Vivian Zheng
 * Created: October 26 2021
 * License: Public Domain
*/

//Array declaration
tempArray = [0, 1, 2, 3, 4];

//Function that multiplies given parameter by three
function multiplyByThree(x){
    var result = x * 3;
    return result;
}

console.log("What's 5 * 3?");
//Multiplies five, the given parameter, by three
console.log("Ans:", multiplyByThree(5));

console.log("If given the following array, ", tempArray,
"what is the result if multiplied by three?");
//Multiplies tempArray by 3
console.log("Ans: ", tempArray.map(multiplyByThree));

console.log("What is the result of the same array divided by two?");
//Divides tempArray by 2
console.log("Ans: ", tempArray.map(function(x){return x/2}));
