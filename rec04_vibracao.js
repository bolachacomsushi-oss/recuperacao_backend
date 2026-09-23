const entrada = require(`readline-sync`)

console.log("=== CLASSIFICACAO DE VIBRACAO ===")

const vibracao = entrada.questionFloat("Qual o valor da vibracao? ")

if (vibracao <= 3) {
    console.log(`A vibracao esta em ${vibracao.toFixed(2)} e esta ESTAVEL`)
} else if (vibracao <=6) {
    console.log(`A vibracao esta em ${vibracao.toFixed(2)} e exibe ATENCAO`)
} else {
    console.log(`A vibracao esta em ${vibracao.toFixed(2)} e esta CRITICA`)
} 