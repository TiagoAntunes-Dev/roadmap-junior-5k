/*
  Exercício 2: Validações de Objetos
  Crie um esquema para validar um objeto que representa um usuário.
  
  Regras:
  - e-mail: Deve ser um e-mail válido.
  - idade: Deve ser um número com no mínimo 18 e no máximo 100.
  - apelido: É opcional. Mas, se for fornecido, deve ser uma string com no mínimo 2 caracteres.

  Dica: Use z.object() para criar um objeto com diversas propriedades
 */


import { email, z } from 'zod'

const userSchema = z.object({
    email: z.string().email("Email invalido!"),
    age: z.number().min(18).max(80),
    nickname: z.string().min(2).optional()

});


const user = {
    email: "valido@email.com",
    age: 25
}

console.log(userSchema.safeParse(user));

/* Para ver com mais detalhes seu arquivo

const {sucess, error} = userSchema.safeParse(user)
console.log(sucess) // Verifica se e bom
console.log(error) // Verifica se esta ruim


*/