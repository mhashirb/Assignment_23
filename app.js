// Assignment # 31 - 34 (DATE METHODS)

// //    Q1
// var currentDate = new Date();
// document.write("<h1>Current date and time: " + currentDate);



// // Q2
// var currentDate = new Date();
// var currentMonthNumber = currentDate.getMonth();
// var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var currentMonth = monthNames[currentMonthNumber];
// alert("The current month is: " + currentMonth);


// // Q3
// var currentDate = new Date();
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var currentDayNumber = currentDate.getDay();
// var currentDay = dayNames[currentDayNumber];
// alert("First 3 letters of the current day are: " + currentDay);


// // Q4
// var currentDate = new Date();
// var currentDayNumber = currentDate.getDay();
// var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var currentDay = dayNames[currentDayNumber];
// var userDay = prompt("What day is today?");
// userDay = userDay.toLowerCase();
// if (currentDayNumber === 0 || currentDayNumber === 6 || userDay === "sunday" || userDay === "saturday") {
//     alert("It’s Fun day");
// } else {
//     alert("Go to work");
// }


// // Q5
// var currentDate = new Date();
// var currentDayOfMonth = currentDate.getDate();
// if (currentDayOfMonth < 16) {
//     alert("First fifteen days of the month");
// } else {
//     alert("Last days of the month");
// }


// // Q6
// var currentDate = new Date();
// var millisecondsSince1970 = currentDate.getTime();
// var minutesSince1970 = millisecondsSince1970 / (1000 * 60);
// alert("Minutes since midnight, Jan. 1, 1970: " + minutesSince1970);


// // Q7
// var currentDate = new Date();
// var currentHour = currentDate.getHours();
// if (currentHour < 12) {
//     alert("It's AM");
// } else {
//     alert("It's PM");
// }


// // Q8
// var laterDate = new Date(2020, 11, 31);
// console.log("The value of laterDate is:", laterDate);



// // Q9
// var ramadanStartDate = new Date(2015, 5, 18); // June is month 5 (0-indexed)
// var currentDate = new Date();
// var daysSinceRamadan = Math.floor((currentDate - ramadanStartDate) / (1000 * 60 * 60 * 24));
// alert("Number of days past since 1st Ramadan: " + daysSinceRamadan);


// // Q10
// var referenceDate = new Date("January 1, 2015");
// var elapsedSeconds = (currentDate - referenceDate) / 1000;
// alert("Seconds elapsed between the reference date and the beginning of 2015: " + elapsedSeconds);


// // Q11
// var currentHour = currentDate.getHours();
// currentDate.setHours(currentHour + 1);
// alert("Date object after resetting an hour ahead: " + currentDate);



// // Q12
// var currentDate = new Date();
// currentDate.setFullYear(currentDate.getFullYear() - 100);
// alert("Date 100 years back: " + currentDate);



// // Q13
// var age = prompt("Enter your age:");
// var currentYear = currentDate.getFullYear();
// var birthYear = currentYear - parseInt(age);
// alert("Your birth year is: " + birthYear);



// // Q14
// var customerName = prompt("Enter your name:");
// var currentMonth = prompt("Enter current month:");
// var numberOfUnits = parseFloat(prompt("Enter number of units consumed:"));
// var chargesPerUnit = parseFloat(prompt("Enter charges per unit:"));
// var latePaymentSurchargePercentage = parseFloat(prompt("Enter late payment surcharge percentage:"));

// var netAmountPayable = numberOfUnits * chargesPerUnit;
// netAmountPayable = Math.round(netAmountPayable * 100) / 100;

// var latePaymentSurcharge = (netAmountPayable * latePaymentSurchargePercentage) / 100;
// latePaymentSurcharge = Math.round(latePaymentSurcharge * 100) / 100;

// var grossAmountPayable = netAmountPayable + latePaymentSurcharge;
// grossAmountPayable = Math.round(grossAmountPayable * 100) / 100;

