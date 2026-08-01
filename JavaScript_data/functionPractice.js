// EASY CALCULATION USING FUNCTION

function calculateSum(num1, num2) {
  return num1 + num2;
}

console.log(calculateSum(2, 5));
console.log(calculateSum(10, 10));
console.log(calculateSum(5, 5));

function calculateDifference(num1, num2) {
  return num1 - num2;
}

console.log(calculateDifference(22, 5));
console.log(calculateDifference(12, 1));
console.log(calculateDifference(17, 9));

function calculateProduct(num1, num2) {
  return num1 * num2;
}

console.log(calculateProduct(13, 5));

function calculateQuotient(num1, num2) {
  return num2 === 0 ? "Error: Division by zero" : num1 / num2;
}

console.log(calculateQuotient(7, 11));
console.log(calculateQuotient(3, 0));

function calculateSquare(num) {
  return num ** 2;
}

console.log(calculateSquare(2));
console.log(calculateSquare(9));

function calculateSquareRoot(num) {
  return Math.sqrt(num);
}

console.log(calculateSquareRoot(2));
console.log(calculateSquareRoot(9));
console.log("");




// EMAIL MASKING USING FUNCTION

function maskEmail(email) {
  const unmaskedFrontPart = email[0];
  const unmaskedEndPart = email.slice(email.lastIndexOf("@")-1);
  const maskedPartLength = (email.slice(1, email.lastIndexOf("@")-1)).length;
  return unmaskedFrontPart + "*".repeat(maskedPartLength) + unmaskedEndPart;
}

let email = "apple.pie@example.com"
console.log(maskEmail(email));
console.log("");




// LOAN QUALIFICATION CHECKER USING FUNCTION

const minIncomeForDuplex = 60000;
const minCreditScoreForDuplex = 700;

const minIncomeForCondo = 45000;
const minCreditScoreForCondo = 680;

const minIncomeForCar = 30000;
const minCreditScoreForCar = 650;

function getLoanMessage(annualIncome, creditScore) {
  if(creditScore >= minCreditScoreForDuplex && annualIncome >= minIncomeForDuplex) {
    return "You qualify for a duplex, condo, and car loan."
  } else if (annualIncome >= minIncomeForCondo && creditScore >= minCreditScoreForCondo) {
    return "You qualify for a condo and car loan."
  } else if (annualIncome >= minIncomeForCar && creditScore >= minCreditScoreForCar) {
    return "You qualify for a car loan."
  } else {
    return "You don't qualify for any loans."
  }
}

const duplexLoanMsg = getLoanMessage(85000, 850);
const condoLoanMsg = getLoanMessage(65000, 690);
const carLoanMsg = getLoanMessage(45000, 660);
const noLoanMsg = getLoanMessage(25000, 550); 

console.log(duplexLoanMsg);
console.log(condoLoanMsg);
console.log(carLoanMsg);
console.log(noLoanMsg);
console.log("");




// CELCIUS TO FAHRENHEIT CONVERTER USING FUNCTION

const convertCtoF = celsius => celsius * (9/5) + 32;
console.log(convertCtoF(25));
console.log("");




//  CARD COUNTIN ASSISTANT

let count = 0;

function cardCounter(card) {
  if (card >= 2 && card <= 6) {++count;}
  if (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A") {--count;}

  if (count > 0) {return `${count} Bet`;}
  if (count <= 0) {return `${count} Hold`;}
}

console.log(cardCounter(8));
console.log("");



// LEAP YEAR CALCULATOR

const currentYear = 1600;

function isLeapYear(year) {
  if (year % 4 === 0 && year % 100 !== 0) {return `${year} is a leap year.`;} 
  else if (year % 4 === 0 && year % 100 === 0) {
    if (year % 400 === 0) {return `${year} is a leap year.`} 
    else {return `${year} is not a leap year.`}
  } else {return `${year} is not a leap year.`}
}

const result = isLeapYear(currentYear);
console.log(result);
console.log("");




// TRUNCATE A STRING ALGORITHM

function truncateString(string, length) {
  if (string.length > length) {
    return string.slice(0, length) + "..."
  } else {return string}
}

console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11));
console.log("");



//  CONFIRM THE ENDING TOOL

function confirmEnding(stringToCheck, endString) {
  if (stringToCheck.slice(-endString.length) === endString) {
    return true;
  } else {return false;}
}

console.log(confirmEnding("Abstraction", "action"));
