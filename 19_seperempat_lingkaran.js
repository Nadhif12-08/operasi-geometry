const prompt = require ("prompt-sync")({ sigint : true })
console.log(" +-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-+ ")
console.log(" | KALKULATOR SEPEREMPAT LINGKARAN | ")
console.log(" +-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-+ ")
let r = Number(prompt("Jari_jari    : "))
let luas = 1/4 * Math.PI * (r ** 2)
let keliling = 1/4 * (2 * Math.PI * r) + 2 * r
console.log(`
Luas        : ${luas.toFixed(2)}_cm
Keliling    : ${keliling.toFixed(2)}_cm2`)