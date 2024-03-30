import type { Schedule } from '~/utils/entities/schedule'

export const useSchedules = () => {
  const config = useRuntimeConfig()
  const { accessToken } = useToken()

  const { data: schedules, error, pending, status } = useFetch(`${config.public.baseUrl}/schedules`, {
    lazy: false,
    server: false,
    headers: {
      Authorization: `Bearer ${accessToken}`
    },
    transform: (schedules: Schedule[]) => {
      return schedules.map((schedule: Schedule) => ({
        id: schedule.id,
        pet: schedule.pet,
        petname: schedule.petname,
        age: schedule.age,
        weight: schedule.weight,
        sex: schedule.sex,
        date: schedule.date,
        time: schedule.time,
        service: schedule.service,
        observation: schedule.observation,
        status: schedule.status,
        breed: {
          id: schedule.breed.id,
          name: schedule.breed.name,
          image: {
            url: schedule.breed.image.url
          }
        },
      }))
    }
  })

  return {
    schedules,
    error,
    pending,
    status
  }
}
