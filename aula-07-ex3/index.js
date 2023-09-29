const prompt = require('prompt-sync')()

const nome = prompt("Digite seu nome: ")
const valorCompraTotal = parseFloat(prompt("Digite o valor total da compra: "))
let valorComDesconto = 0 

if (valorCompraTotal < 1000) {
    desconto = valorCompraTotal * 5/100
    valorComDesconto = valorCompraTotal - desconto
    console.log(`${nome}, você recebeu 5% de desconto na sua compra, você terá que pagar apenas ${valorComDesconto}. Tenha um ótimo dia.`)
} else if (valorCompraTotal <= 5000) {
    desconto = valorCompraTotal * 10/100
    valorComDesconto = valorCompraTotal - desconto
    console.log(`${nome}, você recebeu 10% de desconto na sua compra, você terá que pagar apenas ${valorComDesconto}. Tenha um ótimo dia.`)
} else {
    desconto = valorCompraTotal * 15/100
    valorComDesconto = valorCompraTotal - desconto
    console.log(`${nome}, você recebeu 15% de desconto na sua compra, você terá que pagar apenas ${valorComDesconto}. Tenha um ótimo dia.`)
}