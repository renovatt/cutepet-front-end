import { z } from 'zod'
import { toTypedSchema } from '@vee-validate/zod'

export const registerFormSchema = toTypedSchema(z.object({
  name: z.string({ required_error: 'Campo obrigatório' }).min(3, 'Pelo menos 3 caracteres').max(50),
  email: z.string({ required_error: 'Campo obrigatório' }).email('Informe um email válido'),
  password: z.string({ required_error: 'Campo obrigatório' }).min(8, 'Pelo menos 8 caracteres').max(50),
}))

export const PetProps: typeof registerFormSchema = (registerFormSchema as typeof registerFormSchema)
