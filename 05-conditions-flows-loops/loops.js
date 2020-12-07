// While Loop
console.log('while loop')
let a = 5;
while (a) console.log(a--);

// do while
console.log('\ndo while loop')
a = 0;
do {
    console.log(a)
    a++;
} while (a < 5)

// for loop
console.log('\nfor loop')
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// break
console.log('\nbreak');
let sum = 0;
while (true) {
    console.log(sum++);
    if (sum > 4) break;
}


// continue
console.log('\nbreak');
for (let i = 0; i < 10; i++) {

    // if true, skip the remaining part of the body
    if (i % 2 == 0) continue;

    console.log(i); // 1, then 3, 5, 7, 9
}

// switch statement
let name = 'joe'

switch (name) {
    case 'sally':
        console.log('hello sally');
        break;
    case 'bob':
        console.log('hello bob');
        break;
    case 'joe':
        console.log('hello joe');
        break;
    default:
        console.log('name not recognized');
}

// switch without break
a = 4;
switch (a) {
    case 3:
        console.log('bing');
    case 4:
        console.log('bang');
    case 5:
        console.log('booz');
    case 6:
        console.log('bomb');
    default:
        console.log("bring")
}

// case grouping - group 3 and 4
switch (a) {
    case 4:
        console.log('bang');
    case 3:
    case 5:
        console.log('booz');
    case 6:
        console.log('bomb');
    default:
        console.log("bring")
}


