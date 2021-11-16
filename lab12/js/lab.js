/*
 * Author: Vivian Zheng
 * Created: November 15 2021
 * License: Public Domain
*/
function sortingHat(str){
  length = 0;
  while(str){
    length++;
  }
  mod = length%4;
if(mod == 0){
  return "Gryffindor"
}
if(mod == 1){
  return "Ravenclaw"
}
if(mod == 2){
  return "Slytherin"
}
if(mod == 3){
  return "Hufflepuff"
}
}

$("#button").click(function(){
  house = sortingHat(name);
  var headingEl = document.getElementById("output");
  headingEl.innerHTML = "The Sorting Hat has sorted you into " + house + "!";
})
