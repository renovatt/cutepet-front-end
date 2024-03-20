<script setup lang="ts">
import { Dog } from 'lucide-vue-next'

const { breeds: dogs, error, pending } = useDogBreeds()

</script>

<template>
  <section class="flex min-h-screen w-full flex-col items-center justify-start gap-4 bg-white p-2">
    <article v-if="!pending"
      class="grid gap-4 overflow-y-auto pb-16 scrollbar-hide md:grid-cols-2 md:pb-0 xl:grid-cols-3">
      <card-breed-dog v-for="breed in dogs" :key="breed.id" :name="breed.name" :life_span="breed.life_span"
        :image="breed.image" :temperament="breed.temperament" />
    </article>

    <the-loader v-else>
      <template #icon>
        <Dog class="size-10 animate-bounce text-primary" />
      </template>
      <template #title>
        <span class="animate-pulse text-muted-foreground">Carregando..</span>
      </template>
    </the-loader>
    <span v-show="error">{{ error?.message }}</span>
  </section>
</template>
