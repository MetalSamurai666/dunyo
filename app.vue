<script setup>
  import { storeToRefs } from 'pinia'
  import { useMenuStore } from '~/store/menu';
  import { useLocaleStore } from '~~/store/i18n'

  const localeStore = useLocaleStore()
  const { locale } = useI18n()


  const menuStore = useMenuStore()
  const {
    menuState
  } = storeToRefs(menuStore)

  watch(
    () => menuState.value,
    () => {
      changeBody()
    }
  )

  function changeBody() {
    if (menuState.value == true) {
      console.log('yes');
      document.body.classList.add('noscroll')
    } else {
      document.body.classList.remove('noscroll')
    }
  }

  onMounted(() => {
    document.title = 'Dunyo'
    localeStore.getTranslations(locale.value)

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