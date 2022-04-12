
const add = (first, second) => first + second;
const sub = (first, second) => first - second;
const mul = (first, second) => first * second;
const div = (first, second) => {
    if (second) {
        return first / second
    }
}

const calculate = operation => {
    firstOperand = Number(document.getElementById("firstOperand").value);
    secondOperand = Number(document.getElementById("secondOperand").value);
    result = operation(firstOperand, secondOperand);
    if (result !== undefined) (alert(`Result: ${result}`))
    else alert(("Division by zero"));
}
