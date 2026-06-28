// Você assumiu o código de um "desenvolvedor preguiçoso" que usou o any para evitar erros. O seu trabalho é refatorar (reescrever) essa função para o padrão profissional usando unknown e garantindo que o código não quebre se alguém passar um texto em vez de um número.

// Código atual (ruim):


// let valorMisterioso: any = "100";

// O TypeScript deixa passar, mas na vida real isso daria um bug bizarro (1005)
//let dobro = valorMisterioso + 5; 
//console.log(dobro);

let valorMisterioso: unknown = 100;

if ( typeof valorMisterioso === "number") {
    let dobro = valorMisterioso + 5;
    console.log(dobro);
} else {
    console.log("Erro na Tipagem, estude mais, seu incompetente!")
}


// Sua Missão: Mude a tipagem para unknown. O compilador vai começar a gritar. Use a lógica do if (o segurança da porta verificando o typeof) para só permitir a soma se o valor for realmente um número. 

// Se for uma string, exiba um console.log avisando que o formato é inválido.

