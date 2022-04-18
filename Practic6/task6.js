
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
    firstOperand: {},
    secondOperand: {},
    lastResult: undefined,
    calculateTwoNumbers: function(operation, ...args) {
        if (args.length == 1) {
            let first, second;
            if (Array.isArray(args[0])) {
                [first, second] = args[0]
            }
            else {
                [first, second] = [args[0].a, args[0].b]
            }
            this.lastResult = calculate(first, second, operation)
        }
        else if (args.length == 2) {
            this.lastResult = calculate(args[0], args[1], operation);
        }
        else {
            this.lastResult = calculate(this.firstOperand, this.secondOperand, operation);
        }
        return this.lastResult
    }
}

mathFrameWorkObject.firstOperand = 5;
mathFrameWorkObject.secondOperand = 6;

console.log(mathFrameWorkObject.calculateTwoNumbers('+'));
console.log('Last result stored in MathFrameWorkObject:', mathFrameWorkObject.lastResult);

console.log(mathFrameWorkObject.calculateTwoNumbers('+', 7, 9));
console.log('Last result stored in MathFrameWorkObject:', mathFrameWorkObject.lastResult);

console.log(mathFrameWorkObject.calculateTwoNumbers('+', [66, 33]));
console.log('Last result stored in MathFrameWorkObject:', mathFrameWorkObject.lastResult);

console.log(mathFrameWorkObject.calculateTwoNumbers('+', {'a': 44, 'b': 22}));
console.log('Last result stored in MathFrameWorkObject:', mathFrameWorkObject.lastResult);
