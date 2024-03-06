<script setup lang="ts">
import { Clock, ShowerHead, Stethoscope, CalendarDays } from 'lucide-vue-next'

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

</script>

<template>
  <section
    class="flex min-h-screen w-full flex-col items-center justify-start gap-4 space-y-4 overflow-y-auto bg-gray-200/10 p-4 scrollbar-hide lg:flex-row lg:justify-center lg:space-y-0">
    <article class="flex flex-col items-center justify-start rounded-lg p-2 lg:h-full lg:max-w-96">
      <section class="flex flex-wrap items-center justify-evenly gap-8">
        <the-dash-card v-for="card in cardData" :key="card.title" :title="card.title" :subtitle="card.subtitle"
          :value="card.value">
          <template #icon>
            <component :is="card.icon" class="size-5 text-california-50 md:size-10" />
          </template>
        </the-dash-card>
      </section>
    </article>

    <article class="flex size-full flex-col items-center justify-center">
      <section class="size-full overflow-y-auto rounded-lg bg-white px-4 shadow-lg scrollbar-hide">
        <FullCalendar />
      </section>
    </article>
  </section>
</template>
