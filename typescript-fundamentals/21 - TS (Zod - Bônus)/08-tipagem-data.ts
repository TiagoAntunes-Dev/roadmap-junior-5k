/*
  Exercício 6: Tipagem de Dados (Bônus final do vídeo)
  Crie um esquema Zod qualquer (pode usar o de usuário) e utilize os recursos de 
  inferência da biblioteca para gerar os tipos TypeScript automaticamente.
  
  Regras:
  - Gerar o tipo padrão de saída utilizando z.infer.
  - Obter o tipo dos dados de entrada utilizando z.input.
  - Obter o tipo dos dados de saída utilizando z.output.
  - Extrair a tipagem de uma propriedade específica (ex: pegar apenas o tipo do 
    username de dentro do esquema).
*/


import { z } from 'zod'

// Uso um transform de propósito, assim o tipo de ENTRADA
// e o tipo de SAÍDA ficam diferentes - fica mais fácil ver
// a diferença entre z.input e z.output na prática.
const userSchema = z.object({
    username: z.string().min(3),
    email: z.string().email(),
    birthYear: z.number(),
    isAdmin: z.boolean().optional()
}).transform(user => ({
    ...user,
    // calculado durante o parse -> só existe na SAÍDA, não na entrada
    age: new Date().getFullYear() - user.birthYear
}))

// 1) z.infer -> tipo padrão (por convenção, é um alias de z.output)
type User = z.infer<typeof userSchema>

// 2) z.input -> tipo de como os dados PRECISAM chegar (antes do transform)
type UserInput = z.input<typeof userSchema>

// 3) z.output -> tipo de como os dados SAEM (depois do transform)
type UserOutput = z.output<typeof userSchema>

// 4) Extraindo o tipo de uma propriedade específica (username)
//    Pego direto do shape interno do objeto, antes do transform
type Username = z.infer<typeof userSchema>['username']

// --- Provas de que os tipos batem com a realidade ---

// UserInput NÃO tem "age" (ainda não existe, só depois do transform)
const inputExample: UserInput = {
    username: "tiago_dev",
    email: "tiago@email.com",
    birthYear: 1998,
    isAdmin: true
}

// UserOutput TEM "age" (foi adicionado pelo transform)
const outputExample: UserOutput = {
    username: "tiago_dev",
    email: "tiago@email.com",
    birthYear: 1998,
    isAdmin: true,
    age: 27
}

const usernameExample: Username = "tiago_dev"

// --- Teste em runtime ---
const result = userSchema.safeParse(inputExample)
console.log(result)