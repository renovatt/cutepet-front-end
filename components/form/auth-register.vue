<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toast } from '@/components/ui/toast'
import { registerFormSchema } from '~/schemas/register-form'

const { handleSubmit } = useForm({
  validationSchema: registerFormSchema,
  initialValues: {
    name: 'Nest',
    email: 'nest+3@gmail.com',
    password: '12345678',
  },
})
const { signup } = useAuth()

const onSubmit = handleSubmit(async (values) => {
  try {
    const res = await signup(values)

    if (res.type === 'success') {
      toast({
        description: 'Bem vindo!',
        class: 'text-green-500',
        duration: 300
      })
      setTimeout(() => {
        useRouter().push('/dashboard')
      }, 500)
    } else if (res.type === 'error') {
      toast({
        description: res.message,
        class: 'text-red-500',
      })
    }
  } catch (err) {
    toast({
      description: 'Ocorreu um erro inesperado',
      class: 'text-red-500',
    })
  }
})

</script>

<template>
  <form class="w-full max-w-80" @submit="onSubmit">
    <div class="flex w-full flex-col items-center justify-between gap-2">
      <FormField v-slot="{ componentField }" name="name">
        <FormItem class="w-full">
          <FormLabel>Nome</FormLabel>
          <FormControl>
            <Input type="text" placeholder="Digite seu nome" v-bind="componentField" />
          </FormControl>
          <div class="h-5 w-full">
            <FormMessage />
          </div>
        </FormItem>
      </FormField>

      <FormField v-slot="{ componentField }" name="email">
        <FormItem class="w-full">
          <FormLabel>E-mail</FormLabel>
          <FormControl>
            <Input type="email" placeholder="Digite seu e-mail" v-bind="componentField" />
          </FormControl>
          <div class="h-5 w-full">
            <FormMessage />
          </div>
        </FormItem>
      </FormField>

      <FormField v-slot="{ componentField }" name="password">
        <FormItem class="w-full">
          <FormLabel>Senha</FormLabel>
          <FormControl>
            <Input type="password" placeholder="Digite sua senha" v-bind="componentField" autocomplete />
          </FormControl>
          <div class="h-5 w-full">
            <FormMessage />
          </div>
        </FormItem>
      </FormField>

      <Button type="submit" class="w-full">
        Cadastrar
      </Button>
    </div>
  </form>
</template>
