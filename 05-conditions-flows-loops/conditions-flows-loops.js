// requirement - using Node to run cli
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// A falsy (sometimes written falsey) value is a value that is considered false when encountered in a Boolean context.
console.log("false = " + false);
console.log("false = " + 0);
console.log("false = " + null);
console.log("false = " + undefined);
console.log("false = " + "-0");
console.log("false = " + "0n");
console.log("false = " + NaN);
console.log("false = " + '""');

if (false)  {
    console.error("should never reach me!");
}
if (0) {
    console.error("should never reach me!");
}
if (null) {
    console.error("should never reach me!");
}
if (undefined) {
    console.error("should never reach me!");
}
if (-0) {
    console.error("should never reach me!");
}
if (0n) {
    console.error("should never reach me!");
}
if (NaN) {
    console.error("should never reach me!");
}
if ("") {
    console.error("should never reach me!");   
}

// conditions

let year = prompt('In which year was the ECMAScript-2015 specification published?', '');
/*
if (year == 2015) {
  alert( 'You guessed it right!' );
} else {
  alert( 'How can you be so wrong?' ); // any value except 2015
}
*/