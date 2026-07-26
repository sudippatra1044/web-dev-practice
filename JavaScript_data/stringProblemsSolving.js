//From "https://www.example.com/page", get only "example.com" using string methods.
let x = "https://www.example.com/page";
console.log(x.slice(x.indexOf("example.com"), x.indexOf("example.com")+11));

//Given "Sudip1234", replace all characters except the first two with "*" using .slice() and .repeat().
x = "Sudip1234";
console.log(x.slice(0, 2) + "*".repeat(7));

//Convert "HeLLo" into "hEllO" using only .toUpperCase() and .toLowerCase() creatively
x = "HeLLo";
console.log(x[0].toLowerCase() + x[1].toUpperCase() + x.slice(2, 4).toLowerCase() + x[4].toUpperCase());

//From "resume.pdf", extract "pdf" using .lastIndexOf() and .slice().
x = "resume.pdf";
console.log(x.slice(-3));

//From "JavaScript", return "avaScrip" using .slice().
x = "JavaScript";
console.log(x.slice(1, (x.length-1)));

//Take "JS" and repeat it 10 times, then trim the result to only the first 12 characters.
x = "JS".repeat(10);
console.log(x.slice(0, 12));

//From "Banana", find the second occurrence of "a" using .indexOf() with a starting position.
x = "Banana";
console.log(x.indexOf("a", 2));

//From "I love JavaScript", return "JavaScript love I" using .split(), .reverse(), .join().
x = "I love JavaScript";
let splitedX = x.split(" ");

let reversedX = splitedX.reverse();

x = reversedX.join(" ");
console.log(x);


// ADVANCED STRING CHALLENGES.

/* Extract protocol, domain, and path separately  
From "https://www.example.com/page/about", get:
"https"
"example.com"
"page/about" */
x = "https://www.example.com/page/about";
let protocol = x.slice(0, x.indexOf(":"));
let domain = x.slice(x.indexOf("www.")+4, x.indexOf("/", x.indexOf("www.")));
let path = x.slice(x.indexOf(".com/")+5);
console.log(protocol);
console.log(domain);
console.log(path);


//Get username from email: From "sudip.kumar@example.com", extract only "sudip.kumar" using string methods.
x = "sudip.kumar@example.com";
console.log(x.slice(0, x.indexOf("@")));

//Hide phone number: From "9876543210", show only the last 4 digits and mask the rest with "*" → "******3210".
x = "9876543210";
console.log("******" + x.slice(-4));

//Get folder name from file path: From "C:/Users/Sudip/Documents/resume.pdf", extract "Documents".
x = "C:/Users/Sudip/Documents/resume.pdf";
let start = x.indexOf("/", x.indexOf("Users/")+6)+1;
let end = x.indexOf("/", start);

console.log(x.slice(start, end));

//Extract query parameter from URL: From "https://example.com/search?q=JavaScript&lang=en", get only "JavaScript" (the value of q).
x = "https://example.com/search?q=JavaScript&lang=en";
console.log(x.slice(x.indexOf("q=")+2, x.indexOf("&", x.indexOf("q="))));

//Remove protocol and www: From "https://www.github.com/Sudip", return "github.com/Sudip".
x = "https://www.github.com/Sudip";
console.log(x.slice(x.indexOf("www.")+4));

//Get file name without extension: From "resume.pdf", return "resume".
x = "resume.pdf";
console.log(x.slice(0, x.indexOf(".")));

//Check if string is a URL: Return true if a string starts with "http://" or "https://" using .startsWith().
x = "https://example.com/search?q=JavaScript&lang=en";
console.log(x.startsWith("https://"));
