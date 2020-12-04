console.log("Change sign of a number");
let a = 1;
a = -a;
console.log(a);

let x = 6, y = 2;
console.log(`(6, 2)`);

console.log("x+y = ");
console.log( x + y ); // add

console.log("x-y");
console.log( x - y ); // subtract

console.log("x*y");
console.log( x * y ); // multipl6


console.log("x/y");
console.log( x / y ); // minus

console.log("x%y");
console.log( x / y ); // remainder

console.log("x**y");
console.log( x ** y ); // Exponentiation

console.log("\nJavaScript nuances...")
console.log("6 - '2' = ");
console.log( 6 - '2' ); // 4, converts '2' to a number
console.log("'6' / '2' = ");
console.log( '6' / '2' ); // 3, converts both operands to numbers

// unary operator and '+'
// The unary plus or, in other words, the plus operator + applied to a single value, 
// doesn’t do anything to numbers. But if the operand is not a number, the unary plus converts it into a number.

// order of presidence
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

// plus can also be oriented to convertion to string.  uniary operators take precidence
console.log(3+4*6); // the plus has a higher order of operator than times.  why?  because unary oparators
console.log(3+(4*7));


// equal assignment
console.log("----- ASSIGNMENT ------");
let a2 = 1;
let b2 = 2;

let c2 = 3 - (a2 = b2 + 1); // assignments within an assignment?  weird

console.log( a2 ); // 3
console.log( c2 ); // 0

// chaining assignment
let a3, b3, c3;

a3 = b3 = c3 = 2 + 2;

console.log( a3 ); // 4
console.log( b3 ); // 4
console.log( c3 ); // 4

// shorthand for calculate and replace += *=
let a4 = 6;
a4 += a4;
console.log(a4);

// comma
let z = (1 + 2, 3 + 4);
console.log( z ); // 7 (the result of 3 + 4)

a = 2;
x = 1 + (a *= 2);
console.log()