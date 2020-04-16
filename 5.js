function palindrome(text, findText) {
    let hasil = 0

    let textLength = text.length
    let findTextLength = findText.length
    let arr = [];
    let i = 0;

    for (var a = 0; a <= textLength - findTextLength; a++) {
        var textSubString = text.substring(a, findTextLength + a)
        arr[i] = textSubString;
        if (textSubString == findText) {
            hasil++;
        }
        i++
    }
    arr[i++] = '';
    let splitString = text.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    for (var a = 0; a <= textLength - findTextLength; a++) {
        var textSubString = joinArray.substring(a, findTextLength + a)
        arr[i] = textSubString;
        if (textSubString == findText) {
            hasil++;
        }
        i++
    }
    return `ditemukan ${hasil} kali`
        // return arr;

}

text = 'tamatamatamatama'
findText = 'ata'
console.log(palindrome(text, findText))