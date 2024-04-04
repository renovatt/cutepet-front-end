<!-- eslint-disable camelcase -->
<script setup lang="ts">
import { Heart, Brain, Zap } from 'lucide-vue-next'
import type { CatBreed } from '~/utils/entities/cat-breeds'

const {
  name,
  affection_level,
  energy_level,
  intelligence,
  life_span,
  image
} = defineProps<Partial<CatBreed>>()

</script>

<template>
  <section class="flex w-full max-w-96 items-center justify-center rounded-lg border p-2 shadow">
    <article class="flex flex-col items-center justify-start gap-4 p-2 md:w-full md:flex-row">
      <figure class="size-32">
        <the-image-skeleton class="size-32 rounded-lg object-cover" :src="image?.url" :alt="name" />
      </figure>

      <section class="flex w-40 flex-col items-center justify-between gap-4">
        <section class="flex w-full flex-col items-start justify-between gap-2">
          <span class="flex items-center justify-center gap-2 text-primary">
            <span class="text-xs font-bold text-muted-foreground">Raça:</span>
            <span class="w-28 truncate text-xs font-semibold">{{ name }}</span>
          </span>

          <span class="flex items-center justify-center gap-2 text-primary">
            <span class="text-xs font-bold text-muted-foreground">Est. de vida:</span>
            <span class="text-start text-xs font-semibold">{{ life_span }} anos</span>
          </span>

          <span class="flex items-center justify-center gap-2 text-primary">
            <span class="text-xs font-bold text-muted-foreground">Inteligência:</span>
            <Brain v-for="n in intelligence" :key="n" class="size-3 text-primary" />
          </span>

          <span class="flex items-center justify-center gap-2 text-primary">
            <span class="text-xs font-bold text-muted-foreground">Afeição:</span>
            <Heart v-for="n in affection_level" :key="n" class="size-3 text-primary" />
          </span>

          <span class="flex items-center justify-center gap-2 text-primary">
            <span class="text-xs font-bold text-muted-foreground">Energia:</span>
            <Zap v-for="n in energy_level" :key="n" class="size-3 text-primary" />
          </span>
        </section>
      </section>
    </article>
  </section>
</template>
