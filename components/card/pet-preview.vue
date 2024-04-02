<script setup lang="ts">
import { Dumbbell, Cat, Dog, PawPrint, CalendarDays, Award, Download, Clock, ShowerHead, Stethoscope } from 'lucide-vue-next'
import type { Schedule } from '~/utils/entities/schedule'

const { schedule } = defineProps<{ schedule: Schedule }>()

</script>

<template>
  <section class="relative flex w-full max-w-96 items-center justify-center rounded-lg border p-2 shadow">
    <Download class="absolute right-3 top-3 size-5 cursor-pointer text-primary/70 transition-all hover:text-primary" />
    <article class="flex w-full items-start justify-between gap-2 p-2">
      <figure class="size-24 md:size-40">
        <the-image-skeleton class="size-24 rounded-lg object-cover md:size-40" :src="schedule.breed.image.url"
          :alt="schedule.breed.name" />
      </figure>

      <section class="flex flex-col items-center justify-between gap-4 md:w-40">
        <section class="flex w-full flex-col items-start justify-between gap-2">
          <span class="flex items-center justify-center gap-2 text-muted-foreground">
            <Award class="size-5 text-primary" />
            <span class="w-28 truncate text-xs font-bold capitalize">{{ schedule.petname }}</span>
          </span>

          <span class="flex items-center justify-center gap-2 text-muted-foreground">
            <PawPrint class="size-5 text-primary" />
            <span class="w-28 truncate text-xs font-bold">{{ schedule.breed.name }}</span>
          </span>

          <span class="flex items-center justify-center gap-2 text-muted-foreground">
            <ShowerHead v-if="schedule.service === 'bath-grooming'" class="size-5 text-primary" />
            <Stethoscope v-else class="size-5 text-primary" />
            <p class="w-20 truncate text-xs font-bold text-muted-foreground">
              {{ schedule.service === 'bath-grooming' ? 'Banho e Tosa' : 'Consulta' }}
            </p>
          </span>

          <span class="flex items-center justify-center gap-2 text-muted-foreground">
            <Dumbbell class="size-5 text-primary" />
            <span class="w-16 text-start text-xs font-bold">{{ schedule.weight }}</span>
          </span>

          <span class="flex items-center justify-center gap-2 text-muted-foreground">
            <CalendarDays class="size-5 text-primary" />
            <span class="w-16 text-start text-xs font-bold">{{ schedule.age }}</span>
          </span>

          <span class="flex items-center justify-center gap-2 text-muted-foreground">
            <Cat v-if="schedule.pet === 'CAT'" class="size-5 text-primary" />
            <Dog v-else class="size-5 text-primary" />
            <span class="w-16 text-start text-xs font-bold capitalize">{{ schedule.sex }}</span>
          </span>

          <span class="flex items-center justify-center gap-2 text-muted-foreground">
            <Clock class="size-5 text-primary" />
            <span class="w-28 text-start text-xs font-bold">
              {{ formatDate(schedule.date) }} - {{ schedule.time }}h</span>
          </span>
        </section>
      </section>
    </article>
  </section>
</template>
