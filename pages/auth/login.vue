<script setup lang="ts">
import { PawPrint } from 'lucide-vue-next'

definePageMeta({
  layout: false,
  middleware: 'auth'
})
useHead({
  title: 'Login'
})
</script>

<template>
  <div>
    <ClientOnly>
      <NuxtLayout name="auth">
        <template #header>
          <header class="flex w-full max-w-80 flex-col items-start justify-center space-y-2">
            <h1 class="relative text-4xl font-bold text-primary">
              CutePet
              <PawPrint class="absolute -right-5 -top-2 size-5 text-primary" />
            </h1>
            <span class="text-muted-foreground">Seu sistema de agendamentos para Petshop</span>
          </header>
        </template>

        <template #form>
          <form-auth-login />
        </template>

        <template #footer>
          <p class="text-xs text-muted-foreground">Ainda nao tem uma conta?
            <NuxtLink to="/auth/register" class="text-primary hover:underline">
              Cadastrar
            </NuxtLink>
          </p>
        </template>
      </NuxtLayout>
    </ClientOnly>
  </div>
</template>
