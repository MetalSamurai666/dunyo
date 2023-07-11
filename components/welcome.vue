<script setup>
    import { Splide, SplideSlide } from '@splidejs/vue-splide';
    import { useMainStore } from '~/store/main'

    const mainStore = useMainStore()

/* Slider News */    
    const slider = ref([])
    const getSlider = async () => {
        let res = await mainStore.getSliderNews()
        if (res.data.value) {
            slider.value = res.data.value
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

    onMounted(() => {
        getSlider()
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
                    interval: 5000,
                    cover: true,
                    width: '100vw',
                    height: '100vh',
                    arrows: false,
                    pagination: false,
                    autoplay: true,
                    resetProgress: false,
                    pauseOnHover: false,
                    lazyLoad: true,
                    breakpoints: {
                        500:{
                            height: 600,
                        }
                    }
                }">
                <SplideSlide v-for="(item, index) of slider" class="splide__slide slider__slide" :key="index">
                    <img class="slider__img" 
                        :src="`${mainStore.url}/${item?.img}`" 
                        :data-splide-lazy="`${mainStore.url}/${item?.img}`">
                    <div class="container">
                        <div class="slider__text">
                            <div class="slider__info">{{ item?.category?.title }}</div>
                            <div class="slider__title">{{ item?.title }}</div>
                        </div>
                    </div>
                </SplideSlide>
            </Splide>
        </div>
        <div class="welcome__main">
            <div class="container">
                <div class="welcome__top">
                    <div class="welcome__news">
                        <span>Последние новости</span>
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
                        <span>Актуально</span>
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
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/welcome.scss';
</style>