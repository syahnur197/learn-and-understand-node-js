var greet = require('./greet1');
greet();

/* either way is okay
var greet2 = require('./greet2');
greet2.greet(); 
*/

var greet2 = require('./greet2').greet;
greet2();

var greet3 = require('./greet3');
greet3.greet();
greet3.greeting = "Changed Hello World!!";

// does not create new object
// object is passed by reference
var greet3b = require('./greet3');
greet3b.greet();

var Greet4 = require('./greet4');
var grtr = new Greet4();
grtr.greet();
grtr.greeting = "Hello from the other side";

// new object is created
var grtr2 = new Greet4();
grtr2.greet();

var greet5 = require('./greet5');
greet5.greet();