<script setup>
/* Imports */
  import { storeToRefs } from 'pinia'
  import { useMainStore } from '~/store/main';
  import { useMenuStore } from '~/store/menu';
  import { useLocaleStore } from '~~/store/i18n'

  /* Consts */
  const localeStore = useLocaleStore()
  const { locale } = useI18n()

  const menuStore = useMenuStore()
  const {
    menuState
  } = storeToRefs(menuStore)


  function changeBody() {
    if (menuState.value == true) {
      document.body.classList.add('noscroll')
    } else {
      document.body.classList.remove('noscroll')
    }
  }


/* Weather */
  const location = ref({})
  const successCallback = async (position) => {
    console.log(position);
    let res = await mainStore.getWeather(position)
    if (res.data.value) {
      location.value = res.data.value
    }
  }

  const errorCallback = (error) => {
    console.log(error);
  }


  watch(
    () => menuState.value,
    () => {
      changeBody()
    }
  )
  
  onMounted(() => {
    document.title = 'Dunyo'
    localeStore.getTranslations(locale.value)

    // navigator.geolocation.getCurrentPosition(successCallback, errorCallback)
  })
</script>

<template>
  <div>
    <meta name="theme-color" content="#1C4077" />
    <NuxtPage />
  </div>
</template>

<style lang="scss">
  @import '@/assets/styles/main.scss';
</style>