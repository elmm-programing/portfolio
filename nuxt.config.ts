import Aura from '@primevue/themes/aura';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@primevue/nuxt-module', '@nuxtjs/tailwindcss','@nuxtjs/google-fonts','@nuxtjs/i18n'],
    primevue: {
     options: {
        theme: {
                preset: Aura,
        options: {
          cssLayer: {
            name: 'primevue',
            order: 'tailwind-base, primevue, tailwind-utilities'
          }
        }
            },
      ripple: true,
       
        } 
    } ,
  googleFonts: {
       families: {
         Onest: true // Loads the Onest font family
       }
     },
  i18n: {
     locales: [
      {
        code: 'en',
        file: 'en-US.json'
      },
      {
        code: 'es',
        file: 'es.json'
      },
      
    ],
    lazy: true,
    langDir: 'lang',
    defaultLocale: 'en' 
     },
  css: [
    '@/assets/css/tailwind.css',
    'primeicons/primeicons.css'
  ],
})
