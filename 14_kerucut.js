const prompt = require ("prompt-sync")({ sigint: true })
console.log(" +-=-=-=-=-=-=-=-=-=-=+ ")
console.log(" | KALKULATOR KERUCUT | ")
console.log(" +-=-=-=-=-=-=-=-=-=-=+ ")
let r = Number(prompt("Jari_jari        : "))
let t = Number(prompt("Tinggi_kerucut   : "))

//garis pelukis
let sw = (r ** 2) + (t ** 2)
let s = Math.sqrt(sw)

let lp = Math.PI * (r ** 2) + Math.PI * r * s
let V =  1/3 * Math.PI * (r ** 2) * t
console.log(`
Lp      : ${lp}_cm2
Volume  : ${V}_cm3`)
