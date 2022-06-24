var operator = prompt("Enter operator( either +, -, * or /  ): ");
var num1 = parseFloat(window.prompt("Enter first number: "));
var num2 = parseFloat(window.prompt("Enter second number: "));

let result;

if (operator == "+") {
  result = num1 + num2;
} else if (operator == "-") {
  result = num1 - num2;
} else if (operator == "*") {
  result = num1 * num2;
} else if (operator == "/") {
  result = num1 / num2;
}

alert(result);
