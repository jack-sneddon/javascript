// javascript does a lot of auto conversion.  

console.log("bool --> string")
let value = true;
console.log(`value = ${value}`)
console.log(`value type = ${typeof value}`);

value = String(value);      // change to type String
console.log(`value type = ${typeof value}`);


console.log("\nnumber --> string")
value = "6" + "3";
console.log(value + " " + `${typeof value}`);
console.log( "6" / "2" ); // 3, strings are converted to numbers

console.log("\nstring --> number")
let str = "123";
console.log(str + " " + `${typeof str}`)
let num = Number(str)
console.log(num + " " + `${typeof num}`)
let num2 = Number("12a waffa")
console.log(num2)

console.log("\n --> number")
console.log( "(str --> Number) = " + Number("   123   ") ); // 123
console.log( "(str --> Number) = " + Number("123z") );      // NaN (error reading a number at "z")
console.log( "(true --> Number) = " + Number(true) );        // 1
console.log( "(false --> Number) = " + Number(false) );       // 0

// BOOLEAN
// Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false.
// Other values become true.
console.log( "\n(1 --> Boolean) = " + Boolean(1) ); // true
console.log( "(0 --> Boolean) = " + Boolean(0) ); // false

console.log( "(hello --> Boolean) = " + Boolean("hello") ); // true
console.log( "('' --> Boolean) = " + Boolean("") ); // false because it's empty

console.log( "('0' --> Boolean) = " + Boolean("0") ); // true because it's a string
console.log( "(' ' --> Boolean) = " + Boolean(" ") ); // false
console.log( "(NaN --> Boolean) = " + Boolean(1/0) ); // true - because NaN is considered a number