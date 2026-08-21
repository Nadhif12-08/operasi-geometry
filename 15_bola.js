const prompt = require ("prompt-sync")({ sigint: true })
console.log(" +-=-=-=-=-=-=-=-=-+ ")
console.log(" | KALKULATOR BOLA | ")
console.log(" +-=-=-=-=-=-=-=-=-+ ")
let r = Number(prompt("Jari_jari        : "))
let lp = 4 * Math.PI * (r ** 2)
let V = 4/3 * Math.PI * (r ** 3)
console.log(`
Lp      : ${lp}_cm2
Volume  : ${V}_cm3`)