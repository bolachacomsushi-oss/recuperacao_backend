const entrada = require('readline-sync');
console.log("=== CALCULE A MEDIA DE TEMPOS ===")

let acumulador = 0;

for (let valor = 1; valor <=6; valor++){
    const atendimento = entrada.questionFloat(`Digite quanto tempo foi o atendimento ${valor}: `);
    acumulador += atendimento;
}
const media = acumulador / 6;

console.log("--- RESULTADOS FINAL ---")
console.log(`Soma de tempos: ${acumulador}`);
console.log(`Media: ${media.toFixed(2)}`);