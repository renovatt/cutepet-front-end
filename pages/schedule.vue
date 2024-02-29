<script setup lang="ts">
import { Plus } from 'lucide-vue-next'
</script>

<template>
  <section
    class="flex min-h-screen w-full flex-col items-center justify-start gap-5 overflow-y-auto p-4 pb-20 scrollbar-hide lg:flex-row lg:justify-center lg:pb-5 dark:bg-california-500/20">
    <article
      class="flex size-full flex-col items-center justify-between gap-4 rounded-3xl bg-california-500/20 px-4 py-6 shadow-lg lg:w-3/12">
      <UButton class="flex w-full items-center justify-center gap-2 self-end px-4 py-2 transition-all">
        <Plus class="size-4" /> Novo Agendamento
      </UButton>
      <TheCalendary />

      <div class="h-20 w-full rounded-lg bg-white shadow" />
      <div class="h-20 w-full rounded-lg bg-white shadow" />
      <div class="h-60 w-full rounded-lg bg-white shadow" />
    </article>

    <article
      class="flex size-full flex-col items-center justify-between gap-4 rounded-3xl bg-california-500/20 px-4 py-6 shadow-lg lg:w-10/12">
      <FilterDropdown class="self-end" />
      <section
        class="flex size-full flex-wrap items-start justify-start gap-4 overflow-y-auto rounded-lg bg-white p-2 scrollbar-hide">
        <TheCardPet v-for="n in 22" :key="n" />
      </section>
    </article>
  </section>
</template>
