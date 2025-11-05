// Q1:Answer

// let city = prompt("Enter the name of your city: ");

// if (city.toLowerCase() == "karachi")  {
//   document.write("Welcome to the city of Lights ");
// } else {
//   document.write("Welcome  ");
// }




// Q2:Answer

// let gender = prompt("Enter Your Gender");

// if (gender.toLowerCase() ==="male"){
//     document.write("Good Morning Sir");
// }
// else if (gender.toLowerCase() ==="female") {
//     document.write("Good Morning Ma'am");
// }
// else{
//     document.write("Good Morning")
// }







// Q3:Answer
// let color = prompt("Enter the color of the traffic signal ");

// if (color.toLowerCase() === "red") {
//    document.write("Must Stop");
// } else if (color.toLowerCase() === "yellow") {
//    document.write("Ready to move");
// } else if (color.toLowerCase() === "green") {
//    document.write("Move now");
// } else {
//    document.write("Invalid color input.");
// }



// Q4:Answer
// let litres = prompt("Enter the remaining fuel in your car ")
// ;

// if (litres < 0.25) {
//   document.write("Please refill the fuel in your car");
// }




// Q5:Answer

// var a = 4;
// if (++a === 5){
//     alert("given condition for variable a is true");
// } //true

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }//false


// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }//false
// if (c === 13){
// alert("condition 2 is true");
// }//true
// if (++c < 14){
// alert("condition 3 is true");
// }//false
// if(c === 14){
// alert("condition 4 is true");
// }//true

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }//yes the cost is equal


// if (true){
//     alert("True");
//     }
//     if (false){
//     alert("False");
//     }//alert message is True

// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }//Alert mesaage car is smaller then cat




// Q6:Answer
// let sub1 = parseInt(prompt("Enter your marks in Subject 01 "));
// let sub2 = parseInt(prompt("Enter your marks in Subject 02 "));
// let sub3 = parseInt(prompt("Enter your marks in Subject 03 "));

// let obtained_marks = sub1 + sub2 + sub3;

// let total_marks = 100 * 3;

// let percentage = (obtained_marks * 100) / total_marks;

// document.write("<h1>Mark Sheet</h1>" + "<br>");

// document.write("Total Marks : " + total_marks + "<br>");

// document.write(
//   " Marks obtained  : " + obtained_marks + "<br>"
// );

// document.write(
//   "Percentage  : " + percentage+"%"+ "<br>"
// );

// if (percentage >= 80) {
//   document.write("Grade : A-one" + "<br>" + "Remarks : Excellent");
// } else if (percentage >= 70) {
//   document.write("Grade : A" + "<br>" + "Remarks : Good");
// } else if (percentage >= 60) {
//   document.write("Grade : B" + "<br>" + "Remarks : You need to Improve");
// } else if (percentage < 60) {
//   document.write("Grade : Fail" + "<br>" + "Remarks : Sorry  ");
// }




// Q7:Answer

// var secretNumber =  6; 
// var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));
// if (userGuess === secretNumber) {
//     document.write("Bingo! Correct answer");
// } else if (userGuess === secretNumber + 1) {
//     document.write("Close enough to the correct answer");
// } else {
//     document.write("Sorry, incorrect guess. The secret number was " + secretNumber);
// }


// Q8:Answer
// let a = prompt("Enter a number ");

// if (a % 3 == 0) {
//   document.write("The number " + a + " is  divisble by 3");
// } else {
//   document.write("The number " + a + " is not divisble by 3");}



// Q9:Answer
// let number = prompt("Enter a number  ");

// if (number % 2 == 0) {
//   document.write("The number " + number + " is an even number");
// } else {
//   document.write("The number " + number + " is an odd number");
// }



// Q10:Answer
// let temp = prompt("Enter a temperature");

// if (temp > 40) {
//   document.write("It is too hot outside");
// } else if (temp > 30) {
//   document.write("The Weather today is Normal.");
// } else if (temp > 20) {
//   document.write("The Weather today is Cool");
// } else if (temp > 10) {
//   document.write("OMG! Today's weather is so Cool");
// }



// Q11:Answer
let first_number = parseInt(prompt("Enter The first number = "));
let second_number = parseInt(prompt("Enter The second number = "));
let operation = prompt("Enter the operator (+, -, *, /, %) : ");



if (operation == "+") {
  document.write(
    "The adition of two numbers is " + (first_number+second_number) + "<br>"
  );
} else if (operation == "-") {
  
  document.write("The Subtraction of two numbers is " + (first_number-second_number) + "<br>");
} else if (operation == "*") {
  document.write(
    "The Multiplication of two numbers is " +
      (first_number * second_number) +
      "<br>"
  );
} else if (operation == "/") {
   
    document.write(
      "The Division of two numbers is " + (first_number / second_number) + "<br>"
    );
  }
 else if (operation == "%") {
  document.write(
    "The Modulus of two numbers is " + (first_number % second_number) + "<br>"
  );
}