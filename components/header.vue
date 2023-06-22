<script setup>
/* Imports */
    import { storeToRefs } from 'pinia'
    import { useMenuStore } from '~/store/menu';

    const menuStore = useMenuStore()
    const { menuState } = storeToRefs(menuStore)

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

/* Nav List */
    const nav = ref([
        {
            link: '/',
            title: 'Главная',
        },
        {
            link: '/',
            title: 'Политика',
            list: []
        },
        {
            link: '/',
            title: 'Экономика',
            list: []
        },
        {
            link: '/',
            title: 'Актуально',
            list: []
        },
        {
            link: '/',
            title: 'Выборы Президента-2023',
        },
        {
            link: '/',
            title: 'Центральная Азия',
        },
        {
            link: '/',
            title: 'Мир об Узбекистане',
            list: []
        },
        {
            link: '/',
            title: 'Еще',
        },
        {
            link: '/',
            title: 'Архив',
        },
    ])

/* Mobile Menu */
    function openMenu() {
        menuStore.menuChange()
    }
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
                        <span>Ру</span>
                        <img src="@/assets/logo/basic/arrowDown.svg">
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

                <nav class="header__nav">
                    <ul>
                        <li :class="item?.list ? 'item listly' : 'item'" v-for="(item, index) of nav" :key="index">
                            <NuxtLink :to="item?.link"><span>{{ item?.title }}</span></NuxtLink>
                        </li>
                    </ul>
                </nav>

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
@import '@/assets/styles/components/header';
</style>