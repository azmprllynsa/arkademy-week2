let a = [
    [3, 4],
    [1, 2]
];
let b = [
    [7, 5],
    [6, 4]
];

function matrixMultiple(a, b) {
    let aLength = a.length;
    let b0Length = b[0].length;
    let bLength = b.length;
    if (a[0].length !== bLength) {
        return "Matriks Tidak sama";
    }
    let result = [];
    for (let i = 0; i < aLength; i++) {
        result.push([])
        for (let j = 0; j < b0Length; j++) {
            result[i][j] = 0;
            for (let k = 0; k < bLength; k++) {
                result[i][j] = result[i][j] + a[i][k] * b[k][j];
            }
        }
    }
    return result;
}

console.log(matrixMultiple(a, b));
// matrixMultiple(a, b)