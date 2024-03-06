<script setup lang="ts">
import { Plus, ShowerHead, Stethoscope } from 'lucide-vue-next'
</script>

<template>
  <section
    class="flex min-h-screen w-full flex-col items-center justify-start gap-5 overflow-y-auto p-4 pb-20 scrollbar-hide lg:flex-row lg:justify-center lg:pb-5 dark:bg-california-500/20">
    <article
      class="flex size-full min-h-screen flex-col items-center justify-between gap-4 overflow-y-auto rounded-3xl bg-california-500/20 px-4 py-6 shadow scrollbar-hide md:min-h-max lg:w-auto">
      <UButton class="flex w-full items-center justify-center gap-2 self-end px-4 py-2 transition-all">
        <Plus class="size-4" /> Novo Agendamento
      </UButton>

     <DatePicker />

      <TheResumeCard title="Clínica" quantity="6" :icon="Stethoscope">
        <template #icon>
          <Stethoscope class="text-california-500" />
        </template>
      </TheResumeCard>

      <TheResumeCard title="Banho e Tosa" quantity="12" :icon="Stethoscope">

        <template #icon>
          <ShowerHead class="text-california-500" />
        </template>
      </TheResumeCard>

      <section class="flex h-80 min-h-60 w-full flex-col space-y-2 overflow-y-auto rounded-lg scrollbar-hide">
        <TheListSchedule v-for="n in 6" :key="n" title="Banho e Tosa" />
        <TheListSchedule v-for="n in 12" :key="n" title="Clínica" />
      </section>
    </article>

    <article class="flex size-full flex-col items-center justify-center gap-4 rounded-3xl bg-white py-10 lg:w-10/12">
      <section
        class="flex size-full flex-wrap items-start justify-evenly gap-x-2 gap-y-4 overflow-y-auto rounded-lg scrollbar-hide">
        <TheCardPet v-for="n in 22" :key="n" />
      </section>
    </article>
  </section>
</template>
