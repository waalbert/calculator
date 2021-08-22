const display = document.querySelector("#display");
let displayedNum = 0;
let num1 = 0;
let num2 = 0;
let chosenOperator = "";
let hasMoreThanTwoOperators = false;

const nums = document.querySelectorAll(".num");
nums.forEach(num => num.addEventListener("click", () => updateNums(num.textContent)));

const operators = document.querySelectorAll(".operator");
operators.forEach(operator => operator.addEventListener("click", () => {

    // if (hasMoreThanTwoOperators) {
    //     chosenOperator = operator.textContent;
    //     num1 = operate(chosenOperator, num1, num2);
        
    //     // operate(chosenOperator, num1, num2)
    //     // displayedNum = 0;
    // } else {
    //     hasMoreThanTwoOperators = true;
        num1 = displayedNum;
        displayedNum = 0;
        // display.textContent = "";
        chosenOperator = operator.textContent;
        
    // }
}));

const equalSign = document.querySelector("#equals");
equalSign.addEventListener("click", () => {
    num2 = displayedNum;
    displayedNum = 0;
    operate(chosenOperator, num1, num2);
});

const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", () => {
    hasMoreThanTwoOperators = false;
    displayedNum = 0;
    displayNums(displayedNum);
});

function add(num1, num2) {
    displayedNum = Number(num1) + Number(num2);
    displayNums(displayedNum);
    return displayedNum;
}

function subtract(num1, num2) {
    displayedNum = Number(num1) - Number(num2);
    displayNums(displayedNum);
    return displayedNum;
}

function multiply(num1 , num2) {
    displayedNum = Number(num1) * Number(num2);
    displayNums(displayedNum);
    return displayedNum;
}

function divide(num1, num2) {
    if (Number(num2) === 0) {
        return "FUCK OUT OF HERE WITH YOUR BULLSHIT";
    }
    displayedNum = Number(num1) / Number(num2);
    displayNums(displayedNum);
    return displayedNum;
}

function operate(operator, num1, num2) {
    if (operator === "+") return add(num1, num2);
    else if (operator === "-") return subtract(num1, num2);
    else if (operator === "*") return multiply(num1, num2);
    else if (operator === "/") return divide(num1, num2);
    
}

function updateNums(digit) {
    // const num = document.createElement("span");
    
    displayedNum += digit;
    if (displayedNum[0] === "0") {
        displayedNum = displayedNum.slice(1);
    }
    displayNums(displayedNum);
    // num.textContent = digit;
    // display.appendChild(num);
}

function displayNums(num) {
    display.textContent = num;
}