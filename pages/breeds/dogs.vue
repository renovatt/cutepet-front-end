<script setup lang="ts">
const { breeds: dogs, error } = await useDogBreeds()

</script>

<template>
  <section class="flex min-h-screen w-full flex-col items-center justify-start gap-4 bg-white p-2">
    <article class="grid gap-4 overflow-y-auto pb-16 scrollbar-hide md:grid-cols-2 md:pb-0 xl:grid-cols-3">
      <card-dog-breed v-for="breed in dogs" :key="breed.id" :name="breed.name" :life_span="breed.life_span"
        :reference_image_id="breed.reference_image_id" :temperament="breed.temperament" />
    </article>
    <span v-show="error">dog:{{ error?.message }}</span>
  </section>
</template>
