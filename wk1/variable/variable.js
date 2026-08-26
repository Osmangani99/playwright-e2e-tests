/**
 * variable var, let and const 
 */

let val = 0
val = 1; // reassign
console.log(val);

// let can reassign with different data type
let val1 = 0
val1 = "ten";
console.log(val1);

// const 
const app_url1 = "https://www.google.com";
// app_url1 = "https://www.facebook.com"; // cannot reassign 
console.log(app_url1);


// variable scope
let val2 = 0;

if (true){
    let val2 = 1; // this is a different variable than the one outside the block
    console.log("The value in side the block is: " + val2); // 1
}
console.log("The value outside the block is: " + val2); // 0   