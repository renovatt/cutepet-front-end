// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@pinia/nuxt',
    'nuxt-headlessui'
  ],
  tailwindcss: { exposeConfig: true },
  colorMode: {
    preference: 'light'
  }
})
