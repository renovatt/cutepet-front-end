<script setup lang="ts">
import { PawPrint } from 'lucide-vue-next'

definePageMeta({
  layout: false,
  middleware: 'auth'
})

onMounted(() => {
  setTimeout(() => {
    useRouter().push('/dashboard')
  }, 2000)
})

</script>

<template>
  <article class="flex h-screen items-center justify-center">
    <div class="container flex flex-col items-center justify-center gap-2">
      <PawPrint class="animate-bounce text-primary" />
      <span class="text-muted-foreground">CutePet</span>
    </div>
  </article>
</template>

<style scoped></style>
