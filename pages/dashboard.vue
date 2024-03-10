<script setup lang="ts">
import { Clock, ShowerHead, Stethoscope, CalendarDays, Plus } from 'lucide-vue-next'

const cardData = [
  {
    title: 'Hoje',
    value: '3',
    subtitle: 'Agendamentos',
    icon: Clock
  },
  {
    title: 'Visão Geral',
    value: '26',
    subtitle: 'Agendamentos',
    icon: CalendarDays
  },
  {
    title: 'Banho e Tosa',
    value: '22',
    subtitle: 'Agendamentos',
    icon: ShowerHead
  },
  {
    title: 'Clínica',
    value: '4',
    subtitle: 'Agendamentos',
    icon: Stethoscope
  }
]

const { isOpen } = useToggle()
</script>

<template>
  <section
    class="flex min-h-screen w-full flex-col items-center justify-between gap-10 space-y-4 overflow-y-auto bg-[#f5f5f5] p-4 scrollbar-hide lg:flex-row lg:justify-center lg:space-y-0">
    <the-modal :is-open="isOpen" @close="isOpen = !isOpen">
      <template #title>
        Agendamento
      </template>

      <template #content>
        <section class="mt-2 flex flex-col items-start justify-around gap-4 rounded-lg p-4 md:flex-row">
          <the-modal-create-form />
          <the-preview-pet-card />
        </section>
      </template>
    </the-modal>
    <article class="flex flex-col items-center justify-start gap-10 rounded-lg px-4 lg:h-full lg:max-w-96">
      <section class="flex flex-wrap items-center justify-evenly gap-8">
        <the-dash-card v-for="card in cardData" :key="card.title" :title="card.title" :subtitle="card.subtitle"
          :value="card.value">

          <template #icon>
            <component :is="card.icon" class="text-california-50 size-5 md:size-10" />
          </template>
        </the-dash-card>
      </section>
      <Button @click="isOpen = !isOpen">
        <Plus class="size-6" /> Novo Agendamento
      </Button>
    </article>

    <article class="flex size-full max-w-7xl flex-col items-center justify-center p-1">
      <section class="size-full overflow-y-auto rounded-lg bg-white px-4 shadow-lg scrollbar-hide">
        <the-custom-calendar />
      </section>
    </article>
  </section>
</template>
