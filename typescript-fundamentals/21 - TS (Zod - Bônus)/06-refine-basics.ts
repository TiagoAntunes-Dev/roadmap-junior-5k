import { z } from 'zod'

const userSchema = z.object({
    name: z.string().min(2),
    instagram: z.string()
    .url()
    .refine(url => url.includes('instagram.com'), 
    { message: 'Instagram URL must include instagram.com' })
    .optional(),
})

const user = {
    name: "Tiago",
    instagram: "https://www.instagram.com/tzagikel_ayil14/"
}

const { success, data, error } = userSchema.safeParse(user)
console.log(error)