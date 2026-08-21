const prompt = require("prompt-sync") ({ sigint: true })
console.log(" +-=-=-=-=-=-=-=-=-=-+ ")
console.log(" | KALKULATOR PRISMA | ")
console.log(" +-=-=-=-=-=-=-=-=-=-+ ")
let a = Number(prompt("Alas_segitiga       : "))
let ts = Number(prompt("Tinggi_segitiga     : "))
let s1 = Number(prompt("Sisi1               : "))
let s2 = Number(prompt("Sisi2               : "))
let s3 = Number(prompt("Sisi3               : "))
let t = Number(prompt("Tinggi_prisma       : "))
let lp = 2 * ( 1/2 * a * ts ) + ( s1 + s2 + s3 ) * t
let V = 1/2 * a * ts * t
console.log(`
Lp              : ${lp}_cm2
Volume          : ${V}_cm3`)
