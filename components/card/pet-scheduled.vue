<script setup lang="ts">
import { Cat, Dog, Info, Clock, Calendar } from 'lucide-vue-next'
import { toast } from '../ui/toast'
import type { Schedule } from '~/utils/entities/schedule'

const scheduleSelected = ref<Schedule>()
const { schedule } = defineProps<{ schedule: Schedule }>()

const { isOpen } = useToggle()
const { schedules, patch } = useSchedules()

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

watch(schedules, (newSchedules) => {
  if (scheduleSelected.value) {
    const updatedSchedule = newSchedules?.find(schedule => schedule.id === scheduleSelected.value?.id)
    if (updatedSchedule) {
      scheduleSelected.value = updatedSchedule
    }
  }
})

const handleChangeStatus = async (status: 'FINISHED' | 'CANCELED') => {
  const res = await patch({ status }, scheduleSelected.value?.id as string)

  if (res.type === 'success') {
    toast({
      description: `${status === 'FINISHED' ? 'Agendamento finalizado' : 'Agendamento cancelado'}`,
      class: 'text-green-500',
      duration: 1000
    })
  } else if (res.type === 'error') {
    toast({
      description: res.message,
      class: 'text-red-500',
    })
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

        <aside class="flex h-80 flex-col justify-between">
          <card-pet-preview v-if="scheduleSelected" :schedule="scheduleSelected" />
          <div class="flex flex-col gap-2">
            <Button class="w-full rounded-lg bg-primary py-2 text-white" @click="handleChangeStatus('FINISHED')">
              Finalizar
            </Button>

            <Button
              class="w-full rounded-lg border border-primary bg-transparent py-2 text-primary hover:bg-transparent hover:opacity-70"
              @click="handleChangeStatus('CANCELED')">
              Cancelar
            </Button>
          </div>
        </aside>
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
