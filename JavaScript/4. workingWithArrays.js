var keyName =  {
    otherKey: "name",
    someKey: "age"
}

var keyArray = ["name", "age"]

var salary = [10, 20, 30, 20, 10, 5, 60, 48, 69, "Mayank", false, null, undefined, 
    {name: "Mayank", age: 10, 5: "NumberData"}, 
    [1, 2, 3] ]

console.log(salary[13][keyName.otherKey])
console.log(salary[13]["age"])

salary[13][keyName.otherKey] = "Anshul"
