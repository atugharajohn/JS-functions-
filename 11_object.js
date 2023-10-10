// constructor --> singleton

// object literals

// The JavaScript ES6 introduced a new primitive data type called Symbol.
//  Symbols are immutable (cannot be changed) and are unique.
const sym = Symbol("key1");

const user = {
    name1:"yash",
    age:20,
    [sym]:"myKey",
    email:"yash@gmail.com",
    lastdays:["Sun", "Mon", "Tue", "Wed"],
    "full name":"yash pal"
}

// console.log(user.email);
// console.log(user["email"]);
// console.log(user["full name"]);
// console.log(user[sym]);

// user.email = "yash.google@gmail.com";
// Object.freeze(user);
// user.email = "yash.microsoft@gmail.com";
// console.log(user);

user.greeting = function(){
    console.log("hello users");
}
user.greetingTwo = function(){
    console.log(`hello js user ${this.name1}`);
}

console.log(user.greeting());
console.log(user.greetingTwo());