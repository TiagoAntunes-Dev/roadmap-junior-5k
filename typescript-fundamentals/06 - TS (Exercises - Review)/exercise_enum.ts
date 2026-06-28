// O seu sistema tem contas de usuários. Atualmente, o status da conta é salvo como strings soltas: "ATIVO", "INATIVO" ou "BANIDO". Isso é perigoso, porque se outro dev digitar "ativo" (minúsculo), o sistema não reconhece.

// Sua Missão:

// Crie um enum chamado StatusUsuario contendo essas três opções.

// Crie uma variável chamada minhaConta e defina que o tipo dela é esse Enum.

// Atribua a essa variável o status de ativo usando a sintaxe do Enum (com o ponto).

enum StatusUsuario {
    Ativo,
    Inativo,
    Banido
};

const minhaConta = StatusUsuario.Ativo;

console.log(minhaConta);

