const display = document.querySelector("#display");
let displayedNum = 0;
let num1 = 0;
// let num2 = 0;
let chosenOperator = "";
let hasMoreThanTwoOperators = false;
// let operatorUseCount = 0;
let total = 0;

const nums = document.querySelectorAll(".num");
nums.forEach(num => num.addEventListener("click", () => {
    updateNums(num.textContent);
}));

const operators = document.querySelectorAll(".operator");
operators.forEach(operator => operator.addEventListener("click", () => {
    if (hasMoreThanTwoOperators) {
        num1 = displayedNum;
        operate(chosenOperator, num1);
    } else {
        total = Number(displayedNum);

    }
    chosenOperator = operator.textContent;
    hasMoreThanTwoOperators = true;
    displayedNum = 0;
}));

const equalSign = document.querySelector("#equals");
equalSign.addEventListener("click", () => {
    num1 = displayedNum;
    displayedNum = 0;
    operate(chosenOperator, num1);
    displayNums(total);
});

const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", () => {
    display.style.fontSize = "100px";
    total = 0;
    hasMoreThanTwoOperators = false;
    displayedNum = 0;
    displayNums(displayedNum);
});

function add(num) {
    total += Number(num);
}

function subtract(num) {
    total -= Number(num);
}

function multiply(num) {
    total *= Number(num);
}

function divide(num) {
    if (num == 0) {
        total = "FUCK OUT OF HERE WITH YOUR BULLSHIT";
        display.style.fontSize = "30px";
    } else {
        total /= Number(num);
    }
}

function operate(operator, num) {
    if (operator === "+") add(num);
    else if (operator === "-") subtract(num);
    else if (operator === "*") multiply(num);
    else if (operator === "/") divide(num);
    displayNums(total);
}

function updateNums(digit) {
    displayedNum += digit;
    if (displayedNum[0] === "0") { // automatically removes a 0 as the first digit
        displayedNum = displayedNum.slice(1);
    }
    displayNums(displayedNum);
}

function displayNums(num) {
    display.textContent = num;
}