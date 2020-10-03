import React, {Component} from "react";


export default class PropsAreNonUpdatable extends Component {

    constructor() {
        super();
        this.state = {
            username: "MAaynak",
            user: {
                userage: 20,
                userDesignation: "Fresher"
            }
        }
    }

    getValue = () => {
        alert(`User Age is ${this.state.user.userage}`);
        this.setState({
            ...this.state,
            user: {
                ...this.state.user,
                userage: 2000
            }
        })
    }

    render() {
        return (
            <div>
                <h1>User Name is: {this.state.username}</h1>
                <h1>User Age from Parent is: {this.state.user.userage}</h1>
                <h1>User Age from Parent is: {this.state.user.userDesignation}</h1>
                <input type="button" value="Click to Get Value" onClick={this.getValue} /><hr/>
                <PresentationalComponent user={this.state.user} username={this.state.username}></PresentationalComponent>
            </div>
        )
    }
}  

function PresentationalComponent(props) {
    return (
        <div>
            <h2>User Name from Presentational Component {props.username}</h2>
            <h3>User Age is: {props.user.userage}</h3>
            <h3>User Designation is: {props.user.userDesignation}</h3>
        </div>
    )
}