<script setup lang="ts">
import { Plus, ShowerHead, Stethoscope } from 'lucide-vue-next'

const cardData = [
  {
    title: 'Banho e Tosa',
    value: '22',
    subtitle: 'Agendamentos',
    icon: ShowerHead
  },
  {
    title: 'Clínica',
    value: '4',
    subtitle: 'Agendamentos',
    icon: Stethoscope
  }
]

const { isOpen } = useToggle()
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
          <the-preview-pet-card />
        </section>
      </template>
    </the-modal>

    <article class="flex w-full flex-col items-center justify-start space-y-10 px-4 lg:h-full lg:max-w-96">
      <section class="flex w-full items-center justify-between gap-8 py-2">
        <the-dash-card v-for="card in cardData" :key="card.title" :title="card.title" :subtitle="card.subtitle"
          :value="card.value">
          <template #icon>
            <component :is="card.icon" class="size-5 text-primary-foreground md:size-10" />
          </template>
        </the-dash-card>
      </section>
      <Button class="w-full" @click="isOpen = !isOpen">
        <Plus class="size-6" /> Novo Agendamento
      </Button>

     <div class="size-full">
      <the-calendar />
     </div>
    </article>

    <article class="flex size-full max-w-7xl flex-col items-center justify-center p-1">
      <section
        class="flex size-full flex-wrap items-start justify-center gap-4 overflow-y-auto pb-14 scrollbar-hide md:justify-start md:pb-4">
        <the-schedule-card-pet v-for="n in 18" :key="n" name="Jujuba" time="10:00h" type="cat" />
        <the-schedule-card-pet v-for="n in 28" :key="n" name="Jubileu" time="13:00h" type="dog" />
      </section>
    </article>
  </section>
</template>
