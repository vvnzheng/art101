/*
 * Author: Vivian Zheng
 * Created: November 22 2021
 * License: Public Domain
*/
//Created temporary string for output
result = ""
//Created function fizzBuzz with parameter to change the global string
function fizzBuzz(result){
  //for loop to run through 1-200
  for(i = 1; i <= 200; i++){
    //Created another temporary string to sort the numbers
    temp = "";
    //If the number is a multiple of three, add "Fizz" to the string
    if(i % 3 == 0){
      temp += "Fizz"
    }
    //If the number is a multiple of five, add "Buzz" to the string
    if(i % 5 == 0){
      temp += "Buzz"
    }
    //If the number is a multiple of seven, add "Boom" to the string
    if(i % 7 == 0){
      temp += "Boom"
    }
    //If the temporary string has either Fizz, Buzz, Boom, or any combination
    //of the three in it, add an exclamation and a new paragraph sign to the end
    //Otherwise, do not output any ending if the number is not valid according
    //to the three restraints of the game
    if(temp.length > 0){
      temp += "!<br>"
    }
    //Add the temporary string into the global string to create the full string
    //of the results of all 200 numbers
    result += temp;
  }
  //Output the results
  $("#output").html(result);
}
//Call the fizzBuzz function
fizzBuzz(result);
