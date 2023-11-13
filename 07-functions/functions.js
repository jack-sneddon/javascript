// simple function
function showMessage(from, text) {
    console.log(`${from}` + " : " + `${text}`)
}

// function using * and ** for parameters
function showMessage2(from, text = "no given text") {

    from = '*' + from + '*'; // make "from" look nicer

    console.log(from + ': ' + text);
}

// function using * and ** for parameters
function showMessage3(from, text) {

    /*
    if(text == undefined) {
        text = "empty message";
    }
    */
    // text = text || 'empty';

    // usse the nully to check for empty text
    console.log(from + ': ' + (text ?? "empty message"));
}

// return value
function sum(a, b) {
    return a + b;
}

// Function parameters
// =====
function handleTimeout() {
    console.log("1 - timed out")
}
const handleTimeout2 = () => {
    console.log("2 - timed out")
}

function greeter(greetFn) {
    greetFn();
}

function init() {
    function greet() {
        console.log("Hello!");
    }

    greet();
}


showMessage('joe', "hello there!");
showMessage2('sally');
showMessage2('bob');
console.log(sum(3 + 4));

// pass functions as values - note i'm not using the parameters, but the name only
setTimeout(handleTimeout, 2000);
setTimeout(handleTimeout2, 3000);
setTimeout(() => {
    console.log("3 - timed out")
}, 4000);

// passing in functions isn't limited to as values
greeter(() => console.log("Hi"));

// functions within functions - way to define scope
init();

