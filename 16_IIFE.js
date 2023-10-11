// IIFE => Immediately Invoked Functions Expressions

// Avoid polluting the global namespace
// Because our application could include many functions and
//  global variables from different source files,
//  it's important to limit the number of global variables.

(function code() {
    // named IIFE
  console.log("hello coders");
})(); // ; is imp

// (function defination)(execute)
((name) => {
  console.log(`databse connected ${name}`);
})("yash");
