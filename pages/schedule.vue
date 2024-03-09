<script setup lang="ts">
import { ShowerHead, Stethoscope } from 'lucide-vue-next'

const cardData = [
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
    class="flex size-full min-h-screen flex-col items-start justify-start gap-10 overflow-y-auto bg-[#f5f5f5] p-4 scrollbar-hide md:justify-center lg:flex-row">
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

    <article
      class="flex min-h-[90%] w-full flex-col items-center justify-center space-y-10 md:min-h-max md:justify-between lg:max-w-96">

      <the-date-picker-calendar />
      <the-schedule-btn class="lg:w-full" @click="isOpen = !isOpen" />

      <section class="flex flex-wrap items-center justify-between gap-8 py-2 lg:w-full">
        <the-dash-card v-for="card in cardData" :key="card.title" :title="card.title" :subtitle="card.subtitle"
          :value="card.value">

          <template #icon>
            <component :is="card.icon" class="size-5 text-california-50 md:size-10" />
          </template>
        </the-dash-card>
      </section>
    </article>

    <article class="flex size-full max-w-7xl items-center justify-center">
      <section
        class="flex size-full flex-wrap items-start justify-center gap-4 overflow-y-auto pb-14 scrollbar-hide md:justify-start md:pb-4">
        <the-schedule-card-pet v-for="n in 18" :key="n" name="Jujuba" time="10:00h" type="cat" />
        <the-schedule-card-pet v-for="n in 28" :key="n" name="Jubileu" time="13:00h" type="dog" />
      </section>
    </article>
  </section>
</template>
