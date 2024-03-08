<script setup lang="ts">
import { Cat, Dog, Info, Clock } from 'lucide-vue-next'

type PetProps = {
  type: 'dog' | 'cat'
  name: string
  time: string
}

const props = defineProps<PetProps>()
const { isOpen } = useToggle()

</script>

<template>
  <UModal v-model="isOpen">
    <UCard :ui="{ divide: 'divide-y divide-gray-100' }" class="bg-[#f5f5f5]">
      <template #header>
        <div class="flex items-center justify-between">
          <h3 class="text-base font-semibold leading-6 text-california-950">
            Informações sobre o Pet
          </h3>
          <UButton icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpen = !isOpen" />
        </div>
      </template>

      <section class="grid w-full place-items-center space-y-10 rounded-lg p-4">
        <the-preview-pet-card />
        <div class="w-96 rounded-lg bg-white p-4 shadow-lg">
          <the-modal-edit-form />
        </div>
      </section>
    </UCard>
  </UModal>

  <section
    class="border-primary relative flex w-full items-center justify-between rounded-lg border-2 bg-california-50 shadow-lg lg:w-60">
    <Info
      class=" absolute right-1 top-1 size-5 cursor-pointer text-california-500 transition-all hover:text-california-600"
      @click="isOpen = !isOpen" />
    <article class="flex w-full items-center justify-around gap-5 p-4 lg:justify-center">

      <figure class="shadow=md border-primary grid size-28 place-items-center rounded-full border-2 bg-white">
        <img v-if="props.type === 'cat'" src="https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg"
          class="size-24 rounded-full bg-california-500 object-cover shadow-md">
        <img v-else src="https://cdn2.thedogapi.com/images/S17ZilqNm_1280.jpg"
          class="size-24 rounded-full bg-california-500 object-cover shadow-md">
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
