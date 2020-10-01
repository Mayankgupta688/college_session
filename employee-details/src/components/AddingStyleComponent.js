import React from "react";
import "./AddingStyleComponent.css";

var styleData = {
    divElement: {
        backgroundColor: "grey",
        border: "1px solid black",
        padding: "10px"
    },
    bElement: {
        color: "red"
    }
}

var boldStyle = {
    color: "yellow"
}

function getStyle() {
    return {
        padding: "10px",
        backgroundColor: "orange",
        border: "2px solid grey"
    }
}

export default function AddingStyleComponent() {
    return (
        <div>
            <h1 style={{color: "red", border: "1px solid green", fontSize: "60px", padding: "10px"}}>This is React Component</h1>
            <h2 className="myClass">Adding Style to this Component</h2>
            <h3>Styling Components is Easy...</h3>

            <div style={getStyle()}>
                <b style={boldStyle}>This is Bold Element...</b>
            </div>
        </div>
    )
}