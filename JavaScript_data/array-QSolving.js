/* Favorite Fruits  
Create an array of fruits.
Return the length of the array.
Check if "Banana" is included.
Find the index of "Mango".
Convert the array to a string */

const fruits = ["apple", "banana", "mango", "orange"];

console.log(fruits.length);
console.log(fruits.includes("banana"));
console.log(fruits.indexOf("mango"));

const stringOfFruits = fruits.toString();
console.log(stringOfFruits);
console.log("");

/* Shopping List Merger  
Create two arrays: one for groceries and one for household items.
Merge them into a single array.
Slice the merged array to get only the first 3 items.
Join the sliced array into a string separated by commas. */

const groceries = ["tea", "milk", "eggs", "vegetables"];
const householdItems = ["lamp", "sissors", "gum", "bedsheets"];

const combinedItems = [...groceries, ...householdItems];
console.log(combinedItems);
const slicedItems = combinedItems.slice(0, 3);
console.log(slicedItems);
const joinedItems = slicedItems.join(", ");
console.log(joinedItems);
console.log("");

/* Phone Digits  
Create an array of digits [9,3,7,3,8,3,8,4,1,0].
Convert it into a string using .join("").
Check if the resulting string includes "73".
Return the index of "8" in the array. */

const digits = [9, 3, 7, 3, 8, 3, 8, 4, 1, 0];
const joinedDigits = digits.join("");
console.log(joinedDigits);
console.log(joinedDigits.includes("73"));
console.log(digits.indexOf(8));
console.log("");

/* Email Domains  
Create an array of email addresses.
Slice the array to get the last 2 emails.
Convert the sliced array into a string with .join(" | "). */

const emailAddresses = [
  "abcd@gmail.com",
  "1234@gmail.com",
  "rahul234@gmail.com",
  "heman908@gmail.com",
];

const slicedEmailAddresses = emailAddresses.slice(-2);
console.log(slicedEmailAddresses);

const joinedEmailAddress = slicedEmailAddresses.join(" | ");
console.log(joinedEmailAddress);
console.log("");

/* Reverse Order  
Create an array of 5 numbers.
Reverse the array using .reverse().
Convert the reversed array into a string.
Check if the string ends with "1". */

const numbers = [33, 45, 22, 64, 324];
const reversedNumbers = numbers.reverse();
console.log(reversedNumbers);

const stringOfReversedNumbers = reversedNumbers.join("");
console.log(stringOfReversedNumbers);
console.log(stringOfReversedNumbers.endsWith("1"));
console.log("");

// MORE DIFFICULT QUESTIONS

/* Unique Colors  
Create an array of colors with duplicates.
Use .indexOf() and .lastIndexOf() to check if a color appears more than once.
Return "Unique" if the first and last index are the same, otherwise "Duplicate Found". */

const colors = ["red", "green", "black", "red", "yellow", "black"];

function uniqueIdentifier(color) {
  if (colors.indexOf(color) === colors.lastIndexOf(color)) {
    return "Unique";
  } else {
    return "Duplicate Found";
  }
}

const redColorCheck = uniqueIdentifier("red");
console.log(`Red: ${redColorCheck}`);
const greenColorCheck = uniqueIdentifier("green");
console.log(`Green: ${greenColorCheck}`);
const blackColorCheck = uniqueIdentifier("black");
console.log(`Black: ${blackColorCheck}`);
const yellowColorCheck = uniqueIdentifier("yellow");
console.log(`Yellow: ${yellowColorCheck}`);
console.log("");

/* Sentence Builder  
Create an array of words.
Use .join(" ") to form a sentence.
Slice the array to remove the first and last word, then join again.
Convert the final array into a string with .toString(). */

const words = ["hello", "my", "name", "is", "sudip", "patra"];

const sentenceOfWords = words.join(" ");
console.log(sentenceOfWords);

const slicedWords = words.slice(1, -1);
console.log(slicedWords);

const joinedOfSlicedWords = slicedWords.join(" ");
console.log(joinedOfSlicedWords);

const stringOfSlicedWords = slicedWords.toString();
console.log(stringOfSlicedWords);
console.log("");

/* Reverse PIN  
Create an array [1,2,3,4,5,6].
Reverse the array with .reverse().
Join into a string with "-" as separator.
Check if the string starts with "6". */

const nums = [1, 2, 3, 4, 5, 6];

const reversedNums = nums.reverse();
console.log(reversedNums);

const joinedNums = reversedNums.join("-");
console.log(joinedNums);

console.log(joinedNums.startsWith("6"));
console.log("");

/* Email Extractor  
Create an array of email addresses.
Slice the array to get the middle two emails.
Join them with " | " separator.
Convert the joined result into uppercase using .toUpperCase() */

const emailAddresses2 = [
  "abcd@gmail.com",
  "1234@gmail.com",
  "rahul234@gmail.com",
  "heman908@gmail.com",
  "sudip345@gmail.com",
  "qwerty123@gmail.com",
  "Payal@gmail.com",
  "sheela@gmail.com",
];
console.log(emailAddresses2);

let start;
let end;
let middleEmails;
if (emailAddresses2.length % 2 === 0) {
  start = emailAddresses2.length / 2 - 1;
  end = emailAddresses2.length / 2 + 1;
  middleEmails = emailAddresses2.slice(start, end);
} else if (emailAddresses2.length % 2 !== 0) {
  start = (emailAddresses2.length + 1) / 2 - 1;
  end = (emailAddresses2.length + 1) / 2 + 1;
  middleEmails = emailAddresses2.slice(start, end);
}
console.log(middleEmails);

const joinedMiddleEmails = middleEmails.join(" | ");
console.log(joinedMiddleEmails);
console.log(joinedMiddleEmails.toUpperCase());
console.log("");
