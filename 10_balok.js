const prompt = require("prompt-sync") ({ sigint: true })
console.log(" +-=-=-=-=-=-=-=-=-=+ ")
console.log(" | KALKULATOR BALOK | ")
console.log(" +-=-=-=-=-=-=-=-=-=+ ")
let p = Number(prompt('Panjang      : '))
let l = Number(prompt('Lebar        : '))
let t = Number(prompt('Tinggi       : '))
let Lp = 2 * ((p * t) + (p * l) + (l * t))
let V = p * l * t
console.log(`
Lp      : ${Lp}_cm2
Volume  : ${V}_cm3`)