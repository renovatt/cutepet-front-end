import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      aspectRatio: {
        auto: 'auto',
        square: '1 / 1',
        video: '16 / 9'
      },
      colors: {
        california: {
          50: '#fffbea',
          100: '#fff3c5',
          200: '#ffe685',
          300: '#ffd246',
          400: '#ffbd1b',
          500: '#ff9e0b',
          600: '#e27200',
          700: '#bb4d02',
          800: '#983b08',
          900: '#7c310b',
          950: '#481700'
        }
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ]
}
