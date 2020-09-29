var inputArray = [1, 2, 3,4 ,5, 6, 7]

var newArray = [];
for(var i = 0; i < inputArray.length; i++) {
    newArray.push(inputArray[i])
}

console.log(inputArray == newArray)

newArray[0] = 100;

newArrayCopied = [...inputArray]

newArrayCopied[0] = 1000