const display = document.querySelector("#display");
let displayedNum = 0;
let num1 = 0;
let total = 0;
let chosenOperator = "";
let operatorIsChosen = false;
let isSecondOperator = false;
let firstDigitIsSelected = false;
let decimalIsSelected = false;
let isSecondOperation = false;

const nums = document.querySelectorAll(".num");
nums.forEach(num => num.addEventListener("click", () => {
    firstDigitIsSelected = true;
    updateNums(num.textContent);
    displayNums(displayedNum);
}));

const decimalPoint = document.querySelector("#decimal");
decimalPoint.addEventListener("click", () => {
    if (firstDigitIsSelected && !decimalIsSelected) { // ensures only one decimal point in an inputed number
        updateNums(decimalPoint.textContent);
        displayNums(displayedNum);
        decimalIsSelected = true;
    }
});

const operators = document.querySelectorAll(".operator");
operators.forEach(operator => operator.addEventListener("click", () => {
    operatorIsChosen = true;

    if (isSecondOperator) {
        num1 = displayedNum;
        operate(chosenOperator, num1);
        displayNums(total);
        // isSecondOperation = true;
    } else {
        total = Number(displayedNum);

    }
    console.log(displayedNum);
    chosenOperator = operator.textContent;
    isSecondOperator = true;
    displayedNum = 0;
}));

const equalSign = document.querySelector("#equals");
equalSign.addEventListener("click", () => {
    if (operatorIsChosen) {
        // isSecondOperation = true;
        num1 = displayedNum;
        displayedNum = 0;
        operate(chosenOperator, num1);
        displayNums(total);
        chosenOperator = "";
        operatorIsChosen = false;
    } else {
        chosenOperator = "";
        total = Number(displayedNum);
        displayNums(total);
    }
});

const backspaceBtn = document.querySelector("#backspace");
backspaceBtn.addEventListener("click", () => {
    // displayedNum = 0;
    // displayNums(displayedNum);
    resetDisplayedNum();
});

const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", () => {
    total = 0;
    isSecondOperator = false;
    operatorIsChosen = false;
    // displayedNum = 0;
    // displayNums(displayedNum);
    resetDisplayedNum();
});

const plusMinus = document.querySelector("#plusminus");
plusMinus.addEventListener("click", () => {
    console.log(displayedNum);
    // if (isSecondOperation) {
    //     displayedNum = total;
    //     total *= -1;
    // }
    displayedNum *= -1;
    displayNums(displayedNum);
    console.log(displayedNum);

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
        total = "FUCK OUT OF HERE WITH YOUR BULLSHIT! LAKERS > CELTICS";
    } else {
        total /= Number(num);
    }
}

function operate(operator, num) {
    if (operator === "+") add(num);
    else if (operator === "-") subtract(num);
    else if (operator === "*") multiply(num);
    else if (operator === "/") divide(num);
}

function updateNums(digit) {
    displayedNum += digit;
    if (displayedNum[0] === "0") { // automatically removes a 0 as the first digit
        displayedNum = displayedNum.slice(1);
    }
}

function displayNums(num) {
    display.textContent = num;
}

function resetDisplayedNum() {
    displayedNum = 0;
    displayNums(displayedNum);
}