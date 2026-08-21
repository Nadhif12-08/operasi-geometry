const prompt = require("prompt-sync") ({ sigint: true })
console.log(" +-=-=-=-=-=-=-=-=-=+ ")
console.log(" | KALKULATOR LIMAS | ")
console.log(" +-=-=-=-=-=-=-=-=-=+ ")
let s = Number(prompt("Sisi_alas          : "))
let t = Number(prompt("Tinggi_limas       : "))
let a = Number(prompt("Tinggi_sisi_tegak  : "))
let lp = (s ** 2) + 4 * (1/2 * s * a)
let V = 1/3 * (s ** 2) * t
console.log(`
Lp      : ${lp}_cm2
Volume  : ${V}_cm3`)
