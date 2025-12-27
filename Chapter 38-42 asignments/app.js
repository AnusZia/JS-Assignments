// Q1 answer
function power(a, b) {
    var result = 1;
    var i = 1;
    while (i <= b) {
        result = result * a;
        i++;
    }
    return result;
}
console.log(power(2, 3)); 

// Q2 answer
function isLeapYear(year) {
    if (year % 4 === 0) {
        return "Leap Year";
    } else {
        return "Not a Leap Year";
    }
}
console.log(isLeapYear(2020));

// Q3 answer
function calculateS(a, b, c) {
    return (a + b + c) / 2;
}

function triangleArea(a, b, c) {
    var S = calculateS(a, b, c);
    var area = Math.sQrt(S * (S - a) * (S - b) * (S - c));
    return area;
}
console.log(triangleArea(3, 4, 5));


// q4 answer
function calculateAverage(m1, m2, m3) {
    return (m1 + m2 + m3) / 3;
}
function calculatePercentage(m1, m2, m3) {
    return ((m1 + m2 + m3) / 300) * 100;
}
function mainFunction(m1, m2, m3) {
    var avg = calculateAverage(m1, m2, m3);
    var per = calculatePercentage(m1, m2, m3);

    console.log("Average: " + avg);
    console.log("Percentage: " + per + "%");
}
mainFunction(70, 80, 90);

// q5 answer

function customIndexOf(str, ch) {
    var i = 0;

    while (i < str.length) {
        if (str[i] === ch) {
            return i;
        }
        i++;
    }
    return -1;
}
console.log(customIndexOf("hello", "e"));

// q6 answer

function removeVowels(sentence) {
    var result = "";
    var i = 0;
    while (i < sentence.length) {
        var ch = sentence[i];

        if (
            ch !== 'a' && ch !== 'e' && ch !== 'i' &&
            ch !== 'o' && ch !== 'u' &&
            ch !== 'A' && ch !== 'E' && ch !== 'I' &&
            ch !== 'O' && ch !== 'U'
        ) {
            result = result + ch;
        }
        i++;
    }
    return result;
}
console.log(removeVowels("Hello World"));


// q7 answer

function countSuccessiveVowels(text) {
    var count = 0;
    var i = 0;

    while (i < text.length - 1) {
        var pair = text[i] + text[i + 1];

        switch (pair) {
            case "aa":
            case "ae":
            case "ai":
            case "ao":
            case "au":
            case "ea":
            case "ee":
            case "ei":
            case "eo":
            case "eu":
            case "ia":
            case "ie":
            case "ii":
            case "io":
            case "iu":
            case "oa":
            case "oe":
            case "oi":
            case "oo":
            case "ou":
            case "ua":
            case "ue":
            case "ui":
            case "uo":
            case "uu":
                count++;
                break;
        }
        i++;
    }
    return count;
}
console.log(countSuccessiveVowels("Pleases read this application"));

// Q8 answer

function toMeters(km) {
    console.log("Meters: " + (km * 1000));
}
function toFeet(km) {
    console.log("Feet: " + (km * 3280.84));
}
function toInches(km) {
    console.log("Inches: " + (km * 39370.1));
}
function toCentimeters(km) {
    console.log("Centimeters: " + (km * 100000));
}
toMeters(5);
toFeet(5);
toInches(5);
toCentimeters(5);

// Q9 answer
function calculateOvertime(hoursWorked) {
    var overtimePay = 0;
    if (hoursWorked > 40) {
        var overtimeHours = hoursWorked - 40;
        overtimePay = overtimeHours * 12;
    }

    return overtimePay;
}
console.log("Overtime Pay: Rs. " + calculateOvertime(45));










