
const calculate = (...args) => {
    if(args.length == 2){
        [[firstOperand, secondOperand], arithmeticOperation] = [args[0], args[args.length - 1]];
    }
    else {
        [firstOperand, secondOperand, arithmeticOperation] = args
    }
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
};


const showResult = arithmeticOperation => {
    firstOperand = Number(document.getElementById("firstOperand").value);
    secondOperand = Number(document.getElementById("secondOperand").value);
    result = calculate([firstOperand, secondOperand], arithmeticOperation);
    result2 = calculate(firstOperand, secondOperand, arithmeticOperation);
    console.log(result == result2);
    alert(`Result: ${result}`);
}


