// Q1- Write a program that allow to user enter number then print it

// var number = prompt("Enter a number");
// console.log("Output",number);

// =================================================================================//
// =================================================================================//

// Q2- Write a program that take number from user then print yes if that number can divide by 3
// and 4 otherwise print no
// Example1: Input: 12 Output Yes
// // Example 2: Input: 9 Output No

// var number = prompt("Enter a number");
// if(number % 3 === 0 && number % 4 === 0) {
//     console.log('Yes');
// }else {
//     console.log('No');
// }

// =================================================================================//
// =================================================================================//

// Q3- Write a program that allows the user to insert 2 integers then print the max
// Example1 (Input: 3 5 - Output: 5)
// Example 2 (Input: 10 7 - Output: 10)

// var number1 = Number(prompt("Enter First Number"));
// var number2 = Number(prompt("Enter Second Number"));
//
// if (number1 > number2){
//     console.log("output" + number1);
// }else{
//     console.log("output" + number2);
// }

// =================================================================================//
// =================================================================================//

// Q4- Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive.
// Example 1 (Input: -5 - Output negative)
// Example2 (Input: 10 - Output positive)

// var number = prompt("Enter Number");
//
// if(number >= 0){
//     console.log("output  positive");
// }else {
//     console.log("output negative");
// }

// =================================================================================//
// =================================================================================//

// Q5- Write a program that take 3 integers from user then print the max element
// and the min element.

// Example 1
// Input:7,8,5
// Output:
// max element = 8
// min element = 5

// Example2
// Input: 3 6 9
// Outputs:
// Max element = 9
// Min element = 3

// var number1 = Number(prompt("Enter Number one"));
// var number2 = Number(prompt("Enter Number two"));
// var number3 = Number(prompt("Enter Number three"));
//
// var max = Math.max(number1, number2, number3);
// var min = Math.min(number1, number2, number3);
//
// console.log("Max Number", max);
// console.log("Min Number", min);


// =================================================================================//
// =================================================================================//

// Q6- Write a program that allows the user to insert integer number then check If a number is oven or odd
// 7- Example 1 (Input: 8 - Output: even)
// Example 2 (Input: 7 - Output: odd)

// var number = prompt("Enter a number");
// if( number % 2 === 0 ){
//     console.log("Output even");
// }else {
//     console.log("Output odd");
// }

// =================================================================================//
// =================================================================================//

//Q8- Write a program that take character from user then if it is vowel chars (a,e,I,o,u)
// then print vowel otherwise print consonant
// Example1 (Input: O - Output: vowel)
// Example2 (Input: b - Output: Consonant)

// var char = prompt("Enter Word");
//
// if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//     console.log("vowel")
// }else (
//     console.log("consonant")
// )

// =================================================================================//
// =================================================================================//

// Q9-Write a program that allows user to insert integer then print all numbers between 1 to that’s number // Example Input 5 Output 1, 2, 3, 4, 5

// for (var i = 1; i <= 5; i++){
//     console.log(i)
// }

// =================================================================================//
// ================================================================================//

// Q10- Write a program that allows user to inger then print a multiplication table up to 12.
// Example // Input: 5
// Output // 5 10 15 20 25 30 35 40 45 50 5

// for(var i = 0 ; i <= 60 ; i= i + 5 ){
//     console.log(i);
// }

// =================================================================================//
// ================================================================================//

// Q11- Write a program that allows to user to insert number then print all even numbers
// between 1 to this number // Example: //  Input: 15 // Output: 2 4 6 8 10 12 14

// var number = window.prompt("Enter a number");
//
// for(var i = 2; i <= number; i += 2){
//     console.log(i);
// }

// =================================================================================//
// ================================================================================//

// Q12- Write a program that take two integers then print the power
// Example:
//     Input: 4 3
// Output: 64
// Hint how to calculate 4^3 = 4 * 4 * 4 =64

// =================================================================================//
// =================================================================================//


// 12- Write a program to enter marks of five subjects and calculate total, average and  percentage.

// var total = 0;
//
// for (var i = 0; i < 5; i++) {
//     var mark = Number(prompt('Enter mark for subject'));
//     total += mark;
// }
//
// var average = total / 5;
// var percentage = (total / 500) * 100;
//
// console.log('Total marks:',total);
// console.log('Average marks:', average);
// console.log('Percentage:',percentage);

// =================================================================================//
// ================================================================================//

// Q13-Write a program to input month number and print number of days in that month.
// Example: // Input: - Month Number: 1 // Output:-. Days in Month: 31

// var month = Number(prompt("Enter the month number:"));
//
// switch (month) {
//     case 1:
//         console.log("january Days in Month: 31");
//         break;
//     case 2:
//         console.log("february Days in Month: 28");
//         break;
//     case 3:
//         console.log("march Days in Month: 31");
//         break;
//     case 4:
//         console.log("april Days in Month: 30");
//         break;
//     case 5:
//         console.log("May Days in Month: 31");
//         break;
//     case 6:
//         console.log("June Days in Month: 30");
//         break;
//     case 7:
//         console.log("July Days in Month: 31");
//         break;
//     case 8:
//         console.log("August Days in Month: 31");
//         break;
//     case 9:
//         console.log("September Days in Month: 30");
//         break;
//     case 10:
//         console.log("october Days in Month: 31");
//         break;
//     case 11:
//         console.log("November Days in Month: 30");
//         break;
//     case 12:
//         console.log("December Days in Month: 31");
//         break;
//     default:
//         console.log("Invalid month number");
// }

