// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  alias: { "models": "../models", "utils": "../utils" },

  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/png', href: '/icon.png' }]
    }
  },
})