<script setup>
    import { Splide, SplideSlide } from '@splidejs/vue-splide';
    import { useMainStore } from '~/store/main'

    const mainStore = useMainStore()
    const { locale } = useI18n()

/* Slider News */    
    const slider = ref([])
    const getSlider = async (lang) => {
        let res = await mainStore.getSliderNews(lang)
        if (res.data.value) {
            slider.value = res.data.value
            console.log(slider.value);
        }
    }

/* LatestNews */
    const latest = ref([])
    const getLatest = async () => {
        let res = await mainStore.getLatestNews()
        if (res.data.value) {
            latest.value = res.data.value
        }
    }

/* Actual News */
    const actual = ref([])
    const getActual = async () => {
        let res = await mainStore.getActualNews()
        if (res.data.value) {
            actual.value = res.data.value
        }
    }

    watch(
        () => locale.value,
        () => {
            getSlider(locale.value)
        }
    )

    onMounted(() => {
        getSlider(locale.value)
        getLatest()
        getActual()
    })

</script>

<template>
    <div class="welcome">
        <div class="welcome__slider">
            <Splide 
                class="slider splide"
                :options="{
                    type: 'fade',
                    cover: true,
                    width: '100vw',
                    height: '100vh',
                    arrows: false,
                    pagination: false,
                    autoplay: true,
                    interval: 3000,
                    rewind: true,
                    pauseOnHover: true,
                    pauseOnFocus: false,
                    lazyLoad: true,
                    breakpoints: {
                        800: {
                            height: 800,
                        },
                        500:{
                            height: 600,
                        }
                    }
                }">
                <SplideSlide class="splide__slide slider__slide" v-for="(item, index) of slider" :key="index" >
                    <img class="slider__img" 
                        :src="`${mainStore.url}/${item?.img}`" 
                        :data-splide-lazy="`${mainStore.url}/${item?.img}`"
                        data-not-lazy>
                    <div class="container">
                        <div class="slider__text">
                            <div class="slider__info">{{ item?.category?.title }}</div>
                            <div class="slider__title">{{ item?.title }}</div>
                            <div class="slider__link">
                                <NuxtLink :to="`${item?.category?.slug}/${item?.slug}`">
                                    <span>{{ $t('more') }}</span>
                                    <img src="@/assets/logo/basic/arrowRight.svg">
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </SplideSlide>
            </Splide>
        </div>
        <!-- <div class="welcome__main">-->
            <div class="container welcome__container"> 
                <div class="welcome__top">
                    <div class="welcome__news">
                        <span>{{ $t('latest_news') }}</span>
                        <ul>
                            <li 
                                class="item"
                                v-for="item, index of latest" 
                                :key="index"
                            >
                                <div class="item__box">
                                    <div class="item__cat">{{ item?.category?.title }}</div>
                                    <NuxtLink 
                                        class="item__title" 
                                        :to="`${item?.category?.slug}/${item?.slug}`"
                                    >
                                        {{ item?.title }}
                                    </NuxtLink>
                                    <div class="item__date">{{ item?.date .slice(0, 10)}}</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="welcome__bot">
                    <div class="welcome__actual">
                        <span>{{ $t('actual') }}</span>
                        <ul>
                            <li 
                                class="item" 
                                v-for="item, index of actual" 
                                :key="index"
                            >
                                <div class="item__box">
                                    <div class="item__left">
                                        <NuxtLink :to="`${item?.category?.slug}/${item?.slug}`" class="item__img">
                                            <img :src="`${mainStore.url}/${item?.img}`">
                                        </NuxtLink>
                                    </div>
                                    <div class="item__right">
                                        <div class="item__top">
                                            <div class="item__date">{{ item?.date.slice(0,10) }}</div>
                                            <div class="item__cat">{{ item?.category?.title }}</div>
                                        </div>
                                        <div class="item__bot">
                                            <NuxtLink :to="`${item?.category?.slug}/${item?.slug}`">
                                                {{ item?.title }}
                                            </NuxtLink>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        <!-- </div> -->
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/welcome.scss';
</style>