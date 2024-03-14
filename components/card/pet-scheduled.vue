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
  <the-modal :is-open="isOpen" @close="isOpen = !isOpen">
    <template #title>
      Editar agendamento
    </template>

    <template #content>
      <section class="mt-2 flex flex-col items-start justify-around gap-4 rounded-lg p-4 md:flex-row">
        <form-schedule-edit />
        <card-pet-preview />
      </section>
    </template>
  </the-modal>

  <section class="relative flex w-48 items-center justify-between rounded-lg border shadow">
    <Info class=" absolute right-1 top-1 size-5 cursor-pointer text-primary/70 transition-all hover:text-primary"
      @click="isOpen = !isOpen" />
    <article class="flex w-full items-center justify-around gap-2 p-2 py-4 lg:justify-center">

      <figure class="grid size-20 place-items-center rounded-lg bg-primary-foreground">
        <img v-if="props.type === 'cat'" src="https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg"
          class="size-20 rounded-lg bg-primary object-cover">
        <img v-else src="https://cdn2.thedogapi.com/images/S17ZilqNm_1280.jpg"
          class="size-20 rounded-lg bg-primary object-cover">
      </figure>

      <section class="flex size-20 flex-col items-center justify-center gap-4">
        <section class="flex w-full flex-col items-start justify-between gap-2">
          <span class="flex items-center justify-center gap-2 text-muted-foreground">
            <Cat v-if="props.type === 'cat'" class="size-5 text-primary" />
            <Dog v-else class="size-5 text-primary" />
            <p class="text-xs font-bold text-muted-foreground">{{ props.name }}</p>
          </span>

          <span class="flex items-center justify-center gap-2 text-muted-foreground">
            <Clock class="size-5 text-primary" />
            <p class="text-xs font-bold text-muted-foreground">{{ props.time }}</p>
          </span>
        </section>
      </section>
    </article>
  </section>
</template>
