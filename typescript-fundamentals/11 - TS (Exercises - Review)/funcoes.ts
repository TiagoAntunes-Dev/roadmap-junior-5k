// O Desafio:

// Crie um Type Alias (um apelido) chamado CalculoDesconto. Essa tipagem deve ditar a regra de uma função que recebe um preco (number) e retorna um number.

// Crie uma função normal chamada processarCheckout. Ela deve receber dois parâmetros: o precoTotal da compra e uma função de desconto (que deve obrigatoriamente usar o tipo CalculoDesconto que você criou).

// Crie duas funções separadas que respeitem essa regra: uma descontoPix (tira 10%) e uma descontoFidelidade (tira 5 reais fixos).

// Rode um console.log chamando o processarCheckout passando o preço e a função de desconto.

// ==========================================
// O MOTOR DE DESCONTOS (Callbacks em TypeScript)
// ==========================================

// 1. A NOSSA REGRA (O Type Alias)
// Dúvida resolvida: Em vez de espalhar `(preco: number) => number` por todo o código, 
// criamos um "apelido". Isso é um contrato dizendo: "Qualquer função de desconto no 
// sistema precisa receber um número e devolver um número".
type CalcularDesconto = (preco: number) => number;


// 2. A FUNÇÃO PRINCIPAL (O Caixa da Loja)
// Dúvida resolvida: Por que não usamos "if"? 
// Porque aplicamos a "Inversão de Controle". Essa função é cega. Ela não quer saber 
// qual é o desconto. Ela só pega o valor da compra (precoTotal) e joga para dentro 
// da ferramenta matemática (desconto) que o sistema entregar para ela.
function processarCheckout(precoTotal: number, desconto: CalcularDesconto): number {
    // Pegamos a função "desconto", ativamos com os () e injetamos o preço dentro dela
    return desconto(precoTotal);
}


// 3. AS FERRAMENTAS (Funções de Desconto Isoladas)
// Dúvida resolvida: A matemática precisa abater o valor, e não apenas multiplicar 
// cegamente. O TypeScript aceita essas funções porque a estrutura delas (entra número, 
// sai número) bate perfeitamente com a regra do nosso Type Alias.

function descontoPix(precoTotal: number): number {
    return (precoTotal * 0.9); // Retorna os 90% do valor (10% de desconto)
}

function descontoFidelidade(precoTotal: number): number {
    return (precoTotal - 5);   // Subtrai 5 reais fixos
}


// ==========================================
// 4. TESTANDO AS FUNÇÕES
// ==========================================

// Teste Isolado: Aqui estamos testando se a matemática das funções funciona sozinha.
// Colocamos os () logo depois do nome porque queremos que ela execute AGORA.
console.log(descontoPix(10)); // Saída: 9
console.log(descontoFidelidade(21)); // Saída: 16

// Testando com o Motor Principal (A Mágica do Callback):
// Dúvida resolvida: Note que passamos `descontoPix` SEM os parênteses! 
// Se colocássemos descontoPix(), ela executaria na mesma hora.
// Sem os parênteses, estamos entregando a "ferramenta" intacta na mão 
// do processarCheckout, para ele usar só quando for a hora certa.
console.log(processarCheckout(100, descontoPix)); 
// Saída esperada: 90

console.log(processarCheckout(100, descontoFidelidade)); 
// Saída esperada: 95