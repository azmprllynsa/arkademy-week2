library = [{
        title: 'Dilan 1990',
        author: 'Pidi Baiq',
        status: 'Available'
    },
    {
        title: 'Ubur - Ubur Lembur',
        author: 'Raditya Dika',
        status: 'Available'
    },
    {
        title: 'Laskar Pelangi',
        author: 'Andrea Hirata',
        status: 'Unavailable'
    }
];

function showStatus(title) {
    var bookStatus = '';
    console.log(`Book Title = ${title}`)
    library.forEach(element => {
        if (element.title == title) {
            bookStatus = element.status;
        }
    });
    if (!bookStatus) {
        return 'Book was not found';
    }
    return bookStatus;
}
console.log(`Status = ${showStatus('Ubur - Ubur Lembur')}`);


function bookList(library) {
    let book = [];
    library.forEach((element, i) => {
        if (element.status == 'Available') {
            book[i] = element.title;
        }
    });
    return book;

}
console.table(bookList(library));