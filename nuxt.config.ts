// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    'nuxt-lazy-load'
  ],
  nitro: {
    compressPublicAssets: true
  },
  i18n: {
    strategy: 'no_prefix',
    locales: [
      {
        code: "ru",
        iso: "ru",
        name: "Ру",
      },
      {
        code: "en",
        iso: "en",
        name: "Eng",
      },
      {
        code: "uz",
        iso: "uz",
        name: "O`zb",
      },
    ],
    defaultLocale: "ru"
  },
})
