/*
  Exercício 4: Transformações de Dados (transform)
  Crie um esquema para validar um pedido de pizza, onde o preço é calculado automaticamente.
  
  Regras:
  - tamanho (size): Deve aceitar apenas os valores "P", "M" ou "G" (utilizando enum).
  - sabor (flavor): String com pelo menos 3 caracteres.
  - extras: Array de strings, campo opcional.
  - preço (price): Não deve ser passado na entrada, deve ser gerado pelo transform. O cálculo é:
    - Tamanho P = R$ 20
    - Tamanho M = R$ 30
    - Tamanho G = R$ 40
    - Cada item extra no array adiciona R$ 5 ao valor total.
*/

import { z } from 'zod'

const orderSchema = z.object({
    size: z.enum(["P", "M", "G"]),
    flavor: z.string().min(3),
    extras: z.array(z.string().min(1)).optional()
    // price NÃO entra aqui - ele é calculado no transform, não recebido na entrada
}).transform(order => {

    const basePrice = {
        "P": 20,
        "M": 30,
        "G": 40
    }[order.size]

    const extraPrice = (order.extras?.length || 0) * 5

    return {
        ...order,
        price: basePrice + extraPrice
    }
})

const order = {
    size: "P",
    flavor: "Bacon com Cheddar",
    extras: ["Bacon", "Cheddar"]
}

const { success, data } = orderSchema.safeParse(order)
console.log(success, data)