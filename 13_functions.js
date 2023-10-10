// function declarations
function sayHello(){
    console.log("hello yash");
    console.log("hello yash");
}

// sayHello; // reference
// sayHello(); // execution

function addNumbers(num1,num2) { // (num1,num2) => are parameters
    console.log(num1 + num2);
}
// addNumbers(2,5); // (2,5) => arguments

function addNumbers(num1,num2) { // (num1,num2) => are parameters
    const result = num1 + num2;
    return result;
    // console.log("executing"); // will not execute after return console.log()
}

const result = addNumbers(2,4);
// console.log("Result: " + result);

function loginUser(username = "ram") {
    if(!username){
        console.log("please enter a username");
        return;
    }
    return `${username} just logged in`;
}

// console.log(loginUser("yash"));
// console.log(loginUser());

// rest operator (...)
function calculatePrice(...num1) {
    return num1;
}

// console.log(calculatePrice(100,200,30)); 

const user = {
    username : "yash",
    age :20
}

function handleObj(user) {
    console.log(`Username is ${user.username} and age is ${user.age}`);
}

// handleObj(user);

// handleObj({
//     username : "john",
//     age :10
// });

const arr = [10,20,30,40];
function returnValue(arr) {
    return arr[1];
}

console.log(returnValue(arr));