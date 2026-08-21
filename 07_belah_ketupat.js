const prompt = require("prompt-sync") ({ sigint: true })
console.log(" +-=-=-=-=-=-=-=-=-=-=-=-=-=+ ")
console.log(" | KALKULATOR BELAH_KETUPAT | ")
console.log(" +-=-=-=-=-=-=-=-=-=-=-=-=-=+ ")
let d1 = Number(prompt('Diagonal_1  : '))
let d2 = Number(prompt('Diagonal_2  : '))
let s =  Number(prompt('Sisi        : '))
let Luas = 1/2 * (d1 * d2) 
let Keliling = 4 * s
console.log(`
Luas        : ${Luas}_cm2
Keliling    : ${Keliling}_cm`)
