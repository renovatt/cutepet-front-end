import { z } from 'zod'
import { toTypedSchema } from '@vee-validate/zod'

export const scheduleFormSchema = toTypedSchema(z.object({
  id: z.string().optional(),
  userId: z.string().optional(),
  status: z.enum(['PENDING', 'FINISHED', 'CANCELED']),
  pet: z.enum(['DOG', 'CAT']),
  petname: z.string({ required_error: 'Informe um nome' }).min(3, 'Pelo menos 3 caracteres').max(20, 'No máximo 20 caracteres'),
  observation: z.string().min(5, 'Pelo menos 5 caracteres'),
  weight: z.string(),
  age: z.string(),
  sex: z.string(),
  service: z.string(),
  time: z.string().min(1, 'Selecione um horário'),
  date: z.coerce.date({
    errorMap: () => {
      return { message: 'Informe uma data' }
    }
  }),
  breed: z.object({
    id: z.string().transform(val => val.toString()),
    name: z.string({ required_error: 'Raça não encontrada' }),
    image: z.object({
      url: z.string({ required_error: 'Imagem não encontrada' })
    }),
  }),
}))

export const scheduleSchema: typeof scheduleFormSchema = (scheduleFormSchema as typeof scheduleFormSchema)
