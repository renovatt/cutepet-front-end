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
    class="flex min-h-screen w-full flex-col items-center justify-between gap-10 overflow-y-auto bg-[#f5f5f5] p-4 scrollbar-hide lg:flex-row lg:justify-center lg:pb-5">
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
      class="flex size-full min-h-screen flex-col items-center justify-between space-y-8 overflow-y-auto scrollbar-hide md:min-h-max lg:max-w-96 lg:px-4">

      <v-container>
        <v-row justify="space-around">
          <DatePicker />
        </v-row>
      </v-container>

      <v-container>
        <v-row justify="center">
          <the-schedule-btn @click="isOpen = !isOpen" />
        </v-row>
      </v-container>

      <section class="flex w-full flex-wrap items-center justify-evenly gap-8">
        <the-dash-card v-for="card in cardData" :key="card.title" :title="card.title" :subtitle="card.subtitle"
          :value="card.value">
          <template #icon>
            <component :is="card.icon" class="size-5 text-california-50 md:size-10" />
          </template>
        </the-dash-card>
      </section>
    </article>

    <article class="flex size-full max-w-7xl items-center justify-center p-1">
      <section class="flex size-full flex-wrap items-start justify-start gap-4 overflow-y-auto pl-2 scrollbar-hide">
        <the-schedule-card-pet v-for="n in 18" :key="n" name="Jujuba" time="10:00h" type="cat" />
        <the-schedule-card-pet v-for="n in 28" :key="n" name="Jubileu" time="13:00h" type="dog" />
      </section>
    </article>
  </section>
</template>
