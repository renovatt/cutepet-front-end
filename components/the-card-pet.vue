<script setup lang="ts">
import { Dumbbell, Cat, Heart, PawPrint, CalendarDays, Info } from 'lucide-vue-next'

</script>

<template>
  <div class="relative flex w-80 items-center justify-between rounded-lg bg-california-300/10 p-2 shadow">
    <Info class=" absolute right-2 top-2 size-5 cursor-pointer text-california-500" />
    <article class="flex w-full items-center justify-center gap-5">
      <img src="https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg"
        class="size-40 rounded-lg bg-california-500 object-cover shadow-lg">

      <section class="flex size-40 flex-col items-center justify-between gap-4">
        <section class="flex w-full flex-col items-start justify-between gap-2">
          <span class="flex items-center justify-center gap-2 text-gray-400">
            <Cat class="size-5 text-california-500" />
            <!-- <Dog class="size-5 text-california-500" /> -->
            <span class="text-xs font-bold text-california-950">Jujuba</span>
          </span>

          <span class="flex items-center justify-center gap-2 text-gray-400">
            <PawPrint class="size-5 text-california-500" />
            <span class="text-xs font-bold text-california-950">Shiba hyfun Inu</span>
          </span>
        </section>

        <section class="flex w-full flex-col items-start justify-center gap-2">
          <span class="flex items-center justify-center gap-2 text-gray-400">
            <Dumbbell class="size-5 text-california-500" />
            <span class="w-16 text-start text-xs font-bold text-california-950">0kg - 2kg</span>
          </span>

          <span class="flex items-center justify-center gap-2 text-gray-400">
            <CalendarDays class="size-5 text-california-500" />
            <span class="w-16 text-start text-xs font-bold text-california-950">4m - 8m</span>
          </span>

          <span class="flex items-center justify-center gap-2 text-gray-400">
            <heart class="size-5 text-california-500" />
            <span class="w-16 text-start text-xs font-bold text-california-950">Macho</span>
          </span>
        </section>
      </section>
    </article>
  </div>
</template>
