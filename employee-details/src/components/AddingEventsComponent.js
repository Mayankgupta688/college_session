import React from "react";

export default function AddingEventsComponent() {

    function mouseOverFunctionality(event) {
        event.target.style.color = "red";
        alert(`Event Type is: ${event.type}, Target Element is ${event.target.id}`)
    }

    return (
        <div style={{padding: "10px", border: "1px solid red"}} id="mainDiv">
            <h1 id="mainHeading">Hello This is React Component</h1>
            <input id="inputText" type="text" onChange={mouseOverFunctionality} /><br/><br/>
            <input id="inputButton" type="button" onClick={mouseOverFunctionality} value="Change Color to Red" />
        </div>
    )
}