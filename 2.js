function genPrime(n) {
    let listPrime = [];
    let start = 2;
    while (n > listPrime.length) {
        prime = true;
        for (i = 2; i < start; i++) {
            if (start % i == 0) {
                prime = false
            }
        }
        if (prime == true) {
            listPrime.push(start)
        }
        start++;
    }
    return listPrime;
}

function triangle(n) {
    let result = '';
    if (n < 0 || n >= 10) {
        return "Angka masukan tidak sesuai range yang ditentukan"
    }
    triangleList = genPrime(n);
    for (j = 1; j <= n; j++) {
        for (k = 0; k < j; k++) {
            result += triangleList[k] + " "
        }
        result += "\n"
    }
    return result
}
console.log(triangle(5))