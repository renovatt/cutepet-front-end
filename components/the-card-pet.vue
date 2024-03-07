<script setup lang="ts">
import { Cat, Dog, Info, Clock } from 'lucide-vue-next'

type PetProps = {
  type: 'dog' | 'cat'
  name: string
  time: string
}

const props = defineProps<PetProps>()

</script>

<template>
  <section class="relative flex w-full items-center justify-between rounded-lg bg-white shadow-lg lg:w-60">
    <Info
      class=" absolute right-1 top-1 size-5 cursor-pointer text-california-500 transition-all hover:text-california-600" />
    <article class="flex w-full items-center justify-around gap-5 p-2 lg:justify-center">

      <figure class="grid size-28 place-items-center rounded-full">
        <img v-if="props.type === 'cat'" src="https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg"
          class="size-24 rounded-full border bg-california-500 object-cover shadow-md">
        <img v-else src="https://cdn2.thedogapi.com/images/S17ZilqNm_1280.jpg"
          class="size-24 rounded-full border bg-california-500 object-cover shadow-md">
      </figure>

      <section class="flex size-20 flex-col items-center justify-center gap-4">
        <section class="flex w-full flex-col items-start justify-between gap-2">
          <span class="flex items-center justify-center gap-2 text-gray-400">
            <Cat v-if="props.type === 'cat'" class="size-5 text-california-500" />
            <Dog v-else class="size-5 text-california-500" />
            <p class="text-xs font-bold text-california-950">{{ props.name }}</p>
          </span>

          <span class="flex items-center justify-center gap-2 text-gray-400">
            <Clock class="size-5 text-california-500" />
            <p class="text-xs font-bold text-california-950">{{ props.time }}</p>
          </span>
        </section>
      </section>
    </article>
  </section>
</template>
