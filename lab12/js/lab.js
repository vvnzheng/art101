/*
 * Author: Vivian Zheng
 * Created: November 15 2021
 * License: Public Domain
*/
//Created function sortingHat to sort names
function sortingHat(name){
  //take the length of the given name and mod it by 4
  mod = name.length%4;
  //If the result is 0, return "Gryffindor"
  if(mod == 0){
    return "Gryffindor"
  }
  //If the result is 1, return "Ravenclaw"
  if(mod == 1){
    return "Ravenclaw"
  }
  //If the result is 2, return "Slytherin"
  if(mod == 2){
    return "Slytherin"
  }
  //If the result is 3, return "Hufflepuff"
  if(mod == 3){
    return "Hufflepuff"
  }
}
//When you click the button, sort the name
$("#button").click(function(){
  //Take in the input and store it in a variable
  var field = document.getElementById("input");
  var name = field.value;
  //Insert it as a parameter to the sortingHat function
  house = sortingHat(name);
  //Output the result into a sentence
  var headingEl = document.getElementById("output");
  headingEl.innerHTML = "The Sorting Hat has sorted you into " + house + "!";
})
