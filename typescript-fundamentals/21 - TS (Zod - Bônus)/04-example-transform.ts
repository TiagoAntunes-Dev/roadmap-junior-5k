import { z } from 'zod'

// Lista de dias válidos (já em minúsculo, sem acento, 3 letras)
const validDays = ["seg", "ter", "qua", "qui", "sex", "sab", "dom"] as const

// Mapa de acentos -> sem acento, pra normalizar antes de cortar a string
function removeAccents(str: string): string {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
}

const userSchema = z.object({
    name: z.string().min(2),
    workDays: z.array(
        z.string()
            .transform(day => removeAccents(day).slice(0, 3).toLowerCase())
            .refine(
                (day): day is typeof validDays[number] => validDays.includes(day as any),
                { message: "Dia da semana inválido" }
            )
    ).min(1, "Informe pelo menos um dia de trabalho")
})

const user = {
    name: "Tiago",
    workDays: ["Segunda", "Terca", "Quarta", "Quinta"]
}

const result = userSchema.safeParse(user)

if (result.success) {
    console.log("Válido:", result.data)
} else {
    console.log("Inválido:", result.error.format())
}