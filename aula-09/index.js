
const prompt = require('prompt-sync')();




for ( i = 1; i <= 5; i++ ) {
    console.log("Pessoa", i)
    idade = parseInt(prompt("Digite sua idade: "));
    tempo = parseInt(prompt("Digite seu tempo de serviço: "));
    salario = parseFloat(prompt("Digite seu salário: "));
    let aposentadoria = 0

if ((idade >= 65) || (tempo > 30) || (idade > 60 && tempo >= 25)) {
  console.log("Você pode se aposentar!")
  if (tempo > 20) {
    aposentadoria = salario * 80 / 100
    if (aposentadoria > 7087.22) {
      aposentadoria = 7087.22
    } else if (aposentadoria < 1212.00) {
      aposentadoria = 1212.00
    }
    console.log(`Seu salário de aposentado será: ${aposentadoria}`)
  } else {
    aposentadoria = salario * 60 / 100
    if (aposentadoria > 7087.22) {
      aposentadoria = 7087.22
    } else if (aposentadoria < 1212.00) {
      aposentadoria = 1212.00
    }
    console.log(`Seu salário de aposentado será: ${aposentadoria}`)
  }
} else {
  console.log("Você não pode se aposentar!")
}

if (aposentadoria > 7087.22) {
  aposentadoria = 7087.22
} else if (aposentadoria < 1212.00) {
  aposentadoria = 1212.00
}
}