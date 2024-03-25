<script setup lang="ts">
const dog = ref(false)
const cat = ref(true)

const { breeds: cats, error } = useCatBreeds()
const { breeds: dogs, error: dogError } = useDogBreeds()

</script>

<template>
  <section class="flex min-h-screen w-full flex-col items-center justify-start gap-4 bg-white p-2">
    <section class="my-5 flex w-full items-center justify-around gap-4 md:ml-80 md:justify-start">
      <Button class="w-40" @click="cat = true; dog = false">
        Gatos
      </Button>
      <Button class="w-40" @click="dog = true; cat = false">
        Cães
      </Button>
    </section>

    <article v-show="cat" class="grid gap-4 overflow-y-auto pb-16 scrollbar-hide md:grid-cols-2 md:pb-0 xl:grid-cols-3">
      <card-breed-cat v-for="breed in cats" :key="breed.id" :name="breed.name" :affection_level="breed.affection_level"
        :energy_level="breed.energy_level" :intelligence="breed.intelligence" :life_span="breed.life_span"
        :image="breed.image" />
    </article>

    <article v-show="dog" class="grid gap-4 overflow-y-auto pb-16 scrollbar-hide md:grid-cols-2 md:pb-0 xl:grid-cols-3">
      <card-breed-dog v-for="breed in dogs" :key="breed.id" :name="breed.name" :life_span="breed.life_span"
        :temperament="breed.temperament" :image="breed.image" />
    </article>

    <span v-show="error">cat:{{ error?.message }}</span>
    <span v-show="dogError">dog:{{ dogError?.message }}</span>
  </section>
</template>
