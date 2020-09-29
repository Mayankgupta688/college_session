var arrayOne = [1, 2, 3, 4]
var arrayTwo = [5, 6, 7, 8]
var arrayThree = [9, 10, 11, 12]

var arrayFour = [...arrayThree, ...arrayOne, ...arrayTwo];

var data = {
    name: "Mayank",
    age: 10
}

var otherData = {
    adress: "delhi",
    salary: 10
}

var employeeObject = {
    ...data,
    ...otherData
}
