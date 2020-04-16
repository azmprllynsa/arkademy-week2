array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

function transpose(array) {
    let result = new Array(array[0].length);
    for (i = 0; i < result.length; i++) {
        result[i] = new Array(array.length);
        for (j = 0; j < result[i].length; j++) {
            result[i][j] = array[j][i];
        }
    }
    return result;
}

console.log(transpose(array));
// transpose(array)