// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: false },
  head: {
    __dangerouslyDisableSanitizers: ['script'],
    script: [
      {
        hid: 'gtm-script1',
        src: 'https://www.googletagmanager.com/gtag/js?id=G-0S8WKKTVME',
        defer: true
      },
      {
        hid: 'gtm-script2',
        innerHTML: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-0S8WKKTVME');
        `,
        type: 'text/javascript',
        charset: 'utf-8'
      }
    ]
  },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    'nuxt-lazy-load',
    'nuxt-gtag',
    [
      'yandex-metrika-module-nuxt3',
      {
        id: '95112568',
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
      }
    ]
    
  ],
  // plugins: [
  //   'vue-social-sharing'
  // ],
  gtag: {
    id: 'G-0S8WKKTVME'
  },
  nitro: {
    compressPublicAssets: true
  },
  i18n: {
    strategy: 'prefix',
    vueI18n: './i18n.config.ts',
    locales: [
      {
        code: "uz",
        iso: "uz",
        name: "O`zb",
      },
      {
        code: "uzk",
        iso: "uzk",
        name: "Ўз",
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
