import React from "react";
import "./theme.css";

export default class DynamicThemesComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "Mayank",
            age: 10,
            defaultClass: "default",
            applicationDefaultTheme: {
                container: {
                    backgroundColor: "grey",
                    padding: "10px",
                    margin: "10px"
                }, h1Element: {
                    color: "red"
                }, h2Element: {
                    color: "green"
                }, h3Element: {
                    color: "brown"
                }
            }
        }
    }

    applyRedTheme = () => {
        var newTheme = require("./redTheme.json");
        this.setState({
            applicationDefaultTheme: newTheme
        })
    }

    applyBlueTheme = () => {
        var newTheme = require("./blueTheme.json");
        this.setState({
            applicationDefaultTheme: newTheme
        })
    }

    updateTheme = () => {
        this.setState({
            defaultClass: "blueTheme"
        })
    }

    render() {
        return (
            <div style={this.state.applicationDefaultTheme.container}>
                <h1 style={this.state.applicationDefaultTheme.h1Element}>Hello {this.state.username}... Welcome to React</h1>
                <h2 style={this.state.applicationDefaultTheme.h2Element}>This is Amazing Technology</h2>
                <h3 style={this.state.applicationDefaultTheme.h3Element}>Your Age is {this.state.age}</h3>
                <input type="button" value="Apply Red Theme" onClick={this.applyRedTheme} />
                <input type="button" value="Apply Blue Theme" onClick={this.applyBlueTheme} /><br/><br/>

                <div id="xyz" class={this.state.defaultClass}>
                    <b>This is Updating Theme with Classes....</b>  
                    <h1>Hello All</h1>
                    <h2>Bye All...</h2>
                    <input type="button" onClick={this.updateTheme} value="Update Theme..." />
                </div>
            </div>
        )
    }
}