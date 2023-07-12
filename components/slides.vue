<script setup>
    import { Splide, SplideSlide } from '@splidejs/vue-splide';
    import { useMainStore } from '~/store/main';
    
    const mainStore = useMainStore()

    const slides = ref([])
    const getSlides = async (slug) => {
        let res = await mainStore.getSlides(slug)
        // let res = await mainStore.getFirstCats(slug)
        if (res.data.value) {
            slides.value = res.data.value
            console.log(slides.value)
        }
    }

    onMounted(() => {
        getSlides('Nauka')
    })
</script>

<template>
    <div class="slides">
        <div class="slides__slider">
            <Splide 
                class="slider splide"
                :options="{
                    type: 'fade',
                    rewind: true,
                    autoplay: true,
                    cover: true,
                    width: '100vw',
                    height: 625,
                    drag: false,
                    pagination: false,
                    lazyLoad: true,
                    pauseOnFocus: false,
                    classes: {
                        arrows: 'splide__arrows slider__arrows',
                        arrow : 'splide__arrow slider__arrow',
                        prev  : 'splide__arrow--prev slider__prev',
                        next  : 'splide__arrow--next slider__next',
                    },
                    breakpoints: {
                        500: {
                            height: 0,
                            arrows: false,
                            drag: true,
                        }
                    }

                }">
                <SplideSlide class="splide__slide slider__slide" v-for="item, index of slides" :key="index">
                    <div class="slider__progress">{{ index+1 }}/{{ slides.length }}</div>

                    <img :src="`${mainStore.url}/${item?.img}`" :data-splide-lazy="`${mainStore.url}/${item?.img}`" class="slider__img">

                    <div class="slider__box">
                        <div class="slider__left">
                            <div class="slider__cat">{{ item?.category?.title }}</div>
                            <div class="slider__title">{{ item?.title }}</div>
                        </div>
                        <div class="slider__right">
                            <div class="slider__text" v-html="item?.content"></div>
                            <div class="slider__more">
                                <NuxtLink :to="`${item?.category?.slug}/${item?.slug}`">
                                    <span>Подробнее</span>
                                    <img src="@/assets/logo/basic/arrowRight.svg">
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </SplideSlide>
            </Splide>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/slides.scss';
</style>