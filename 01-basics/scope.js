// https://ui.dev/javascript-visualizer/
// https://ui.dev/ultimate-guide-to-execution-contexts-hoisting-scopes-and-closures-in-javascript/

/* 
    When javascript is loaded, there are two phases:

    I. Creation Phase steps
        1. Create Global Object called "window"
        2. Create an object called "this" that points to "window"
        3. Setup memory space for variables and functions - set all variables to "undefined" & setup up memory space for functions

    II. Execution Phase 
        4. Assign variable declarations a default value of "undefined" while placing any function declaration in memory

    III. Function Execution Phase - called whenever a function is invoked
        1. Create Arguments Object
        2. Create an object called this - which points to teh function
        3. Setup memory space for variables and functions
        4. Assign variable declarations a default value of "undefined" while placing any function declaration in memory
    
*/

// show results of Hoisting variables (set to undefined)

console.log('biz: ', biz) // biz: undefined
console.log('baz: ', baz) // handle: undefined
console.log('getBiz :', getBiz) // getUser: ƒ getUser () {}

var biz = 'biz-biz'
var baz = 'baz-baz'

function getBiz () {
  return {
    name: biz,
    handle: baz
  }
}

console.log('---')
console.log('biz: ', biz) // biz: undefined
console.log('baz: ', baz) // handle: undefined
console.log('getBiz :', getBiz) // getUser: ƒ getUser () {}


console.log("\n--------------")
console.log("use variable before assigned")
console.log("--------------\n")

function foo () {
    var bar = 'Declared in foo'
  }
  
  foo()
  
  // console.log(bar) -- ERROR - ReferenceError: bar is not defined


  function first () {
    var name = 'Mia'
  
    console.log(name)
  }
  
  function second () {
    var name = 'Sned'
  
    console.log(name)
  }
  
  console.log(name) // print undefined
  var name = 'Ian'
  first()
  second()
  console.log(name)

console.log("\n--------------")
console.log("scope in inner functions")
console.log("--------------\n")

var count = 0

function makeAdder(x) {
    console.log("makeAdder()")  
  return function inner (y) {
    console.log("inner()")
    return x + y;
  };
}

var add5 = makeAdder(5);
count += add5(2);
console.log(count);


console.log("\n--------------")
console.log("const - can't change, but can change properties")
console.log("--------------\n")

const name = 'ian';
// name = 'lauren'; // Uncaught TypeError: Assignment to constant variable.

// change properties
const person = {};
person.name = "mia"


console.log("\n--------------")
console.log("var - use let instead")
console.log("let - use as a variable")
console.log("const - use as a constant")
console.log("--------------\n")
