const prompt = require("prompt-sync") ({ sigint: true })
console.log(" +-=-=-=-=-=-=-=-=-=-=-=-+ ")
console.log(" |  KALKULATOR LINGKARAN | ")
console.log(" +-=-=-=-=-=-=-=-=-=-=-=-+ ")
let r = Number(prompt("Jari-jari    : "))
let Luas = (r ** 2) * Math.PI
let Keliling = 2 * Math.PI * r
console.log(`
Luas        : ${Luas}_cm2
Keliling    : ${Keliling}_cm`)
