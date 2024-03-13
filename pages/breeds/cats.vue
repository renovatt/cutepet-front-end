<script setup lang="ts">
import { Cat } from 'lucide-vue-next'

const { breeds: cats, error, pending } = useCatBreeds()

</script>

<template>
  <section class="flex min-h-screen w-full flex-col items-center justify-start gap-4 bg-white p-2">
    <article v-if="!pending"
      class="grid gap-4 overflow-y-auto pb-16 scrollbar-hide md:grid-cols-2 md:pb-0 xl:grid-cols-3">
      <card-cat-breed v-for="breed in cats" :key="breed.id" :name="breed.name" :affection_level="breed.affection_level"
        :energy_level="breed.energy_level" :intelligence="breed.intelligence" :life_span="breed.life_span"
        :image="breed.image" />
    </article>

    <article v-else class="flex h-screen">
      <div class="flex flex-col items-center justify-center">
        <Cat class="animate-bounce text-primary" />
        <span class="animate-pulse">Carregando...</span>
      </div>
    </article>
    <span v-show="error">{{ error?.message }}</span>
  </section>
</template>
