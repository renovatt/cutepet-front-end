export const useToken = () => {
  const accessToken = useCookie('@token-cutepet', {
    maxAge: 60 * 60 * 8, // 8 hours
  })

  function saveToken (token: string) {
    accessToken.value = token
  }

  function destroyToken () {
    accessToken.value = null
  }

  return {
    accessToken: accessToken.value,
    saveToken,
    destroyToken
  }
}
