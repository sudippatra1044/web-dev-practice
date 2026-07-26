/* From "C:/Users/Sudip/Documents/doc-2/imp-doc1/resume.pdf", 
remove the drive and user info so you only get "Documents/doc-2/imp-doc1/resume.pdf". */
let x = "C:/Users/Sudip/Documents/doc-2/imp-doc1/resume.pdf";

console.log(x.slice(x.indexOf("/", x.indexOf("Users/")+6) + 1));

//From "C:/Users/Sudip/Documents/doc-2/imp-doc1/resume.pdf", get the file name only ("resume.pdf").
console.log(x.slice(x.lastIndexOf("/") + 1));

//From "Sudip Kumar Patil", get the first name only ("Sudip").
x = "Sudip Kumar Patil";
console.log(x.slice(0, x.indexOf(" ")));

//From "My phone is 9876543210", extract the digits only ("9876543210").
x = "My phone is 9876543210";
console.log(x.slice(x.lastIndexOf(" ") + 1));

//Convert "45" into "00045" (five digits padded with zeros).
x = "45";
console.log(x.padStart(5, "0"));

//Mask an email: "sudip@example.com" → "s****@example.com".
x = "sudip@example.com";
let hiddenPortion = x.slice(1, x.indexOf("@"));
console.log(x.replace(hiddenPortion, "*".repeat(hiddenPortion.length)));

//Check if "resume.pdf" ends with ".pdf" and return true.
x = "resume.pdf";
console.log(x.endsWith(".pdf"));

//Check if "https://example.com" starts with "https" and return true.
x = "https://example.com";
console.log(x.startsWith("https"));

//Convert "Sudip Kumar Patil" into "SUDIP-KUMAR-PATIL" (all caps, hyphen separated).
x = "Sudip Kumar Patil";
console.log(x.replaceAll(" ", "-").toUpperCase());

//Clean " Sudip " and then append "Coder" → "SudipCoder".
x = " Sudip ";
console.log((x.trim()).concat("Coder"));






// Hard Real‑World String Challenges:

/* From: [2026-07-26 20:34:12] ERROR: User Sudip failed login from 192.168.1.45
Extract:
The date (2026-07-26)
The username (Sudip)
The IP address (192.168.1.45)
*/
x = "[2026-07-26 20:34:12] ERROR: User Sudip failed login from 192.168.1.45"
const date = x.slice(x.indexOf("[")+1, x.indexOf(" "));
const userName = x.slice(x.indexOf("User ")+5, x.indexOf(" ", x.indexOf("User ")+5));
const ipAddress = x.slice(x.lastIndexOf(" ")+1);

console.log(date);
console.log(userName);
console.log(ipAddress);

//From: https://www.example.com/page?id=123&redirect=https://evil.com
//Remove everything after the first ? so you only get: https://www.example.com/page

x = "https://www.example.com/page?id=123&redirect=https://evil.com";
console.log(x.slice(0, x.indexOf("?")));

//From: 4111-5678-9012-3456
//Show only the last 4 digits, mask the rest with *: ****-****-****-3456
x = "4111-5678-9012-3456";
let firstPart = x.slice(0, x.indexOf("-"));
let secondpart = x.slice(x.indexOf("-")+1, x.indexOf("-", x.indexOf("-")+1));
let thirdPart = x.slice(x.indexOf("-", x.indexOf("-")+1)+1, x.lastIndexOf("-"));

let hiddenCreditCard = `${"*".repeat(firstPart.length)}-${"*".repeat(secondpart.length)}-${"*".repeat(thirdPart.length)}-${x.slice(x.lastIndexOf("-")+1)}`;
console.log(hiddenCreditCard);

//From: "Learn JavaScript in 30 Days!"
//Convert into a URL slug: learn-javascript-in-30-days
x = "Learn JavaScript in 30 Days!";
console.log(x.toLowerCase().replaceAll(" ", "-").replace("!", ""));

//From: sudip.kumar@company.co.in
//Get only: company.co.in
x = "sudip.kumar@company.co.in";
console.log(x.slice(x.indexOf("@")+1));

//From: resume.PDF
//Check if the extension is .pdf (case‑insensitive) and return true.
x = "resume.PDF";
console.log(x.includes(".pdf"));

//From: "Learning #JavaScript and #WebDev is fun!"
//Return: ["JavaScript", "WebDev"]
x = "Learning #JavaScript and #WebDev is fun!";
let y = x.slice(x.indexOf("#")+1, x.indexOf(" ", x.indexOf("#")+1)) + " " + x.slice(x.indexOf("#", x.indexOf("#")+1)+1, x.indexOf(" ", x.indexOf("#", x.indexOf("#")+1)+1));
y = x.slice(x.indexOf("#")+1, x.indexOf(" ", x.indexOf("#")+1)) + " " + x.slice(x.lastIndexOf("#")+1, x.indexOf(" ", x.lastIndexOf("#")+1));  //Another way to solve
console.log(y.split(" "));


