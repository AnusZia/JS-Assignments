// // Q1:Answer

// let num1 = +prompt("Enter number 1");
// let num2 = +prompt("Enter number 2");

// let sum = num1+num2;

// var message = " Sum of "+  num1 +" and "+ num2   +"  is "   +sum;

// document.write(message)


// Q2:Answer



// let num1 = prompt("Enter number 1");
// let num2 = prompt("Enter number 2");

// let sub = num1-num2;

// var message = " Subtraction of "+  num1 +" and "+ num2   +"  is "   +sub;

// document.write(message)

// let num1 = prompt("Enter number 1");
// let num2 = prompt("Enter number 2");


// let Mul = num1*num2;

// var message = " Multiplication of "+  num1 +" and "+ num2   +"  is "   +Mul;

// document.write(message)

// let num1 = prompt("Enter number 1");
// let num2 = prompt("Enter number 2");


// let div = num1/num2;

// var message = " Division of "+  num1 +" and "+ num2   +"  is "   +div;

// document.write(message)

// let num1 = prompt("Enter number 1");
// let num2 = prompt("Enter number 2");


// let mod = num1%num2;

// var message = " Modulus of "+  num1 +" and "+ num2   +"  is "   +mod;

// document.write(message)


Q3;ANSWER

        var num;
        document.write("Value after variable declaration is: " + num + "<br>");

      
        num = 5;
        document.write("Initial value: " + num + "<br>");

        num++;
        document.write("Value after increment is: " + num + "<br>");

        num += 7;
        document.write("Value after addition is: " + num + "<br>");

   
        num--;
        document.write("Value after decrement is: " + num + "<br>");

        var remainder = num % 3;
        document.write("The remainder is: " + remainder + "<br>");

        


Q4:Answer

        let tickets =prompt("Per Movie Ticket Price is 600 \n How Many Tickets You Want?")
        var ticketPrice = 600;
        var totalCost = ticketPrice * tickets;
        document.write("The cost of buying  "+tickets+ "  tickets to a movie is: " + totalCost + " PKR");


   Q5:Answer


        var number = prompt("Enter a number to display its multiplication table:");

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


        Q6:Answer

       
        var celt = 25;
        var faht = (celt * 9/5) + 32;
        document.write(celt + "<sup>0</sup>C"+ " is " + faht+ "°F<br>");

      
        var faht = 70;
        var celt = (faht - 32) * 5/9;
        document.write(faht +"<sup>0</sup>F"+ " is " + celt + "°C");
   
Q7:Answer

let item1= +prompt("Enter Item 1 Cost ")
let item2= +prompt("Enter Item 2 Cost ")


let qitem1= +prompt("Enter quantity of item 1 ")

let qitem2= +prompt("Enter quantity of item 2 ")
var total= item1*qitem1;
var Total= item2*qitem2;

var sc=100;
 var totalcost= total+Total+sc;
 
    
      document.write("<h1>Shopping Cart</h1> <br><br>");
      document.write("Price of Item 1 is " + item1+"<br>"  );
      document.write("Quantity of Item 1 is " + qitem1+"<br>"  );
      document.write("Price of Item 2 is " + item2+"<br>"  );
      document.write("Quantity of Item 2 is " + qitem2+"<br>" );
      document.write("Shipping Charges " + sc+"<br><br><br>"  );
      document.write("<strong>Total Cost of your Order is <strong> " + totalcost   );



Q8:Answer

let totalMarks = +prompt("Enter your Total marks");
let obtainMarks = +prompt("Enter your obtained marks");
let percentage = (obtainMarks / totalMarks) * 100;
document.write("<h1>Marks Sheet</h1>")
document.write("Total marks:"+ totalMarks+"<br>");
document.write("Marks obtained:"+obtainMarks+"<br>");
document.write("Percentage:"+percentage);


Q9:Answer
let usDollar = +prompt("Enter dollar do you have ?");
let saudiRiyal = +prompt("Enter riyal do you have ?");

const dollar = 104.8;
const riyal = 28;

let totalAmount = usDollar * dollar + saudiRiyal * riyal;
document.write("<h1>Currency in PKR</h1>")
document.write("Total Currency in PKR:"+totalAmount);



// Q10:Answer
var result= (10+ 5* 10 / 2);
document.write("Result : "+result)



Q11:Answer
let Cyear= prompt("Enter Current Year");
let Byear= prompt("Enter Your Birth Year");

var age=(Cyear-Byear);
document.write("<h1>Age Calculator</h1><br>")
document.write("Current Year: "+Cyear+"<br>")
document.write("Birth Year: "+Byear+"<br>")
document.write("Your Age is: "+age)


Q12:Answer

let radius = 20;
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
const pie = 3.142;
circumference = 2 * pie * radius;
let area_of_circle = pie * radius * radius;
document.write("<h1>The Geometrizer</h1>")

document.write("Radius of a circle : ", radius, "<br>");
document.write(" The circumference is: ", circumference, "<br>");
document.write(" The Area is: ", area_of_circle);


// Q13:Answer

        

let favoriteSnack = "chocolate chip";
let currentAge = 15;
let maxAge = 65;
let amountPerDay = 3;

let yearsRemaining = maxAge - currentAge;
let daysRemaining = yearsRemaining * 365;
let totalSnacksNeeded = daysRemaining * amountPerDay;

var result=("You will need " + totalSnacksNeeded + " " + favoriteSnack + "s to last you until the ripe old age of " + maxAge + ".")
document.write("<h1>The Lifetime Supply Calculator</h1><br><br> ")
document.write("Favourite Snack: "+favoriteSnack+"<br>")
document.write("Current Age: "+currentAge+"<br>")
document.write("Estimated Maximum Age: "+maxAge+"<br>")
document.write("Amount of snack per day: "+amountPerDay+"<br>")


document.write(result)