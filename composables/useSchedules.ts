import type { Schedule } from '~/utils/entities/schedule'
import type { ScheduleResultAPI, FetchError } from '~/utils/entities/schedule-response-api'

export const useSchedules = () => {
  const isLoadingFinish = ref('')
  const isLoadingCancel = ref('')
  const isLoading = ref(false)

  const config = useRuntimeConfig()
  const { accessToken } = useToken()

  const { data: schedules, error, pending, status, refresh } = useFetch(`${config.public.baseUrl}/schedules`, {
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

  const create = async (scheduleData: Schedule): Promise<ScheduleResultAPI> => {
    isLoading.value = true
    try {
      const response: Schedule = await $fetch(`${config.public.baseUrl}/schedules`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`
        },
        body: JSON.stringify(scheduleData)
      })

      refresh()
      isLoading.value = false

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
    isLoading.value = true
    try {
      const response: Schedule = await $fetch(`${config.public.baseUrl}/schedules/${scheduleId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`
        },
        body: JSON.stringify(scheduleData)
      })

      refresh()
      isLoading.value = false

      return {
        type: 'success',
        schedule: response,
      }
    } catch (error) {
      isLoading.value = false
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

  const patch = async (scheduleData: Pick<Schedule, 'status'>, scheduleId:string): Promise<ScheduleResultAPI> => {
    scheduleData.status === 'FINISHED' ? isLoadingFinish.value = 'Finalizando..' : isLoadingCancel.value = 'Cancelando..'
    try {
      const response: Schedule = await $fetch(`${config.public.baseUrl}/schedules/${scheduleId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`
        },
        body: JSON.stringify(scheduleData)
      })

      refresh()
      isLoading.value = false

      return {
        type: 'success',
        schedule: response,
      }
    } catch (error) {
      isLoading.value = false
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

  return {
    create,
    update,
    patch,
    isLoading,
    isLoadingFinish,
    isLoadingCancel,
    schedules,
    error,
    pending,
    status
  }
}
