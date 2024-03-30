type ResponseAPI = {
  accessToken: string
  type: 'success'
}

type ErrorAPI = {
  type: 'error',
  message: string,
  error: string,
  statusCode: number
}

export type APIResult = ResponseAPI | ErrorAPI
