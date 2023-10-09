// numbers and maths functions
// const num = 100;
// console.log(num);

// const value = new Number(203);
// console.log(value);

// console.log(num.toString().length);
// console.log(num.toFixed(2));

// const result = 1402.860389;
// console.log(result.toPrecision(4));

// const values = 1400000;
// console.log(values.toLocaleString('en-IN'));

/*********** Maths ***************/
console.log(Math);
console.log(Math.abs(-12.3));
console.log(Math.floor(34.003));
console.log(Math.log(45));
console.log(Math.max(12, 2, 56));
console.log(Math.min(12, 2, 56));
console.log(Math.ceil(45.9));

console.log(Math.random());
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min) ; // generate random number