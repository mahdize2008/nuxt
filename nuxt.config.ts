// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "~/assets/css/style.css",
  ],
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss",'nuxt-swiper']
})