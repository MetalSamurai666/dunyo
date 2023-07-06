// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: false },
  modules: [
    '@pinia/nuxt',
    'nuxt-lazy-load'
  ],
  nitro: {
    compressPublicAssets: true
  },
})
