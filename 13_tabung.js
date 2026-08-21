const prompt = require ("prompt-sync")({ sigint: true })
console.log(" +-=-=-=-=-=-=-=-=-=-+ ")
console.log(" | KALKULATOR TABUNG | ")
console.log(" +-=-=-=-=-=-=-=-=-=-+ ")
let r = Number(prompt("Jari_jari     : "))
let t = Number(prompt("Tinggi_tabung : "))
let lp = 2 * Math.PI * (r ** 2) + 2 * r * t
let V = Math.PI * (r ** 2) * t
console.log(`
Lp      : ${lp}_cm2
Volume  : ${V}_cm3`)