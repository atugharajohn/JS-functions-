// local and global in js

// let a = 2;
var a = 39; // global

if(true){
    // let a = 10
    const b = 20;
    var c = 30;
    // console.log("INNER : ",a);
}

// console.log(a);
// console.log(b);
// console.log(c)

function test(){
    const username = "yashya";

    function display(){
        const id = 12;
        // console.log(username);
    }
    // console.log(id);
    display();
}

test();

console.log(one(4));

function one(num) {
    return num + 1;
}

console.log(one(4));

//second function
// console.log(result(2));

const result = function(num){ // expression
    return num + 1;
}

console.log(result(2));