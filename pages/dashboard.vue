<script setup lang="ts">
import { Clock } from 'lucide-vue-next'
</script>

<template>
  <section
    class="flex min-h-screen w-full flex-col items-center justify-center gap-4 overflow-y-auto bg-white p-2 scrollbar-hide lg:flex-row lg:justify-center">
    <article
      class="flex h-full flex-col items-center justify-between overflow-y-auto rounded-3xl py-10 scrollbar-hide lg:w-3/12">
      <section class="flex flex-wrap items-center justify-evenly gap-2">
        <article v-for="n in 4" :key="n"
          class="bg-gradient flex h-52 w-40 flex-col items-center justify-around rounded-3xl p-2 shadow">
          <h2 class="text-xs font-semibold text-california-50">
            Agendamentos
          </h2>

          <div class="flex w-full flex-col items-start justify-center">
            <span class="flex items-center justify-center gap-1 text-2xl font-semibold text-california-50">
              <span>12</span>
              <Clock class="size-6" />
            </span>
            <h5 class="text-semibold text-xs text-california-50">
              Agendamentos
            </h5>
          </div>
        </article>
      </section>
    </article>

    <article class="flex size-full flex-col items-center justify-center lg:w-10/12">
      <section
        class="flex size-full flex-wrap items-start justify-evenly gap-x-2 gap-y-4 overflow-y-auto rounded-lg p-2 scrollbar-hide">
        <FullCalendar />
      </section>
    </article>
  </section>
</template>
