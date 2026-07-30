                                    //STRINGS AND NUMBERS AND BOOLEANS AND CONDITIONAL STATEMENTS BASED QUESTIONS

/* Generate a random decimal between 1 and 100.
Print it rounded to 2 decimal places.
Convert it to a string and print its length.
Print whether the string starts with "5" */ 

let min = 1;
let max = 100;

let randomDecimal = Math.random() * (max - min + 1) + min;

console.log(+randomDecimal.toFixed(2));

let randomString = String(randomDecimal);
console.log(randomString.length);

if (randomString.startsWith("5")) {
    console.log(`The string ${randomString} starts with "5"`);
}
console.log("");

/* Take a decimal number like 123.456.
Print it rounded to the nearest integer.
Convert that integer to a string.
Print the first and last character of the string.
Print whether the string includes "2". */

let decimalNum = 1254643.456;
let integerNum = Math.round(decimalNum);
console.log(integerNum);

let integerString = String(integerNum);
console.log(`First character: ${integerString[0]} and Last character: ${integerString.slice(-1)}`);

if (integerString.includes("2")) {
    console.log(`String includes "2"`);
} else {
    console.log(`String dosen't includes "2"`);
}
console.log("");

/* Generate a random number between 1 and 500.
If the number is even, convert it to a string and print it in uppercase.
If the number is odd, convert it to a string and print it in lowercase.
Additionally, check if the string length is greater than 2 and print "Long string" or "Short string". */

min = 1;
max = 500;

let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

if (randomNum % 2 === 0) {
    let convertedString = String(randomNum);
    console.log(convertedString.toUpperCase());
    if (convertedString.length > 2) {
        console.log("Long string");
    } else {console.log("Short string");}
} 
if (randomNum % 2 !== 0) {
    let convertedString = String(randomNum);
    console.log(convertedString.toLowerCase());
    if (convertedString.length > 2) {
        console.log("Long string");
    } else {console.log("Short string");}
}
console.log("");

/* Take a decimal like 77.98765.
Print it rounded to 3 decimal places.
Convert it to a string.
Replace all "7" characters with "X".
Print whether the resulting string ends with "5". */

decimalNum = 77.98765;
let newDecimalNum = +decimalNum.toFixed(3);
console.log(newDecimalNum);

let decimalString = String(newDecimalNum);
let replacedString = decimalString.replaceAll("7", "X");
console.log(replacedString);

if (replacedString.endsWith("5")) {
    console.log("String ends with \"5\"");
} else {
    console.log("String dosen't ends with \"5\"");
}
console.log("");

/* Generate a random number between 1 and 200.
If divisible by 10, print "Multiple of 10" and also print the number as a string reversed.
If divisible by 5 but not 10, print "Multiple of 5" and print the string with all "5" replaced by "*".
Otherwise, print "Other" and print the string length. */

min = 1;
max = 200;

randomNum = Math.floor(Math.random() * (max - min)) + min;

if (randomNum % 10 === 0) {
    console.log("Multiple of 10");
    console.log(`String: ${String(randomNum)}`);
    console.log(`String reversed: ${String(randomNum).split("").reverse().join("")}`);
} else if (randomNum % 5 === 0) {
    console.log("Multiple of 5");
    console.log(`String: ${String(randomNum)}`);
    console.log(`Replaced reversed: ${String(randomNum).replaceAll("5", "*")}`);
} else {
    console.log("Other");
    console.log(`String: ${String(randomNum)}`);
    console.log(`String length: ${String(randomNum).length}`);
}
console.log("");


                                    // REAL WORLD BASED QUESTIONS


/* Invoice Rounding & Validation  
A customer’s bill amount is 456.789.
Round it to 2 decimal places for display.
Convert it to a string and check if it contains ".".
If the integer part is divisible by 9, print "Special Discount Applied".
Otherwise, print "No Discount". */     

let billAmount = 456.789;
let displayedBillAmount = +billAmount.toFixed(2);
let stringOfBillAmount = String(displayedBillAmount);
let decimalStatus = stringOfBillAmount.includes(".");

if (decimalStatus === true) {
    let integerBillAmount = +stringOfBillAmount.slice(0, stringOfBillAmount.indexOf("."));

    if (integerBillAmount % 9 === 0) {
        console.log(`Your bill: ${displayedBillAmount}`);
        console.log("Special Discount Applied");
    } else {
        console.log(`Your bill: ${displayedBillAmount}`);
        console.log("No Discount");
    }
}
console.log("");

/* Password Strength Check  
Take a string "Pa55word123!".
Print its length.
Print whether it includes "!".
Print whether it starts with "P".
If the length is greater than 10 and it includes a number, print "Strong Password".
Otherwise, print "Weak Password". */

let password = "Pa55word123!";
let passwordLength = password.length;
console.log(`Your password Length is ${passwordLength}.`);

if (password.includes("!")) {console.log("Your password includes symbol \"!\"");}
if (password.includes("P")) {console.log("Your password includes letter \"P\"");}
if (passwordLength > 10 && /\d/.test(password)) {console.log("Strong Password");} else {console.log("Weak Password");}
console.log("");

/* Temperature Sensor Reading  
Generate a random decimal between ‑50 and 50.
Round it to 1 decimal place.
Convert it to a string.
If the value is greater than 40, print "High Temperature Alert".
If it’s less than 0, print "Below Freezing".
Otherwise, print "Normal Range".
Additionally, check if the string ends with "5" and print "Ends with 5" if true. */

min = -50;
max = 50;

let randomDecimalNum = Math.random() * (max - min + 1) + min;
let temperature = +randomDecimalNum.toFixed(1);
let stringOfTemperature = String(temperature);

if (temperature > 40) {console.log("High Temperature Alert");}
else if (temperature < 0) {console.log("Below Freezing");}
else {console.log("Normal Range");}

if (stringOfTemperature.endsWith("5")) {console.log("Ends with 5");}
console.log("");

/* Bank Account Validation  
Take an account number string "9876543215".
Print its length.
Print the first and last digit.
If the last digit is divisible by 5, print "Valid Ending Digit".
If the string includes "0", print "Contains Zero".
Otherwise, print "No Zero Found". */

let accountNumber = "9876543215";
let accountNumberLength = accountNumber.length;

console.log(`Length of Account Number: ${accountNumberLength}`);
console.log(`First digit: ${accountNumber[0]} and Last digit: ${accountNumber.slice(-1)}`);

if (+accountNumber.slice(-5) % 5 === 0) {console.log("Valid Ending Digit");}

if (accountNumber.includes("0")) {console.log("Contains Zero");} else {console.log("No Zero Found");}
console.log("");

/* Product Code Check  
Generate a random number between 1000 and 9999.
Convert it to a string.
Print whether the string starts with "7".
Print whether the string includes "3".
If the integer is divisible by 11, print "Special Product".
Otherwise, print "Regular Product". */

min = 1000;
max = 9999;

let productCode = Math.floor(Math.random() * (max - min + 1)) + min;
let stringOfProductCode = String(productCode);

if (stringOfProductCode.startsWith("7")) {
    console.log("Product code begins with number 7");
}
if (stringOfProductCode.includes("3")) {
    console.log("Product code includes number 3");
}
if (productCode % 11 === 0) {
    console.log(`Product Code: ${productCode}`);
    console.log("Special Product");
} else {
    console.log(`Product Code: ${productCode}`);
    console.log("Regular Product")
}