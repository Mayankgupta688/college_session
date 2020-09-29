var header = document.getElementById("applicationHeader");

header.style.border = "1px solid red";
header.style.padding = "10px";
header.style.textAlign = "center";
header.style.fontSize = "40px";
header.style.backgroundColor = "grey";

var colorArray = ["red", "yellow", "blue", "green"]
var counter = 0;

setInterval(function() {
    document.getElementById("applicationHeader").style.color = colorArray[counter];
    counter = (counter + 1) % 4
}, 200)

setTimeout(function() {
    header.style.color = "red";
}, 4000)

setTimeout(function() {
    header.style.color = "green";
}, 8000)

setTimeout(function() {
    header.style.color = "orange";
}, 12000)

setInterval(function() {
    document.getElementById("applicationHeader").textContent = 
        `Current Timer: ${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()} `

    document.getElementById("otherContent").textContent = 
        `Current Timer: ${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()} `
}, 1000)