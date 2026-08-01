/*
  Exercício 1: Primeiros Passos (Validação Simples)
  Crie um esquema simples para validar uma string que representará o nome de um usuário.
  
  Regras:
  - Deve ser uma string.
  - Deve ter no mínimo 3 caracteres.
  - Deve ter no máximo 20 caracteres.

  Ajuda = use z.string() e parse()
 */

import { z } from 'zod'

const userNameSchema = z.string().min(3, "Minimo de 3 Caracters!").max(20, "O limite de caracters e 20!");

console.log(userNameSchema.parse("John"));