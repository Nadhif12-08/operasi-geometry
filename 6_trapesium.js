const prompt = require("prompt-sync") ({ sigint: true })
console.log(" +-=-=-=-=-=-=-=-=-=-=-=-+ ")
console.log(" |  KALKULATOR TRAPESIUM | ")
console.log(" +-=-=-=-=-=-=-=-=-=-=-=-+ ")
let a = Number(prompt("Alas           : "))
let b = Number(prompt("Sisi_atas      : "))
let c = Number(prompt("Sisi_miring    : "))
let t = Number(prompt("Tinggi         : "))
let Luas = 1/2 * ( a + b ) * t
let Keliling = a + b + (c * 2) 
console.log(`
Luas        : ${Luas}_cm2
Keliling    : ${Keliling}_cm2`)