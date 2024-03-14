<script setup lang="ts">
import { PawPrint } from 'lucide-vue-next'

definePageMeta({
  layout: false,
  middleware: 'auth'
})

onMounted(() => {
  setTimeout(() => {
    useRouter().push('/auth/login')
  }, 2000)
})

</script>

<template>
  <the-loader>
    <template #icon>
      <PawPrint class="size-10 animate-bounce text-primary" />
    </template>
    <template #title>
      <span class="animate-pulse text-muted-foreground">CutePet</span>
    </template>
  </the-loader>
</template>
