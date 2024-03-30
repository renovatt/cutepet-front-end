<script setup lang="ts">
import { Cat } from 'lucide-vue-next'

definePageMeta({ middleware: 'auth' })

const { breeds: cats, error, pending } = useCatBreeds()

</script>

<template>
  <section class="flex min-h-screen w-full flex-col items-center justify-start gap-4 bg-white p-2">
    <article v-if="!pending"
      class="grid gap-4 overflow-y-auto pb-16 scrollbar-hide md:grid-cols-2 md:pb-0 xl:grid-cols-3">
      <card-breed-cat v-for="breed in cats" :key="breed.id" :name="breed.name" :affection_level="breed.affection_level"
        :energy_level="breed.energy_level" :intelligence="breed.intelligence" :life_span="breed.life_span"
        :image="breed.image" />
    </article>

    <the-loader v-else>
      <template #icon>
        <Cat class="size-10 animate-bounce text-primary" />
      </template>
      <template #title>
        <span class="animate-pulse text-muted-foreground">Carregando..</span>
      </template>
    </the-loader>
    <span v-show="error">{{ error?.message }}</span>
  </section>
</template>
