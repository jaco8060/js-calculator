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
  return result;
}

let num1 = "";
let num2 = "";
let operator = "";
let displayContent = "";
function fillDisplay(e) {
  let display = document.querySelector(".display");
  let content = display.textContent;
  let value = e.target.textContent;

  // clear display if the first button pressed is an operator
  if (content === "" && /[+\-\/*]/.test(value)) {
    return;
  }

  // append value to display
  display.textContent += value;
}
const nums = document.querySelectorAll(".number");
nums.forEach((num) => {
  num.addEventListener("click", fillDisplay);
});

function deleteLast(e) {
  const display = document.querySelector(".display");
  display.textContent = display.textContent.slice(0, -1); //slice up to the last character to act as a delete function
}
const del = document.querySelector(".del");

del.addEventListener("click", deleteLast);

function clearDisplay(e) {
  const display = document.querySelector(".display");
  display.textContent = "";
  num1 = "";
  num2 = "";
  operator = "";
  displayContent = "";
}

const clear = document.querySelector(".clear");

clear.addEventListener("click", clearDisplay);

const ops = document.querySelectorAll(".op");
ops.forEach((op) => {
  op.addEventListener("click", fillDisplay);
});

function calculate(e) {
  let display = document.querySelector(".display");
  let content = display.textContent;
  let numArr = content.split(/[+\-\/*]/g); // split the content by operators
  let opArr = content.match(/[+\-\/*]/g); // extract the operators

  let result = parseFloat(numArr[0]); // set the initial result to the first number

  // loop through the operator array and perform operations
  for (let i = 0; i < opArr.length; i++) {
    result = operate(result, parseFloat(numArr[i + 1]), opArr[i]);
  }

  display.textContent = result;
}

const eq = document.querySelector(".eqbtn");
eq.addEventListener("click", calculate);
