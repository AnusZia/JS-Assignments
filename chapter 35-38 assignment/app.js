// Q1 answer
function showDateTime() {
    let now = new Date();
    document.write("Current Date & Time: " + now + "<br><br>");
  }
  showDateTime();
  
  
  // Q2 answer
  function greetUser(first, last) {
    alert("Welcome " + first + " " + last);
  }
  let fName = prompt("Enter first name");
  let lName = prompt("Enter last name");
  greetUser(fName, lName);
  
  
  // Q3 answer
  function addNumbers(a, b) {
    return a + b;
  }
  let n1 = Number(prompt("Enter first number"));
  let n2 = Number(prompt("Enter second number"));
  alert("Sum is: " + addNumbers(n1, n2));
  
  
  // Q4 answer
  function calculator(num1, num2, operator) {
    return eval(num1 + operator + num2);
  }
  let c1 = Number(prompt("Enter first number"));
  let c2 = Number(prompt("Enter second number"));
  let op = prompt("Enter operator (+, -, *, /)");
  alert("Result: " + calculator(c1, c2, op));
  
  
  // Q5 answer
  function squareNumber(num) {
    return num * num;
  }
  let sq = Number(prompt("Enter number to square"));
  alert("Square is: " + squareNumber(sq));
  
  
  // Q6 answer
  function factorial(num) {
    let result = 1;
    for (let i = num; i >= 1; i--) {
      result *= i;
    }
    return result;
  }
  let fact = Number(prompt("Enter number for factorial"));
  alert("Factorial is: " + factorial(fact));
  
  
  // Q7 answer
  function showCounting(start, end) {
    for (let i = start; i <= end; i++) {
      document.write(i + "<br>");
    }
  }
  let startNum = Number(prompt("Enter starting number"));
  let endNum = Number(prompt("Enter ending number"));
  showCounting(startNum, endNum);
  document.write("<br>");
  
  
  // Q8 answer
  function calculateHypotenuse(base, perpendicular) {
  
    function calculateSquare(value) {
      return value * value;
    }
  
    let hypotenuse = Math.sqrt(
      calculateSquare(base) + calculateSquare(perpendicular)
    );
  
    alert("Hypotenuse is: " + hypotenuse);
  }
  
  let baseVal = Number(prompt("Enter base"));
  let perpVal = Number(prompt("Enter perpendicular"));
  calculateHypotenuse(baseVal, perpVal);
  
  
  // Q9 answer
  function rectangleArea(width, height) {
    return width * height;
  }
  
  // arguments as values
  alert("Area (values): " + rectangleArea(4, 6));
  
  // arguments as variables
  let w = Number(prompt("Enter width"));
  let h = Number(prompt("Enter height"));
  alert("Area (variables): " + rectangleArea(w, h));
  
  
  // Q10 answer
  function isPalindrome(text) {
    let reversed = text.split("").reverse().join("");
    return text === reversed;
  }
  let word = prompt("Enter word to check palindrome");
  alert(isPalindrome(word) ? "It is a palindrome" : "It is not a palindrome");
  
  
  // Q11 answer
  function capitalizeWords(sentence) {
    let words = sentence.split(" ");
    let result = [];
  
    for (let i = 0; i < words.length; i++) {
      result.push(
        words[i].charAt(0).toUpperCase() + words[i].slice(1)
      );
    }
    return result.join(" ");
  }
  let textInput = prompt("Enter a sentence");
  alert(capitalizeWords(textInput));
  
  
  // Q12 answer
  function findLongestWord(sentence) {
    let words = sentence.split(" ");
    let longest = "";
  
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > longest.length) {
        longest = words[i];
      }
    }
    return longest;
  }
  let longText = prompt("Enter a sentence");
  alert("Longest word is: " + findLongestWord(longText));
  
  
  // Q13 answer
  function countLetterOccurrences(str, letter) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === letter) {
        count++;
      }
    }
    return count;
  }
  let mainStr = prompt("Enter a string");
  let searchLetter = prompt("Enter letter to count");
  alert("Occurrences: " + countLetterOccurrences(mainStr, searchLetter));
  
  
  // Q14 answer
  function calcCircumference(radius) {
    let circumference = 2 * Math.PI * radius;
    alert("The circumference is " + circumference.toFixed(2));
  }
  
  function calcArea(radius) {
    let area = Math.PI * radius * radius;
    alert("The area is " + area.toFixed(2));
  }
  
  let r = Number(prompt("Enter radius"));
  calcCircumference(r);
  calcArea(r);
  