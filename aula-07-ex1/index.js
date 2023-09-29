const prompt = require('prompt-sync')()

const nome = prompt("Digite seu nome: ")
const nota1 = parseFloat(prompt("Digite a primeira nota: "))
const nota2 = parseFloat(prompt("Digite a segunda nota: "))
const nota3 = parseFloat(prompt("Digite a terceira nota: "))

media = (nota1 + nota2 + nota3) / 3

if (media >= 6) {
    console.log("Aprovado")
} else {
    console.log("Reprovado")
}