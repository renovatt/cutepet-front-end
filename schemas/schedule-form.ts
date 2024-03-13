import { z } from 'zod'
import { toTypedSchema } from '@vee-validate/zod'

export const scheduleFormSchema = toTypedSchema(z.object({
  petname: z.string().min(3, 'Pelo menos 3 caracteres').max(50),
  obs: z.string().min(5, 'Pelo menos 5 caracteres'),
  weight: z.string(),
  age: z.string(),
  time: z.string().min(1, 'Selecione um horário'),
  sex: z.string().min(1, 'Selecione'),
  date: z.coerce.date({
    errorMap: () => {
      return { message: 'Informe uma data' }
    }
  }),
  breed: z.object({
    id: z.string().transform(val => val.toString()),
    name: z.string(),
    image: z.object({
      url: z.string()
    }),
    reference_image_id: z.string(),
  }),
}))

export const PetProps: typeof scheduleFormSchema = (scheduleFormSchema as typeof scheduleFormSchema)
