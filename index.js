const prompt = require('prompt-sync')();
let ocorrencias = {}

let historia = prompt("Fale sua historia: ").trim().replace(",", "").replaceAll(".", "").split(" ");

console.log(`Existem ${historia.lenth} palavra nesdta historia: `)

historia.forEach(function (palavra) {
    if (ocorrencias[palavra]) {
        ocorrencias[palavra]++
    } else {
        ocorrencias[palavra] = 1
    }
})

let palavras = Object.entries(ocorrencias)

let maiorOcorrencia = palavras[0]

for (let palavra of palavras)
    if (palavra[1] > maiorOcorrencia[1])
        maiorOcorrencia = palavra

