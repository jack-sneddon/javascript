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

showMessage('joe', "hello there!");
showMessage2('sally');
showMessage2('bob');
console.log(sum(3 + 4));

