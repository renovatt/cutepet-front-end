<script setup lang="ts">
import { Plus, ShowerHead, Stethoscope } from 'lucide-vue-next'
</script>

<template>
  <section
    class="flex min-h-screen w-full flex-col items-center justify-start gap-5 overflow-y-auto bg-[#f5f5f5] p-4 scrollbar-hide lg:flex-row lg:justify-center lg:pb-6">
    <article
      class="flex size-full min-h-screen flex-col items-center justify-start space-y-8 overflow-y-auto pb-5 scrollbar-hide md:min-h-max lg:max-w-96 lg:px-4">

      <v-container>
        <v-row justify="space-around">
          <DatePicker />
        </v-row>
      </v-container>

      <UButton
        class="bg-gradient flex w-full items-center justify-center gap-2 self-end px-4 py-6 text-xl shadow-md transition-all hover:opacity-90">
        <Plus class="size-6" /> Novo Agendamento
      </UButton>

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
    </article>

    <article class="flex size-full flex-col items-center justify-center gap-4 p-1">
      <section class="flex size-full flex-wrap items-start justify-between gap-4 overflow-y-auto scrollbar-hide">
        <TheCardPet v-for="n in 8" :key="n" name="Jujuba" time="10:00h" type="cat" />
        <TheCardPet v-for="n in 18" :key="n" name="Jubileu" time="13:00h" type="dog" />
      </section>
    </article>
  </section>
</template>
