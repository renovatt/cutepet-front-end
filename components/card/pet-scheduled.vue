<script setup lang="ts">
import { Cat, Dog, Info, Clock, Calendar } from 'lucide-vue-next'
import type { Schedule } from '~/utils/entities/schedule'

const scheduleSelected = ref<Schedule>()
const { schedule } = defineProps<{ schedule: Schedule }>()

const { isOpen } = useToggle()
const { schedules } = useSchedules()

const date = computed(() => new Date(schedule.date).toLocaleDateString('pt-BR', {
  day: '2-digit',
  month: '2-digit',
  year: '2-digit'
}))

const handleSelectSchedule = (id: string) => {
  const schedule = schedules.value?.find(schedule => schedule.id === id)
  if (schedule) {
    scheduleSelected.value = schedule
    isOpen.value = true
  }
}
</script>

<template>
  <the-modal :is-open="isOpen" @close="isOpen = !isOpen">
    <template #title>
      Editar agendamento
    </template>

    <template #content>
      <section class="mt-2 flex flex-col items-start justify-around gap-4 rounded-lg p-4 md:flex-row">
        <form-schedule-edit v-if="scheduleSelected" :schedule="scheduleSelected" />
        <card-pet-preview v-if="scheduleSelected" :schedule="scheduleSelected" />
      </section>
    </template>
  </the-modal>

  <section
    class="relative flex h-28 w-24 items-center justify-between rounded-lg border px-2 pt-2 shadow md:w-48 md:pt-0">
    <Info v-if="schedule.id"
      class=" absolute right-1 top-1 size-5 cursor-pointer text-primary/70 transition-all hover:text-primary"
      @click="handleSelectSchedule(schedule.id)" />
    <article class="flex w-full items-center justify-around gap-2 py-4 lg:justify-center">

      <figure class="hidden size-20 place-items-center bg-primary-foreground md:grid">
        <the-image-skeleton class="size-20 rounded-lg border bg-primary object-cover" :src="schedule.breed.image.url"
          :alt="schedule.breed.name" />
      </figure>

      <section class="flex size-20 flex-col items-center justify-center">
        <section class="flex w-full flex-col items-start justify-between gap-1">
          <span class="flex items-center justify-center gap-2 text-muted-foreground">
            <Cat v-if="schedule.pet === 'CAT'" class="size-5 text-primary" />
            <Dog v-else class="size-5 text-primary" />
            <p class="w-14 truncate text-xs font-bold capitalize text-muted-foreground">{{ schedule.breed.name }}
            </p>
          </span>

          <span class="flex items-center justify-center gap-2 text-muted-foreground">
            <Clock class="size-5 text-primary" />
            <p class="text-xs font-bold text-muted-foreground">{{ schedule.time }}h</p>
          </span>

          <span class="flex items-center justify-center gap-2 text-muted-foreground">
            <Calendar class="size-5 text-primary" />
            <p class="text-xs font-bold text-muted-foreground">{{ date }}</p>
          </span>
        </section>
      </section>
    </article>
  </section>
</template>
~/utils/entities/schedule
