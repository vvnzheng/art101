/*
 * Author: Vivian Zheng
 * Created: October 19 2021
 * License: Public Domain
*/

//Function and Array Declaration
var userName = prompt("Let me sort your name!", "Vivian").toLowerCase()
var nameSort
//if statement that omits whitespaces although unnecessary
if(userName.indexOf(' ')){
  userName = userName.replace(/\s/g, '')
  nameSort = userName.split("")
}
//splits the function
nameSort = userName.split("")
//Function description
function fun(name) {
    //Declare variable i
    var i
    //Sort array
    nameSort = nameSort.sort()
    //empty out userName
    userName = ""
    //for loop to put array back into string
    for(i = 0; i < nameSort.length; i++){
      userName += nameSort[i];
    }
  //return sorted name
  return userName
}

document.writeln("Here you are! Your sorted name: ", fun(nameSort), "!");
