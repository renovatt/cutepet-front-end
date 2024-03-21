<script setup lang="ts">
import { h } from 'vue'
import { useForm } from 'vee-validate'

import { toast } from '@/components/ui/toast'
import { registerUpdateFormSchema } from '~/schemas/register-update-form'

const { handleSubmit } = useForm({
  validationSchema: registerUpdateFormSchema,
  initialValues: {
    username: 'Jubileu',
    email: 'jubileu@gmail.com',
  }
})

const onSubmit = handleSubmit((values) => {
  console.log(values)
  toast({
    title: 'You submitted the following values:',
    description: h('pre', { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' }, h('code', { class: 'text-white' }, JSON.stringify(values, null, 2)))
  })
})

</script>

<template>
  <form class="w-full max-w-80" @submit="onSubmit">
    <div class="flex w-full flex-col items-center justify-between gap-2">
      <FormField v-slot="{ componentField }" name="username">
        <FormItem class="w-full">
          <FormLabel>Nome</FormLabel>
          <FormControl>
            <Input type="text" placeholder="Digite seu nome" v-bind="componentField" autocomplete />
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
            <Input type="email" placeholder="Digite seu e-mail" v-bind="componentField" autocomplete />
          </FormControl>
          <div class="h-5 w-full">
            <FormMessage />
          </div>
        </FormItem>
      </FormField>

      <FormField v-slot="{ componentField }" name="password">
        <FormItem class="w-full">
          <FormLabel>Nova senha</FormLabel>
          <FormControl>
            <Input type="password" placeholder="Digite sua senha" v-bind="componentField" autocomplete />
          </FormControl>
          <div class="h-5 w-full">
            <FormMessage />
          </div>
        </FormItem>
      </FormField>

      <FormField v-slot="{ componentField }" name="confirm_password">
        <FormItem class="w-full">
          <FormLabel>Confirmar nova senha</FormLabel>
          <FormControl>
            <Input type="password" placeholder="Digite sua senha" v-bind="componentField" autocomplete />
          </FormControl>
          <div class="h-5 w-full">
            <FormMessage />
          </div>
        </FormItem>
      </FormField>

      <Button type="submit" class="w-full">
        Atualizar
      </Button>
    </div>
  </form>
</template>
