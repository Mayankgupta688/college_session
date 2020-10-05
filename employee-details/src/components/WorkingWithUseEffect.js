import React, { useState, useEffect } from "react";

export default function WorkingWithUseEffect() {

    var [name, setName] = useState("Mayank");
    var [age, setAge] = useState(10);
    var [empList, setEmpList] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/employeeList").then(res => res.json()).then((data) => {
            setEmpList(data)
        })

        alert("Initial useEffect Called...")
    }, [])

    useEffect(() => {
        alert("Name Updated...");
    }, [name])

    useEffect(() => {
        alert("Age Updated...")
    }, [age])

    function updateName() {
        setName("Anshul");
    }

    return (
        <div>
            <h1>User Name is {name}</h1>
            <h1>User Age is {age}</h1>
            <input type="button" onClick={updateName} value="Update Name" /><hr/>

            {empList.length > 0 && (
                <h1>Array Length: {empList.length}</h1>
            )}
        </div>
    )
}
