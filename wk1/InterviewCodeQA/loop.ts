// Reverse String:-------

let text = "Playwright" // 0123456789

let reverse = "";

for(let i = text.length -1; i>=0; i--)
{
reverse += text[i];
}
console.log(reverse);

// Count Characters in a String or frequency of characters in a string:-------

const text1 = "Automation"
const count: Record<string, number> = {};
for(const char of text1) {
count[char]=(count[char] || 0) +1;
}
console.log("Here is the frequency of characters in the string: "+JSON.stringify(count));

// Count Numbers in an Array or frequency of numbers in an array:-------
const numbers = [10, 20, 10, 30, 20, 10];
const numberCount: Record<number, number> = {};
for (const number of numbers) {
numberCount[number] = (numberCount[number] || 0) + 1;
}
console.log(numberCount);

// Find Duplicates in an Array:-------
const number: number[] = [10, 20, 30, 20, 10, 40]; 
const duplicates: number [] = [];
for (const number of numbers) { 
if (numbers.indexOf(number) !== numbers.lastIndexOf(number) && !duplicates.includes(number)) { 
duplicates.push(number); 
} 
} 
console.log("Here are the duplicates: "+duplicates); 

// Find Duplicates in a String:-------






