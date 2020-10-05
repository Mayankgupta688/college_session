import React, { useEffect, useState } from "react";
import Axios from "axios"

function ApplicationHeader(props) {
    return <h1>Welcome {props.viewer} to the React Application</h1>
}

export default function CreatingFormsWithHooks() {
    var [user, setUser] = useState({
        username: "",
        userId: "",
        userCreatedAt: "",
        userAvatar: ""
    })

    var [showList, setShowList] = useState(false);

    var [employeeList, setEmployeeList] = useState([]);

    var [viewer, setViewer] = useState("Mayank Gupta")

    useEffect(() => {
        Axios.get("http://localhost:3000/employeeList").then((res) => {
            setEmployeeList(res.data);
        })
    }, [])

    function addUser() {
        Axios.post("http://localhost:3000/employeeList", {
            name: user.username,
            createdAt: user.userCreatedAt,
            avatar: user.userAvatar,
            id: user.userId
        }).then(() => {
            alert("Employee Added... Check for the database....")
            Axios.get("http://localhost:3000/employeeList").then((res) => {
                setShowList(true)
                setEmployeeList(res.data);
            })
        })
    }

    function changeInput(event) {
        setUser({
            ...user,
            [event.target.id]: event.target.value
        })
    }

    function deleteUser(event) {
        debugger;
        var employeeId = event.target.id;

        Axios.delete(`http://localhost:3000/employeeList/${employeeId}`).then(() => {
            Axios.get("http://localhost:3000/employeeList").then((res) => {
                setEmployeeList(res.data);
            })
        })
    }

    return (
        <div>
            <ApplicationHeader viewer={viewer}></ApplicationHeader>

            {showList === false && (
                <EmployeeForm user={user} addUser={addUser} changeInput={changeInput}></EmployeeForm>
            )}

            {showList === true && (
                employeeList.map((employee) => {
                    return (
                        <EmployeeDetails employee={employee} deleteUser={deleteUser} />
                    )
                })
            )}
        </div>
    )
}

function EmployeeDetails(props) {
    return (
        <div>
            <h1>User Name: {props.employee.name}</h1>
            <img src={props.employee.avatar} alt={props.employee.name}/><br/><br/>
            <input id={props.employee.id} type="button" value={`Delete ${props.employee.name}`} onClick={props.deleteUser} /><hr/>
        </div>
    )
}

function EmployeeForm(props) {
    return (
        <div>
            <label>Enter Name: </label><input id="username" onChange={props.changeInput} type="text" value={props.user.username} /><br/><br/>
            <label>Enter Created At: </label><input  id="userCreatedAt"  onChange={props.changeInput} type="text" value={props.user.userCreatedAt} /><br/><br/>
            <label>Enter Avatar: </label><input id="userAvatar" type="text" onChange={props.changeInput} value={props.user.userAvatar} /><br/><br/>
            <label>Enter Id: </label><input id="userId" type="text" onChange={props.changeInput} value={props.user.userId} /><br/><br/>
            <input type="button" value="Submit" onClick={props.addUser} />
        </div>
    )
}