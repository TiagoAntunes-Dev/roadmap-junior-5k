// Discriminated Union (União Discriminada) - É uma forma de criar tipos que podem ser diferenciados por uma propriedade comum, permitindo que o TypeScript saiba qual tipo específico está sendo usado com base no valor dessa propriedade.


// Note a propriedade 'status' com valores literais e únicos em cada tipo

type PagamentoAprovado = { status: "sucesso"; transacaoId: string }; 
// A propriedade 'status' é a chave discriminante

type PagamentoRecusado = { status: "erro"; motivo: string };
// A propriedade 'status' é a chave discriminante

type PagamentoPendente = { status: "processando"; tempoEstimado: number };
// A propriedade 'status' é a chave discriminante

type ResultadoPagamento = PagamentoAprovado | PagamentoRecusado | PagamentoPendente;

function exibirMensagem(resultado: ResultadoPagamento) {
    // O Switch atua como a Discriminação Perfeita analisando o 'status'
    switch (resultado.status) {
        case "sucesso":
            // O TS sabe que a variável 'transacaoId' só existe aqui!
            console.log(`Sucesso! ID: ${resultado.transacaoId}`);
            break;
        case "erro":
            // O TS sabe que a variável 'motivo' só existe aqui!
            console.log(`Falhou. Motivo: ${resultado.motivo}`);
            break;
            // O TS sabe que a variável 'tempoEstimado' só existe aqui!
        case "processando":
            console.log(`Aguarde ${resultado.tempoEstimado} segundos...`);
            break;
    }
}


// Exemplo de Discriminated Union
type Forma = 
  | { tipo: "circulo"; raio: number }
  | { tipo: "retangulo"; largura: number; altura: number }
  | { tipo: "triangulo"; base: number; altura: number };

// Função para calcular a área de uma forma
function calcularArea(forma: Forma): number {
  switch (forma.tipo) {
    case "circulo":
      return Math.PI * forma.raio ** 2;
    case "retangulo":
      return forma.largura * forma.altura;
    case "triangulo":
      return (forma.base * forma.altura) / 2;
    default:
      throw new Error("Forma desconhecida");
  } 
}