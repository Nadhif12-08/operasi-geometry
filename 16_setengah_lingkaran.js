const prompt = require ("prompt-sync")({ sigint: true })
console.log(" +-=-=-=-=-=-=-=-=-=-=-=-=-=+ ")
console.log(" | KALKULATOR SETENGAH_BOLA | ")
console.log(" +-=-=-=-=-=-=-=-=-=-=-=-=-=+ ")
let r = Number(prompt("Jari_jari   : "))
let Luas = 1/2 * Math.PI * (r ** 2)
let Keliling = Math.PI * r + 2 * r
console.log(`
Luas        : ${Luas.toFixed(2)}_cm2
Keliling    : ${Keliling.toFixed(2)}_cm`)
