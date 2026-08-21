const prompt = require ("prompt-sync")({ sigint : true })
console.log(" +-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-+ ")
console.log(" | KALKULATOR SEGITIGA SIKU-SIKU | ")
console.log(" +-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-+ ")
let a = Number(prompt("Alas         : "))
let t = Number(prompt("Tinggi       : "))
let s = Number(prompt("Sisi_miring  : "))
let luas = 1/2 * a * t
let keliling = a + t + s
console.log(`
Luas        : ${luas}_cm
Keliling    : ${keliling}_cm2`)