// =================================================================================//
// ================================================================================//

// Q14- Write a program to input marks of five subjects
// Physics, Chemistry, Biology, Mathematics and Computer ,Find percentage and grade
// Percentage >= 90%: Grad A
// Percentage >= 80%: Grad B
// Percentage >= 70%: Grad C
// Percentage >= 60%: Grad D
// Percentage >= 50%: Grad E
// Percentage < 40%: Grad F

// var physics = Number(prompt("Enter your physics Degree Number"));
// var chemistry   = Number(prompt("Enter your chemistry Degree Number"));
// var  biology = Number(prompt("Enter your biology Degree Number"));
// var mathematics = Number(prompt("Enter  your mathematics Degree Number"));
// var  computer   = Number(prompt("Enter your computer Degree Number"));
//
// var totalMarks = Number(physics) + Number(chemistry) + Number(biology) + Number(mathematics) + Number(computer) ;
// var percentage = (totalMarks / 500) * 100;
// console.log(percentage);
//
// if(percentage >= 90){
//     console.log("Grade A")
// } else if(percentage >= 80){
//     console.log("Grade B")
// }else if(percentage >= 70){
//     console.log("Grade C")
// }else if(percentage >= 60){
//     console.log("Grade D")
// }else if(percentage >= 50){
//     console.log("Grade E")
// }else if(percentage >= 40){
//     console.log("Grade F")
// }

// =================================================================================//
// ================================================================================//


//Q15- Write a program to print total number of days in month
//
// var month = Number(prompt("Enter the month number:"));
//
// switch (month) {
//     case 1:
//         console.log("january Days in Month: 31");
//         break;
//     case 2:
//         console.log("february Days in Month: 28");
//         break;
//     case 3:
//         console.log("march Days in Month: 31");
//         break;
//     case 4:
//         console.log("april Days in Month: 30");
//         break;
//     case 5:
//         console.log("May Days in Month: 31");
//         break;
//     case 6:
//         console.log("June Days in Month: 30");
//         break;
//     case 7:
//         console.log("July Days in Month: 31");
//         break;
//     case 8:
//         console.log("August Days in Month: 31");
//         break;
//     case 9:
//         console.log("September Days in Month: 30");
//         break;
//     case 10:
//         console.log("october Days in Month: 31");
//         break;
//     case 11:
//         console.log("November Days in Month: 30");
//         break;
//     case 12:
//         console.log("December Days in Month: 31");
//         break;
//     default:
//         console.log("Invalid month number");
// }


// =================================================================================//
// ================================================================================//

//Q16- Write a program to check whether an alphabet is vowel or consonant

// var alphabet = prompt("Enter text");
//
// switch (alphabet) {
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u":
//         console.log(alphabet,"is vowel");
//         break;
//     default:
//         console.log(alphabet,"is a consonant");
// }

// =================================================================================//
// ================================================================================//

//Q17- Write a program to find maximum between two numbers
//
// var num1 = Number(prompt("Enter First Number"));
// var num2 = Number(prompt("Enter Second Number"));
//
// var max;
//
// switch (true){
//     case num1 > num2:
//         max = num1;
//         break;
//     case num2 > num1:
//         max = num2;
//         break;
//     default:
//         max = "Both Numbers are equal";
// }
//
// console.log(max,"is the maximum");


// =================================================================================//
// ================================================================================//

//Q18-Write a program to check whether a number is even or odd

// var number = Number(prompt("Enter a number"));
//
// switch (true){
//     case number % 2 == 0:
//         console.log(number, "even");
//         break;
//     case number % 2 != 0:
//         console.log(number, "odd");
// }

// =================================================================================//
// ================================================================================//

//Q19-Write a program to check whether a number is positive or negative or zero

// var number = Number(prompt("Enter a number"));
//
// switch (true) {
//     case number > 0:
//         console.log(number, "is positive");
//         break;
//     case number < 0:
//         console.log(number, "is negative");
//         break;
//     case number == 0:
//         console.log(number, "is zero");
//         break;
// }

// ================================================================================//
// ================================================================================//

//Q20-Write a program to create Simple Calculator

// var num1 = Number(prompt("Enter First Number"));
// var operator = prompt("Enter the operator (+, -, *, /):");
// var num2 = Number(prompt("Enter Second Number"));
// var result ;
// switch (operator) {
//     case '+':
//         result = num1 + num2;
//         break;
//     case '-':
//         result = num1 - num2;
//         break;
//     case '*':
//         result = num1 * num2;
//         break;
//     case '/':
//         result = num1 / num2;
//         break;
//     default:
//         console.log("Invalid operator");
// }
//
// console.log(num1 , operator , num2 , "=" , result);
//
