<!-- eslint-disable camelcase -->
<script setup lang="ts">
import type { DogBreed } from '~/composables/useDogBreeds'

const {
  name,
  life_span,
  temperament,
  reference_image_id
} = defineProps<Partial<DogBreed>>()

const lifeSpan = computed(() => life_span?.replace('years', 'anos') ?? '')

const imageUrl = ref(`https://cdn2.thedogapi.com/images/${reference_image_id}.jpg`)

const handleError = () => {
  imageUrl.value = `https://cdn2.thedogapi.com/images/${reference_image_id}.png`
}

</script>

<template>
  <section class="flex w-full max-w-96 items-start justify-center rounded-lg border p-2 shadow">
    <article class="flex flex-col items-center justify-start gap-4 p-2 md:w-full md:flex-row md:items-start">
      <figure class="size-32">
        <img :src="imageUrl" :alt="name" class="size-32 rounded-lg object-cover" @error="handleError">
      </figure>

      <section class="flex w-40 flex-col items-center justify-between gap-4">
        <section class="flex w-full flex-col items-start justify-between gap-2">
          <span class="flex items-center justify-center gap-2 text-primary">
            <span class="text-xs font-bold text-muted-foreground">Raça:</span>
            <span class="w-28 truncate text-xs font-semibold">{{ name }}</span>
          </span>

          <span class="flex items-center justify-center gap-2 text-primary">
            <span class="text-xs font-bold text-muted-foreground">Vida útil:</span>
            <span class="text-start text-xs font-semibold">{{ lifeSpan }}</span>
          </span>

          <span v-if="temperament?.length" class="flex flex-col items-start justify-center text-primary">
            <span class="text-xs font-bold text-muted-foreground">Temperamentos:</span>
            <span class="text-start text-xs font-semibold">{{ temperament }}</span>
          </span>

          <span v-else class="flex flex-col items-start justify-center text-primary">
            <span class="text-xs font-bold text-muted-foreground">Temperamentos:</span>
            <span class="text-start text-xs font-semibold">Sem informações</span>
          </span>
        </section>
      </section>
    </article>
  </section>
</template>
