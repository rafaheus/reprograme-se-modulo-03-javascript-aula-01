const prompt = require('prompt-sync')()

const a1 = parseInt(prompt('Digite o valor do primeriro ângulo: '))
const a2 = parseInt(prompt('Digite o valor do segundo ângulo: '))
const a3 = parseInt(prompt('Digite o valor do terceiro ângulo: '))

if (a1 + a2 + a3 === 180) {
    console.log('É um triângulo')
    if (a1 < 90 && a2 < 90 && a3 < 90) {
        console.log('É um triângulo actuângulo')
    } else if (a1 === 90 || a2 === 90 || a3 === 90) {
        console.log('É um triângulo retângulo')
    } else {
        console.log('É um triângulo obtusângulo')
    }
} else {
    console.log('Não é um triângulo')
}