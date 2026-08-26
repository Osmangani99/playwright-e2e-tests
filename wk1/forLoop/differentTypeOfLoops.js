

// for (let i = 10; i >=0; i--){
//     console.log(i);
// }

// let arr = ["Apple", 10, "Orange", 20, "Grapes", 30];
//console.log(arr.length)
// console.log("The position of the element is: " + arr.indexOf("Grapes")); 
// for (let i =0; i<arr.length; i++){
//     console.log(arr[i])
// }

// let arr = ["Apple", 10, "Orange", 20, "Grapes", 30];
// for(let i = 0; i<arr.length; i++){
//     let arrElement = arr[i];
//     console.log(arrElement);
// }


// sum the number from the array. When you have string and number together 
let arr = ["Apple", 10, "Orange", 20, "Grapes", 30];
let sum = 0;
for (let i = 0; i<arr.length; i++){
    let arrElement = arr[i];
    if (typeof arrElement === "number"){
        sum = sum + arrElement
    }
}
console.log(`The value of sum : ${sum}`);
