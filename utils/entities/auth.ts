type AuthAPI = {
  accessToken: string
  type: 'success'
}

export type ErrorAPI = {
  type: 'error',
  message: string,
  error: string,
  statusCode: number
}

export type AuthResultAPI = AuthAPI | ErrorAPI
