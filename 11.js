number = [123, 9, 27];
// Cara 1
function arraySum(array) {
    while (array.length > 1) {
        let storage = 0;
        array.map(function(value) {
            storage = storage + value;
        });
        array = `${storage}`.split('').map(Number);
    }
    return array;
}
console.log(arraySum(number));

// Cara 2
// function arraySum(number) {
//     sums = number.reduce(function(sum, num) {
//         return sum + num
//     }, 0);

//     if (sums === 0) {
//         return 0;
//     }
//     if (sums % 9 == 0) {
//         return 9;
//     }
//     return (sums % 9);
// }
// console.log(arraySum(number));