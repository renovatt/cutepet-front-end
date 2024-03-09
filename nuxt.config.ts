// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@pinia/nuxt',
    'nuxt-headlessui'
  ],
  tailwindcss: {
    exposeConfig: true,
    cssPath: '~/assets/tailwind.css'
  },
  colorMode: {
    preference: 'light'
  },
  pinia: {
    storesDirs: ['./stores/**', './custom-folder/stores/**']
  }
})
