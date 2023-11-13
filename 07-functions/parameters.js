function printUser1(user) {
  console.log(user.firstName);
  console.log(user.lastName);
  console.log(user.age);
}

// destructuring syntax - same as above, but saves having to pull out the fields themselves
function printUser2({ firstName, lastName, age }) {
  console.log(firstName);
  console.log(lastName);
  console.log(age);
}

function main() {
  var message = "============Function Parameters============";
  console.log(message);

  // Username object
  const user = {
    firstName: "Joe",
    lastName: "Schmoe",
    age: 25,
  };

  printUser1(user);
  printUser2(user);
}

if (require.main === module) {
  main();
}
