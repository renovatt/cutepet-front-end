<template>
  <div class="flex items-center justify-start bg-orange-400 font-bold dark:bg-black">
    <h1 class="text-red-600">
      Welcome to Nuxt 3
    </h1>
    <UButton>Click me</UButton>
    <TheThemeMode />
  </div>
</template>

<script setup lang="ts">
const test = ref(false)
</script>

<style scoped></style>
