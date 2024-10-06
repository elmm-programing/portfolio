/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
      'frost-gradient-1': '#000428',
      'frost-gradient-2': '#004e92',
      },
      backgroundImage:{
        'frost-gradient':'linear-gradient(to bottom, #000428, #004e92)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwindcss-primeui')],
}
