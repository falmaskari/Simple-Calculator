const addBtn = document.querySelector("#add");
const subtractBtn = document.querySelector("#subtract");
const multiplyBtn = document.querySelector("#multiply");
const divideBtn = document.querySelector("#divide");

const number1E1 = document.querySelector("#number1");
const number2E1 = document.querySelector("#number2");

const resultE1 = document.querySelector("#result");

function calculate(operation) {
  const num1 = Number(number1E1.value);
  const num2 = Number(number2E1.value);

  if (number1E1.value === "" || number2E1.value === "") {
    resultE1.textContent = "Please enter numbers";
  } else if (isNaN(num1) || isNaN(num2)) {
    resultE1.textContent = "Please enter valid numbers";
  } else {
    let result;
    switch (operation) {
      case "add":
        result = num1 + num2;
        break;
      case "subtract":
        result = num1 - num2;
        break;
      case "multiply":
        result = num1 * num2;
        break;
      case "divide":
        if (num2 === 0) {
          result = "Can't divide by 0";
        } else {
          result = num1 / num2;
        }
        break;
      default:
        result = "";
        break;
    }
    resultE1.textContent = result;
    clearInputs();
  }
}

function clearInputs() {
  number1E1.value = "";
  number2E1.value = "";
}

addBtn.addEventListener("click", () => {
  calculate("add");
});

subtractBtn.addEventListener("click", () => {
  calculate("subtract");
});

multiplyBtn.addEventListener("click", () => {
  calculate("multiply");
});

divideBtn.addEventListener("click", () => {
  calculate("divide");
});
