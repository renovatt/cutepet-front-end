import type { ErrorAPI } from './auth'
import type { Schedule } from './schedule'

type ScheduleResponseAPI = {
  type: 'success'
  schedule: Schedule
}

export type FetchError = {
  response: {
    _data: {
      message: string | string[],
      error: string,
      statusCode: number
    }
  }
}

export type ScheduleResultAPI = ScheduleResponseAPI | ErrorAPI
