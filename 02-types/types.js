console.log("\nPrimative Types:");
console.log(`----------`);
console.log(`${typeof undefined}`); // "undefined"
console.log(`${typeof 0}`); // "number"
console.log(`${typeof 10n}`); // "bigint"
console.log(`${typeof true}`); // "boolean"
console.log(`${typeof "foo"}`); // "string"
console.log(`${typeof Symbol("id")}`); // "symbol"
console.log(`${typeof alert}`); // "function"  (3)
console.log(`----------\nExamples:`);
/******
 * Examples
 */
// String
const strExample = "Hello World";
console.log("String Example = " + strExample);

// Number
const numExample = 42;
console.log("Number Example = " + numExample);

// Boolean
const boolExample = true;
console.log("Boolean Example = " + boolExample);

// Undefined Value
let undefExample;
console.log("Undefined Example = " + undefExample);

// Null
const nullExample = null;
console.log("NULL Example = " + nullExample);

// Symbol (ES6)
const symbolExample = Symbol("some description");
// console.log("Symbol Example = " + symbolExample);

// BigInt (ES11)
const bigIntValue = 1234567890123456789012345678901234567890n;
console.log("BigInt Example = " + bigIntValue);

console.log(`----------\n`);
console.log(`Reference Data Types:`);
console.log(`----------`);
console.log(`${typeof Math}`); // "object"  (1)
console.log(`${typeof null}`); // "object"  (2)
console.log(`Array`);
console.log(`Function`);
console.log(`Date`);
console.log(`RegEx`);
console.log(`Map`);
console.log(`Set`);
console.log(`----------\nExamples:`);
/******
 * Examples
 */
// Object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  email: "john.doe@example.com",
};
console.log("Custom Object (Person) = " + person);

// Array
const fruits = ["Apple", "Banana", "Cherry", "Date", "Raspberry"];
console.log("Array of fruit= ");
console.table(fruits);

// function
const myFunction = function () {
  console.log("This is my function.");
};

console.log("Function = " + myFunction); // Print the function reference

// Date
const currentDate = new Date();
console.log(`Date object = ` + currentDate);

// RegEx -- Creating a regular expression to parse a standard US phone number
const phoneNumberPattern = /^\(\d{3}\) \d{3}-\d{4}$/;

// Printing the RegExp using console.log
console.log(`RegEx object = ` + phoneNumberPattern);

console.log(`----------\n`);
console.log(`More complex examples\n`);

// NUMBER can be float or int
console.log("----- NUMBERS -----");
num_a = 1002;
num_b = 10.2;
console.log("Number a=" + num_a);
console.log("Number a=" + num_b);
num_c = num_a + num_b;
console.log("a + b = " + num_c);

//special numeric values
console.log("special numbers:");
console.log("infinity" + Infinity);
console.log("NaN" / 2);

//numbers larger than (2^53-1)
console.log("BigInt are numbers between -(2^53-1) and (2^53-1)");
// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt);

console.log("\n----- STRING -----");

const str = "Hello World!";
const phrase = `can embed another string:  ${str}`;
console.log(phrase);

// types of quotes
const str1 = "double quotes";
const str2 = "single quotes";
const str3 = `back ticks`;

// Backticks are “extended functionality” quotes. They allow us to embed
// variables and expressions into a string by wrapping them in ${…}, for example:
const someName = "Ian";

// embed a variable
console.log(`Hello, ${someName}!`);

// embed an expression
console.log(`the result is ${1 + 2}`); // the result is 3

console.log("NOTE -- There is no char type.");

console.log("\n----- BOOLEAN -----");
const bool_val_1 = true;
const bool_val_2 = false;
console.log(`booleans: ${bool_val_1} and ${bool_val_2}`);
const isGreater = 4 > 1;
console.log(`4 > 1 = ${isGreater}`);

// null = nothing, empty, or unknown
console.log("\n----- NULL -----");
const foo = null;
console.log(`NULL = ${foo}`);

//undefined = "value not assigned"
console.log("\n----- UNDEFINED -----");
let bar;
console.log(bar);

console.log("\n----- OBJECT -----");

console.log("\n----- FALSEY -----");
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
