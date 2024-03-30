export default defineNuxtRouteMiddleware((to, from) => {
  const { accessToken } = useToken()

  const isPublicPath =
  to.path === '/' ||
  to.path === '/auth/login' ||
  to.path === '/auth/register'

  if (isPublicPath && accessToken) {
    return navigateTo('/dashboard')
  }

  if (!isPublicPath && !accessToken) {
    return navigateTo('/auth/login')
  }
})
