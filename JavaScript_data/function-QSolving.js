/* Bill Formatter Function  
Write a function formatBill(amount) that:
Rounds the amount to 2 decimal places.
Converts it to a string and returns "Valid Bill" if it contains ".", otherwise "Invalid Bill".
Additionally, if the integer part is divisible by 9, return "Special Discount Applied". */

function formatBill(amount) {
    const roundedAmount = amount.toFixed(2);
    const validityOfAmount = roundedAmount.includes(".") ? "Valid Bill" : "Invalid Bill";
    const discountAvailability = roundedAmount.slice(0, roundedAmount.indexOf(".")) % 9 === 0 ? "Special Discount Applied" : "No Discount";

    return `${validityOfAmount}(${roundedAmount})\n${discountAvailability}`;
}

console.log(formatBill(81.35324));
console.log("");

/* Password Validator Function  
Write a function checkPassword(password) that:
Returns the length of the password.
Returns "Includes Symbol" if it contains "!".
Returns "Starts with P" if it starts with "P".
Returns "Strong Password" if length > 10 and it includes a number, otherwise "Weak Password". */

function checkPassword(password) {
    const passwordInString = String(password);
    const symbolAvalibality = passwordInString.includes("!") ? "Includes Symbol" : null;
    const startWithP = passwordInString.startsWith("P") ?"Starts with P" : null;
    const passwordStrength = passwordInString.length > 10 ? "Strong Password" : "Weak Password"; //didn't checked for numbers included because it will require use of loop.

    return `Password Length: ${passwordInString.length}\n${symbolAvalibality}\n${startWithP}\n${passwordStrength}`
}

console.log(checkPassword("23!dfdfsjgk"));
console.log("")
;
/* Temperature Alert Function  
Write a function checkTemperature(temp) that:
Rounds the decimal to 1 place.
Returns "High Temperature Alert" if > 40, "Below Freezing" if < 0, otherwise "Normal Range".
If the string version ends with "5", also return "Ends with 5". */

function checkTemperature(temp) {
    const roundedTemp = +temp.toFixed(1);
    let tempStatus;
    if (roundedTemp > 40) {tempStatus = "High Temperature Alert";}
    else if (roundedTemp < 0) {tempStatus = "Below Freezing";}
    else {tempStatus = "Normal Range";}
    const endsWith5 = String(roundedTemp).endsWith("5") ? "Ends with 5" : "Dosen't ends with 5";

    return `Temperature status: ${tempStatus}\n${endsWith5}`;
}

console.log(checkTemperature(-22.52));
console.log("");

/* Account Validator Function  
Write a function validateAccount(accountNumber) that:
Returns its length.
Returns the first and last digit.
Returns "Valid Ending Digit" if the last digit is divisible by 5
Returns "Contains Zero" if "0" is present, otherwise "No Zero Found". */

function validateAccount(accountNumber) {
    const accNumInstring = String(accountNumber);
    const accNumLength = `Account Number Length: ${accNumInstring.length}`;
    const firstAndLastDigit = `First Digit: ${accNumInstring[0]}. Last Digit: ${accNumInstring.slice(-1)}.`;
    const endingDigitValidity = Number(accNumInstring.slice(-1)) % 5 === 0 ? "Valid Ending Digit" : "Invalid Ending Digit";
    const zeroAwalibility = accNumInstring.includes("0") ? "Contains Zero" : "Dosen't Contain Zero";

    return `${accNumLength}\n${firstAndLastDigit}\n${endingDigitValidity}\n${zeroAwalibility}`
}

console.log(validateAccount(5353632064365));
console.log(validateAccount("36632847683434"));
console.log("");

/* Product Code Checker Function  
Write a function checkProduct(code) that:
Converts the code to a string.
Returns "Starts with 7" if it begins with "7".
Returns "Includes 3" if it contains "3".
Returns "Special Product" if divisible by 11, otherwise "Regular Product". */

function checkProduct(code) {
    const codeInString = String(code);
    const codeStart = codeInString.startsWith("7") ? "Starts with 7" : "Dosen't starts with 7";
    const avalibilityOf3 = codeInString.includes("3") ? "Includes 3" : "Dosen't includes 3";
    const productType = Number(codeInString) % 11 === 0 ? "Special Product" : "Regular Product";

    return `${codeStart}\n${avalibilityOf3}\n${productType}`
}

console.log(checkProduct(121));
console.log("");






// MORE HARDER QUESTIONS


/* Currency Formatter Function  
Write a function formatCurrency(amount) that:
Rounds the amount to 2 decimal places.
Returns the string prefixed with "₹" if the amount is positive, or "Invalid Amount" if negative.
If the integer part ends with "0", return "Round Figure". */

