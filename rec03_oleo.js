const entrada = require(`readline-sync`)

console.log("=== VERIFICACAO DE NIVEL DE OLEO ===")

const nivel = entrada.questionInt("Digite o nivel de oleo em porcentagem: ")

if (nivel >= 40 & nivel <= 80) {
    console.log("O NIVEL DE OLEO ESTA NORMAL!")
} else {
    console.log("INSPECAO NECESSÁRIA")
}