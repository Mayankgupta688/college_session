import React, { Component } from "react";

export default class ShouldComponentUpdateFeature extends Component {
    constructor() {
        super();
        this.state = {
            username: "Mayank",
            userage: 20
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(nextState.username === this.state.username) {
            return false;
        } else {
            return true;
        }
    }

    changeStateData = () => {
        this.setState({
            ...this.state,
            username: this.state.username + " Gupta"
        })

        setTimeout(() => {
            alert(this.state.userage)
        }, 3000)
    }

    render() {
        debugger;
        return (
            <div>
                <h1>The user Name is {this.state.username}</h1>
                <input type="button" value="Update Age" onClick={this.changeStateData} />
            </div>
        )
    }
}