// Immediately Invote Function Expression (IIFE)
var firstname = 'Jane';

(function(lastname) {
    var firstname = "John"; // protected variable
    console.log(firstname);
    console.log(lastname);
}('Doe'));

console.log(firstname);

// results
// John
// Jane