// document.write("<h2>K-Electric Bill</h2>");
// document.write("<p><strong>Customer Name:</strong> " + customerName + "</p>");
// document.write("<p><strong>Current Month:</strong> " + currentMonth + "</p>");
// document.write("<p><strong>Number of Units:</strong> " + numberOfUnits + "</p>");
// document.write("<p><strong>Charges per Unit:</strong> $" + chargesPerUnit + "</p>");
// document.write("<p><strong>Net Amount Payable (Within Due Date):</strong> $" + netAmountPayable + "</p>");
// document.write("<p><strong>Late Payment Surcharge:</strong> $" + latePaymentSurcharge + "</p>");
// document.write("<p><strong>Gross Amount Payable (After Due Date):</strong> $" + grossAmountPayable + "</p>");


// Chapter 31 - 34 (Date &amp; Time)

// // Q1
// var dObj = new Date();

// // Q2
// var d = new Date();
// var dStr = d.toString();

// // Q3
// var d = new Date();
// var day = d.getDay();

// // Q4
// var d = new Date();
// var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// alert(dayNames[d.getDay()]);

// // Q5
// var d = new Date();
// var year = d.getFullYear();
// var month = d.getMonth() + 1; // Months are zero-indexed
// var day = d.getDate();
// var hours = d.getHours();
// var minutes = d.getMinutes();
// var seconds = d.getSeconds();
// var milliseconds = d.getMilliseconds();


// // Q6
// var later = new Date(2020, 11, 0);


// // Q7
// var secondDayOfSecondMonth1992 = new Date(1992, 1, 2);


// // Q8
// var millisecondsElapsed = new Date(1980, 0, 1).getTime();
// alert(millisecondsElapsed);


// // Q9
// To change the year of a date in JavaScript, you can use the setFullYear() method.


// // Q10
// function changeMonthToJanuary(date) {
//     date.setMonth(0); // January is month 0
//     return date;
// }


// // Q11
// To change the day of the week for a specific date in JavaScript, you can use the setDate() method.


// // Q12
// function changeMinutes(date, newMinutes) {
//     date.setMinutes(newMinutes);
//     return date;
// }


// // Q13
// function addHours(date, hoursToAdd) {
//     date.setHours(date.getHours() + hoursToAdd);
//     return date;
// }


// // Q14
// function calculateAge(birthDate) {
//     var today = new Date();
//     var birthDate = new Date(birthDate);
//     var age = today.getFullYear() - birthDate.getFullYear();
//     var m = today.getMonth() - birthDate.getMonth();
//     if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
//         age--;
//     }
//     return age;
// }


// Chapter 35 - 37 (Functions)

// // Q1
// function displayAlert() {

// // Q2
// function askName() {
//     var userName = prompt("Enter name");
//     return userName;
// }

// // Q3
// function callTwoFunctions() {
//     var name = askName();
//     displayAlert();
// }

// // Q4
// function promptAndAlertName() {
//     var name = prompt("Enter name");
//     alert(name);
// }

// // Q5
// function concat(a, b, c) {

// // Q6
// function concatenateStrings(string1, string2) {
//     var result = string1 + string2;
//     return result;
// }

// // Q7
// function multiplyNumbers(a, b, c) {
//     var result = a * b * c;
//     return result;
// }

// //Q8
// function calculateAverage(numbers) {
//     var sum = 0;
//     for (var i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }
//     var average = sum / numbers.length;
//     return average;
// }

// //Q9
// function sumTwoNumbers(a, b) {
//     return a + b;
// }

// //Q10
// function calculateAverage(numbers) {
//     var sum = 0;
//     for (var i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }
//     var average = sum / numbers.length;
//     return average;
// }

// //Q11
// var returnValue = functionName(arguments);

// //Q12
// function letterCount(word) {
//     return word.length;
// }

// //Q13
// function setYear(date, year) {
//     date.setFullYear(year);
// }

// //Q14
// function calculateAge(dateOfBirth) {
//     var today = new Date();
//     var birthDate = new Date(dateOfBirth);
//     var age = today.getFullYear() - birthDate.getFullYear();
//     var m = today.getMonth() - birthDate.getMonth();
//     if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
//         age--;
//     }
//     return age;
// }

// //Q15
// function checkPresence(word, array) {
//     return array.includes(word);
// }

