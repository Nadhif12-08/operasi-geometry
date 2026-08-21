const prompt = require("prompt-sync")({ sigint: true })
console.log(" +-=-=-=-=-=-=-=-=-=-=-=-+ ")
console.log(" |  KALKULATOR SEGITIGA  | ")
console.log(" +-=-=-=-=-=-=-=-=-=-=-=-+ ")
let a = Number(prompt('Alas      : '))
let t = Number(prompt('Tinggi    : '))
let b = Number(prompt('Sisi1     : '))
let c = Number(prompt('Sisi2     : '))
let Luas = 0.5 * a * t
let Keliling = a + b + c
console.log(`
Luas        : ${Luas}_cm2
Keliling    : ${Keliling}_cm`)