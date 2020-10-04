import React from "react";

export default class PureComponentImplementation extends React.PureComponent {
    constructor() {
        super()
        this.state = {
            designation: "developer",
            user: {
                name: "Mayank",
                age: 10
            }
        }
    }

    updateName = () => {
        this.setState({
            user: {
                ...this.state.user,
                name: "Mayank"
            }
        })
    }

    render() {
        return (
            <div>
                <h1>User Name is: {this.state.user.name}</h1>
                <h1>User Age is: {this.state.user.age}</h1>
                <input type="button" onClick={this.updateName} value="Update Name" />
            </div>
        )
    }
}