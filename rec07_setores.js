const entrada = require("readline-sync")

const setores = []

for (let i = 0; i <=5; i++) {
    const nomes = entrada.question(`Digite o nome do setor ${i+1}: `)
    setores.push(nomes)
}

console.log("=== LISTA DE SETORES DA FABRICA ===")

for (let i = 0; i < setores.length; i++) {
    console.log(`${i+1} - ${setores[i]}`)
}