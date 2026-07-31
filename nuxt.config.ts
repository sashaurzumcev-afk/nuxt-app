// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { 
    enabled: true
  },
  css: [
    '@/assets/app.css',
  ],
  modules:[
    'nuxt-svgo','@nuxtjs/color-mode'
  ],
  svgo:{
    autoImportPath: './assets/icons/',
    global:false,
  },
  colorMode: {
    preference: 'dark',      // тема по умолчанию
    fallback: 'dark',
    classSuffix: '-mode',
    storageKey: 'color-mode'
  }
})
