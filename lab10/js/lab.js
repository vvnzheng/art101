/*
 * Author: Vivian Zheng
 * Created: November 2 2021
 * License: Public Domain
*/

//Function and Array Declaration
var field = document.getElementById("user-name");
var name = field.value;
var nameSort
//Function description
function fun(name) {
    //splits the input by letters
    nameSort = name.split("")
    //Declare variable i
    var i
    //Sort array
    nameSort = nameSort.sort()
    //empty out userName
    name = ""
    //for loop to put array back into string
    for(i = 0; i < nameSort.length; i++){
      name += nameSort[i];
    }
  //return sorted name
  return name
}

function putNameInTitle() {
  // When the button is pushed,
  // prompt the user to input their name
  // with the prompt() function.
  //var name = prompt("Please enter your name:");
  var field = document.getElementById("user-name");
  var name = field.value;
  // Use this input to change the text from
  // ‘Hello, World!’ to ‘Hello’ + the user’s name
  var headingEl = document.getElementById("output");
  headingEl.innerHTML = "Hello, " + fun(name) + "!";
}

var buttonEl = document.getElementById("my-button");
buttonEl.addEventListener("click", putNameInTitle);
