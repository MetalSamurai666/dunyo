<script setup>
  import { storeToRefs } from 'pinia'
  import { useMenuStore } from '~/store/menu';

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
</script>

<template>
  <meta name="theme-color" content="#1C4077" />
  <NuxtPage />
</template>

<style lang="scss">
  @import '@/assets/styles/main.scss';
</style>