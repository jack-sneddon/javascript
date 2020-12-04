// String comparison
console.log(`${'A' == 'A'}`)
console.log(`${'Z' > 'A'}`)
console.log(`${'Bee' > 'Be'}`)
// unicode comparison - useful to know when sorting
console.log(`${'a' > 'A'}`)
console.log(`${'A' > 'a'}`)

// strict equality (===) - check without type conversion
console.log(`${0 == false}`);
console.log(`${0 === false}`);
console.log(`${0 !== false}`);
console.log(`${null === undefined}`);

// tips
// 1. Treat any comparison with undefined/null except the strict equality === with exceptional care.
// 2. Don’t use comparisons >= > < <= with a variable which may be null/undefined, unless you’re really sure of what you’re doing. If a variable can have these values, check for them separately.
