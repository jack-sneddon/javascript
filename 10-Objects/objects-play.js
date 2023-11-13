var message = "============Objects============";
console.log(message);

// Username object
const user = {
  name: "Joe",
  age: 25,
};
const username = user.name;
const userage = user.age;

console.log(username + " " + userage);

// deconstruct the object - must match name of property name but can use an alias
const { name: aliasname, age } = {
  name: "Joseph",
  age: 35,
};

console.log(aliasname + " " + age);

// spread operator
const extendedUser = {
  isAdmin: true,
  ...user
}

console.log("extended user = " + extendedUser)
