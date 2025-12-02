// // Q1:Answer
// let Studentnames = [];


// // Q2:Answer
// let StudentnamesObject = new Array();

// // Q3:Answer
// let stringsArray = ["anas", "khan", "good", "boy"];

// // Q4:Answer
// let numbersArray = [12, 34, 56, 78];

// // Q5:Answser
// let booleanArray = [true, false, true, false];

// // Q6:Answer
// let mixedArray= ["anas", 12, true, "khan", 34, false];



// // Q7:Answer

// let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"];
// document.write("<h2>Qualifications:</h2>")

// for (let i = 0; i < qualifications.length; i++) {
  
//   document.write(i +1+ ") " + qualifications[i] + "<br>");
// }


// Q8:Answer

// let studentnames=["Anas","Haris","Hamza"];
// let studentsmarks=["250","300","450"];   

// let percentage_01 = (studentsmarks[0] * 100) / 500;

// let percentage_02 = (studentsmarks[1] * 100) / 500;

// let percentage_03 = (studentsmarks[2] * 100) / 500;



// let  percentages= [percentage_01, percentage_02, percentage_03];

// for (let i = 0; i < studentnames.length; i++) {
//   document.write(
//     "The score of " + studentnames[i]+" is " + studentsmarks[i]+". Percentage: "+ percentages[i]+"% <br>"
//   );
// }



// Q10:Answer

// let arr =[ 6, 5, 4, 3, 2, 1, ];

// document.write("Score of the Students: ", arr, "</br>");
// document.write("Ordered Scores Students: ", arr.sort());


// Q11:Answer

// let arr = ["Karachi", "Lahore", "Islamabad", "Faisalabad", "Multan"];

// selected_citites = arr.slice(1,4);

// document.write("Cities list:    <br> ", arr, "</br>");
// document.write(" Selected Citites list : ", selected_citites);



// Q12:Answer

// let arr = ["This", "is", "my", "cat"];

// document.write("Array: </br>", arr);

// document.write("</br>");
// document.write("</br>");


// document.write("String: </br>", arr.join(" "));



// Q13:Answer

// let fifoArray = [];


// fifoArray.push("keyboard");
// fifoArray.push("mouse");
// fifoArray.push("printer");
// fifoArray.push("monitor");

// document.write("Devices: <br>")
// document.write(fifoArray+"<br><br>")

// document.write ("Out: <br>   " + fifoArray.shift()+"<br>"); 
// document.write ("Out:  <br> " + fifoArray.shift()+"<br>");
// document.write ("Out:   <br> " + fifoArray.shift()+" <br>"); 
// document.write ("Out:  <br> " + fifoArray.shift()+" <br>"); 





// Q14:Answer

// let lifoArray = [];


// lifoArray.push("keyboard");
// lifoArray.push("mouse");
// lifoArray.push("printer");
// lifoArray.push("monitor");

// document.write("Devices :<br>")
// document.write(lifoArray+"<br><br>")


// document.write("Out:<br>  " + lifoArray.pop()+"<br>"); 
// document.write("Out:<br> " + lifoArray.pop()+"<br>"); 
// document.write("Out:<br> " + lifoArray.pop()+"<br>"); 
// document.write("Out:<br> " + lifoArray.pop()+"<br>");



// Q15:Answer
let phone_manufact = ["Apple", "Samsung", "Motorola", "Sony", "Nokia", "Haier"];

document.write("The Phone Manufacturers are: </br>");

for (let i = 0; i < phone_manufact.length; i++) {
  document.write("</br>", phone_manufact[i], "</br>");
}

