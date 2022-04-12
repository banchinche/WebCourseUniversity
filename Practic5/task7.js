// чтобы за O(n) сделать все операции, сделал одной функцией :)

const list = [1, 2, 3, 4, 5, 6];

const arrayStats = list => {
    let arrayLength = 0, arraySum = 0, arrayMax = null, arrayMin = null, oddNumbers = [];
    list.forEach(element => {
        arrayLength += 1;
        arraySum += element;
        if (arrayMax === null) {
            arrayMax = element;
        }
        else if (element > arrayMax) {
            arrayMax = element;
        }
        if (arrayMin === null) {
            arrayMin = element;
        }
        else if (element < arrayMin) {
            arrayMin = element;
        }
        if (Math.abs(element) % 2 == 1) {
            oddNumbers.push(element)
        }
    });
    return {
        'max': arrayMax,
        'min': arrayMin,
        'sum': arraySum,
        'mean': arraySum / arrayLength,
        'odd': oddNumbers
    }
}

console.log('Source array:', list);
console.log('Array stats:', arrayStats(list));
