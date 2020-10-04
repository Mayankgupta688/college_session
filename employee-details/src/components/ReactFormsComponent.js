import React from "react";

export default class ReactFormsComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "Mayank",
            userage: 10
        }
    }

    getData = () => {
        alert(`User name is: ${this.state.username}, User Age is ${this.state.userage}`)
    }

    updateData = (event) => {
        this.setState({
            ...this.state,
            [event.target.id]: event.target.value
        })
    }

    render() {
        return (
            <div>
                Enter Name: <input id="username" value={this.state.username} onChange={this.updateData} type="text" /><br/><br/>
                Enter Age:  <input id="userage" value={this.state.userage} onChange={this.updateData} type="number" /><br/><br/>
                <ChildComponent username={this.state.username} userage={this.state.userage} />
                <input type="button" onClick={this.getData} value="Click to Get Value" />
            </div>
        )
    }
}

function ChildComponent(props) {
    return (
        <div>
            <h2>User Name is {props.username}</h2>
            <h2>User Name is {props.userage}</h2>
        </div>
    )
}