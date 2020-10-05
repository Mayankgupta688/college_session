import React, { useState } from "react";

export default function WorkingWithHooksObject() {
    var [user, setUser] = useState({
        name: "MAyank",
        age: 10,
        designation: "developer",
        salary: 10
    })

    var [employeeList, setEmployeeList] = useState([]);

    function updateName() {
        setUser({
            ...user, 
            name: "Anshul"
        })
    }

    setTimeout(() => {
        fetch("http://localhost:3000/employeeList").then(res => res.json()).then((data) => {
            setEmployeeList(data)
        })
    }, 5000)

    return (
        <div>
            <h3>User Name is {user.name}</h3>
            <h4>User Age is {user.age}</h4>
            <h4>User Designation is {user.designation}</h4>
            <h4>User Salary is {user.salary}</h4>
            <input type="button" value="Update Name" onClick={updateName} /><hr/>

            { employeeList.length > 0 && (
                <div>
                    <div>
                        <b>Employee List Length: {employeeList.length}</b>
                    </div>

                    {employeeList.map((employee) => {
                        return (
                            <EmployeeDetails {...employee}></EmployeeDetails>
                        )
                    })}
                </div>

            )}

            

        </div>
    )
}

function EmployeeDetails(props) {
    return (
        <div>
            <img alt={props.name} src={props.avatar} style={{height: "100px", width: "100px"}} />
            <h4>User Name: {props.name}</h4>
            <h5>User Name: {props.createdAt}</h5><hr/>
        </div>
    )
}