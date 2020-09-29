function updateStyleToBlack(event) {
    event.target.style.color = "green";
}

function updateStyleToRed(event) {
    event.target.style.color = "red";
}

function updateStyleToRedData(event) {
    document.getElementById("username").style.color = "red";
}

function getUserDetails() {
    alert(`
            User Name is ${document.getElementById("username").value}
            User Age is ${document.getElementById("userage").value}
            User Designation is Developer
    `)
}

function updateValue() {
    document.getElementById("username").value = "Ankit";
    document.getElementById("userage").value = 100
}

function applyClass() {
    document.getElementById("userdesignation").className = "userInput";
    document.getElementById("username").className = "";
}

function alertChangeData() {
    alert("Data Update")
}