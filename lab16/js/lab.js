/*
 * Author: Vivian Zheng
 * Created: December 1 2021
 * License: Public Domain
*/
//get the endpoint for the comic
var my_url = "https://xkcd.com/info.0.json"
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
  console.log("Success: ", comicObj.title, comicObj.img, comicObj.alt);
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
