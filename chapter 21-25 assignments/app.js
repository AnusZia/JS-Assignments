// Q1:Answer

// var input1= prompt("Enter your first name");
// var input2= prompt("Enter your last name");

// var fullname= input1+input2;
// alert(fullname);

// Q2 Answer
// var input= prompt("Enter your favourite mobile model");
// var fav= "my fav phone is :"+input ;
// var len= input.length;
// document.write(fav+"<br>"+ "Length of string is :"+len)


// q3 answer
// var word = "Pakistani";
//     var index = word.indexOf("n");

//     document.write("Word: " + word + "<br>");
//     document.write("Index of 'n' is: " + index);

// q4 answer
// var text = "Hello World";
// var lastIndex = text.lastIndexOf("l");

// document.write("Text: " + text + "<br>");
// document.write("Last index of 'l' is: " + lastIndex);

// q5 answer

// var word = "Pakistani";
//     var charAtIndex3 = word.charAt(3);

//     document.write("Word: " + word + "<br>");
//     document.write("Character at index 3 is: " + charAtIndex3);

// q6 answer

// var input1 = prompt("Enter your first name:");
// var input2 = prompt("Enter your last name:");

// var fullname = input1.concat(" ", input2);  
// alert("Hello, " + fullname + "!");

// q7 answer
// var city = "Hyderabad";
// var newCity = city.replace("Hyder", "Islam");

// document.write("Original word: " + city + "<br>");
// document.write("After replacement: " + newCity);

// q8 answer

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var newMessage = message.replace(/and/g, "&");

// document.write("Original message: " + message + "<br><br>");
// document.write("Updated message: " + newMessage);

// q9answer

// var str = "472";
// var num = 472;

// document.write("Value (string): " + str + "<br>");
// document.write("Type of str: " + typeof str + "<br><br>");

// document.write("Value (number): " + num + "<br>");
// document.write("Type of num: " + typeof num + "<br>");

// q10answer
// let userInput = prompt("Enter some text:");
// let uppercaseInput = userInput.toUpperCase();
// alert("In capital letters: " + uppercaseInput);


// q11answer
// let userInput = prompt("Enter some text:");
// let lowercaseInput = userInput.toLowerCase();
// alert("In lowercase: " + lowercaseInput);

// q12answer

// let num = 35.36;
// let str = num.toString().replace('.', '');
// document.write(str);

// q13 answer

// let username = prompt("Enter your username:");
// let invalid = false;
// for (let i = 0; i < username.length; i++) {
//     let code = username.charCodeAt(i);

//     if (code === 33 || code === 44 || code === 46 || code === 64) {
//         invalid = true;
//         break;
//     }
// }
// if (invalid) {
//     alert("Please enter a valid username without special characters (@ . , !)");
// } else {
//     alert("Username saved: " + username);
// }

// q14 answer

// let A = ["cake", "apple pie", "cookie", "chips", "patties"];
// let userInput = prompt("What do you want to search?");
// let item = userInput.toLowerCase();
// let found = false;
// for (let i = 0; i < A.length; i++) {
//     if (A[i].toLowerCase() === item) {
//         found = true;
//         break;
//     }
// }
// if (found) {
//     alert(item + " is available in our bakery.");
// } else {
//     alert("Sorry, " + item + " is not available.");
// }

// q16 answer

// var university = "University of Karachi";
// var arr = university.split("");

// for (var i = 0; i < arr.length; i++) {
//     document.write(arr[i] + "<br>");
// }

// q17 answer
// let userInput = prompt("Enter any word:");
// let lastChar = userInput[userInput.length - 1];
// alert("Last character of input: " + lastChar);

