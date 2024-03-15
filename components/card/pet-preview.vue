<script setup lang="ts">
import { Dumbbell, Cat, Heart, PawPrint, CalendarDays, Download, Clock } from 'lucide-vue-next'

</script>

<template>
  <section
    class="relative flex w-full max-w-96 items-center justify-center rounded-lg border p-2 shadow md:w-96">
    <Download class="absolute right-3 top-3 size-5 cursor-pointer text-primary/70 transition-all hover:text-primary" />
    <article class="flex flex-col items-start justify-center gap-5 p-2 md:w-full md:flex-row">
      <figure class="size-20 md:size-40">
        <img src="https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg" class="size-20 rounded-lg object-cover md:size-40">
      </figure>

      <section class="flex w-40 flex-col items-center justify-between gap-4">
        <section class="flex w-full flex-col items-start justify-between gap-2">
          <span class="flex items-center justify-center gap-2 text-muted-foreground">
            <Cat class="size-5 text-primary" />
            <span class="w-28 truncate text-xs font-bold">Jujuba</span>
          </span>

          <span class="flex items-center justify-center gap-2 text-muted-foreground">
            <PawPrint class="size-5 text-primary" />
            <span class="w-28 truncate text-xs font-bold">Shiba hyfun Inu</span>
          </span>

          <span class="flex items-center justify-center gap-2 text-muted-foreground">
            <Dumbbell class="size-5 text-primary" />
            <span class="w-16 text-start text-xs font-bold">0kg - 2kg</span>
          </span>

          <span class="flex items-center justify-center gap-2 text-muted-foreground">
            <CalendarDays class="size-5 text-primary" />
            <span class="w-16 text-start text-xs font-bold">4m - 8m</span>
          </span>

          <span class="flex items-center justify-center gap-2 text-muted-foreground">
            <heart class="size-5 text-primary" />
            <span class="w-16 text-start text-xs font-bold">Macho</span>
          </span>

          <span class="flex items-center justify-center gap-2 text-muted-foreground">
            <Clock class="size-5 text-primary" />
            <span class="w-28 text-start text-xs font-bold">06/04 - 10:00 hs</span>
          </span>
        </section>
      </section>
    </article>
  </section>
</template>
