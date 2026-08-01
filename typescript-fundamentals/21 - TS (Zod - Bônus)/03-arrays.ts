/*
  Exercício 3: Arrays e Validações Aninhadas
  Crie um esquema para validar um carrinho de compras e sua lista de produtos.
  
  Regras do Carrinho:
  - client ID: Deve ser uma string no formato UUID.
  - products: Deve ser um array contendo os produtos.
  
  Regras do Produto (dentro do array):
  - nome: String com no mínimo 3 caracteres.
  - preço: Número positivo maior que zero.
  - quantidade: Número inteiro positivo maior que zero.
  - categorias: Array de strings contendo pelo menos 1 categoria.
*/

import { z } from 'zod'

const cartSchema = z.object({
    clientId: z.string().uuid(),
    products: z.array(z.object({
        name: z.string().min(3),
        price: z.number().min(1),
        qtd: z.number().min(1),
        categories: z.array(z.string()).min(1)
    }))
})

const cart = {
    clientId: crypto.randomUUID(),
    products: [
        {
            name: "Laptop Gamer Ryzen 9",
            price: 2000,
            qtd: 1,
            categories: ["Laptop", "Ryzen", "GOAT"]
        }
    ]
}

console.log(cartSchema.safeParse(cart))