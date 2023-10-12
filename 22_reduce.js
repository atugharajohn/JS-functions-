// reduce()
//

const myNumber = [1, 2, 3, 4, 5];

const initialValue = 0;

// const total = myNumber.reduce((acc,currVal)=>{
//     console.log(`acc =  ${acc} and currVal = ${currVal}`);
//     return acc + currVal;
// },initialValue);

const total = myNumber.reduce((acc, currVal) => acc + currVal, 0);

console.log(`Total sum: ${total}`);

const books = [
    {
        name : "js course",
        price : 120,
    },
    {
        name : "c++ course",
        price : 100,
    },
    {
        name : "java course",
        price : 200,
    },
    {
        name : "ReactJs course",
        price : 250,
    },
];

const totalPrice = books.reduce((acc, items) => acc + items.price, 0);
console.log("Total price of books : " ,totalPrice);
