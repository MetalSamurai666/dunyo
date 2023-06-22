<script setup>
/* Imports */
    import { storeToRefs } from 'pinia'
    import { useMenuStore } from '~/store/menu';

    const menuStore = useMenuStore()
    const { menuState } = storeToRefs(menuStore)

    const list = ref([
        {
            link: '',
            title: 'Главная'
        },
        {
            link: '',
            title: 'Политика',
            list: [
                {
                    link: '/',
                    title: 'Политика 1'
                },
                {
                    link: '/',
                    title: 'Политика 2'
                },
            ]
        },
        {
            link: '',
            title: 'Экономика',
            list: [
                {
                    link: '/',
                    title: 'Экономика 1'
                },
                {
                    link: '/',
                    title: 'Экономика 2'
                },
            ]
        },
        {
            link: '',
            title: 'Актуально',
            list: [
                {
                    link: '/',
                    title: 'Актуально 1'
                },
                {
                    link: '/',
                    title: 'Актуально 2'
                },
            ]
        },
        {
            link: '',
            title: 'Выборы Президента-2023'
        },
        {
            link: '',
            title: 'Центральная Азия'
        },
        {
            link: '',
            title: 'Мир об Узбекистане',
            list: [
                {
                    link: '/',
                    title: 'Мир об Узбекистане 1'
                },
                {
                    link: '/',
                    title: 'Мир об Узбекистане 2'
                },
            ]
        },
        {
            link: '',
            title: 'Архив'
        },
        {
            link: '',
            title: 'Ещё'
        },
    ])

    function closeMenu() {
        menuStore.menuChange()
    }

</script>

<template>
    <div :class="menuState ? 'menu show' : 'menu'">
        <div class="menu__box">
            <div class="menu__top">
                <div class="menu__close">
                    <button @click="closeMenu">
                        <img src="@/assets/logo/basic/close.svg">
                    </button>
                </div>
            </div>
            <div class="menu__mid">
                <div class="menu__list">
                    <ul>
                        <li 
                            v-for="item, index of list" :key="index"
                            :class="item.list ? 'item listly' : 'item'"
                            >
                            <NuxtLink :to="item.link">{{ item.title }}</NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="menu__bot">
                <ul class="menu__more">
                    <li class="item">
                        <button>
                            <div class="item__logo">
                                <img src="@/assets/logo/basic/globe.svg">
                            </div>
                            <span class="item__title">Ру</span>
                            <img src="@/assets/logo/basic/arrowDown.svg">
                        </button>
                    </li>
                    <li class="item">
                        <button>
                            <div class="item__logo">
                                <img src="@/assets/logo/basic/calendar.svg">
                            </div>
                            <span class="item__title">13/06/2023</span>
                        </button>
                    </li>
                    <li class="item">
                        <button>
                            <div class="item__logo">
                                <img src="@/assets/logo/basic/cloudRizzel.svg">
                            </div>
                            <span class="item__title">Ташкент</span>
                            <span class="item__title">32°C</span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/menu.scss';
</style>