const prompt = require('prompt-sync')()

const n1 = parseFloat(prompt('Digite um número: '))
const n2 = parseFloat(prompt('Digite outro número: '))

if (n1 > 0 && n2 > 0) {
    if(n1 % 2 === 0 && n2 % 2 === 0){
        console.log('Ambos os números são números pares')
    } else if (n1 % 2 !== 0 && n2 % 2 !== 0){
        console.log('Ambos os números são números ímpares')
    } else {
        console.log('Um número é par e outro ímpar')
    }
} else {
    console.log('Existe pelo menos um número 0 ou negativo')
}