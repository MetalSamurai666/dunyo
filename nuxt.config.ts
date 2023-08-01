// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: false },
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
    vueI18n: './i18n.config.ts',
    locales: [
      {
        code: "uz",
        iso: "uz",
        name: "O`zb",
      },
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
    ],
    defaultLocale: "uz",
  },
})
