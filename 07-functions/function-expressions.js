
// function expression (note the semi colon at the end of the function)
let sayHi = function () {
    console.log("Hello");
};

// in javascript, a function is a value
sayHi();
console.log(sayHi);

let func = sayHi;
func();

// example 2

// a function that uses a callback named `func` as a parameter
function getSyncMessage(func) {
    func("Hello getSyncMessage!");
}

console.log("--- Before getSyncMessage call");
// calling a function and sending in a callback function as an argument.
getSyncMessage(function(message) {
    console.log(message);
});

console.log("--- After getSyncMessage call");
// calling a function and sending in a callback function as an argument.

/* asynchronous Callback
    - Events
    - setTimeout
    - setInterval
    - the fetch API
    - Promises
*/
// a function that uses a callback named `cb` as a parameter
function getAsyncMessage(cb) {
    setTimeout(function () { cb("Hello World!") }, 1000);
}

console.log("\nBefore getSyncMessage call");
// calling a function and sending in a callback function as an argument.
getAsyncMessage(function(message) {
    console.log(message);
});
console.log("After getSyncMessage call");
