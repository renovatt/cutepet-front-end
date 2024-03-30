import type { User } from '~/utils/entities/user'
import type { APIResult } from '~/utils/entities/auth'

export const useAuth = () => {
  const config = useRuntimeConfig()
  const { saveToken } = useToken()

  const signin = async (data: Partial<User>): Promise<APIResult> => {
    const response = await fetch(`${config.public.baseUrl}/auth/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    const responseData = await response.json()

    if (response.ok) {
      saveToken(responseData.accessToken)
      return {
        type: 'success',
        accessToken: responseData.accessToken
      }
    }

    return {
      type: 'error',
      message: responseData.message,
      error: responseData.error,
      statusCode: response.status
    }
  }

  const signup = async (data: User): Promise<APIResult> => {
    const response = await fetch(`${config.public.baseUrl}/auth/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    const responseData = await response.json()

    if (response.ok) {
      saveToken(responseData.accessToken)
      return {
        type: 'success',
        accessToken: responseData.accessToken
      }
    }

    return {
      type: 'error',
      message: responseData.message,
      error: responseData.error,
      statusCode: response.status
    }
  }

  return {
    signin,
    signup,
  }
}
