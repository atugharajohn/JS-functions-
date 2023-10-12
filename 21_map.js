// The Map object holds key-value pairs and
//  remembers the original insertion order of the keys

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const result = myNum.map((num) => {
//     return num + 10;
// });

const result = myNum
    .map((num) => num + 10)
    .map((num) => num * 2)

console.log(result);