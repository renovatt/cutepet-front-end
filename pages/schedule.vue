<script setup lang="ts">
import { Plus } from 'lucide-vue-next'

definePageMeta({ middleware: 'auth' })
useHead({
  title: 'Agendamentos'
})

const { isOpen } = useToggle()
const { lastTwoCards } = useCardsData()
const { filter, filteredSchedules, handleResetFilter } = useSchedulesFilter()

</script>

<template>
  <section
    class="flex min-h-screen w-full flex-col items-start justify-start gap-10 overflow-y-auto p-4 scrollbar-hide lg:flex-row lg:justify-center">
    <the-modal :is-open="isOpen" @close="isOpen = !isOpen">
      <template #title>
        Agendar
      </template>

      <template #content>
        <section class="mt-2 flex flex-col items-start justify-around gap-4 rounded-lg p-4 md:flex-row">
          <form-schedule-create />
        </section>
      </template>
    </the-modal>

    <article class="flex w-full flex-col items-center justify-start space-y-10 px-4 lg:h-full lg:max-w-96">
      <section class="flex w-full items-center justify-between gap-8 py-2">
        <card-schedules-data v-for="card in lastTwoCards" :key="card.title" :title="card.title"
          :subtitle="card.subtitle" :value="card.value">
          <template #icon>
            <component :is="card.icon" class="size-5 text-primary-foreground md:size-10" />
          </template>
        </card-schedules-data>
      </section>

      <Button class="w-full" @click="isOpen = !isOpen">
        <Plus class="size-6" /> Novo Agendamento
      </Button>

      <Button v-if="filter" class="w-full" @click="handleResetFilter">
        Limpar
      </Button>

      <div class="size-full">
        <calendar-picker />
      </div>
    </article>

    <article class="flex size-full max-w-7xl flex-col items-start justify-start p-1">
      <section v-if="filteredSchedules?.length"
        class="flex flex-wrap items-start justify-center gap-4 overflow-y-auto pb-14 scrollbar-hide md:justify-start md:pb-4">
        <card-pet-scheduled v-for="schedule in filteredSchedules" :key="schedule.id" :schedule="schedule" />
      </section>
      <section v-else class="mb-14 flex size-full w-full items-center justify-center md:mb-0 md:justify-center">
        <span class="text-muted-foreground">Ainda não há agendamentos</span>
      </section>
    </article>
  </section>
</template>
