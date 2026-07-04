// A Lógica: Usar a matemática de conjuntos. Union (|) significa "um OU outro". Intersection (&) significa "este E aquele", fundindo tudo.

// UNION (|) - O sistema aceita qualquer uma destas opções
type Posicao = "Atacante" | "Meio-Campo" | "Defensor" | "Goleiro";

// INTERSECTION (&) - Vamos juntar moldes diferentes
type AtletaBase = { nome: string; camisa: number };
type Estatisticas = { gols: number; assistencias: number };

// O JogadorCompleto TEM QUE TER os dados de AtletaBase E Estatisticas
type JogadorCompleto = AtletaBase & Estatisticas;

// Aplicando na prática:
const brunoFernandes: JogadorCompleto = {
    nome: "Bruno Fernandes",
    camisa: 8,
    gols: 10,
    assistencias: 15
};

// Exemplo de Union
const posicaoDoBruno: Posicao = "Meio-Campo"; // Aceita qualquer uma das opções definidas em Posicao

// Exemplo de Intersection
const jogador: JogadorCompleto = {
    nome: "Cristiano Ronaldo",
    camisa: 7,
    gols: 20,
    assistencias: 5
}; 

// Aceita todos os campos de AtletaBase e Estatisticas