function formatCurrency(amount) {
    const roundedAmount2 = amount.toFixed(2);
    let totalAmount;
    if (roundedAmount2 > 0) {
        if (roundedAmount2[roundedAmount2.indexOf(".") - 1 ] !== "0") {
            totalAmount = `Total Amount: ₹${roundedAmount2}`;
        } else if (roundedAmount2[roundedAmount2.indexOf(".") - 1 ] === "0") {
            totalAmount = `Total Amount: ₹${String(Math.round(amount))}`;
        }    
    } else {totalAmount = `Total Amount: "Invalid Amount"`;}

    return totalAmount;
}

console.log(formatCurrency(30));
console.log("");


/* Email Validator Function  
Write a function validateEmail(email) that:
Returns "Valid Email" if the string includes "@" and ends with ".com".
Returns "Invalid Email" otherwise.
Additionally, return "Starts with A" if the email begins with "a" or "A". */

function validateEmail(email) {
    const emailValidity = email.includes("@") && email.endsWith(".com") ? "Valid Email" : "Invalid Email";
    const startsWithA = email.startsWith("a") || email.startsWith("A") ? "Starts with A" : "doesn't starts with A";
    return `Email Validity: ${emailValidity}\n${startsWithA}`;
}

console.log(validateEmail("arnabkanti23233@gmail.com"));
console.log(validateEmail("sushilmanti3423@gmail.pom"));
console.log("");


/* Discount Code Checker Function  
Write a function checkDiscount(code) that:
Converts the code to uppercase.
Returns "Valid Code" if it starts with "SALE".
Returns "Contains 2026" if "2026" is present.
Returns "Special Code" if the integer value of the code is divisible by 13. */

function checkDiscount(code) {
    const codeValidity = code.startsWith("SALE") ? "Valid Code" : "Invalid Code";
    const avalibilityOf2026 = code.includes("2026") ? "Contains 2026" : "Doesn't Contains 2026";
    const specialCodeValidity = Number(code.slice(code.indexOf("SALE") + 4)) % 13 === 0 ? "Special Code" : "Regular Code";

    return `Validity Of Code: ${codeValidity}\n${avalibilityOf2026}\n${specialCodeValidity}`
}

console.log(checkDiscount("SALE2026"));
console.log(checkDiscount("SALE2028"))
console.log("");

/* Phone Number Validator Function  
Write a function validatePhone(phone) that:
Returns its length.
Returns "Starts with 9" if the string begins with "9".
Returns "Ends with 0" if the string ends with "0"
Returns "Contains 7" if "7" is present.
Otherwise, return "Invalid Phone". */

function validatePhone(phone) {
    const phoneInString = String(phone);
    const phoneLength = phoneInString.length;
    const startsWith9 = phoneInString.startsWith("9") ? "Starts with 9" : null;
    const endsWith0 = phoneInString.endsWith("0") ? "Ends with 0" : null;
    const contains7 = phoneInString.includes("7") ? "Contains 7" : null;
    let phoneValidity;

    if (phoneLength && startsWith9 && endsWith0 && contains7) {
        phoneValidity = `Phone Length: ${phoneLength}\nStart: ${startsWith9}\nEnd: ${endsWith0}\nContain: ${contains7}`;
    } else {phoneValidity = "Invalid Phone"};

    return phoneValidity;
}

console.log(validatePhone(9373838410));
console.log(validatePhone(9363728373));
console.log("");

/* Transaction Status Function  
Write a function checkTransaction(amount) that:
Rounds the amount to the nearest integer.
Returns "High Value" if greater than 1000, "Medium Value" if between 500 and 1000, "Low Value" if less than 500.
If the string version of the amount includes "5", also return "Lucky Transaction". */

function checkTransaction(amount) {
    const roundAmount = Math.round(amount);
    let amountValue;
    if (roundAmount > 1000) {amountValue = "High Value";}
    else if (roundAmount >= 500 && roundAmount <= 1000) {amountValue = "Medium Value";}
    else {amountValue = "Low Value"}
    const transactionType = String(roundAmount).includes("5") ? "Lucky Transaction" : "Regular Transaction";

    return `Amount Value: ${amountValue}\nTransaction Type: ${transactionType}`
}

console.log(checkTransaction(1958));
console.log(checkTransaction(228));
console.log("");

//BMI calculator

function bmiCalculator (weight, height) {
    const bmi = weight / Math.pow(height, 2);
    let bmiMessage;
    if (bmi < 18.5) {bmiMessage = `Your BMI is ${bmi}, so you are underweight.`}
    else if (bmi >= 18.5 && bmi <= 24.9) {bmiMessage = `Your BMI is ${bmi}, so you have a normal weight.`}
    else {bmiMessage = `Your BMI is ${bmi}, so you are overweight.`}
    
    return bmiMessage;
}

console.log(bmiCalculator(70, 1.727));
console.log("");

//HEIGHT: foot and inches to meter

function footToMeter(feet, inches = 0) {
    const foot = feet * 0.3048;
    const inch = inches * 0.0254;
    return +(foot + inch).toFixed(3);
}

const sudipHeightInMeter = footToMeter(5,8);
console.log(sudipHeightInMeter);