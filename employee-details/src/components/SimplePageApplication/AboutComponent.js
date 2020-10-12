import Axios from "axios";
import React, {useState, useEffect} from "react";


export default function AboutComponent(props) {
    debugger;

    var [employeeDetails, setEmployeeDetails] = useState({});

    useEffect(() => {
        Axios.get(`https://5a530e1477e1d20012fa066a.mockapi.io/employeedata/${props.match.params.id}`).then((response) => {
            setEmployeeDetails(response.data)
        })
    }, [])
    return (
        <div><br/>
            <img src={employeeDetails.avatar} alt={employeeDetails.name} />
            <h1>Rendering Details for Employee {employeeDetails.name}</h1>
            <h3>Employee Created At: {employeeDetails.createdAt}</h3>
            <h3>Employee Id: {employeeDetails.id}</h3>
        </div>
    )
}
