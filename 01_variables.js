console.log("Hello World!");

// variables in js
const accountId = 12839;
let accountEmail = "yash@gamil.com";
var accountPassword = "1234";
accountCity = "Nagpur";
let accountState;

// accountId = 1834; not allowed, const values can not change
accountEmail = "yp@23gmail.com";
accountPassword = "2343";
accountCity = "pune";

// prefer not to used var 
// because of issue in block scope and functional scope

console.log(accountId);
console.table([accountId,accountEmail, accountPassword, accountCity,accountState]);