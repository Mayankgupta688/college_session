import React, {useEffect, useState} from "react"

function getDetails() {
    return {
        name: "Mayank",
        age: 20,
        designation: "Developer",
        salary: 100,
        bonus: 10 
    }
}

export function DisplayForManager(props) {
    return (
        <div>
            <h1>Component for Manager</h1>
            <h1>User Name is {props.userDetails.name}</h1>
            <h1>User Age is {props.userDetails.age}</h1>
            <h1>User Designation is {props.userDetails.designation}</h1>
        </div>
    )
}

export function DisplayForHR(props) {
    return (
        <div>
            <h1>Component for HR</h1>
            <h1>User Name is {props.userDetails.name}</h1>
            <h1>User Age is {props.userDetails.age}</h1>
            <h1>User Designation is {props.userDetails.designation}</h1>
            <h2>User Salary is {props.userDetails.salary}</h2>
            <h2>User Bonus is {props.userDetails.bonus}</h2>
        </div>
    )
}


export function HigherOrderFunction(WrappedComponent, WrappedComponentOther) {
    return function InnerComponent() {
        var [userDetails, setUserDetails] = useState({});
        useEffect(() => {
            setUserDetails(getDetails())
        }, []);
        return (
            <div>
                <WrappedComponent userDetails={userDetails} /><hr/>
                <WrappedComponentOther userDetails={userDetails} />
            </div>
        )
    }
}

var HigherOrderCreatedComponent = HigherOrderFunction(DisplayForManager, DisplayForHR)
export default HigherOrderCreatedComponent;