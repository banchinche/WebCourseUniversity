
const calculate = (firstOperand, secondOperand, arithmeticOperation) => {
    let result = 0;
    switch (arithmeticOperation) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            if (secondOperand != 0) {
                result = firstOperand / secondOperand;
            }
            else {
                result = 'NaN';
            }
    }
    return result;
}


const showResult = arithmeticOperation => {
    firstOperand = Number(document.getElementById("firstOperand").value);
    secondOperand = Number(document.getElementById("secondOperand").value);
    result = calculate(firstOperand, secondOperand, arithmeticOperation);
    alert(`Result: ${result}`);
}
