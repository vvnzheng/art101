/*
 * Author: Vivian Zheng
 * Created: December 1 2021
 * License: Public Domain
*/
//get the endpoint for the comic
//generates a random starting point for the website
var number = Math.floor(Math.random() * 2547) + 1;
//adds a slash to finish the url
var numberURL = number + "/";
//completes the url
var my_url = "https://xkcd.com/" + numberURL + "info.0.json";
//on click, moves to the previous comic
$("#prev").click(function(){
  //if you reach the very first comic, don't try to access an unexisting comic
  if(number > 1){
    number--;
  }
  //setup the url for the new number
  numberURL = number + "/";
  my_url = "https://xkcd.com/" + numberURL + "info.0.json";
  //formats the given url onto the website
  getAndPutData();
})
$("#next").click(function(){
  //if you reach the very last comic, don't try to access an unexisting comic
  if(number < 2548){
    number++;
  }
  //setup the url for the new number
  numberURL = number + "/";
  my_url = "https://xkcd.com/" + numberURL + "info.0.json";
  //formats the given url onto the website
  getAndPutData();
})
function getAndPutData(){
  //AJAX function
  $.ajax({
    //endpoint
    url: my_url,
    //data to send
    //data: { id: 123},
    //GET request
    type: "GET",
    //type we get back
    dataType: "json",
  })
  //if success, pass data back
  .done(function(comicObj){
    console.log("Success: ", comicObj.title, comicObj.img, comicObj.alt, comicObj.num);
    //output the comic title, image, and alt
    var imgTitle = comicObj.title;
    $("#title").html(imgTitle);
    var imgTag = "<img src=" + comicObj.img + ">";
    $("#img").html(imgTag);
    var imgAlt = comicObj.alt;
    $("#alt").html(imgAlt);
  })
  //if fail, send error
  .fail(function(request, error){
    console.log(request, error);
  })
}
getAndPutData();
