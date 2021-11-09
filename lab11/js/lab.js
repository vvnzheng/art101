/*
 * Author: Vivian Zheng
 * Created: November 8 2021
 * License: Public Domain
*/
//toggle the button in the challenge section to bold and purple large font
$("#challengeButton").click(function(){
  $("#first").toggleClass("special");
})
//toggle the button in the problem section to bold and purple large font
$("#problemButton").click(function(){
  $("#second").toggleClass("special");
})
//toggle the button in the result section to bold and purple large font
$("#resultButton").click(function(){
  $("#third").toggleClass("special");
})
//toggle the color of button2
$("#button1").click(function(){
  $("#button2").toggleClass("color1");
})
//toggle the color of button1
$("#button2").click(function(){
  $("#button1").toggleClass("color2");
})
