
// Q1 answer
let now = new Date();
document.write("Current Date & Time: " + now + "<br><br>");



// Q2 answer
let monthNames = ["January","February","March","April","May","June",
                  "July","August","September","October","November","December"];
let currentMonth = monthNames[now.getMonth()];
alert("Current Month: " + currentMonth);



// Q3 answer

let dayNames = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
let todayName = dayNames[now.getDay()];
alert("Today is: " + todayName);



// Q4 answer

if (todayName === "Sat" || todayName === "Sun") {
  document.write("It's Fun day<br><br>");
}



// Q5 answer

if (now.getDate() < 16) {
  document.write("First fifteen days of the month<br><br>");
} else {
  document.write("Last days of the month<br><br>");
}



// Q6 answer

minutesPassed = Math.floor(now.getTime() / (1000 * 60));
document.write("Minutes since Jan 1, 1970: " + minutesPassed + "<br><br>");



// Q7 answer

if (now.getHours() < 12) {
  alert("It's AM");
} else {
  alert("It's PM");
}



// Q8 answer

let laterDate = new Date("December 31, 2020");
document.write("Later Date: " + laterDate + "<br><br>");



// Q9 answer
let ramadanStart = new Date("June 18, 2015");
let daysPassed = Math.floor((now - ramadanStart) / (1000 * 60 * 60 * 24));
alert(daysPassed + " days have passed since 1st Ramadan, 2015");



// Q10 answer
let refDate = new Date("December 5, 2015");
let start2015 = new Date("January 1, 2015");
let secondsElapsed = Math.floor((refDate - start2015) / 1000);

document.write(
  "On reference date " + refDate +
  "<br>" + secondsElapsed +
  " seconds had passed since beginning of 2015<br><br>"
);



// Q11 answer
let timeNow = new Date();
document.write("Current Date: " + timeNow + "<br>");
timeNow.setHours(timeNow.getHours() + 1);
document.write("1 hour ahead: " + timeNow + "<br><br>");


// Q12 answer

let oldDate = new Date();
oldDate.setFullYear(oldDate.getFullYear() - 100);
alert("Date 100 years back: " + oldDate);



// Q13 answer
let age = prompt("Enter your age:");
let birthYear = now.getFullYear() - age;
document.write("Your Birth Year is: " + birthYear + "<br><br>");



// Q14 answer

let customer = prompt("Enter customer name:");
let billMonth = prompt("Enter current month:");
let unitsUsed = Number(prompt("Enter number of units consumed:"));

let ratePerUnit = 16;
let lateCharges = 350;

let netPayable = unitsUsed * ratePerUnit;
let grossPayable = netPayable + lateCharges;

document.write("<h2>K-Electric Bill</h2>");
document.write("Customer Name: <b>" + customer + "</b><br>");
document.write("Current Month: <b>" + billMonth + "</b><br>");
document.write("Units Consumed: <b>" + unitsUsed.toFixed(2) + "</b><br>");
document.write("Charges per Unit: <b>" + ratePerUnit.toFixed(2) + "</b><br><br>");
document.write("Net Amount Payable: <b>" + netPayable.toFixed(2) + "</b><br>");
document.write("Late Payment Surcharge: <b>" + lateCharges.toFixed(2) + "</b><br>");
document.write("Gross Amount Payable: <b>" + grossPayable.toFixed(2) + "</b>");
