/*
  Exercício 5: Validações Condicionais (refine)
  Crie um esquema para validar um formulário de cadastro de desenvolvedor com regras condicionais.
  
  Regras Base:
  - nome completo: String com no mínimo 5 caracteres.
  - e-mail: E-mail válido.
  - linguagem principal: String obrigatória (mínimo de 2 caracteres).
  - senioridade (level): Enum aceitando "Júnior", "Pleno" ou "Senior".
  - tempo de experiência (anos): Número obrigatório.
  - tecnologias: Array de strings (mínimo de 1 tecnologia).
  
  Regra Condicional (Refine):
  - Se a senioridade for "Senior", o desenvolvedor deve obrigatoriamente ter tempo de 
    experiência maior ou igual a 5 anos E dominar no mínimo 2 tecnologias no array.
*/

import { z } from 'zod'

const developerSchema = z.object({
    fullName: z.string().min(5, "Nome completo deve ter no mínimo 5 caracteres"),
    email: z.string().email("E-mail inválido"),
    mainLanguage: z.string().min(2, "Linguagem principal é obrigatória"),
    level: z.enum(["Júnior", "Pleno", "Senior"]),
    yearsOfExperience: z.number(),
    technologies: z.array(z.string()).min(1, "Informe ao menos uma tecnologia")
}).refine(dev => {
    if (dev.level === "Senior") {
        return dev.yearsOfExperience >= 5 && dev.technologies.length >= 2
    }
    return true
}, {
    message: "Desenvolvedor Senior precisa ter no mínimo 5 anos de experiência e dominar ao menos 2 tecnologias",
    path: ["level"]
})

// --- Testes ---

// Caso válido: Senior com 5+ anos e 2+ tecnologias
const dev1 = {
    fullName: "Tiago Antunes",
    email: "tiago@email.com",
    mainLanguage: "TypeScript",
    level: "Senior",
    yearsOfExperience: 6,
    technologies: ["Node.js", "Angular"]
}

// Caso inválido: Senior mas só 1 tecnologia
const dev2 = {
    fullName: "Maria Silva",
    email: "maria@email.com",
    mainLanguage: "JavaScript",
    level: "Senior",
    yearsOfExperience: 6,
    technologies: ["React"]
}

// Caso válido: Pleno não precisa bater os requisitos do Senior
const dev3 = {
    fullName: "João Souza",
    email: "joao@email.com",
    mainLanguage: "Python",
    level: "Pleno",
    yearsOfExperience: 2,
    technologies: ["Django"]
}

console.log("dev1:", developerSchema.safeParse(dev1))
console.log("dev2:", developerSchema.safeParse(dev2))
console.log("dev3:", developerSchema.safeParse(dev3))