const prompt = require ("prompt-sync")({ sigint : true })
console.log(" +-=-=-=-=-=-=-=-=-=-=-=-=-=-+ ")
console.log(" | KALKULATOR LIMAS SEGITIGA | ")
console.log(" +-=-=-=-=-=-=-=-=-=-=-=-=-=-+ ")
let a =  Number(prompt("Alas                    : "))
let ta = Number(prompt("Tinggi_alas             : "))
let t =  Number(prompt("Tinggi_limas            : "))
let s =  Number(prompt("Sisi1_alas              : "))
let ts = Number(prompt("tinggi_sisi_tegak       : "))
let lp = (1/2 * a * ta) + 3 * (1/2 * s * ts) 
let V = 1/3 * (1/2 * a * ta) * t
console.log(`
Lp          : ${lp}_cm2
Volume      : ${V}_cm3`)
