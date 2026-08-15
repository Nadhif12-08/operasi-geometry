const prompt = require("prompt-sync")({ sigint: true });
console.log('==========================')
console.log("KALKULATOR PERSEGI PANJANG");
console.log("==========================");
let p = Number(prompt('Panjang  : '))
let l = Number(prompt('Lebar    : '))
let Luas = p * l
let Keliling = 2 * (p + l)
console.log(`
Luas        : ${Luas}_cm2
Keliling    : ${Keliling}_cm2`)
