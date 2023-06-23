<script setup>
    import { Splide, SplideSlide } from '@splidejs/vue-splide';
    import { useMainStore } from '~/store/main'

    const indexStore = useMainStore()

    const slider = ref([])
    const getSlider = async () => {
        let res = await indexStore.getArray('abroor')
        slider.value = res.data.value
    }

    const news = ref([
        {
            cat: 'Событие',
            title: 'В Хиве стартовала Международная олимпиада по химии имени Абу Райхана Беруни',
            link: '',
            date: '13/02 22:46'
        },
        {
            cat: 'Событие',
            title: 'В Хиве стартовала Международная олимпиада по химии имени Абу Райхана Беруни',
            link: '',
            date: '13/02 22:46'
        },
        {
            cat: 'Событие',
            title: 'В Хиве стартовала Международная олимпиада по химии имени Абу Райхана Беруни',
            link: '',
            date: '13/02 22:46'
        },
        {
            cat: 'Событие',
            title: 'В Хиве стартовала Международная олимпиада по химии имени Абу Райхана Беруни',
            link: '',
            date: '13/02 22:46'
        },
        {
            cat: 'Событие',
            title: 'В Хиве стартовала Международная олимпиада по химии имени Абу Райхана Беруни',
            link: '',
            date: '13/02 22:46'
        },
        {
            cat: 'Событие',
            title: 'В Хиве стартовала Международная олимпиада по химии имени Абу Райхана Беруни',
            link: '',
            date: '13/02 22:46'
        },
        {
            cat: 'Событие',
            title: 'В Хиве стартовала Международная олимпиада по химии имени Абу Райхана Беруни',
            link: '',
            date: '13/02 22:46'
        },
        {
            cat: 'Событие',
            title: 'В Хиве стартовала Международная олимпиада по химии имени Абу Райхана Беруни',
            link: '',
            date: '13/02 22:46'
        },
    ])

    const actual = ref([
        {
            link: '',
            date: '12',
            cat: 'Президент',
            text: 'Президент Узбекистана на встрече с губернатором Ломбардии отметил большой потенциал узбекско-итальянского межрегионального'
        },
        {
            link: '',
            date: '12',
            cat: 'Президент',
            text: 'Президент Узбекистана на встрече с губернатором Ломбардии отметил большой потенциал узбекско-итальянского межрегионального'
        },
        {
            link: '',
            date: '12',
            cat: 'Президент',
            text: 'Президент Узбекистана на встрече с губернатором Ломбардии отметил большой потенциал узбекско-итальянского межрегионального'
        },
        {
            link: '',
            date: '12',
            cat: 'Президент',
            text: 'Президент Узбекистана на встрече с губернатором Ломбардии отметил большой потенциал узбекско-итальянского межрегионального'
        },
    ])

    onMounted(() => {
        getSlider()
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
                    breakpoints: {
                        500:{
                            height: 600,
                        }
                    }
                }">
                <SplideSlide v-for="(item, index) of slider" class="splide__slide slider__slide" :key="index">
                    <img class="slider__img" :src="item.img">

                    <div class="container">
                        <div class="slider__text">
                            <div class="slider__info">{{ item.category }}</div>
                            <div class="slider__title">{{ item.title }}</div>
                        </div>

                    </div>
                </SplideSlide>
                <!-- <SplideSlide>
                    <img src="~/assets/img/welcome/slider2.jpg">
                </SplideSlide> -->
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
                                v-for="item, index of news" 
                                :key="index"
                            >
                                <div class="item__box">
                                    <div class="item__cat">{{ item.cat }}</div>
                                    <NuxtLink 
                                        class="item__title" 
                                        :to="`/${item.link}`"
                                    >
                                        {{ item.title }}
                                    </NuxtLink>
                                    <div class="item__date">{{ item.date }}</div>
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
                                        <div class="item__img">
                                            <img src="@/assets/img/welcome/actual.jpg">
                                        </div>
                                    </div>
                                    <div class="item__right">
                                        <div class="item__top">
                                            <div class="item__date">{{ item.date }} минут назад</div>
                                            <div class="item__cat">{{ item.cat }}</div>
                                        </div>
                                        <div class="item__bot">
                                            <NuxtLink :to="`/${item.link}`">{{ item.text }}</NuxtLink>
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