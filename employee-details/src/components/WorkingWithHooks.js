import React, { useState } from "react";

export default function WorkingWithHooks() {

    var [name, setName] = useState("Maayank");
    var [age, setAge] = useState(0);

    function updateName() {
        setName("Anshul")
    }

    function updateAge() {
        setAge(100)
    }

    return (
        <div>
            <h1>Hello {name}....</h1>
            <h2>User Age is: {age}....</h2>

            <input type="button" value="Update Name" onClick={updateName} />
            <input type="button" value="Update Age" onClick={updateAge} />
        </div>
    )
}