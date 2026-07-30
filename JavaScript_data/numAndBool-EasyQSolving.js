//Write a program that takes a decimal number and:
/*Rounds it up using Math.ceil()
Rounds it down using Math.floor()
Rounds it to the nearest integer using Math.round()*/
let x = 34.567;
console.log(Math.ceil(x));  //35
console.log(Math.floor(x)); //34
console.log(Math.round(x));  //35
console.log("");

//Generate a random number between 1 and 100 using Math.random().
//Then check if it’s even or odd using conditional statements.

let min = 1;
let max = 100;

let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

if (randomNum % 2 === 0) {
    console.log(`The number is ${randomNum} and it is an Even number.`)
} else {
    console.log(`The number is ${randomNum} and it is an odd number.`)
}
console.log("");

//Convert the string "123.456" into a number.
//Use Number()
//Use parseInt()
//Use parseFloat()  
//Compare the results.

x = "123.456";

let num1 = Number(x);
let num2 = Number.parseFloat(x);
let num3 = Number.parseInt(x);

console.log(`Conversion using Number(): ${num1}
conversion using parseFloat(): ${num2}
conversion using parseInt(): ${num3}`);
console.log("");

//Find the square root of 144.
//Then raise 2 to the power of 5 using.

x = 144;

let squareRoot = Math.sqrt(x);
console.log(`Squareroot of ${x} is ${squareRoot}.`);
console.log(`2 to the power is 5 is ` + Math.pow(2, 5));
console.log("");

//Write a program that checks if a number is positive, negative, or zero using if...else.

min = -100;
max = 100;
randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
x = randomNum;

if (x > 0) {
    console.log(`The value of x is ${x} which is a positive number.`)
} else if (x < 0) {
    console.log(`The value of x is ${x} which is a negative number.`)
} else {
    console.log("The value of x is zero")
}
console.log("");

//Create a program that asks for a user’s age (hardcode a value for now).
//If age is less than 18 → print "Minor"
//If age is between 18 and 60 → print "Adult"
//Otherwise → print "Senior"

let age = 61;

if (age < 18) {
    console.log("Minor");
} else if (age >= 18 && age <= 60) {
    console.log("Adult");
} else {
    console.log("Senior");
}
console.log("");

//Use a Boolean variable isLoggedIn = true.
//Write a conditional that prints "Welcome back!" if true, otherwise "Please log in."

let isLoggedIn = false;

if (isLoggedIn === true) {console.log("Welcome back!")}
else {console.log("Please log in.")}
console.log("");

//Given two numbers, check if both are divisible by 5.
//Print "Both divisible" if true, otherwise "Not both divisible".

num1 = 55;
num2 = 45;

if (num1 % 5 === 0 && num2 % 5 === 0) {console.log("Both divisible");}
else {console.log("Not both divisible");}
console.log("");

//Generate a random number between 0 and 1.
//If it’s greater than 0.5 → print "Heads"
//Otherwise → print "Tails"

randomNum = Math.random();

if (randomNum >= 0.5) {console.log(`Heads(${randomNum})`);} 
else {console.log(`Tails(${randomNum})`);}
console.log("");

//Write a program that takes a number and:
//Checks if it’s an integer using Number.isInteger()
//If it’s not, round it to 2 decimal places using .toFixed(2)

x = 44.4686;

if (Number.isInteger(x)) {
    console.log(`x is a integer number: ${x}`);
} else {
    console.log(`x is a decimal number: ${x.toFixed(2)}`);
}
