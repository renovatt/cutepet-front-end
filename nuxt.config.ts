import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@pinia/nuxt',
    'nuxt-headlessui',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    }
  ],
  tailwindcss: {
    exposeConfig: true,
    cssPath: '~/assets/tailwind.css'
  },
  colorMode: {
    preference: 'light'
  },
  build: {
    transpile: ['vuetify']
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls
      }
    }
  }
})
