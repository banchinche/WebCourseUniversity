
const calculateObjects = (firstObject, secondObject, arithmeticOperation) => {
    [firstOperand, secondOperand] = [firstObject.a, secondObject.b]
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
    return {'result': result};
}

const showResult = arithmeticOperation => {
    firstOperand = Number(document.getElementById("firstOperand").value);
    secondOperand = Number(document.getElementById("secondOperand").value);
    const firstObject = {'a': firstOperand}, secondObject = {'b': secondOperand};
    resultObject = calculateObjects(firstObject, secondObject, arithmeticOperation);
    alert(`Result: ${resultObject.result}`);
}
