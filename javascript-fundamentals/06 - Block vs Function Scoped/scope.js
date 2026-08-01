// "Escopo" é a região do código onde uma variável pode ser acessada.
// A diferença entre var, let e const não é só sobre reatribuição —
// é principalmente sobre EM QUE ESCOPO elas "vivem".

// ------------------------------------------------------------
// var é FUNCTION-SCOPED (escopo de função)
// ------------------------------------------------------------
// Isso significa que `var` ignora blocos como {} de if, for, while —
// ela só respeita os limites de uma função (ou do escopo global).

function testeVar() {
  if (true) {
    var mensagem = "Declarada dentro do bloco if";
  }
  // Mesmo estando "fora" do bloco {} do if, mensagem ainda existe aqui,
  // porque var só se importa com o limite da FUNÇÃO, não do bloco.
  console.log(mensagem); // "Declarada dentro do bloco if"
}
testeVar();

// ------------------------------------------------------------
// let e const são BLOCK-SCOPED (escopo de bloco)
// ------------------------------------------------------------
// Qualquer {} (if, for, while, ou um bloco solto) cria um novo escopo.

function testeLet() {
  if (true) {
    let mensagem = "Só existe dentro deste bloco";
    console.log(mensagem); // funciona aqui dentro
  }
}
testeLet();
