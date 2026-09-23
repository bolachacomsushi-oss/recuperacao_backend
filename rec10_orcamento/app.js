const entrada = require('readline-sync');
const funcoes = require('./funcoesOrcamento');

console.log("=== SISTEMA ORCAMENTO TECNICO ===")

const nome = entrada.question("Digite o nome do cliente: ")
const valorMaterial = entrada.questionInt("Digite o valor dos materiais: ")
const horas_servico = entrada.questionInt("Foram quantas horas de trabalho? ")

const maoObra = funcoes.calcularMaodeObra(horas_servico);
const total = valorMaterial + maoObra
const desconto = funcoes.verificarDesconto(total)

console.log("=".repeat(20))
console.log(`Cliente: ${nome}`)
console.log(`Valor materiais: R$${valorMaterial}`)
console.log(`Mao de obra: R$${maoObra}`)
console.log(`Total: R$${total}`)
console.log(`Desconto: ${desconto}`)