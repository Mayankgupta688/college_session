import React from "react";

export default function SimpleFunctionalComponent() {
    var name = "Mayank";

    setTimeout(function() {
        name = "Ankit";
        debugger;
    }, 3000)
    return <h1>User Name is: {name}</h1>
}