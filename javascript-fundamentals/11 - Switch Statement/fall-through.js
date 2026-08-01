// ------------------------------------------------------------
// Fall-through PROPOSITAL (usado às vezes, de forma intencional)
// ------------------------------------------------------------
// Quando vários cases devem ter o MESMO resultado, dá pra "empilhar"
// os cases sem break entre eles:
function classificarMes(mes) {
  switch (mes) {
    case 12:
    case 1:
    case 2:
      return "Verão"; // dezembro, janeiro OU fevereiro caem aqui
    case 3:
    case 4:
    case 5:
      return "Outono";
    case 6:
    case 7:
    case 8:
      return "Inverno";
    case 9:
    case 10:
    case 11:
      return "Primavera";
    default:
      return "Mês inválido";
  }
}
console.log(classificarMes(1)); // "Verão"
console.log(classificarMes(7)); // "Inverno"