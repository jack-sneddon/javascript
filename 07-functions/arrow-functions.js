// Arrow functions:
// these are anononomous fucntions.

/**** good example
*/
const hobbies=['Sports', 'Cooking', 'Reading']
// look up based on the index - nothing new...
console.log(hobbies[0])
//now for the cool part - get the index of Sports by writing my anonomyous function
const index = hobbies.findIndex((item) => {
   return item === 'Sports'
});

console.log(index)

const index2 = hobbies.findIndex((item2) => item2 === 'Sports');

console.log(index2)

/********* 
  let func = function(arg1, arg2, ...argN) {
    return expression;
  };

  equivelant to:

  let func = (arg1, arg2, ...argN) => expression

 */

let sum = (a, b) => a + b;

/* This arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};
*/

console.log( sum(1, 2) ); // 3

// example 2 - one argument ( double )
let double = n => n * 2;
// roughly the same as: let double = function(n) { return n * 2 }

console.log( double(3) ); // 6

// example 3 - no arguments ()
let age = 18;

let welcome = (age < 18) ?
  () => console.log('Hello') :
  () => console.log("Greetings!");

welcome();

// another test
const bikes = [
    'trek',
    'specialized',
    'santa cruz',
    'pivot'
  ];
  
  console.log(bikes.map(bikes => bikes.length));
  let a = 5;
  let b = 6;
  // expected output: Array [8, 6, 7, 9]

  // example 4 - two arguments, multiple lines need a bracket
  let my_age = (a, b) => {
    age = 42;
    return a + b + age;
  }
  console.log(my_age(2, 6))
