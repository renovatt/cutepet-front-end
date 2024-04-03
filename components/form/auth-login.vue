<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toast } from '@/components/ui/toast'
import { loginFormSchema } from '~/schemas/login-form'

const { handleSubmit } = useForm({
  validationSchema: loginFormSchema
})

const isLoading = ref(false)

const { signin } = useAuth()

const onSubmit = handleSubmit(async (values) => {
  isLoading.value = true
  try {
    const res = await signin(values)

    if (res.type === 'success') {
      isLoading.value = false
      toast({
        description: 'Bem vindo!',
        class: 'text-green-500',
        duration: 300
      })
      setTimeout(() => {
        useRouter().push('/dashboard')
      }, 500)
    } else if (res.type === 'error') {
      isLoading.value = false
      toast({
        description: res.message,
        class: 'text-red-500',
      })
    }
  } catch (err) {
    isLoading.value = false
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
      <FormField v-slot="{ componentField }" name="email">
        <FormItem class="w-full">
          <FormLabel>E-mail</FormLabel>
          <FormControl>
            <Input type="text" placeholder="Digite seu e-mail" v-bind="componentField" />
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
        {{ isLoading ? 'Logando..' : 'Fazer login' }}
      </Button>
    </div>
  </form>
</template>
