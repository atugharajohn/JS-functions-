// type conversion in JS
let score = "34";
console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof(valueInNumber));
console.log(valueInNumber);

// "34" => 34
// "34abc" => NaN
// true => 1; false => 0

let isLoogedIn = 1;
let booleanIsLoogedIn = Boolean(isLoogedIn);
console.log(booleanIsLoogedIn);

// "" => false
// "yash" => true

let num = 23;
console.log(Number(num));
console.log(typeof(num)); 
