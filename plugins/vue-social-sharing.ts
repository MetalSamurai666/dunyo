import VueSocialSharing from 'vue-social-sharing/src/vue-social-sharing'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueSocialSharing)
})