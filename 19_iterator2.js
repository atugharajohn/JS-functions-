// for of loop

// const arr = [1,2,3,4,5,6,7];
// for (const val of arr) {
//     console.log(val);
// }

// const str = "yash";
// for (const val of str) {
//     console.log(val);
// }

/*********** Map *********/

const map = new Map();
map.set('IN',"India");
map.set('USA',"United States of America");
map.set('Fr',"France");

// console.log(map);

/*********** for-of loop *********/

// for (const [key,value] of map) {
//     console.log(key, "=" ,value);
// }

const values = {
    name:"yash",
    age : 20,
    channel:"CodeWithYash"
}
/*********** for-in loop ***************/

// for (const key in values) {
//     console.log(`${key} = ${values[key]}`);
// }

// const lang = ["js", "css", "html","c++"];
// for (const key in lang) {
//     console.log(lang[key]);

// }

// map are not iterable using for-in loop
// for(const key in map){
//     console.log(key)
// }

/**************  for-Each loop ************/

const languages = ["js", "css", "html","c"];

// languages.forEach((val) => {
//     console.log(val)
// })

// function result(item) {
//     console.log(item);
// }
// languages.forEach(result);

// languages.forEach((item,index,arr) => {
//     console.log(item,index,arr);
// })

const coding = [
    {
        name : "javascript",
        fileName: "js"
    },
    {
        name :"java",
        fileName: "java"
    },
    {
        name :"python",
        fileName: "python"
    }

];

coding.forEach((items)=>{
    console.log(items.fileName);
})