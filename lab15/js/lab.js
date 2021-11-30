/*
 * Author: Vivian Zheng
 * Created: November 29 2021
 * License: Public Domain
*/
var my_url = "https:/numbersapi.com/7/math"
$("#activate").click(function(){
$.ajax({
  //endpoint
  url: my_url,
  //data to send
  //data: { id: 123},
  //GET request
  type: "GET",
  //type we get back
  //dataType: "json",
})
//if success, pass data back
.done(function(data){
  console.log("Success: ", data);
  $("#output").html(data);
})
//if fail, send error
.fail(function(request, error){
  console.log(request, error);
})
})
