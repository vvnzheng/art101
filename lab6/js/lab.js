/*
 * Author: Vivian Zheng
 * Created: October 19 2021
 * License: Public Domain
*/

//Variables
myTransport = ["skateboard", "bus", "car"];
myMainRide = {age: "1", build: "Cruiser", brand: "Sector 9", color: "blue", design: "skull"};

//Results
document.writeln("Types of ways I get around: " + myTransport + "<br>");
document.writeln("Description of my main ride: <pre>", JSON.stringify(myMainRide, null, '\t').fontcolor("blue"), "</pre>");
