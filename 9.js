arr = [6, 22, 34, 15, 2, 13, 26, 57, 42, 32, 6];

// mean
function mean(arr) {
    let result = 0;
    let sum = 0
    arr.forEach(function(n) {
        sum += n;
    })
    result = sum / arr.length
    return result;
}
console.log(`mean number\t: ${mean(arr)}`);

// median
function median(arr) {
    let median = 0,
        arrSum = arr.length;
    arr.sort((a, b) => a - b);
    if (arrSum % 2 === 0) {
        median = (arr[arrSum / 2 - 1] + arr[arrSum / 2]) / 2;
    } else {
        median = arr[(arrSum - 1) / 2];
    }
    return median;
}
console.log(`median number\t: ${median(arr)}`);

// modus
function Modus(arr) {
    let arrModus = arr.sort((a, b) => a - b)
        // console.log(arrModus);
    let num = [];
    let freq = [];
    let sum = 0;
    let temp = arrModus[0];
    let maxSum = 0;
    let result = [];

    for (let i = 0; i <= arrModus.length; i++) {
        const element = arrModus[i];
        // console.log(`element: ${element} index ${i} is NOT same with ${temp} `);

        if (temp !== element) {
            // console.log('true');
            freq.push(sum);
            num.push(temp);

            if (maxSum === sum) {
                result.push(temp);
            }
            if (maxSum < sum) {
                maxSum = sum;
                result = [temp];
            }
            sum = 0;
        } else {
            // console.log('false')
        }
        // console.log(sum)
        sum++;
        temp = element;
    };
    // console.log(`checked number\t: ${num}`);
    // console.log(`frequence\t: ${freq}`);
    return result;
}
console.log(`modus number\t: ${Modus(arr)}`);