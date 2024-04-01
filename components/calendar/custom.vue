<script setup lang="ts">
type ScheduleDataProps = {
  key: string
  customData: {
    title: string
    class: string
  }
  dates: Date
}
const { schedules } = useSchedules()

const masks = ref({ weekdays: 'WWW', })

const scheduleData = ref<ScheduleDataProps[]>([])

const attributes = computed(() => scheduleData.value)

watch(schedules, (newSchedules) => {
  scheduleData.value = newSchedules?.map(schedule => ({
    key: schedule.id as string,
    customData: {
      title: schedule.service === 'clinic' ? 'Clínica' : ' Banho e tosa',
      class: schedule.service === 'clinic' ? 'bg-blue-500 text-white' : 'bg-primary text-white',
    },
    dates: new Date(schedule.date),
  })) || []
})

</script>

<template>
  <div class="text-center">
    <Calendar class="custom-calendar max-w-full" :masks="masks" :attributes="attributes" disable-page-swipe
      is-expanded>
      <template #day-content="{ day, attributes }">
        <div class="z-10 flex h-full flex-col overflow-hidden">
          <span class="day-label text-sm text-gray-900">{{ day.day }}</span>
          <div class="relative grow overflow-auto scrollbar-hide">
            <p v-for="attr in attributes" :key="attr.key" class="mb-1 mt-0 rounded-sm p-1 text-xs leading-tight"
              :class="attr.customData.class">
              {{ attr.customData.title }}
            </p>
          </div>
        </div>
      </template>
    </Calendar>
  </div>
</template>

<style scoped>
:deep() .custom-calendar.vc-container {
  --day-border: 1px solid #b8c2cc;
  --day-border-highlight: 1px solid #b8c2cc;
  --day-width: 90px;
  --day-height: 90px;
  --weekday-bg: #f8fafc;
  --weekday-border: 1px solid #eaeaea;

  & .vc-header {
    /* background-color: #f1f5f8; */
    padding: 10px 0;
    color: #78716c;
    border-radius: .4rem;
  }

  & .vc-pane-container {
    top: -.5rem;
  }

  & .vc-title {
    text-transform: capitalize;
  }

  & .vc-weeks {
    padding: 0;
  }

  & .vc-weekday {
    background-color: var(--weekday-bg);
    border-bottom: var(--weekday-border);
    border-top: var(--weekday-border);
    padding: 5px 0;
  }

  & .vc-day {
    padding: 0 5px 3px 5px;
    text-align: left;
    height: var(--day-height);
    min-width: var(--day-width);
    background-color: white;

    &.weekday-1,
    &.weekday-7 {
      background-color: #eff8ff;
    }

    &:not(.on-bottom) {
      border-bottom: var(--day-border);

      &.weekday-1 {
        border-bottom: var(--day-border-highlight);
      }
    }

    &:not(.on-right) {
      border-right: var(--day-border);
    }
  }

  & .vc-day-dots {
    margin-bottom: 5px;
  }
}
</style>
