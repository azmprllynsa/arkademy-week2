let arr = [6, 22, 34, 15, 2, 13, 26, 57, 42, 32];

function sortData(arr) {
    let minArr = arr[0];
    let maxArr = arr[0];

    arr.forEach(angka => {
        if (minArr > angka) {
            minArr = angka;
        }

        if (maxArr < angka) {
            maxArr = angka;
        }
    })

    let arrASC = arr.sort((a, b) => a - b);
    let newArr = [...arr]
    let arrDSC = newArr.sort((a, b) => b - a);
    result = {
        min: minArr,
        max: maxArr,
        asc: arrASC,
        dsc: arrDSC,
    };

    return result;

}
result = sortData(arr);
console.log(result.min);
console.log(result.max);
console.log(result.asc);
console.log(result.dsc);