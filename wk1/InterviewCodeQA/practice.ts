// =====================================================================
//  INTERVIEW PRACTICE - 8 beginner questions
// =====================================================================
//  How to use this file:
//    1. Read the question and the steps.
//    2. Write your code under "YOUR CODE HERE".
//    3. Run it:  node wk1/InterviewCodeQA/practice.ts
//    4. Compare your output with "Expected output".
//    5. Stuck? Look at answers.ts - but try first!
// =====================================================================


// ---------------------------------------------------------------------
// Q1. Reverse a string
// ---------------------------------------------------------------------
// Turn "Playwright" into "thgirwyalP".
//
// Steps:
//   1. Make an empty string called reversed.
//   2. Loop from the LAST letter to the FIRST letter.
//   3. Add each letter to reversed.
//   4. Print reversed.
//
// Expected output:  thgirwyalP

const word1 = "Playwright";
// YOUR CODE HERE



// ---------------------------------------------------------------------
// Q2. Count each character in a string
// ---------------------------------------------------------------------
// Count how many times each letter appears in "hello".
//
// Steps:
//   1. Make an empty object called count.
//   2. Loop through each letter.
//   3. If the letter is new, start at 1. If seen before, add 1.
//   4. Print count.
//
// Hint: count[letter] = (count[letter] || 0) + 1;
//
// Expected output:  { h: 1, e: 1, l: 2, o: 1 }

const word2 = "hello";
// YOUR CODE HERE



// ---------------------------------------------------------------------
// Q3. Find duplicates in an array
// ---------------------------------------------------------------------
// Find the numbers that appear more than once.
//
// Steps:
//   1. Make an empty array called seen, and one called duplicates.
//   2. Loop through each number.
//   3. If it is already in seen AND not yet in duplicates -> add to duplicates.
//   4. Otherwise add it to seen.
//   5. Print duplicates.
//
// Hint: seen.includes(num) tells you true/false.
//
// Expected output:  [ 20, 10 ]

const nums3 = [10, 20, 30, 20, 10, 40];
// YOUR CODE HERE



// ---------------------------------------------------------------------
// Q4. Find the biggest and smallest number
// ---------------------------------------------------------------------
// Steps:
//   1. Start max and min as the FIRST number in the array.
//   2. Loop through each number.
//   3. If the number is bigger than max -> it becomes the new max.
//   4. If the number is smaller than min -> it becomes the new min.
//   5. Print both.
//
// Expected output:
//   Max: 90
//   Min: 3

const nums4 = [45, 3, 90, 12, 67];
// YOUR CODE HERE



// ---------------------------------------------------------------------
// Q5. Is it a palindrome?
// ---------------------------------------------------------------------
// A palindrome reads the same forwards and backwards (e.g. "madam").
//
// Steps:
//   1. Reverse the word (just like Q1!).
//   2. If reversed === original -> palindrome.
//   3. Print the result.
//
// Expected output:
//   madam is a palindrome
//   hello is NOT a palindrome

const word5a = "madam";
const word5b = "hello";
// YOUR CODE HERE



// ---------------------------------------------------------------------
// Q6. Remove duplicates from an array
// ---------------------------------------------------------------------
// Steps:
//   1. Make an empty array called unique.
//   2. Loop through each number.
//   3. If unique does NOT include it yet -> push it in.
//   4. Print unique.
//
// Expected output:  [ 1, 2, 3, 4 ]

const nums6 = [1, 2, 2, 3, 1, 4, 3];
// YOUR CODE HERE



// ---------------------------------------------------------------------
// Q7. FizzBuzz
// ---------------------------------------------------------------------
// Print numbers 1 to 15, but:
//   - divisible by 3 AND 5 -> print "FizzBuzz"
//   - divisible by 3 only  -> print "Fizz"
//   - divisible by 5 only  -> print "Buzz"
//   - otherwise            -> print the number
//
// Hint: i % 3 === 0 means "i divides by 3 with nothing left over".
// Hint: check FizzBuzz FIRST, or it will never be reached.
//
// Expected output (one per line):
//   1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz

// YOUR CODE HERE



// ---------------------------------------------------------------------
// Q8. Count the vowels
// ---------------------------------------------------------------------
// Count how many vowels (a, e, i, o, u) are in "Automation".
//
// Steps:
//   1. Make a string of vowels: "aeiou".
//   2. Make a counter starting at 0.
//   3. Loop through each letter (use .toLowerCase() so "A" counts too).
//   4. If vowels.includes(letter) -> add 1 to counter.
//   5. Print counter.
//
// Expected output:  Vowels: 6

const word8 = "Automation";
// YOUR CODE HERE
