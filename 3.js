function getTreeHeight(height, year) {
    let result

    if (height <= 0 || year <= 0) {
        return "input tahun dan tinggi pohon harus lebih dari 0"
    }
    for (i = 1; i <= year; i++) {
        result = ((height * 2) + 1)
        height = result;
    }

    return `tinggi pohon pada ${year} tahun adalah ${result} meter`

}

console.log(getTreeHeight(2, 0))