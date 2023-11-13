function basicArray() {
  var message = "============Basic Arrays";
  console.log(message);

  // Username array
  message = "Basic Array";
  const fullName = ["Joe", "Shmoe"];
  console.log(fullName);

  // pull out first and last name
  const firstName = fullName[0];
  const lastname = fullName[1];

  console.log(firstName + " " + lastname);
}

function destructuringArray() {
  var message = "============Destructuring Arrays";
  console.log(message);

  // destructuring syntax is a shortcut to pull out first and last name - ***
  const [firstName2, lastName2] = ["Bart", "Star"];
  console.log(firstName2);
  console.log(lastName2);
}

function spreadOperator() {
  var message = "============Spread Operator";
  console.log(message);

  const hobbies = ["hiking", "board games", "video games"];
  const newHobbies = ["reading"];

  const nestedMergedArray  = [hobbies, newHobbies];

  //now merge with spread operator - denoted by '...'
  const mergedArray = [...hobbies, ...newHobbies];
  
  console.log("Nested Merged Array = " + nestedMergedArray);
  console.log("Merged Array = " + mergedArray);
}

function arrayLoop() {
    const hobbies = ["hiking", "board games", "video games"];
    for(const hobby of hobbies ) {
        console.log(hobby);
    }
}

/*******
Main()
*/
function main() {
  var message = "============Arrays============\n=============================";
  console.log(message);

  basicArray();
  destructuringArray();
  spreadOperator();
  arrayLoop();
}

if (require.main === module) {
  main();
}
