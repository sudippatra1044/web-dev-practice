//Generate 20 random numbers between 1 and 200.
//Print only those numbers that are perfect squares.

let min = 1;
let max = 200;

let randomnum1 = Math.floor(Math.random() * (max - min + 1)) + min;
let randomnum2 = Math.floor(Math.random() * (max - min + 1)) + min;
let randomnum3 = Math.floor(Math.random() * (max - min + 1)) + min;
let randomnum4 = Math.floor(Math.random() * (max - min + 1)) + min;
let randomnum5 = Math.floor(Math.random() * (max - min + 1)) + min;
let randomnum6 = Math.floor(Math.random() * (max - min + 1)) + min;
let randomnum7 = Math.floor(Math.random() * (max - min + 1)) + min;
let randomnum8 = Math.floor(Math.random() * (max - min + 1)) + min;
let randomnum9 = Math.floor(Math.random() * (max - min + 1)) + min;
let randomnum10 = Math.floor(Math.random() * (max - min + 1)) + min;
let randomnum11 = Math.floor(Math.random() * (max - min + 1)) + min;
let randomnum12 = Math.floor(Math.random() * (max - min + 1)) + min;
let randomnum13 = Math.floor(Math.random() * (max - min + 1)) + min;
let randomnum14 = Math.floor(Math.random() * (max - min + 1)) + min;
let randomnum15 = Math.floor(Math.random() * (max - min + 1)) + min;
let randomnum16 = Math.floor(Math.random() * (max - min + 1)) + min;
let randomnum17 = Math.floor(Math.random() * (max - min + 1)) + min;
let randomnum18 = Math.floor(Math.random() * (max - min + 1)) + min;
let randomnum19 = Math.floor(Math.random() * (max - min + 1)) + min;
let randomnum20 = Math.floor(Math.random() * (max - min + 1)) + min;

