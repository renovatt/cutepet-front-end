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

const { isOpen } = useToggle()
</script>

<template>
  <section
    class="flex min-h-screen w-full flex-col items-center justify-between gap-10 space-y-4 overflow-y-auto bg-[#f5f5f5] p-4 scrollbar-hide lg:flex-row lg:justify-center lg:space-y-0">
    <UModal v-model="isOpen">
      <UCard :ui="{ divide: 'divide-y divide-gray-100' }" class="bg-[#f5f5f5]">
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-base font-semibold leading-6 text-california-950">
              Agendamento
            </h3>
            <UButton icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpen = !isOpen" />
          </div>
        </template>

        <section class="grid w-full place-items-center space-y-14 rounded-lg p-4">
          <the-preview-pet-card />
          <div class="w-96 rounded-lg bg-white p-4 shadow-lg">
            <the-modal-create-form />
          </div>
        </section>
      </UCard>
    </UModal>
    <article class="flex flex-col items-center justify-start gap-10 rounded-lg px-4 lg:h-full lg:max-w-96">
      <section class="flex flex-wrap items-center justify-evenly gap-8">
        <the-dash-card v-for="card in cardData" :key="card.title" :title="card.title" :subtitle="card.subtitle"
          :value="card.value">
          <template #icon>
            <component :is="card.icon" class="size-5 text-california-50 md:size-10" />
          </template>
        </the-dash-card>
      </section>
      <the-schedule-btn @click="isOpen = !isOpen" />
    </article>

    <article class="flex size-full max-w-7xl flex-col items-center justify-center p-1">
      <section class="size-full overflow-y-auto rounded-lg bg-white px-4 shadow-lg scrollbar-hide">
        <FullCalendar />
      </section>
    </article>
  </section>
</template>
