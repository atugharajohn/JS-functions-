// primitive datatype

// 7 types :=> String, Number, Boolean, null, undefined, symbol, BigInt

const num = 10;
const value = 10.2;

const isLoggedIn = false;
const temp = null;
let user; // undefined

const id = Symbol('12');
const cId = Symbol('12');
console.log(id === cId);

const val = 1290347873882n;
console.log(typeof val);
console.log(typeof user)

// Reference (non primitive)
// type :=> Array, Objects, Functions

const cars = ["BMW","Audi","tata"];
console.log(cars);

const names = {
    myName : "yash",
    age : 18,
    city :"nagpur"
}
console.log(names);

const myFunc = function(){
    // console.log("hello yash");
    return 2;
}

console.log(typeof names);
// js is statically type or dynamically type