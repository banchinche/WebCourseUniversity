const list = [
    [1, 2, 3, 4, 5],
    [-2, -2, -3, -4, 5],
    [0, 3, 4, 8, 9],
    [-2, 4, 5, -9, 9],
    [0, 0, 2, 3, 4]
];


const substituteDiagonal = list => {
    for (let i = 0; i < list.length; i++) {
        if (list[i][i] < 0) {
            list[i][i] = 0
        }
        else if (list[i][i] > 0) {
            list[i][i] = 1
        }
    }
}


console.log('Source array:\n', list)
substituteDiagonal(list)
console.log('Result array:\n', list)
