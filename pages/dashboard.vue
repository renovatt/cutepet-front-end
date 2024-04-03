<script setup lang="ts">
import { Plus } from 'lucide-vue-next'

definePageMeta({ middleware: 'auth' })
useHead({
  title: 'Dashboard'
})

const { isOpen } = useToggle()
const { cards } = useCardsData()

</script>

<template>
  <section
    class="flex min-h-screen w-full flex-col items-center justify-between gap-10 space-y-4 overflow-y-auto p-4 scrollbar-hide lg:flex-row lg:justify-center lg:space-y-0">
    <the-modal :is-open="isOpen" @close="isOpen = !isOpen">
      <template #title>
        Agendar
      </template>

      <template #content>
        <section class="mt-2 flex flex-col items-start justify-around gap-4 rounded-lg p-4 md:flex-row">
          <form-schedule-create />
        </section>
      </template>
    </the-modal>

    <article class="flex flex-col items-center justify-start space-y-10 px-4 lg:h-full lg:max-w-96">
      <section class="flex flex-wrap items-center justify-between gap-8 py-2 lg:w-full">
        <card-schedules-data v-for="card in cards" :key="card.title" :title="card.title" :subtitle="card.subtitle"
          :value="card.value">
          <template #icon>
            <component :is="card.icon" class="size-5 text-secondary md:size-10" />
          </template>
        </card-schedules-data>
      </section>
      <Button class="w-full" @click="isOpen = !isOpen">
        <Plus class="size-6" /> Novo Agendamento
      </Button>
    </article>

    <article class="flex size-full max-w-7xl flex-col items-center justify-center p-1">
      <section class="size-full overflow-y-auto rounded-lg pb-14 scrollbar-hide">
        <calendar-custom />
      </section>
    </article>
  </section>
</template>
