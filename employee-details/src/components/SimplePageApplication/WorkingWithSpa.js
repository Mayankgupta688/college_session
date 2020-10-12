import React from "react";
import { BrowserRouter, Route, Switch, Prompt, NavLink } from "react-router-dom";
import HomeComponent from "./HomeComponent";
import AboutComponent from "./AboutComponent";

function WorkingWithSpa(props) {
    function redirectToHelpPage() {
        debugger;
    }

    return (
        <BrowserRouter>
            <nav>
                <NavLink exact activeClassName="highlightedLink" style={{"marginRight": "10px"}} to="/">Home Page</NavLink>
                <NavLink activeClassName="highlightedLink" style={{"marginRight": "10px"}} to="/help">Help Page</NavLink>
                <NavLink activeClassName="highlightedLink" style={{"marginRight": "10px"}} to="/addemployee">Add Employee</NavLink>
            </nav><br/>

            <input type="button" value="Redirect to Help Page" onClick={redirectToHelpPage}/>

            <div>
                <Switch>
                    <Route exact path="/" component={HomeComponent} />
                    <Route exact path="/help" component={HelpComponent} />
                    <Route exact path="/about/:id" component={AboutComponent} />
                    <Route exact path="/addemployee" component={AddEmployee} />
                    <Route component={PageNotFound} />
                </Switch>
            </div>

            <h2>This is Footer Component...</h2>

        </BrowserRouter>
    )
}

function PageNotFound() {
    return <h2>We're sorry. The Web address you entered is not a functioning page on our site.</h2>
}

export default WorkingWithSpa;

function AddEmployee(props) {

    function redirectToHome(props) {
        props.history.push("/");
    }

    return (
        <div>
            <Prompt message="Do you really Want to Redirect...." />
            <h1>Add a form to add new Employee to the Database</h1>
            <input type="button" value="Redirect to Home Page" onClick={() => redirectToHome(props)} />
        </div>
    )
}




function HelpComponent() {
    return (
        <div>
            <h1>This is Help Component</h1>
        </div>
    )
}