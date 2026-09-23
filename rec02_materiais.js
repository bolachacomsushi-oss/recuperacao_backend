const entrada = require(`readline-sync`)

console.log("==== RELATÓRIO CUSTO DE MATERIAIS ====")
const nome = entrada.question("Digite o nome da peca: ")
const quantidade = entrada.questionInt("Digite a quantidade: ")
const preco_unitario = entrada.questionFloat("Digite o preco da peca: ")

const valorTotal = quantidade * preco_unitario

console.log("--- RESUMO FINAL ---")
console.log(`${quantidade} ${nome} a R$${preco_unitario.toFixed(2)} resultam em R$${valorTotal.toFixed(2)}`)