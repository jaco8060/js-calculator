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

function fillDisplay(e) {
  const display = document.querySelector(".display");
  const value = e.target.textContent;
  if (isNaN(value)) {
    display.textContent += " " + value;
  } else {
    if (isNaN(display.textContent[display.textContent.length - 1])) {
      display.textContent += " " + value;
    } else {
      display.textContent += value;
    }
  }
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
}

const clear = document.querySelector(".clear");

clear.addEventListener("click", clearDisplay);

const ops = document.querySelectorAll(".op");
ops.forEach((op) => {
  op.addEventListener("click", fillDisplay);
});
