var empList = [{
    name: "Mayank",
    age: 20
}, {
    name: "Ankit",
    age: 10
}, {
    name: "Anshul",
    age: 15
}, {
    name: "Meha",
    age: 20
}]

empList.forEach(function(employee) {
    console.log("Employee Name is: " + employee.name)
    console.log("Employee Age is: " + employee.age)
    console.log("------------------------------------")
})

var newList = empList.map(function(employee) {
    return {
        name: employee.name,
        age: employee.age + 10,
        isEmployeed: false
    };
})

var newList = empList.filter(function(employee) {
    if(employee.name[0] == "A") {
        return true
    } else {
        return false;
    }
})