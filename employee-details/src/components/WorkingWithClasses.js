import React, { Component } from "react";

export default class WorkingWithClasses extends Component {

    constructor() {
        super();
        this.state = {
            employeeList: [{
                name: "Mayank",
                age: 20,
                address: {
                    street: "Delhi",
                    country: "India"
                }
            }, {
                name: "Ankit",
                age: 20,
                address: {
                    street: "Delhi",
                    country: "India"
                }
            }]
        }
    }

    changeData = () => {
        this.setState({
            name: "Ankit",
            age: 40,
            address: {
                street: "Delhi",
                country: "Canada"
            }
        })
    }

    render() {
        return (
            <div>
                <h1>This is Class Component...</h1>
                <h2>User Name is: {this.state.employeeList[1].name}</h2>
                <h2>User Age is: {this.state.employeeList[1].age}</h2>
                <input type="button" onClick={this.changeData} value="Update Data" />
            </div>
        )
    }
}