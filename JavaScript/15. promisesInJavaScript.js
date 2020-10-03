var name = "Anshul";

var myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {

        if(name === "Mayank") {
            resolve({
                name: "Mayank",
                age: 20
            })
        } else {
            reject({
                error: "This is Not Expected Name"
            })
        }
        
    }, 10000);
})

myPromise.then((data) => {
    alert(data.name)
}).catch((data) => {
    debugger
})

console.log(name)