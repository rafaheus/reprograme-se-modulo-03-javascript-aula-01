const prompt = require('prompt-sync')();

const x = parseFloat(prompt("Digite o valor do primeiro lado: "))
const y = parseFloat(prompt("Digite o valor do segundo lado: "))
const z = parseFloat(prompt("Digite o valor do terceiro lado: "))

if (x + y < z && x + z < y && y + z < x){
    console.log("Não é possível formar um triângulo com essas medidas");
} else {
    if (x === y && y === z){
        console.log("Este é um triângulo equilátero")
    } else if (x === y || y === z || x === z) {
        console.log("Este um triângulo isósceles")
    } else {
        console.log("Este um triângulo escaleno")
    }
}