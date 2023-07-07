<script setup>
/* Imports */
    import { storeToRefs } from 'pinia';
    import { useMainStore } from '~/store/main';
    import { useMenuStore } from '~/store/menu';

    import { useLocaleStore } from '~/store/i18n';
    
    const menuStore = useMenuStore()
    const mainStore = useMainStore()
    
    const localeStore = useLocaleStore()
    const { locale, locales, setLocale } = useI18n()
    const { book }  = storeToRefs(localeStore)

    const availableLocales = computed(() => {
        return (locales.value)
    })

/* Functions */
    function changeLang(val) {
        // localeStore.getTranslations(val)
        getData(val)
    }

/* Header fixed on scroll */
    var scrollTrigger = 0;
    if (window.innerWidth > 500) {
        window.onscroll = function() {
            if (window.scrollY > scrollTrigger || window.pageYOffset > scrollTrigger) {
                document.querySelector('header').classList.add('alt');
            } else {
                document.querySelector('header').classList.remove('alt');
            }
        };
    } else {
        window.onscroll = function() {
            if (window.scrollY > scrollTrigger || window.pageYOffset > scrollTrigger) {
                document.querySelector('header').classList.add('mobile-alt');
            } else {
                document.querySelector('header').classList.remove('mobile-alt');
            }
        };
    }

/* Mobile Menu */
    function openMenu() {
        menuStore.menuChange()
    }

/* Getting CATegorieS🐈 */
    const cats = ref([])
    const getData = async (val) => {
        let res = await mainStore.getCats(val)
        if (res.data.value) {
            cats.value = res.data.value
        }
    }

onMounted(() => {
    getData(locale.value)
})
</script>

<template>
    <header class="header">
        <!-- =============================================================== -->
        <!-- Top Section -->
        <!-- =============================================================== -->
        <div class="header__top">
            <div class="container">
                <div class="header__left">
                    <span class="header__region">Ташкент</span>
                    <div class="header__weather">
                        <img src="@/assets/logo/basic/cloudRizzel.svg">
                        <span>32°C</span>
                    </div>
                </div>

                <div class="header__logo">
                    <NuxtLink to="/">
                        <img src="@/assets/logo/logo.png">
                    </nuxtLink>
                </div>

                <div class="header__right">
                    <div class="header__date">
                        <img src="@/assets/logo/basic/calendar.svg">
                        <span>31/01/2003</span>
                    </div>
                    <div class="header__lang">
                        <div class="item" 
                            v-for="lang in availableLocales"
                            :key="lang.code"
                        >
                            <button
                                :class="lang.code == locale ? 'active' : ''"
                                @click.prevent.stop="setLocale(lang.code), changeLang(lang.code)"
                            >
                                <span>{{ lang.name }}</span>
                            </button>
                        </div>
                    </div>

                    <div class="header__menu">
                        <button @click="openMenu">
                            <img src="@/assets/logo/basic/menu.svg">
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- =============================================================== -->
        <!-- Bottom Section -->
        <!-- =============================================================== -->
        <div class="header__bot">
            <div class="container">
                <div class="header__subLogo">
                    <NuxtLink to="/">
                        <img src="@/assets/logo/logo.png">
                    </NuxtLink>
                </div>

                <ul class="header__list">
                    <li 
                        :class="item?.list ? 'item listly' : 'item'" 
                        v-for="(item, index) of cats" 
                        :key="index"
                    >
                        <NuxtLink 
                            class="item__link" 
                            :to="`/${item?.slug}`"
                        >
                            <span>{{ item?.title }}</span>
                        </NuxtLink>

                        <ul 
                            class="item__list" 
                            v-if="item?.subs.length > 0"
                        >
                            <li
                                v-for="subItem, index of item?.subs" 
                                :key="index"
                            >
                                <NuxtLink :to="`/${subItem?.slug}`">
                                    <span>{{ subItem?.title }}</span>
                                </NuxtLink>
                            </li>
                        </ul>
                    </li>
                </ul>

                <div class="header__search">
                    <button>
                        <img src="@/assets/logo/basic/magnifier.svg">
                    </button>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss">
@import '@/assets/styles/components/header.scss';
</style>