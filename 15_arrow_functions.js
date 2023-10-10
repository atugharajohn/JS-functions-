const user = {
    username:"yash",
    price : 100,
    msg:function(){
        console.log(`${this.username} ,welcome to coding galaxy`);
        // console.log(this);
    }
}

// user.msg();
// user.username = "tanu";
// user.msg();

// console.log(this);

// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.

function code() {
    let username = "yash";
    // console.log(this);
    console.log(this.user);
}

// code();

// arrow function
const display = () => {
    let username = "yash";
    console.log(username);
}

// display();

// const addNumbers = (num1,num2) => { 
//     return num1 + num2;
// }

// const addNumbers = (num1,num2) => num1 + num2;

const addNumbers = (num1,num2) => (num1 + num2);

console.log(addNumbers(2,3));