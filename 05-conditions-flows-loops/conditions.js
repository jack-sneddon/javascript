// requirement - using Node to run cli
const { exit } = require("process");
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

if (false) {
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

// conditioninal operator ?
let state = "a";
let result = false;

if (state == 'a') {
    result = true;
} else {
    result = false;
}

console.log(`if/else result = ${result}`);

result = (state == 'a') ? true : false;
console.log(`conditional result = ${result}`);

result = state == 'a';
console.log(`conditional result = ${result}`);

// multiple conditionals
age = 3;

let message = (age < 2) ? 'Hi, baby!' :
    (age < 18) ? 'Hello!' :
        (age < 100) ? 'Greetings!' :
            'What an unusual age!';

console.log(message);

// logical operators
let a = true;
let b = true;
let c = false;
let d = false;

// OR
result = b || c;
console.log(result);

// AND
result = a && b;
console.log(result);

//
result = !c;
console.log(result);

if (-1) {
    console.log("-1 = true")
}

// nullish - returns the first argument if it’s not null/undefined. Otherwise, the second one.
// basically handle when results are null
a = null;
b = "b";
result = (a !== null && a !== undefined) ? a : b;
console.log(result);

result = a ?? b;
console.log(result);



exit();
