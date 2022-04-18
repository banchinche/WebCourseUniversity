
// function from tasks2-4/task3.js
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
    return result
};

const mathFrameWorkObject = {
    lastResult: undefined,
    calculateTwoNumbers: function(a, b, operation) {
        this.lastResult = calculate(a, b, operation);
        return this.lastResult
    }
}

console.log(mathFrameWorkObject.calculateTwoNumbers(5, 6, '+'));
console.log('Last result stored in MathFrameWorkObject:', mathFrameWorkObject.lastResult);
