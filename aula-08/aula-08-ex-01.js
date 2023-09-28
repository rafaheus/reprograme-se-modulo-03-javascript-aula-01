const prompt = require('prompt-sync')();

const nome = prompt("Digite seu nome: ");
const salarioBruto = parseFloat(prompt("Digite seu salário bruto: "));
const dependentes = parseInt(prompt("Digite o número de dependentes: "));

const rendaPerCapta = salarioBruto / dependentes + 1;

let ir = 0

if (rendaPerCapta < 500) {
    console.log(`${nome}, você está isento de pagar imposto de renda.`)
} else {
    if (salarioBruto <= 1983.98) {
        ir = salarioBruto * 5/100
   } else if (salarioBruto <= 2826.65) {
        ir = salarioBruto * 7.5/100
   } else {
        ir = salarioBruto * 15/100
   }
}

const salarioLiquido = salarioBruto - ir

console.log(`${nome}, seu salário líquido é de R$${salarioLiquido}`)