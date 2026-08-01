// switch é uma alternativa ao if/else if quando você está comparando
// UMA mesma variável contra VÁRIOS valores possíveis específicos.

const diaDaSemana = 3;
let nomeDia;

switch (diaDaSemana) {
  case 1:
    nomeDia = "Domingo";
    break; // break impede que o código "caia" para o próximo case
  case 2:
    nomeDia = "Segunda-feira";
    break;
  case 3:
    nomeDia = "Terça-feira";
    break;
  case 4:
    nomeDia = "Quarta-feira";
    break;
  case 5:
    nomeDia = "Quinta-feira";
    break;
  case 6:
    nomeDia = "Sexta-feira";
    break;
  case 7:
    nomeDia = "Sábado";
    break;
  default:
    // default roda quando NENHUM case bate — equivalente ao "else" final
    nomeDia = "Dia inválido";
}
console.log(nomeDia); // "Terça-feira"

// ------------------------------------------------------------
// switch usa === (igualdade ESTRITA) para comparar os valores
// ------------------------------------------------------------
const valor = "3";
switch (valor) {
  case 3: // number 3
    console.log("bateu com number 3");
    break;
  case "3": // string "3"
    console.log("bateu com string 3");
    break;
  default:
    console.log("nenhum bateu");
}
// Resultado: "bateu com string 3" -> porque switch(valor) compara
// com === e valor aqui é a string "3", não o number 3