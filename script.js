function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1 , num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        return undefined;
    }
    return num1 / num2;
}

function operate(operator, num1, num2) {
    if (operator === "+") add(num1, num2);
    else if (operator === "-") subtract(num1, num2);
    else if (operator === "*") multiply(num1, num2);
    else if (operator === "/") divide(num1, num2);
}

function displayNums(digit) {
    const display = document.querySelector("#display");
    const num = document.createElement("span");
    num.textContent = digit;
    display.appendChild(num);
}

const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click", () => displayNums(button.id)));