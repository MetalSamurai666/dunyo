<script setup>
/* Imports */
    import { storeToRefs } from 'pinia';
    import { useMainStore } from '~/store/main';
    import { useMenuStore } from '~/store/menu';
    import { useSearchStore } from '~/store/search';
    import { useLocaleStore } from '~/store/i18n';
    
    const mainStore = useMainStore()
    const menuStore = useMenuStore()
    const searchStore = useSearchStore()
    
    const { locale, locales, setLocale } = useI18n()
    const { cats }  = storeToRefs(mainStore)
    const availableLocales = computed(() => {
        return (locales.value)
    })

/* Header fixed on scroll */
    var scrollTrigger = 50;
    if (window.innerWidth > 500) {
        window.onscroll = function() {
            if (window.scrollY > scrollTrigger || window.pageYOffset > scrollTrigger) {
                document.querySelector('header').classList.add('alt');
            } else {
                document.querySelector('header').classList.remove('alt');
            }
        }
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
    // const cats = ref([])
    // const getData = async (val) => {
    //     let res = await mainStore.getCats(val)
    //     if (res.data.value) {
    //         cats.value = res.data.value
    //         // console.log(cats.value);
    //     }
    // }

/* Get the current date  */
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var year = currentDate.getFullYear();
    if (day < 10) { day = '0' + day }
    if (month < 10) { month = '0' + month }
    var formattedDate = day + '/' + month + '/' + year;


/* Weather */
    const location = ref()
    // const successCallback = async (position) => {
    //     // console.log(position);
    //     let res = await mainStore.getWeather(
    //         position?.coords?.latitude, position?.coords?.longitude
    //     )
    //     if (res.data.value) {
    //         location.value = res.data.value
    //         console.log(location.value);
    //     }
    // }
    const getWeat = async () => {
        let res = await mainStore.getWeather()
        if (res.data.value) {
            location.value = res.data.value
            // console.log(location.value)
        }
    }
    // const errorCallback = (error) => {
    //     console.log(error);
    // }

/* Search Box */
    function openSearch() {
        searchStore.searchChange()
    }

    onMounted(() => {
        getWeat(locale.value)

        // navigator.geolocation.getCurrentPosition(successCallback, errorCallback)
    })
</script>

<template>
    <header class="header" >
        <!-- =============================================================== -->
        <!-- Top Section -->
        <!-- =============================================================== -->
        <div class="header__top">
            <div class="container">
                <div class="header__left">
                    <span class="header__region">{{ $t('tashkent') }}</span>
                    <div class="header__weather">
                        <img src="@/assets/logo/basic/cloudRizzel.svg" data-not-lazy>
                        <span v-if="location"> {{ location }} °C</span>
                    </div>
                </div>

                <div class="header__logo">
                    <NuxtLink :to="localePath('/')">
                        <img src="@/assets/logo/logo.png" data-not-lazy>
                    </nuxtLink>
                </div>

                <div class="header__right">
                    <div class="header__search">
                        <NuxtLink to="/search">
                            <img src="@/assets/logo/basic/magnifier.svg">
                        </NuxtLink>
                        <!-- <button @click="openSearch">
                            <img src="@/assets/logo/basic/magnifier.svg">
                        </button> -->
                    </div>

                    <div class="header__date">
                        <img src="@/assets/logo/basic/calendar.svg" data-not-lazy>
                        <span>{{ formattedDate }}</span>
                    </div>
                    <div class="header__lang">
                        <div class="item" 
                            v-for="lang in availableLocales"
                            :key="lang.code"
                        >
                            <button
                                :class="lang.code == locale ? 'active' : ''"
                                @click.prevent.stop="setLocale(lang.code)"
                            >
                                <span>{{ lang.name }}</span>
                            </button>
                        </div>
                    </div>

                    <div class="header__menu">
                        <button @click="openMenu">
                            <img src="@/assets/logo/basic/menu.svg" data-not-lazy>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- =============================================================== -->
        <!-- Bottom Section -->
        <!-- =============================================================== -->
        <div class="header__bot">
            <div class="header__container">
                <div class="header__subLogo">
                    <NuxtLink :to="localePath('/')">
                        <img src="@/assets/logo/logo.png">
                    </NuxtLink>
                </div>

                <ul class="header__list">

                    <li 
                        :class="item?.subs.length > 0 ? 'item listly' : 'item'" 
                        v-for="(item, index) of cats" 
                        :key="index"
                    >
                        <NuxtLink 
                            class="item__link" 
                            :to="item?.slug != 'uzbekistan-segodnya' ? localePath(item?.slug.length > 1 ? `/${item?.slug}` : ``) : ''"
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
                                <NuxtLink :to="localePath(`/${subItem?.slug}`)">
                                    <span>{{ subItem?.title }}</span>
                                </NuxtLink>
                            </li>
                        </ul>
                    </li>

                    <li class="item">
                        <NuxtLink :to="localePath('/contacts')" class="item__link">
                            <span>{{ $t('contacts') }}</span>
                        </NuxtLink>
                    </li>
                </ul>

                <!-- <div class="header__search">
                    <button>
                        <img src="@/assets/logo/basic/magnifier.svg">
                    </button>
                </div> -->
            </div>
        </div>
    </header>
</template>

<style lang="scss">
@import '@/assets/styles/components/header.scss';
</style>