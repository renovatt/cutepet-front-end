import type { Schedule } from '~/utils/entities/schedule'

export const useSchedulesFilter = () => {
  const filter = ref(false)
  const filteredSchedules = ref<Schedule[]>([])

  const { schedules } = useSchedules()
  const { selectedDate } = useDatePicker

  watchEffect(() => {
    const dateFilter = selectedDate.value
    filteredSchedules.value = schedules.value?.filter(schedule =>
      !dateFilter || new Date(schedule.date).toISOString().split('T')[0] === dateFilter
    ) || []

    if (dateFilter) {
      filter.value = true
    }
  })

  const handleResetFilter = () => {
    selectedDate.value = ''
    filter.value = false
  }

  onMounted(() => {
    handleResetFilter()
  })

  return {
    filter,
    filteredSchedules,
    handleResetFilter
  }
}
