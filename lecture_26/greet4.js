function Greeter() {
    this.greeting = "Hello World!!111!";
    this.greet = function () {
        console.log(this.greeting);
    }
}

module.exports = Greeter;