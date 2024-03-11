import { z } from 'zod'
import { toTypedSchema } from '@vee-validate/zod'

export const loginFormSchema = toTypedSchema(z.object({
  username: z.string({ required_error: 'Campo obrigatório' }).min(3, 'Pelo menos 3 caracteres').max(50),
  password: z.string({ required_error: 'Campo obrigatório' }).min(8, 'Pelo menos 8 caracteres').max(50),
}))

export const PetProps: typeof loginFormSchema = (loginFormSchema as typeof loginFormSchema)
