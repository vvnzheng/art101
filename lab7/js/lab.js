/*
 * Author: Vivian Zheng
 * Created: October 19 2021
 * License: Public Domain
*/

//Function and Array Declaration
var userName = prompt("Let me sort your name!", "Vivian")
function fun() {
  //make sure that input is not null
  if(userName != null){
    nameSort = new Array()
    //Declare variable i
    var i
    //Split string into array
    nameSort = userName.split("")
    //Sort array
    nameSort = nameSort.sort()
    //empty out userName
    userName = ""
    //for loop to put array back into string
    for(i = 0; i < nameSort.length; i++){
      userName += nameSort[i];
    }
  }
  //return sorted name
  return userName
}
document.writeln("Here you are! Your sorted name: ", fun(), "!");
