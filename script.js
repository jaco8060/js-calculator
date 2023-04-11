function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

let num1;
let num2;
let op;

function operate(num1, num2, op) {
  let result = "";
  switch (op) {
    case "+":
      result = add(num1, num2);
      console.log(result);
      break;
    case "-":
      result = subtract(num1, num2);
      console.log(result);
      break;
    case "*":
      result = multiply(num1, num2);
      console.log(result);
      break;
    case "/":
      result = divide(num1, num2);
      console.log(result);
      break;
    default:
      console.log("Incorrect value inputted");
  }
}
