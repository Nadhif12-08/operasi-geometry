const prompt = require ("prompt-sync")({ sigint : true })
console.log(" +-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=+ ")
console.log(" | KALKULATOR SEGI ENAM BERATURAN | ")
console.log(" +-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=+ ")
let s = Number(prompt("Panjang_sisi     : "))
let Luas = (3*Math.sqrt(3)/2) * (s ** 2)
let Keliling = 6 * s
console.log(`
Luas        : ${Luas.toFixed(2)}_cm
Keliling    : ${Keliling}_cm2`)
