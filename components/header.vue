<script setup>
/* Header fixed on scroll */
    var className = "alt";
    var scrollTrigger = 0;
    window.onscroll = function() {
        if (window.scrollY > scrollTrigger || window.pageYOffset > scrollTrigger) {
            document.querySelector('header').classList.add(className);
        } else {
            document.querySelector('header').classList.remove(className);
        }
    };

/* Nav menu */
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