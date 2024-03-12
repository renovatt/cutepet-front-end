<script setup lang="ts">
const dog = ref(false)
const cat = ref(true)

const { breeds: cats, error } = await useCatBreeds()

</script>

<template>
  <section class="flex min-h-screen w-full flex-col items-center justify-start gap-4 bg-white p-2">
    <section class="my-5 flex w-full items-center justify-around gap-4 md:ml-80 md:justify-start">
      <Button class="w-40" @click="cat = true; dog = false">
        Gatos
      </Button>
      <Button class="w-40" @click="dog = true; cat = false">
        Cachorros
      </Button>
    </section>

    <article v-show="cat" class="grid w-[80%] gap-4 overflow-y-auto pb-16 scrollbar-hide md:grid-cols-3 md:pb-0">
      <card-cat-breed v-for="breed in cats" :key="breed.id" :name="breed.name" :affection_level="breed.affection_level"
        :energy_level="breed.energy_level" :intelligence="breed.intelligence" :life_span="breed.life_span"
        :image="breed.image" />
    </article>

    <article v-show="dog" class="grid w-[80%] gap-4 overflow-y-auto pb-16 scrollbar-hide md:grid-cols-3 md:pb-0">
      <section v-for="n in 70" :key="n"
        class="flex h-40 w-full max-w-96 items-center justify-center rounded-lg border p-2 shadow md:w-96">
        <h1>Dog</h1>
      </section>
    </article>

    <span :v-show="error">{{ error?.message }}</span>
  </section>
</template>
