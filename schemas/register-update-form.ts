import { z } from 'zod'
import { toTypedSchema } from '@vee-validate/zod'

export const registerUpdateFormSchema = toTypedSchema(z.object({
  username: z.string({ required_error: 'Campo obrigatório' }).min(3, 'Pelo menos 3 caracteres').max(50),
  email: z.string({ required_error: 'Campo obrigatório' }).email('Informe um email válido'),
  password: z.string({ required_error: 'Campo obrigatório' }).min(8, 'Pelo menos 8 caracteres').max(50),
  confirm_password: z.string({ required_error: 'Campo obrigatório' })
})
  .refine(fields => fields.password === fields.confirm_password, {
    path: ['confirm_password'],
    message: 'A senhas não correspondem'
  })
)

export const PetProps: typeof registerUpdateFormSchema = (registerUpdateFormSchema as typeof registerUpdateFormSchema)
