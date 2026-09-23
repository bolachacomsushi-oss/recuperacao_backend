const entrada = require('readline-sync')

const ferramentas = [];

for (let i = 0; i<=3; i++){
    const ferra = {
        nome: entrada.question(`Digite o nome da ferramenta ${i+1}: `),
        quantidade: entrada.questionInt(`Digite a quantidade da ferramenta ${i+1}: `),
        minimo: entrada.questionInt(`Digite a quantidade minima da ferramenta ${i+1}: `)
    };
    console.log("=".repeat(20))
    ferramentas.push(ferra);

}

console.log("--- RELATORIO DE ESTOQUE ---");

for (let i = 0; i < ferramentas.length; i++){
    const produto = ferramentas[i];

    let situacao;
    if (produto.quantidade < produto.minimo){
        situacao = "REPOR ESTOQUE";
    }else{
        situacao = "ESTOQUE SUFICIENTE";
    }
    console.log(`Material: ${produto.nome}`);
    console.log(`Quantidade: ${produto.quantidade}`);
    console.log(`Estoque Minimo: ${produto.minimo}`);
    console.log(`Situacao: ${situacao}`);
    console.log("-".repeat(20));
}