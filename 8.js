function printer(letter, task) {
    let print = [];
    for (let i = 0; i < task.length; i++) {
        if (task[i] === true) {
            print.push(letter[i]);
        }
    }
    return print;
}

letter = ['a', 'i', 'u', 'e', 'o'];
task = [true, false, true, false, true];
console.log(printer(letter, task));


// function printer(letter, task) {
//     let print = []
//     for (let i = 0; i < task.length; i++) {
//         if (task[i] === false) {
//             continue;
//         }

//         print.push(letter[i]);
//     }
//     return print;
// }