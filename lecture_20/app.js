class Person {
    constructor(fName, lName) {
        this.fName = fName;
        this.lName = lName;
    }

    getName() {
        return this.name;
    }

    greet() {
        console.log("Hello, " + this.fName + " " + this.lName);
    }
};

function Person2(fName, lName) {
    this.fName = fName;
    this.lName = lName;
};

Person2.prototype.getName = function() {
    return this.name;
};

Person2.prototype.greet = function() {
    console.log("Hello, " + this.fName + " " + this.lName);
}

let person = new Person2("syahnur", "nizam");
// console.log(person.getName());
person.greet();

console.log(person.__proto__);