if (Number.isInteger(Math.sqrt(randomnum1))) {
    console.log(`The randomnum1 is ${randomnum1} which is a perfect square of ${Math.sqrt(randomnum1)}.`);
}
if (Number.isInteger(Math.sqrt(randomnum2))) {
    console.log(`The randomnum2 is ${randomnum2} which is a perfect square of ${Math.sqrt(randomnum2)}.`);
} 
if (Number.isInteger(Math.sqrt(randomnum3))) {
    console.log(`The randomnum3 is ${randomnum3} which is a perfect square of ${Math.sqrt(randomnum3)}.`);
} 
if (Number.isInteger(Math.sqrt(randomnum4))) {
    console.log(`The randomnum4 is ${randomnum4} which is a perfect square of ${Math.sqrt(randomnum4)}.`);
} 
if (Number.isInteger(Math.sqrt(randomnum5))) {
    console.log(`The randomnum5 is ${randomnum5} which is a perfect square of ${Math.sqrt(randomnum5)}.`);
} 
if (Number.isInteger(Math.sqrt(randomnum6))) {
    console.log(`The randomnum6 is ${randomnum6} which is a perfect square of ${Math.sqrt(randomnum6)}.`);
} 
if (Number.isInteger(Math.sqrt(randomnum7))) {
    console.log(`The randomnum7 is ${randomnum7} which is a perfect square of ${Math.sqrt(randomnum7)}.`);
}
if (Number.isInteger(Math.sqrt(randomnum8))) {
    console.log(`The randomnum8 is ${randomnum8} which is a perfect square of ${Math.sqrt(randomnum8)}.`);
}
if (Number.isInteger(Math.sqrt(randomnum9))) {
    console.log(`The randomnum9 is ${randomnum9} which is a perfect square of ${Math.sqrt(randomnum9)}.`);
} 
if (Number.isInteger(Math.sqrt(randomnum10))) {
    console.log(`The randomnum10 is ${randomnum10} which is a perfect square of ${Math.sqrt(randomnum10)}.`);
} 
if (Number.isInteger(Math.sqrt(randomnum11))) {
    console.log(`The randomnum11 is ${randomnum11} which is a perfect square of ${Math.sqrt(randomnum11)}.`);
} 
if (Number.isInteger(Math.sqrt(randomnum12))) {
    console.log(`The randomnum12 is ${randomnum12} which is a perfect square of ${Math.sqrt(randomnum12)}.`);
} 
if (Number.isInteger(Math.sqrt(randomnum13))) {
    console.log(`The randomnum13 is ${randomnum13} which is a perfect square of ${Math.sqrt(randomnum13)}.`);
}
if (Number.isInteger(Math.sqrt(randomnum14))) {
    console.log(`The randomnum14 is ${randomnum14} which is a perfect square of ${Math.sqrt(randomnum14)}.`);
} 
if (Number.isInteger(Math.sqrt(randomnum15))) {
    console.log(`The randomnum15 is ${randomnum15} which is a perfect square of ${Math.sqrt(randomnum15)}.`);
} 
if (Number.isInteger(Math.sqrt(randomnum16))) {
    console.log(`The randomnum16 is ${randomnum16} which is a perfect square of ${Math.sqrt(randomnum16)}.`);
} 
if (Number.isInteger(Math.sqrt(randomnum17))) {
    console.log(`The randomnum17 is ${randomnum17} which is a perfect square of ${Math.sqrt(randomnum17)}.`);
}
if (Number.isInteger(Math.sqrt(randomnum18))) {
    console.log(`The randomnum18 is ${randomnum18} which is a perfect square of ${Math.sqrt(randomnum18)}.`);
}
if (Number.isInteger(Math.sqrt(randomnum19))) {
    console.log(`The randomnum19 is ${randomnum19} which is a perfect square of ${Math.sqrt(randomnum19)}.`);
} 
if (Number.isInteger(Math.sqrt(randomnum20))) {
    console.log(`The randomnum20 is ${randomnum20} which is a perfect square of ${Math.sqrt(randomnum20)}.`);
}
if (!Number.isInteger(Math.sqrt(randomnum1)) && !Number.isInteger(Math.sqrt(randomnum2)) && !Number.isInteger(Math.sqrt(randomnum3)) && !Number.isInteger(Math.sqrt(randomnum4)) && !Number.isInteger(Math.sqrt(randomnum5)) && !Number.isInteger(Math.sqrt(randomnum6)) && !Number.isInteger(Math.sqrt(randomnum7)) && !Number.isInteger(Math.sqrt(randomnum8)) && !Number.isInteger(Math.sqrt(randomnum9)) && !Number.isInteger(Math.sqrt(randomnum10)) && !Number.isInteger(Math.sqrt(randomnum11)) && !Number.isInteger(Math.sqrt(randomnum12)) && !Number.isInteger(Math.sqrt(randomnum13)) && !Number.isInteger(Math.sqrt(randomnum14)) && !Number.isInteger(Math.sqrt(randomnum15)) && !Number.isInteger(Math.sqrt(randomnum16)) && !Number.isInteger(Math.sqrt(randomnum17)) && !Number.isInteger(Math.sqrt(randomnum18)) && !Number.isInteger(Math.sqrt(randomnum19)) && !Number.isInteger(Math.sqrt(randomnum20))) {
    console.log("No randomnum genrated that is perfect square.");
}
console.log("");

//Create a program that generates a random number between 1 and 1000.
//If the number is divisible by both 2 and 3, print "FizzBuzz".
//If only divisible by 2, print "Fizz".
//If only divisible by 3, print "Buzz".
//Otherwise, print the number itself.

min = 1;
max = 1000;

let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
if (randomNum % 2 === 0 && randomNum % 3 === 0) {
    console.log("FizzBuzz");
} else if (randomNum % 2 === 0) {
    console.log("Fizz");
} else if (randomNum % 3 === 0) {
    console.log("Buzz");
} else {console.log(randomNum);}
console.log("");


// Write a program that asks for two numbers.
// If both are integers → print "Both are integers"
// If one is integer and the other is decimal → print "Mixed types"
// If both are decimals → print "Both are decimals"

let num1 = 44.88;
let num2 = 44;

