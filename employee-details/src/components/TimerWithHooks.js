import React, { useState, useEffect } from "react";

export default function TimerWithHooks() {
    var [timer, setTimer] = useState("");
    

    useEffect(() => {
        setTimer(returnLatestTime())

        setInterval(() => {
            setTimer(returnLatestTime())
        }, 1000)
    }, [])

    function returnLatestTime() {
        return `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`;
    }

    return (
        <div>
            <h1>Timer is {timer}</h1>
        </div>
    )
}