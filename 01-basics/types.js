console.log("\nEight basic types");
console.log(`${typeof undefined}`); // "undefined"

console.log(`${typeof 0}`); // "number"

console.log(`${typeof 10n}`); // "bigint"

console.log(`${typeof true}`); // "boolean"

console.log(`${typeof "foo"}`); // "string"

console.log(`${typeof Symbol("id")}`); // "symbol"

console.log(`${typeof Math}`); // "object"  (1)

console.log(`${typeof null}`); // "object"  (2)

console.log(`${typeof alert}`); // "function"  (3)


// NUMBER can be float or int
console.log("\n\n----- NUMBERS -----")
num_a = 1002
num_b = 10.2
console.log("Number a=" + num_a);
console.log("Number a=" + num_b);
num_c = num_a + num_b;
console.log("a + b = " + num_c);

//special numeric values
console.log("special numbers:")
console.log("infinity" + Infinity)
console.log("NaN" / 2)

//numbers larger than (2^53-1)
console.log("BigInt are numbers between -(2^53-1) and (2^53-1)")
// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt)


console.log("\n----- STRING -----")

let str = "Hello World!";
let phrase = `can embed another string:  ${str}`;
console.log(phrase);

// types of quotes
let str1 = "double quotes";
let str2 = 'single quotes';
let str3 = `back ticks`;

// Backticks are “extended functionality” quotes. They allow us to embed 
// variables and expressions into a string by wrapping them in ${…}, for example:
let name = "Ian";

// embed a variable
console.log(`Hello, ${name}!`);

// embed an expression
console.log(`the result is ${1 + 2}`); // the result is 3

console.log('NOTE -- There is no char type.');

console.log("\n----- BOOLEAN -----")
let bool_val_1 = true;
let bool_val_2 = false;
console.log(`booleans: ${bool_val_1} and ${bool_val_2}`)
let isGreater = 4 > 1;
console.log(`4 > 1 = ${isGreater}`)

// null = nothing, empty, or unknown
console.log("\n----- NULL -----")
let foo = null;
console.log(`NULL = ${foo}`)

//undefined = "value not assigned"
console.log("\n----- UNDEFINED -----")
let bar;
console.log(bar);

console.log("\n----- OBJECT -----")


