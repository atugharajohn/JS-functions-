// if statement
const temperature = 40;

// if(temperature < 50){
//     console.log("greater than 50");
// }

// < ,> , <=, >=,!= ,== , ===,!==

const balance = 200;

// if(balance < 100){
//     console.log("less than");
// }else if(balance < 150){
//     console.log("less than 150");
// }else {
//     console.log("less than 201");
// }

const userLoggedIn = true;
const debitCard = true;

// if(userLoggedIn && debitCard && 2==3){
//     console.log("Allowed to buy courses");
// }

const loggedInFromGoogle = false;
const loggedInFromEmail = true;

// if(loggedInFromGoogle || loggedInFromEmail){
//     console.log("Allowed to login");
// }

const month = 3;

// switch(month){
//     case 1:
//         console.log("january");
//         break;
//     case 2:
//         console.log("february");
//         break;
//     case 3:
//         console.log("march");
//         break;
//     case 4:
//         console.log("april");
//         break;
//     default:
//         console.log("not matching");
//         break;
// }

// falsy values => false,0,-0,BigInt 0n, "",null,undefined,NaN

// Truthy values => "0",'false'," ",[],{},function(){}

const userEmail = "user@example.com";

// if(userEmail.length === 0){
//     console.log("Array is empty");
// }

// Nullish coalescing operator (??) : null undefined
let val;
// val = 5 ?? 10; // set first value 5
// val = null ?? 10; 
// val = undefined ?? 15;
val = null ?? 10 ?? 15;
console.log(val);

// Ternary Operator
const price = 100;
(price > 140) ? console.log("price is greater") : console.log("price is less");