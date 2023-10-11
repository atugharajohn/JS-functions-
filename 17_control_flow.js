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

switch(month){
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("february");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;
    default:
        console.log("not matching");
        break;
}