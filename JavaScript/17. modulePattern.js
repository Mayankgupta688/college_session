function getData() {
    var name = "Mayank"
    var age = 20;
    var designation = "Developer";

    function getName() {
        return `User Name is ${name}`
    }

    function getAge() {
        return `User Name is ${age}`
    }

    function getDesignation() {
        return `User Name is ${designation}`
    }

    return {
        name: name,
        getName: getName,
        getAge: getAge,
        getDesignation: getDesignation
    }
}

var inputData = getData();

inputData.name = "Ankit"