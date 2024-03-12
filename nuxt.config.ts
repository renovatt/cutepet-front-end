// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      catBaseURL: process.env.NUXT_CAT_BASE_URL,
      catApiKey: process.env.NUXT_CAT_API_KEY,

      dogBaseURL: process.env.NUXT_DOG_BASE_URL,
      dogApiKey: process.env.NUXT_DOG_API_KEY
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@pinia/nuxt',
    'nuxt-headlessui'
  ],
  tailwindcss: {
    exposeConfig: true,
    cssPath: '~/assets/css/tailwind.css'
  },
  build: {
    // Remove the colorMode property
  },
  pinia: {
    storesDirs: ['./stores/**', './custom-folder/stores/**']
  },
  headlessui: {
    prefix: 'H'
  },
  shadcn: {
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  components: {
    dirs: [
      '~/components',
      { path: '~/static/icons', prefix: 'icon' },
    ],
  },
})
