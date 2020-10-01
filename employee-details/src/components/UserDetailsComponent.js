import React, { Component } from "react";

export default class UserDetailsComponent extends Component {
    constructor() {
        super();
        this.state = {
            userName:  "Mayank",
            userAge: 40,
            userDesignation: "Trainer", 
            userSalary: 2000
        }
    }

    updateSalary = () => {
        this.setState({
            ...this.state,
            userSalary: this.state.userSalary + 1000,
            userName: "Ankit"
        })
    }

    render() {
        return (
            <div>
                <h1>User Name: {this.state.userName}</h1>
                <h2>User Age: {this.state.userAge}</h2>
                <h2>User Salary: {this.state.userSalary}</h2>
                <h2>User Designation: {this.state.userDesignation}</h2>

                <input type="button" onClick={this.updateSalary} value="Update Salary" />
            </div>
        )
    }
}