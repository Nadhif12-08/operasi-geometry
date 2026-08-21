const prompt = require("prompt-sync") ({ sigint: true })
console.log(" +-=-=-=-=-=-=-=-=-=-=-=-=-=+ ")
console.log(" | KALKULATOR LAYANG_LAYANG | ")
console.log(" +-=-=-=-=-=-=-=-=-=-=-=-=-=+ ")
let d1 = Number(prompt('Diagonal_1  : '))
let d2 = Number(prompt('Diagonal_2  : '))
let a = Number(prompt('Sisi_atas    : '))
let b = Number(prompt('Sisi_bawah   : '))
let Luas = (1/2) * d1 * d2
let Keliling = 2 * (a + b)
console.log(`
Luas        : ${Luas}_cm2
Keliling    : ${Keliling}_cm`)
