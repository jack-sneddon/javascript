const console = require('console');

// console tips

var name = "foo"

// shorthand for console.log 
// instead of this:  console.log('name', name)
// introduced(ES2015)
console.log({ name })


// log multiple items
const nflTeam = { name: "Packers", shareholder: true, id: 134323 };
const nbaTeam = { name: "Bucks", shareholder: false, id: 489348 };

console.log("-------\n-------\n");
console.log(nflTeam);
console.log(nbaTeam);
console.log("-------");
console.log(nflTeam, nbaTeam);  // better than listing each individually.  Also gives variable names to each.



// tables
console.log("------- Tables\n-------\n");
console.table({ nflTeam, nbaTeam });

// group logging
console.log("-------Groups \n-------\n");
console.group('NFL Team');
console.log('team: Packers');
console.log('city: Green Bay');
console.log('last game attended: 10/01/2019');
console.groupEnd();
console.group('NBA Team');
console.log('team: Bucks');
console.log('city: Milwaukee');
console.log('last game attended: 20/12/2019');
console.groupEnd();


// nested groups
console.log("-------Nested Groups \n-------\n");
console.group("Galaxy");
console.log("distance = 10M light years");
console.group("Spiral galaxy");
console.log("Has bar = true");
console.groupEnd();
console.groupEnd();

// warnings
console.log("\n-------Warnings-------\n");
console.log("This is a warning!  Note the yellow background");

// errors
console.log("\n-------Errors-------\n");
console.log("This is an error!  Note the red background");

// styling
console.log("\n-------css styling-------\n");

console.log('%c My Message ',
    'color: white; background-color: #61dbfb',
    'Have fun using console!');

// time the speed of my functions
console.log("\n-------function speed-------\n");
let i = 0;
console.time("While loop");
while (i < 100000) {
    i++;
}
console.timeEnd("While loop");

console.time("For loop");
for (i = 0; i < 100000; i++) {
    // For Loop
}
console.timeEnd("For loop");

// stack trace
console.log("\n-------stack trace-------\n"); function
    getTeam(team) {
    console.trace("getTeam()")
    return nflTeam.name;
} function cheer(team) {
    let _name = getTeam(team)
    return `Go ${_name}`
}

cheer(nflTeam);

//console.trace("stack trace message: "
//    + "at %s: line no: %d ", "main()", 93);

