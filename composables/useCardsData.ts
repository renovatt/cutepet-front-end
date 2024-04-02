import { Clock, CalendarDays, ShowerHead, Stethoscope } from 'lucide-vue-next'
import type { Schedule } from '~/utils/entities/schedule'

const cardData = [
  {
    title: 'Hoje',
    value: 0,
    subtitle: 'Agendamentos',
    icon: Clock
  },
  {
    title: 'Visão Geral',
    value: 0,
    subtitle: 'Agendamentos',
    icon: CalendarDays
  },
  {
    title: 'Banho e Tosa',
    value: 0,
    subtitle: 'Agendamentos',
    icon: ShowerHead
  },
  {
    title: 'Consulta',
    value: 0,
    subtitle: 'Agendamentos',
    icon: Stethoscope
  }
]

export const useCardsData = () => {
  const cards = ref(cardData)
  const values = ref([0, 0, 0, 0])

  const { schedules } = useSchedules()
  const lastTwoCards = computed(() => cards.value.slice(-2))

  const handleCalculateValues = () => {
    values.value[0] = schedules.value?.filter(schedule => schedule.status === 'PENDING').reduce((acc: number, schedule: Schedule) => {
      const scheduleDate = new Date(schedule.date)
      const today = new Date()

      if (
        scheduleDate.getDate() === today.getDate() &&
        scheduleDate.getMonth() === today.getMonth() &&
        scheduleDate.getFullYear() === today.getFullYear()) {
        return acc + 1
      }

      return acc
    }, 0) ?? 0

    values.value[1] = schedules.value?.filter((schedule: Schedule) => schedule.status === 'PENDING').length ?? 0
    values.value[2] = schedules.value?.filter((schedule: Schedule) => schedule.service === 'bath-grooming' && schedule.status === 'PENDING').length ?? 0
    values.value[3] = schedules.value?.filter((schedule: Schedule) => schedule.service === 'clinic' && schedule.status === 'PENDING').length ?? 0

    cards.value.forEach((card, index) => {
      card.value = values.value[index]
    })
  }

  watchEffect(() => {
    handleCalculateValues()
  })

  return {
    cards,
    lastTwoCards
  }
}
