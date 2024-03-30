export const useToken = () => {
  const accessToken = useCookie('@token-cutepet')

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
