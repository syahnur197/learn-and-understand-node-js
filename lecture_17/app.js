// function statement

function greet() {
    console.log('hi');
}

greet();

// functions are first class
// can be passed as variable

function logGreeting(fn) {
    fn();
}

logGreeting(greet);

// function expression

var greetMe = function() {
    console.log("hi tony");
}

greetMe();

logGreeting(greetMe);

logGreeting(() =>
    console.log("Hello JavaScript!")
);