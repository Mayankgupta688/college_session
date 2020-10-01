import React from "react";

export default function TimerComponent() {

    var data = `Timer is ${new Date().getHours()}  :  ${new Date().getMinutes()} :  ${new Date().getSeconds()}`;

    setInterval(() => {
        data = `Timer is ${new Date().getHours()}  :  ${new Date().getMinutes()} :  ${new Date().getSeconds()}`;
    }, 1000)
    return <h1>{data}</h1>
}