import React, { Component } from "react";

export default class TimerWithClassesComponent extends Component {
    constructor() {
        super();
        this.state = {
            currentTime: new Date()
        }

        setInterval(() => {
            debugger;
            this.setState({
                currentTime: new Date()
            })
        }, 1000);
    }

    render() {
        return <h1>Timer {this.state.currentTime.getHours() + " : " + this.state.currentTime.getMinutes() + " : " + this.state.currentTime.getSeconds()}</h1>
    }
}

