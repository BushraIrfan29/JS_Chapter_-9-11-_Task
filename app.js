// QUESTION 1
// var city=prompt("Enter city name");
// if(city=="Karachi"||"karachi")
// {
//     alert("Welcome to city of lights");
// }

// QUESTION 2
// var gender=prompt("Enter your gender");
// if(gender=="Male"||  gender=="M"|| gender=="male")
// {
//     alert("Good morning Sir");
// }
// else if(gender=="Female"|| gender=="F"|| gender=="female")
// {
//     alert("Good morning Mam");
// }

// QUESTION 3
// var color=prompt("Enter traffic color");
// if(color=="RED"||  color=="red"|| color=="Red")
// {
//     alert("Must Stop");
// }
// else if(color=="YELLOW"|| color=="yellow"|| color=="Yellow")
// {
//     alert("Ready to move");
// }
// else if(color=="GREEN"|| color=="green"|| color=="Green")
// {
//         alert("Move now");
// }

// QUESTION 4
// var fuel=prompt("Enter fuel in litres");
// if(fuel<0.25)
// {
//     alert("PLease refill the fuel in the car");
// }

// QUESTION 5
//A : Displayed
//B : Not Displayed
//C : Displayed
//D : Displayed
//E : Displayed
//F : Displayed

// QUESTION 6
// document.write("<h1>Marksheet</h1>")
// var marks1 = parseFloat(prompt("Enter first subject marks"));
// var marks2 = parseFloat(prompt("Enter second subject marks"));
// var marks3 = parseFloat(prompt("Enter third subject marks"));
// var obtained_marks=marks1+marks2+marks3;
// var total_marks=300;
// document.write("Total marks: "+total_marks+"<br>");
// document.write("Obtained marks: "+obtained_marks+"<br>");
// var percentage=(obtained_marks/total_marks)*100;
// document.write("Percentage% :"+percentage+"<br>");

// if(percentage>=80)
// {
//     document.write("Garde: A-one <br>");
//     document.write("Remarks: Excellent<br>");
// }
// else if(percentage>=70)
// {
//         document.write("Garde: A <br>");
//         document.write("Remarks: Good<br>");
// }
// else if(percentage>=60)
// {
//             document.write("Garde: B <br>");
//             document.write("Remarks: You need to improve <br>");
// }
// else
// {
//             document.write("Garde: Fail <br>");
//             document.write("Remarks: Sorry <br>");
// }

// QUESTION 7
// var secret_no=6;
// var userGuess=prompt("Guess the secret number (between 1 and 10)");
// if(userGuess==secret_no)
// {
//     document.write("Bingo! Correct answer.");
// }
// else if (userGuess ==secret_no - 1 || userGuess == secret_no + 1) 
// {
//     document.write("Close enough to the correct answer.");
// }
// else if (userGuess < 1 || userGuess > 10) {
//     document.write("Please enter a number between 1 and 10.");
// }
// else
// {
//     document.write("Sorry,try again");
// }

// QUESTION 8
// var number=prompt("Enter a number to check if it's divisible by 3:");
// if (number%3 ==0)
// {
//     alert(number + " is divisible by 3.");
// }
// else
// {
//     alert(number + " is not divisible by 3.");

// }

// QUESTION 9
// var number=prompt("Enter a number to check if it's even or odd:");
// if (number%2 ==0)
// {
//     alert(number + " is even.");
// }
// else
// {
//     alert(number + " is odd.");

// }

// QUESTION 10
// var temperature = prompt("Enter the temperature:");
// if (temperature > 40)
// {
//             document.write("It is too hot outside.");
// } 
// else if (temperature > 30) 
//  {
//             document.write("The Weather today is Normal.");
// } 
// else if (temperature > 20)
// {
//             document.write("Today’s Weather is cool.");
// } 
// else if (temperature > 10) 
// {
//             document.write("OMG! Today’s weather is so Cool.");
// } 
// else 
// {
//             document.write("It’s quite cold today.");
// }

// QUESTION 11
// document.write("<h1>Calculator</h1>");
// var firstNumber = parseFloat(prompt("Enter the first number:"));
// var secondNumber = parseFloat(prompt("Enter the second number:"));
// var operation = prompt("Enter the operation (+, -, *, /, %):");

// if (operation =="+") 
// {
//                 result = firstNumber + secondNumber;
// } 
// else if (operation == "-") 
// {
//                 result = firstNumber - secondNumber;
// } 
// else if (operation == "*") {
//                 result = firstNumber * secondNumber;
// }
//  else if (operation == "/")
// {
//                 if (secondNumber == 0) 
//                     {
//                     document.write("Error: Division by zero is not allowed.");
//                     return;
//                     }
//                 result = firstNumber / secondNumber;
// } else if (operation == "%")
//      {
//                 result = firstNumber % secondNumber;
//      }
//       else 
//       {
//                 document.write("Invalid operation. Please enter one of +, -, *, /, %.");
//                 return;
            
//       }
//             document.write("The result of " + firstNumber + " " + operation + " " + secondNumber + " is: " + result);
