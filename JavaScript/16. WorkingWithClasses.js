class Student {
    constructor(name, age, schoolName) {
        this.name = name;
        this.age = age;
        this.schoolName = schoolName;
    }

    getDetails() {
        console.log(`Student Name is ${this.name}, Student Age is ${this.age}`)
    }

    getSchoolName() {
        console.log(`Student School is ${this.schoolName}`)
    }
}

var firstStudent = new Student("Mayank", 12, "BBPS")
var otherStudent = new Student("Ankit", 121, "BBPS Pitampure")