const prompt = require("prompt-sync") ({ sigint: true })
console.log(" +-=-=-=-=-=-=-=-=-=+ ")
console.log(" | KALKULATOR KUBUS | ")
console.log(" +-=-=-=-=-=-=-=-=-=+ ")
let s = Number(prompt('Sisi     : '))
let V = (s ** 3)
let Lp = 6 * s
console.log(`
Lp        : ${Lp}_cm2
Volume    : ${V}_cm3`)