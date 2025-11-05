
// Q1:Answer


// function CheckCharacterType(character){

// if(!isNaN(character)){

//     document.write("Number")
// }
// else if(character >="A" & character <="Z"){

//     document.write("Uppercase Letter")
// }
// else if(character >="a" & character <="z"){

//     document.write("Lowercase Letter")
// }
// else {
//           alert("Please enter a valid number or character  ");
//        }
// };

// let input= prompt("Enter a Number or Character :");
// CheckCharacterType(input);



// Q2:Answer

// let input1, input2;

// input1 = prompt("Please enter 1st Number = ");
// input2 = prompt("Please enter 2nd Number = ");


//   if (input1 > input2) {
//   document.write((input1)+ " is greater than "+(input2));
// } else if (input2 > input1) {
//     document.write((input2)+ " is greater than "+(input1));
// } else if (input1 == input2) {
//     document.write((input1)+ " is equal to "+(input2));
// }



// Q3:Answer


// let input= prompt("Enter a number")

// if (input > 0) {
//     document.write("This Number is Positive");
//   } else if (input < 0) {
//     document.write("This Number is Negative");
//   } else  {
//     document.write("This Number is zero");
//   }



// Q4:Answer

// let input = prompt("Enter a character(single word) :");
// input = input.toLowerCase();


//  if (input.length = 1 &
//   input == "a" ||
//   input == "e" ||
//   input == "i" ||
//   input == "o" ||
//   input == "u"
// ) {
//   document.write("True");
// } else {
//   document.write( "False" );
// }


// Q5:Answer

// let correctPassword = "12345";

// let enteredPassword = prompt("Enter your password:");

// if (!enteredPassword) {
//     alert("Please enter your password");
// } else if  (enteredPassword === correctPassword) {
//         alert("Correct! The password you entered matches the original password.");}
//     else {
//         alert("Incorrect password");
//     }



// Q6:Answer
// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }


// Q7:Answer

let time = parseInt(prompt("Enter the time (in 24-hour clock format):"));

if (time >= 0 && time < 1200) {
    document.write ("Good morning!");
} else if (time >= 1200 && time < 1700) {
    document.write("Good afternoon!");
} else if (time >= 1700 && time < 2000) {
    document.write("Good evening!");
} else {
    document.write("Good night!");
}








