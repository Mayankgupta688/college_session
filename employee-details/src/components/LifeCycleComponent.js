import React from "react";

export default class LifeCycleComponent extends React.Component {
    constructor() {
        debugger;
        super() 
        this.state = {
            username: "Mayank"
        }        
    }

    shouldComponentUpdate(nextProps, nextState) {
        debugger;
        return false;
    }

    componentWillUpdate() {
        alert("This Will Update...")
    }

    componentWillMount() {
        debugger;
        alert("Component Will be Mounted...")
    }

    updateForcefully = () => {
        this.forceUpdate()
    }

    render() {
        debugger;   
        return (
            <div>
                <h1>User Name is {this.state.username}</h1>
                <input type="button" onClick={this.updateForcefully} value="Update Anyways" />
            </div>
        )
    }

    componentDidUpdate() {
        debugger;
        alert("Component Got Updated....")
    }

    componentDidMount() {
        debugger;
        this.setState({
            username: "Anshul"
        })
    }

    componentWillUnmount() {
        alert("Component Unmounted...")
    }
}