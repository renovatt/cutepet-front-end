import { jwtDecode } from 'jwt-decode'

export function decodeUserId() {
  const { accessToken } = useToken()
  try {
    const decoded = jwtDecode(accessToken || '')
    return decoded ? decoded.sub as string : null
  } catch (error) {
    console.error('Error decoding token:', error)
    return null
  }
}
