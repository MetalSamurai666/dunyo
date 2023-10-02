<script setup>
  import { initializeApp } from "firebase/app";
  import { getAnalytics } from "firebase/analytics";

  const firebaseConfig = {
    apiKey: "AIzaSyClSNunuFqvT8pIXrAiX4J0gO2BJseT-iM",
    authDomain: "dunyo-395404.firebaseapp.com",
    projectId: "dunyo-395404",
    storageBucket: "dunyo-395404.appspot.com",
    messagingSenderId: "153619766375",
    appId: "1:153619766375:web:6f19f037d9c0dcc3e008c2",
    measurementId: "G-GSNY0ZS6HR"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  // console.log(analytics);

/* Imports */
  import { storeToRefs } from 'pinia'
  import { useMenuStore } from '~/store/menu';
  import { useLocaleStore } from '~~/store/i18n'
  import { useMainStore } from '~/store/main';
  import { useSearchStore } from '~/store/search';

  /* Consts */
  const localeStore = useLocaleStore()
  const { locale } = useI18n()

  const menuStore = useMenuStore()
  const searchStore = useSearchStore()
  const { menuState } = storeToRefs(menuStore)
  const { searchState } = storeToRefs(searchStore)
  const mainStore = useMainStore()

  function changeBody() {
    if (menuState.value == true || searchState.value == true) {
      document.body.classList.add('noscroll')
    } else {
      document.body.classList.remove('noscroll')
    }
  }

  /* Getting CATegorieS🐈 */
  const getData = async (val) => {
    await mainStore.getSuperCats(val)
  }

  watch(
    () => menuState.value,
    () => {
      changeBody()
    }
  )

  watch(
    () => searchState.value,
    () => {
      changeBody()
    }
  )



  watch(
    () => locale.value,
    () => {
      getData(locale.value)
    }
  )
  
  onMounted(() => {
    document.title = 'Dunyo'
    getData(locale.value)
    

  })
</script>



<template>
  <!-- <div>
    <meta name="theme-color" content="#1C4077" />
    <NuxtPage />
  </div> -->
  <NuxtPage />
</template>

<style lang="scss">
  @import '@/assets/styles/main.scss';
</style>