import React, { Component } from "react";

export default class CounterWithClasses extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        }

        setInterval(() => {
            this.setState({
                counter: this.state.counter + 1
            })
        }, 1000)
    }

    render() {
        return (
            <div>
                <h1>Counter from the Parent: {this.state.counter}</h1>
                <ChildComponent counter={this.state.counter}></ChildComponent>
            </div>
        )
    }
}

function ChildComponent(props) {
    return <h2>Counter from Child {props.counter}</h2>
}