// //Q16
// function repeatLetter(letter) {
//     return letter.repeat(10);
// }

// //Q17
// function reverseArray(array) {
//     return array.reverse();
// }

// Chapter 38 (Local vs. GlobalVariables)

// // Q1
// function demonstrateLocalVariable() {
//     var localVar = "I am a local variable";
//     console.log(localVar);
// }
// demonstrateLocalVariable();


// // Q2
// var globalVar = "I am a global variable";
// function accessGlobalVariable() {
//     console.log(globalVar);
// }
// accessGlobalVariable();

// Chapter 39, 40 (Switch Statements)

// //Q1
// var day = 3;
// switch(day) {
//     case 1:
//         console.log("It's Monday");
//         break;
//     case 2:
//         console.log("It's Tuesday");
//         break;
//     case 3:
//         console.log("It's Wednesday");
//         break;
//     case 4:
//         console.log("It's Thursday");
//         break;
//     case 5:
//         console.log("It's Friday");
//         break;
//     default:
//         console.log("It's a weekend day");
// }

// //Q2
// var cityName = "London";

// switch(cityName) {
//     case "Paris":
//         alert("Welcome to Paris!");
//         break;
//     case "London":
//         alert("Welcome to London!");
//         break;
//     case "New York":
//         alert("Welcome to New York!");
//         break;
//     default:
//         alert("Sorry, we don't have information for this city.");
// }

// Assignment # 35-38

// //Q1.
// function displayCurrentDateTime() {
//     var currentDate = new Date();
//     alert("Current date & time: " + currentDate);
// }


// // Q2.
// function greetUser(firstName, lastName) {
//     alert("Hello, " + firstName + " " + lastName + "!");
// }


// //Q3.
// function addNumbers(num1, num2) {
//     return num1 + num2;
// }


// // Q4.
// function calculate(num1, num2, operator) {
//     var result;
//     switch (operator) {
//         case '+':
//             result = num1 + num2;
//             break;
//         case '-':
//             result = num1 - num2;
//             break;
//         case '*':
//             result = num1 * num2;
//             break;
//         case '/':
//             result = num1 / num2;
//             break;
//         default:
//             result = "Invalid operator";
//     }
//     return result;
// }



// // Q5
// function squareNumber(num) {
//     return num * num;
// }


// // Q6
// function factorial(num) {
//     if (num === 0 || num === 1) {
//         return 1;
//     }
//     for (var i = num - 1; i >= 1; i--) {
//         num *= i;
//     }
//     return num;
// }


// // Q7
// function displayCount(start, end) {
//     for (var i = start; i <= end; i++) {
//         document.write(i + "<br>");
//     }
// }


// Q8
// function calculateHypotenuse(base, perpendicular) {
//     function calculateSquare(num) {
//         return num * num;
//     }
//     var hypotenuseSquared = calculateSquare(base) + calculateSquare(perpendicular);
//     return Math.sqrt(hypotenuseSquared);
// }


// // Q9
// function calculateRectangleArea(width, height) {
//     return width * height;
// }


// // Q10
// function isPalindrome(str) {
//     var reversedStr = str.split('').reverse().join('');
//     return str === reversedStr;
// }


// Q11
// function capitalizeFirstLetter(str) {
//     var words = str.split(' ');
//     for (var i = 0; i < words.length; i++) {
//         words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//     }
//     return words.join(' ');
// }


// // Q12
// function findLongestWord(str) {
//     var words = str.split(' ');
//     var longestWord = '';
//     for (var i = 0; i < words.length; i++) {
//         if (words[i].length > longestWord.length) {
//             longestWord = words[i];
//         }
//     }
//     return longestWord;
// }


// // Q13
// function countLetterOccurrences(str, letter) {
//     var count = 0;
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === letter) {
//             count++;
//         }
//     }
//     return count;
// }


// // Q14
// function calcCircumference(radius) {
//     var circumference = 2 * Math.PI * radius;
//     alert("The circumference is " + circumference.toFixed(2));
// }

// function calcArea(radius) {
//     var area = Math.PI * radius * radius;
//     alert("The area is " + area.toFixed(2));
// }



