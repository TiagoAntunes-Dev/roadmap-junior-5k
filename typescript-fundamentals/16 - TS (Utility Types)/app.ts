// Utility Types (Tipos Utilitários)

// A Lógica: Ferramentas nativas para transformar interfaces grandes sem precisar duplicar código.

// Exemplo:

// A nossa interface base
interface Jogo {
    id: string;
    titulo: string;
    genero: string;
    horasJogadas: number;
}

// ==========================================

// 1. PARTIAL: Transforma tudo em opcional
// Útil para um endpoint de "Atualizar" onde você manda só o que quer alterar
type AtualizarJogo = Partial<Jogo>; 
const update: AtualizarJogo = { horasJogadas: 120 }; 

// 2. READONLY: Trava o objeto
const jogoSalvo: Readonly<Jogo> = { 
    id: "1", titulo: "The Witcher", genero: "RPG", horasJogadas: 50 
};
// jogoSalvo.titulo = "Outro"; // O compilador apita ERRO! Não deixa alterar.

// 3. RECORD: Cria um Dicionário / Hash Map (Chave = string, Valor = Jogo)
const bibliotecaDeJogos: Record<string, Jogo> = {
    "ps5-01": { id: "1", titulo: "Elden Ring", genero: "RPG", horasJogadas: 90 },
    "pc-02": { id: "2", titulo: "Hollow Knight", genero: "Ação", horasJogadas: 30 }
};

// 4. PICK: Pinça APENAS os campos selecionados
type ResumoJogo = Pick<Jogo, "titulo" | "genero">;
const resumo: ResumoJogo = { titulo: "Sekiro", genero: "Ação" };

// 5. OMIT: Traz tudo, MAS REMOVE os campos selecionados
// Útil para um formulário de cadastro, onde o 'id' ainda não existe
type NovoJogo = Omit<Jogo, "id">;
const cadastrar: NovoJogo = { titulo: "Cyberpunk 2077", genero: "RPG", horasJogadas: 0 };

// 6. EXCLUDE: Remove tipos de uma união
type Genero = "RPG" | "Ação" | "Aventura" | "Esporte";
type GeneroSemEsporte = Exclude<Genero, "Esporte">; // "RPG" | "Ação" | "Aventura"