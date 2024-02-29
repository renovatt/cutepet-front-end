<script setup lang="ts">
import { Plus, ListFilter } from 'lucide-vue-next'
</script>

<template>
  <section
    class="flex min-h-screen w-full flex-col items-center justify-start gap-5 overflow-y-auto p-4 pb-20 scrollbar-hide lg:flex-row lg:justify-center lg:pb-5">
    <article
      class="flex size-full flex-col items-center justify-start gap-4 rounded-3xl bg-california-500/20 px-4 py-6 shadow-lg lg:w-3/12">
      <UButton class="flex w-full items-center justify-center gap-2 self-end px-4 py-2 transition-all">
        <Plus class="size-4" /> New Schedule
      </UButton>
      <div class="h-80 w-full rounded-lg bg-white shadow" />
      <div class="h-20 w-full rounded-lg bg-white shadow" />
      <div class="h-20 w-full rounded-lg bg-white shadow" />
      <div class="h-60 w-full rounded-lg bg-white shadow" />
    </article>

    <article
      class="flex size-full flex-col items-center justify-start gap-4 rounded-3xl bg-california-500/20 px-4 py-6 shadow-lg lg:w-3/4">
      <UButton class="flex w-40 items-center justify-center gap-2 self-end px-4 py-2 transition-all">
        <ListFilter class="size-4" /> Filter
      </UButton>

      <section class="size-full rounded-lg bg-california-50 p-2">
        <!-- <div class="flex h-60 w-80 items-center justify-between rounded-lg bg-california-500/10 p-2 shadow">
          <div class="flex flex-col gap-2">
            <div class="size-40 rounded-lg bg-california-500" />
            <div class="ml-5 flex flex-col">
              <span class="text-gray-400">Nome: <span class="font-bold text-california-950">Jujuba</span></span>
              <span class="text-gray-400">Raça: <span class="font-bold text-california-950">Shiba Inu</span></span>
            </div>
          </div>

          <div class="flex flex-col">
            <span class="text-gray-400">Weight: <span class="font-bold text-california-950">20kg</span></span>
            <span class="text-gray-400">Genre: <span class="font-bold text-california-950">Famale</span></span>
            <span class="text-gray-400">Age: <span class="font-bold text-california-950">2 - 4</span></span>
          </div>
        </div> -->
      </section>
    </article>
  </section>
</template>
