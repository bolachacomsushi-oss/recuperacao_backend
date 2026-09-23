const entrada = require(`readline-sync`)

console.log("=== PROJECAO DE PRODUCAO ===")

const produtos = entrada.questionInt("Quantos produtos sao produzidos por ciclo? ")

for (let ciclo = 1; ciclo <= 12; ciclo++) {
    const acumulado = produtos * ciclo;
    console.log(`Ciclo ${ciclo}: ${acumulado} peças`);
};