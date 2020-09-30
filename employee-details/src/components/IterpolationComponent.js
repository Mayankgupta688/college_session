import React from "react";

var userName = "Ankit";
var salutation = "Hello World.."
function getUserAge() {
    return 10
}

export default function IterpolationComponent() {
    return (
        <div>
            <h1>User Name: {userName}</h1>
            <h2>User Age: {getUserAge()}</h2>
            <h2>Addition of 1 + 1 is: { 1 + 1 }</h2>
            <h2>{salutation}</h2>
            <h2>Max Value from the Value Array: {Math.min(1, 2, 3, 4, 5)}</h2>
            <h3>Timer {new Date().getHours() + ": " + new Date().getMinutes() + ": " + new Date().getSeconds()}</h3>
        </div>
    )
}