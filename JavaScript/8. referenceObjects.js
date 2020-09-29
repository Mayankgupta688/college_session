var employeeObject = {
    name: "Mayank",
    age: 20,
    designation: "Developer"
}

var otherEmployeeObject = employeeObject;

otherEmployeeObject.name = "Ankit..."

console.log(employeeObject.name);

function updateData(employeeObjectClone) {
    employeeObjectClone.age = 1000
}

updateData(employeeObject)

debugger;