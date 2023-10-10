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
console.log(loginUser());
