// =====================================================================
//  ANSWERS for practice.ts  -  try the questions first!
//  Run:  node wk1/InterviewCodeQA/answers.ts
// =====================================================================


// ---------------------------------------------------------------------
// A1. Reverse a string
// ---------------------------------------------------------------------
const word1 = "Playwright";
let reversed1 = "";                          // empty box to build the answer

for (let i = word1.length - 1; i >= 0; i--) { // start at last letter, go backwards
  reversed1 += word1[i];                     // glue this letter on the end
}
console.log(reversed1);                      // thgirwyalP

// Say it in the interview:
// "I loop from the last letter to the first and add each one to a new string."


// ---------------------------------------------------------------------
// A2. Count each character in a string
// ---------------------------------------------------------------------
const word2 = "hello";
const count: Record<string, number> = {};    // letter -> how many times

for (const letter of word2) {
  count[letter] = (count[letter] || 0) + 1;  // new letter starts at 0, then +1
}
console.log(count);                          // { h: 1, e: 1, l: 2, o: 1 }

// Say it in the interview:
// "I use an object as a counter. For each letter I add 1 to its count."


// ---------------------------------------------------------------------
// A3. Find duplicates in an array
// ---------------------------------------------------------------------
const nums3 = [10, 20, 30, 20, 10, 40];
const seen: number[] = [];                   // numbers we have met before
const duplicates: number[] = [];             // numbers we met twice

for (const num of nums3) {
  if (seen.includes(num)) {                  // met it before?
    if (!duplicates.includes(num)) {         // and not already saved?
      duplicates.push(num);
    }
  } else {
    seen.push(num);                          // first time -> remember it
  }
}
console.log(duplicates);                     // [ 20, 10 ]

// Say it in the interview:
// "I remember every number I see. If I see it again, it's a duplicate."


// ---------------------------------------------------------------------
// A4. Find the biggest and smallest number
// ---------------------------------------------------------------------
const nums4 = [45, 3, 90, 12, 67];
let max = nums4[0];                          // guess: first number is biggest
let min = nums4[0];                          // guess: first number is smallest

for (const num of nums4) {
  if (num > max) {
    max = num;                               // found a bigger one
  }
  if (num < min) {
    min = num;                               // found a smaller one
  }
}
console.log("Max: " + max);                  // Max: 90
console.log("Min: " + min);                  // Min: 3

// Say it in the interview:
// "I start with the first number, then replace it whenever I find a bigger/smaller one."
// (Shortcut you can mention: Math.max(...nums4) and Math.min(...nums4))


// ---------------------------------------------------------------------
// A5. Is it a palindrome?
// ---------------------------------------------------------------------
function isPalindrome(word: string): boolean {
  let reversed = "";
  for (let i = word.length - 1; i >= 0; i--) {  // same as A1
    reversed += word[i];
  }
  return reversed === word;                     // same forwards and backwards?
}

const word5a = "madam";
const word5b = "hello";

if (isPalindrome(word5a)) {
  console.log(word5a + " is a palindrome");
} else {
  console.log(word5a + " is NOT a palindrome");
}
if (isPalindrome(word5b)) {
  console.log(word5b + " is a palindrome");
} else {
  console.log(word5b + " is NOT a palindrome");
}

// Say it in the interview:
// "I reverse the word and check if it matches the original."


// ---------------------------------------------------------------------
// A6. Remove duplicates from an array
// ---------------------------------------------------------------------
const nums6 = [1, 2, 2, 3, 1, 4, 3];
const unique: number[] = [];

for (const num of nums6) {
  if (!unique.includes(num)) {               // not in the list yet?
    unique.push(num);                        // then add it
  }
}
console.log(unique);                         // [ 1, 2, 3, 4 ]

// Say it in the interview:
// "I only add a number to the new list if it isn't there already."
// (Shortcut you can mention: [...new Set(nums6)])


// ---------------------------------------------------------------------
// A7. FizzBuzz
// ---------------------------------------------------------------------
for (let i = 1; i <= 15; i++) {
  if (i % 3 === 0 && i % 5 === 0) {          // check BOTH first!
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// Say it in the interview:
// "% gives the remainder. If the remainder is 0, it divides evenly.
//  I check 'both' first, otherwise 15 would just print Fizz."


// ---------------------------------------------------------------------
// A8. Count the vowels
// ---------------------------------------------------------------------
const word8 = "Automation";
const vowels = "aeiou";
let vowelCount = 0;

for (const letter of word8.toLowerCase()) {  // lower case so "A" counts
  if (vowels.includes(letter)) {
    vowelCount++;                            // same as vowelCount = vowelCount + 1
  }
}
console.log("Vowels: " + vowelCount);        // Vowels: 6

// Say it in the interview:
// "I go through each letter and add 1 whenever it's one of a, e, i, o, u."