if (Number.isInteger(num1) && Number.isInteger(num2)) {
    console.log("Both are integers");
} else if (Number.isInteger(num1) || Number.isInteger(num2)) {
    console.log("Mixed types");
} else {
    console.log("Both are decimals");
}
console.log("");

//Generate 5 random decimal numbers between 0 and 10.
//For each number:
//Print it rounded to 2 decimal places
//Print its square root (rounded to 3 decimal places)
//Print whether the rounded integer is even or odd

min = 0;
max = 10;
randomnum1 = Math.random() * (max - min + 1 ) + min;
randomnum2 = Math.random() * (max - min + 1 ) + min;
randomnum3 = Math.random() * (max - min + 1 ) + min;
randomnum4 = Math.random() * (max - min + 1 ) + min;
randomnum5 = Math.random() * (max - min + 1 ) + min;

console.log(randomnum1.toFixed(2));
console.log(randomnum2.toFixed(2));
console.log(randomnum3.toFixed(2));
console.log(randomnum4.toFixed(2));
console.log(randomnum5.toFixed(2));
console.log("");

console.log((Math.sqrt(randomnum1)).toFixed(3));
console.log((Math.sqrt(randomnum2)).toFixed(3));
console.log((Math.sqrt(randomnum3)).toFixed(3));
console.log((Math.sqrt(randomnum4)).toFixed(3));
console.log((Math.sqrt(randomnum5)).toFixed(3));
console.log("");

if (Math.round(randomnum1) % 2 === 0) {
    console.log(`The rounded integer is ${Math.round(randomnum1)} and it is an even number.`)
} else {
    console.log(`The rounded integer is ${Math.round(randomnum1)} and it is a odd number.`)
}
if (Math.round(randomnum2) % 2 === 0) {
    console.log(`The rounded integer is ${Math.round(randomnum2)} and it is an even number.`)
} else {
    console.log(`The rounded integer is ${Math.round(randomnum2)} and it is a odd number.`)
}
if (Math.round(randomnum3) % 2 === 0) {
    console.log(`The rounded integer is ${Math.round(randomnum3)} and it is an even number.`)
} else {
    console.log(`The rounded integer is ${Math.round(randomnum3)} and it is a odd number.`)
}
if (Math.round(randomnum4) % 2 === 0) {
    console.log(`The rounded integer is ${Math.round(randomnum4)} and it is an even number.`)
} else {
    console.log(`The rounded integer is ${Math.round(randomnum4)} and it is a odd number.`)
}
if (Math.round(randomnum5) % 2 === 0) {
    console.log(`The rounded integer is ${Math.round(randomnum5)} and it is an even number.`)
} else {
    console.log(`The rounded integer is ${Math.round(randomnum5)} and it is a odd number.`)
}
console.log("");

//Write a program that takes a number and:
//If it’s greater than 100, print "Large"
//If it’s between 50 and 100, print "Medium"
//If it’s less than 50, print "Small"  
//Then, additionally check if the number is divisible by 7 and print "Divisible by 7" if true.

min = 1;
max = 200;

randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

if (randomNum > 100) {
    console.log(`Large(${randomNum})`);
    if (randomNum % 7 === 0) {console.log("Divisible by 7")}
} else if (randomNum >= 50 && randomNum <= 100) {
    console.log(`Medium(${randomNum})`);
    if (randomNum % 7 === 0) {console.log("Divisible by 7")}
} else {
    console.log(`Small(${randomNum})`);
    if (randomNum % 7 === 0) {console.log("Divisible by 7")}
}
console.log("");

/* Write a program that takes a decimal number like 123.456789.
Print it rounded to 2 decimal places
Print it rounded to 4 decimal places
Print it as an integer using parseInt()
Print whether the integer is divisible by 9 */

decimalNum = 108.456789;

console.log(decimalNum.toFixed(2));
console.log(decimalNum.toFixed(4));
console.log(+Number.parseInt(decimalNum));
if (+Number.parseInt(decimalNum) % 9 === 0) {
    console.log("Divisible by 9");
}