import React from "react";

export default function PropsDataComponent(props) {
    return (
        <div>
            <h1>Hello {props.dataObject[0]}, Your age is {props.dataObject[1]}</h1>
            <h2>User designation {props.dataObject[2]}</h2>
        </div>
    )
}