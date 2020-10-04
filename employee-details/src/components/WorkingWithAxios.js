import React from "react";
import Axios from "axios";

export default class WorkingWithAxios extends React.Component {
    constructor() {
        super();
        this.state = {
            employeeList: [],
            filterList: []
        }
    }

    getDataFromApis = () => {
        Axios.get("https://5a530e1477e1d20012fa066a.mockapi.io/employeedata").then((empList) => {
            this.setState({
                employeeList: empList.data,
                filterList: empList.data
            })
        })
    }

    addEmployee = () => {
        this.setState({
            employeeList: [
                ...this.state.employeeList, {
                    name: "Mayank",
                    age: 10
                }
            ]
        })
    }

    componentDidMount() {
        fetch("https://5a530e1477e1d20012fa066a.mockapi.io/employeedata").then((empList) => {
            return empList.json();
        }).then((data) => {
            this.setState({
                employeeList: data,
                filterList: data
            })
        })
    }

    deleteEmployee = (event) => {
        var elementId = event.target.id;

        var newList  = this.state.employeeList.filter((employee) => {
            return employee.id !== elementId
        })

        this.setState({
            employeeList: newList
        })
    }

    updateList = (event) => {
        var filteringText = event.target.value;

        var newList  = this.state.employeeList.filter((employee) => {
            return employee.name.indexOf(filteringText) > -1
        })

        this.setState({
            filterList: newList
        })
    }

    render() {
        return (
            <div>
                <label>Filter Data: </label>
                <input type="text" placeholder="Filter Data" onChange={this.updateList} /><br/><br/>
                { this.state.filterList.length > 0 && (
                    this.state.filterList.map((employee) => {
                        return (
                            <div>
                                <img src={employee.avatar} alt={employee.name} />
                                <h5>Employee Name: {employee.name}</h5>
                                <h6>Employee Created At: {new Date(employee.createdAt).toDateString()}</h6>
                                <input id={employee.id} type="button" value="Delete" onClick={this.deleteEmployee} /><hr/>
                            </div>
                        )
                    })
                )}

                { this.state.employeeList.length === 0 && (
                    <div>
                        <h1>No Employee To Display</h1>
                    </div>
                )}  
            </div>
        )
    }
}


