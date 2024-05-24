// https://nuxt.com/docs/api/configuration/nuxt-config
// eslint-disable-next-line no-undef
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  alias: {
    "models": "../models",
    "~/models/*": "../models/*",
    "utils": "../utils",
    "hp-types": "../types/index.d.ts"
  },

  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/png', href: '/icon.png' }]
    }
  },

  modules: ["@nuxt/eslint"],

  eslint: {}
})