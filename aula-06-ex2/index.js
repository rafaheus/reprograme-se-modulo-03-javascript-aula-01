//importacao prompt-sync
const prompt = require('prompt-sync')()

//entrada de dados
const modeloDoCarro = prompt("Digite o modelo do carro: ")
const numeroDeQuilometrosPercorridos = parseFloat(prompt("Digite quantos km foram percorridos: "))
const litrosGastos = parseFloat(prompt("Digite quantos litros de combustível foram gastos no percurso: "))

//processamento
const consumoDeLitros = numeroDeQuilometrosPercorridos / litrosGastos

//saida
console.log("O consumo do carro", modeloDoCarro, " é de ", consumoDeLitros, "km/litro")