let arrobj = [{
        name: 'Tatas',
        company: 'Arkademy',
        job: 'Trainer',
        status: 'single',
        city: 'Jogja'
    },
    {
        name: 'Pratama',
        company: 'Emago',
        job: 'Trainer',
        status: 'single',
        city: 'Jakarta'
    }
]

let obj1 = {
    status: 'Menikah',
    city: 'Jakarta'
}
let obj2 = {
    company: 'Arkademy',
    city: 'Jogja'
}

let hasil = [{
        ...arrobj[0],
        ...obj1
    },
    {
        ...arrobj[1],
        ...obj2
    }
]
console.log(hasil);