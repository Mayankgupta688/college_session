import React from "react";

var dataContext = React.createContext(null);

export default function GrandParent() {
    var [heirarchyDetails, setHeirarchyDetails] = React.useState({
        village: "Up",
        surName: "Gupta"
    })

    function updateVillage() {
        setHeirarchyDetails({
            ...heirarchyDetails,
            surName: "Agarwal..."
        })
    }

    return (
        <dataContext.Provider value={heirarchyDetails}>
            <h1>Details from Grand Parent</h1>
            <h2>Village Name: {heirarchyDetails.village}</h2>
            <h3>Sur Name: {heirarchyDetails.surName}</h3>
            <input type="button" value="Update Surname" onClick={updateVillage} />
            <hr/>
            <Parent heirarchyDetails={heirarchyDetails}></Parent>
        </dataContext.Provider>
    )
}

function Parent() {
    debugger;
    return (
        <div>
            <h1>This Component is Parent</h1><hr/>
            <ChildrenComponent></ChildrenComponent>
        </div>
    )
}

function ChildrenComponent(props) {
    debugger;
    var inputData = React.useContext(dataContext);
    return (
        <div>
            <h1>Data from Children...</h1>
            <h2>Surname is {inputData.surName}</h2>
        </div>
    )
}