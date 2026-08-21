const prompt = require("prompt-sync") ({ sigint: true })
console.log(" +-=-=-=-=-=-=-=-=-=-=-=-=-=+ ")
console.log(" | KALKULATOR JAJAR_GENJANG | ")
console.log(" +-=-=-=-=-=-=-=-=-=-=-=-=-=+ ")
let a = Number(prompt("Alas           : "))
let b = Number(prompt("Sisi_miring    : "))
let t = Number(prompt("Tinggi         : "))
let Luas = a * t
let Keliling = 2 * (a + b)
console.log(`
Luas        : ${Luas}_cm2
Keliling    : ${Keliling}_cm`)