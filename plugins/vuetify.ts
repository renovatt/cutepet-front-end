// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { VCalendar } from 'vuetify/labs/VCalendar'

const colors = {
  pizazz: {
    50: '#fffbec',
    100: '#fff6d3',
    200: '#ffeaa5',
    300: '#ffd96d',
    400: '#ffbd32',
    500: '#ffa60a',
    600: '#fb8c00',
    700: '#cc6902',
    800: '#a1500b',
    900: '#82430c',
    950: '#462004'
  }
}

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    components: {
      VCalendar
    },
    theme: {
      themes: {
        light: {
          dark: false,
          colors: {
            primary: colors.pizazz[600],
            secondary: colors.pizazz[400]
          }
        }
      }
    }
  })
  app.vueApp.use(vuetify)
})
