const prompt = require('prompt-sync')();
var array_tapetes = [];

do {
  console.log("Sistema de Cadastro de Tapetes");
  console.log("1 - Inserir Tapete");
  console.log("2 - Excluir Tapetes");
  console.log("3 - Listar Tapetes");
  console.log("0 - Sair");

  var opcao = prompt("Digite sua opção: ");

  if (opcao == 1) {
    console.log("\n\nInserindo Tapete...\n");
    let codigo = parseInt(prompt("Digite o código: "));
    let marca = prompt("Digite a marca: ");
    let comprimento = prompt("Digite o comprimento: ");
    let largura = prompt("Digite a largura: ");
    let material = prompt("Digite o material: ");

    // Neste trecho estamos declarando um objeto
    const tapete = {
      codigo,
      marca,
      comprimento,
      largura,
      material
    }
    // Chamar a função inserir
    inserir_tapete(tapete);
  } else if (opcao == 2) {
    console.log("\n\nExcluindo Tapete...\n");
    let codigo = prompt("Digite o código do tapete: ");
    // Chamar a função excluir
    excluir_tapete(codigo)
  } else if (opcao == 3) {
    console.log("\n\nListando tapete...\n");
    // Chamar a função listar
    listar_tapete()
  } else {
    console.log("\n\nSaindo do programa...\n");
  }

  prompt("\nEnter para continuar...");
  console.clear();
} while (opcao != 0)


function inserir_tapete(tapete) {
  // Implementar corpo da função
  array_tapetes.push(tapete);
}

function excluir_tapete(codigo) {
  // Implementar corpo da função
  for (tapete of array_tapetes) {
    if (tapete.codigo === codigo) {
      index = array_tapetes.IndexOf(tapete)
      var novoArray = array_tapetes.splice(index, 1)
    }
  }
  return console.log(novoArray)
}

function listar_tapete() {
  // Implementar corpo da função
  console.log(array_tapetes)
}