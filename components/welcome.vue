<script setup>
    import { Splide, SplideSlide } from '@splidejs/vue-splide';
    import { useMainStore } from '~/store/main'

    const indexStore = useMainStore()

    const slider = ref([])
    const getSlider = async () => {
        let res = await indexStore.getArray('abroor')
        slider.value = res.data.value
    }

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
                    rewind: true,
                    interval: 5000,
                    cover: true,
                    width: '100vw',
                    height: '100vh',
                    autoplay: true,
                    arrows: false,
                    pagination: false,
                    pauseOnFocus: false,
                    pauseOnHover: false,
                    
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
        <div class="container">
            <div class="welcome__top">
                <div class="welcome__news"></div>
            </div>
            <div class="welcome__bot">
                <div class="welcome__actual"></div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/welcome.scss';
</style>