// Q1:Answer

// let a = 10;
// document.write("Result: <br> The value of a is: "+(a)+"<br>---------------------------------<br><br>")
// document.write("The value of ++a is: " + (++a)+"<br>"); 
// document.write("Now the value of a is: " + a+"<br><br><br>");   

// document.write("The value of a++ is: " + (a++)+"<br>"); 
// document.write("Now the value of a is: " + a+"<br><br><br>");   

// document.write("The value of --a is: " + (--a)+"<br>"); 
// document.write("Now the value of a is: " + a+"<br><br><br>");  

// document.write("The value of a-- is: " + (a--)+"<br>"); 
// document.write("Now the value of a is: " + (a));  


// Q2:Answer

// var a = 2, b = 1;

//  --a; 
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;
// var a=1;
// var b=0;
// var Result=3;
// document.write("a is  "+a+ "<br>")
// document.write("b is  "+b+ "<br>")
// document.write("Result is "+Result+ "<br>")


// Q3:Answer:
let user=prompt("Enter Your Name:");
let greet="<h1>Hello  "+user+"! Welcome to our website.</h1>"
document.write(greet)

// Q4:Answer:
let number=prompt("Enter a number to display its multiplication table:","5")
document.write("Table of "+ number+"<br>")
        let mul=number * 1;
        document.write("<br>" +number+"x1 ="+mul +"<br>")

        let mul1=number * 2;
        document.write( number+"x2 ="+mul1 +"<br>")

        let mul2=number * 3;
        document.write( number+"x3 ="+mul2 +"<br>")

        let mul3=number * 4;
        document.write( number+"x4 ="+mul3 +"<br>")

        let mul4=number * 5;
        document.write( number+"x5 ="+mul4 +"<br>")

        let mul5=number * 6;
        document.write( number+"x6 ="+mul5 +"<br>")

        let mul6=number * 7;
        document.write( number+"x7 ="+mul6 +"<br>")

        let mul7=number * 8;
        document.write( number+"x8 ="+mul7 +"<br>")

        let mul8=number * 9;
        document.write( number+"x9 ="+mul8 +"<br>")

        let mul9=number * 10;
        document.write( number+"x10 ="+mul9 +"<br>")




// Q5:Answer:


var subject1 = prompt("Enter the name of the first subject:");
var subject2 = prompt("Enter the name of the second subject:");
var subject3 = prompt("Enter the name of the third subject:");


var totalMarks = 100;


var marksSubject1 = (+prompt("Enter the obtained marks for " + subject1 + ":"));
var marksSubject2 = (+prompt("Enter the obtained marks for " + subject2 + ":"));
var marksSubject3 = (+prompt("Enter the obtained marks for " + subject3 + ":"));

var percentageSubject1 = (marksSubject1 / totalMarks) * 100;
var percentageSubject2 = (marksSubject2 / totalMarks) * 100;
var percentageSubject3 = (marksSubject3 / totalMarks) * 100;
var sumofmarks=(totalMarks*3);
var sumofobt=(marksSubject1+marksSubject2+marksSubject3);
var tptalper=(sumofobt/ sumofmarks)*100;

document.write("<table >");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + marksSubject1 + "</td><td>" + percentageSubject1 + "%</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + marksSubject2 + "</td><td>" + percentageSubject2 + "%</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + marksSubject3 + "</td><td>" + percentageSubject3 + "%</td></tr>");

document.write("<tr><td colspan='4'><hr><h2>Overall Result</h2><hr><br>Total  Marks: " + sumofmarks + "</td></tr>");
document.write("<tr><td colspan='4'>Total Obtained Marks: " + sumofobt + "</td></tr>");

document.write("<tr><td colspan='4'>Overall Percentage: " + tptalper+ "%</td></tr>");
document.write("</table>");






