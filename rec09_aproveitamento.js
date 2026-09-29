const entrada = require("readline-sync");

console.log("=== Calculo de aproveitamento ===")

function calcularAproveitamento(util, total) {
    return (util / total) * 100;
}

function classificarAproveitamento(percentual) {
    if (percentual >= 90) {
        return "META ATINGIDA";
    } else if (percentual = 75 & percentual <= 89.99) {
        return "ADEQUADO";
    } else {
        return "REVISAR PROCESSO";
    }
}

const quantTotal = entrada.questionFloat("Quantidade total: ");
const quantUtil = entrada.questionFloat("Quantidade Util: ");

const aproveitamento = calcularAproveitamento(quantUtil, quantTotal);
const classiApro = classificarAproveitamento();

console.log("\n=== RELATÓRIO DE EFICIÊNCIA ===");
console.log(`Total: ${quantTotal}`);
console.log(`Util: ${quantUtil}`);
console.log(`Percentual: ${aproveitamento}%`);
console.log(`Classificação: ${classiApro}`);