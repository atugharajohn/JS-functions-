// for loop

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if(element == 5){
//         console.log("5 is number");
//     }
//     console.log(element);
// }

// for (let i = 1; i < 5; i++) {
//     console.log(`Outer loop : ${i}`);
//     for(let j = 1; j <= 10; j++) {
//         // console.log(`Inner loop : ${j} and ${i}`);
//         console.log(`${i} * ${j} = ${i*j}`);
//     }

// }

const arr = ["yash", "vinu", "tanu"];

// console.log(arr.length);

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(element);
// }

// break and continue

// for (let i = 0; i < 10; i++) {
//   if (i == 5) {
//     console.log("5 is detected");
//     break;
//   }
//   console.log(`value = ${i}`);
// }

for (let i = 0; i < 10; i++) {
  if (i == 5) {
    console.log("5 is detected");
    continue;
  }
  console.log(`value = ${i}`);
}
