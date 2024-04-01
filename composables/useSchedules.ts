import type { Schedule } from '~/utils/entities/schedule'
import type { ScheduleResultAPI, FetchError } from '~/utils/entities/schedule-response-api'

export const useSchedules = () => {
  const config = useRuntimeConfig()
  const { accessToken } = useToken()

  const create = async (scheduleData: Schedule): Promise<ScheduleResultAPI> => {
    try {
      const response: Schedule = await $fetch(`${config.public.baseUrl}/schedules`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`
        },
        body: JSON.stringify(scheduleData)
      })

      return {
        type: 'success',
        schedule: response,
      }
    } catch (error) {
      const fetchError = error as FetchError

      if (fetchError.response?._data) {
        const errorData = {
          message: fetchError.response._data.message[0],
          error: fetchError.response._data.error,
          statusCode: fetchError.response._data.statusCode
        }

        return {
          type: 'error',
          message: errorData.message,
          error: errorData.error,
          statusCode: errorData.statusCode
        }
      } else {
        return {
          type: 'error',
          message: 'Unexpected error',
          error: 'Internal Server Error',
          statusCode: 500
        }
      }
    }
  }

  const update = async (scheduleData: Partial<Schedule>, scheduleId:string): Promise<ScheduleResultAPI> => {
    try {
      const response: Schedule = await $fetch(`${config.public.baseUrl}/schedules/${scheduleId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`
        },
        body: JSON.stringify(scheduleData)
      })

      return {
        type: 'success',
        schedule: response,
      }
    } catch (error) {
      const fetchError = error as FetchError

      if (fetchError.response?._data) {
        const errorData = {
          message: fetchError.response._data.message,
          error: fetchError.response._data.error,
          statusCode: fetchError.response._data.statusCode
        }

        return {
          type: 'error',
          message: errorData.message as string,
          error: errorData.error,
          statusCode: errorData.statusCode
        }
      } else {
        return {
          type: 'error',
          message: 'Unexpected error',
          error: 'Internal Server Error',
          statusCode: 500
        }
      }
    }
  }

  const { data: schedules, error, pending, status } = useFetch(`${config.public.baseUrl}/schedules`, {
    lazy: false,
    server: false,
    headers: {
      Authorization: `Bearer ${accessToken}`
    },
    transform: (schedules: Schedule[]) => {
      return schedules.map((schedule: Schedule) => ({
        id: schedule.id,
        userId: schedule.userId,
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
    create,
    update,
    schedules,
    error,
    pending,
    status
  }
}
