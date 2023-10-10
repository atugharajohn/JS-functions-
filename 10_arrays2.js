const heros = ["thor", "ironman", "spiderman"];
const dc_hero = ["superman", "flash"];

// heros.push(dc_hero);
// console.log(heros);
// console.log(heros[3][1]);

// const marvel = heros.concat(dc_hero);
// console.log(marvel);

// const all_heroes = [...heros, ...dc_hero];
// console.log(all_heroes);

// const arr = [1,2,3,[4,5,6],7,[8,9,10]];
// const another_arr = arr.flat(Infinity);
// console.log(another_arr);

console.log(Array.isArray("yash")); // check given value is an array or not
console.log(Array.from("yash")); // split into multiple array elements
console.log(Array.from({name: "yash"}));

let a = 100;
let b = 200;
console.log(Array.of(a,b)); // convert to array