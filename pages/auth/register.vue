<script setup lang="ts">
import { PawPrint } from 'lucide-vue-next'

definePageMeta({
  layout: false,
  middleware: 'auth'
})
</script>

<template>
  <NuxtLayout name="auth">
    <template #header>
      <header class="flex flex-col items-center justify-center space-y-2">
        <PawPrint class="size-10 text-primary" />
        <h1 class="text-4xl font-bold text-primary">
          CutePet
        </h1>
        <span class="text-muted-foreground">Faça uma conta e comece a usar</span>
      </header>
    </template>

    <template #form>
      <form-auth-register />
    </template>

    <template #footer>
      <p class="text-xs text-muted-foreground">Já tem uma conta?
        <NuxtLink to="/auth/login" class="text-primary hover:underline">
          Login
        </NuxtLink>
      </p>
    </template>
  </NuxtLayout>
</template>
