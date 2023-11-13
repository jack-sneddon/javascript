console.log("\n--------------")
console.log("var assignments")
console.log("scope = function")
console.log("--------------\n")
// variables
var biz;
var baz;

biz = 100
baz = biz

biz = 200
console.log("\nbiz = " + biz)
console.log("baz = " + baz)

console.log("-----")

// the "waffa" object will have two references pointing to one object
biz = "waffa"
baz = biz

// inside, this will decrements the number reference counters so only 
// baz points to "waffa"
biz = "glitz"

console.log("\nbiz = " + biz)
console.log("baz = " + baz)

console.log("\n")
console.log("--------------")
var x, y, z;
x = 1, y = 2;
z = x;

if (z == y) {
    console.log("z == y")
}
else if (z == x) {
    console.log("z == x")
}
else {
    console.log("z != x or y")
}

console.log("\n--------------")
console.log("let assignments (scope)")
console.log("scope = block")
console.log("--------------\n")

let foo, count;
foo = waffa = 5;

for (count = 0; count < foo; count++) {
    let foo2 = 2;
    var waffa2 = 2;
    console.log(count);
}

// console.log(foo2) -- ERROR: object (foo2) not found
console.log(waffa2);
