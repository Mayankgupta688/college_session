import Axios from "axios";
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

export default function HomeComponent() {

    var [employeeList, setEmployeeList] = useState([]);

    useEffect(() => {
        Axios.get("https://5a530e1477e1d20012fa066a.mockapi.io/employeedata").then((response) => {
            setEmployeeList(response.data)
        })
    }, [])

    return (
        <div>
            <h1>Employee List</h1><hr/>
            { employeeList.map((employee) => {
                return (
                    <div>
                        <img src={employee.avatar} alt={employee.name} />
                        <h2>User Name is {employee.name}</h2>
                        <Link to={`/about/${employee.id}`}>View Details</Link>
                        <hr/>
                    </div>
                )
            })}
        </div>
    )
}