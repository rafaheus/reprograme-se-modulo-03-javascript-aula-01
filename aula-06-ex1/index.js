const prompt = require('prompt-sync')();

const salarioBruto = parseInt(prompt("Digite seu salário bruto: "));

const imposto_de_renda =  parseInt(prompt("Digite seu salário bruto: "));

const salarioLiquido = salarioBruto - imposto_de_renda;

console.log("Salário líquido: R$", salarioLiquido);