function jumlahMie(uang, hargaMie) {
    let jumlah = Math.floor(uang / hargaMie);
    let bonus = Math.floor(jumlah / 4);
    let total = jumlah + bonus;
    return total;
}

uang = 49000;
hargaMie = 2500;
console.log(jumlahMie(uang, hargaMie));