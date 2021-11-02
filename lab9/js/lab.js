/*
 * Author: Vivian Zheng
 * Created: November 1 2021
 * License: Public Domain
*/
//Created output node
var outputEl = document.getElementById("output")
//Created list parent node to make list
var node = document.createElement("LI")
//Created two children nodes
var new1El = document.createTextNode("Skateboards")
var new2El = document.createTextNode("Art")
//Append child nodes to parent node
node.appendChild(new1El)
//Append the nodes to the output in order to print
document.getElementById("output").appendChild(node)
//Repeat as before to get desired results
node = document.createElement("LI")
node.appendChild(new2El)
document.getElementById("output").appendChild(node)
