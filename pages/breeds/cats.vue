<script setup lang="ts">
const { breeds: cats, error } = await useCatBreeds()

</script>

<template>
  <section class="flex min-h-screen w-full flex-col items-center justify-start gap-4 bg-white p-2">
    <article class="grid gap-4 overflow-y-auto pb-16 scrollbar-hide md:grid-cols-2 md:pb-0 xl:grid-cols-3">
      <card-cat-breed v-for="breed in cats" :key="breed.id" :name="breed.name" :affection_level="breed.affection_level"
        :energy_level="breed.energy_level" :intelligence="breed.intelligence" :life_span="breed.life_span"
        :image="breed.image" />
    </article>
    <span v-show="error">cat:{{ error?.message }}</span>
  </section>
</template>
