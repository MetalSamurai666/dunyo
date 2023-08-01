<script setup>
    import { Splide, SplideSlide } from '@splidejs/vue-splide';

    const sponsors = ref([
        {
            title: 'Законодательная палата Олий Мажлиса Республики Узбекистан'
        },
        {
            title: 'Законодательная палата Олий Мажлиса Республики Узбекистан'
        },
        {
            title: 'Законодательная палата Олий Мажлиса Республики Узбекистан'
        },
        {
            title: 'Законодательная палата Олий Мажлиса Республики Узбекистан'
        },
        {
            title: 'Законодательная палата Олий Мажлиса Республики Узбекистан'
        },
        {
            title: 'Законодательная палата Олий Мажлиса Республики Узбекистан'
        },
        {
            title: 'Законодательная палата Олий Мажлиса Республики Узбекистан'
        },
        {
            title: 'Законодательная палата Олий Мажлиса Республики Узбекистан'
        },
        {
            title: 'Законодательная палата Олий Мажлиса Республики Узбекистан'
        },
        {
            title: 'Законодательная палата Олий Мажлиса Республики Узбекистан'
        },
        {
            title: 'Законодательная палата Олий Мажлиса Республики Узбекистан'
        },
        {
            title: 'Законодательная палата Олий Мажлиса Республики Узбекистан'
        },
        {
            title: 'Законодательная палата Олий Мажлиса Республики Узбекистан'
        },
        {
            title: 'Законодательная палата Олий Мажлиса Республики Узбекистан'
        },
        {
            title: 'Законодательная палата Олий Мажлиса Республики Узбекистан'
        },
        {
            title: 'Законодательная палата Олий Мажлиса Республики Узбекистан'
        },
        {
            title: 'Законодательная палата Олий Мажлиса Республики Узбекистан'
        },
        {
            title: 'Законодательная палата Олий Мажлиса Республики Узбекистан'
        },
        {
            title: 'Законодательная палата Олий Мажлиса Республики Узбекистан'
        },
        {
            title: 'Законодательная палата Олий Мажлиса Республики Узбекистан'
        },
        {
            title: 'Законодательная палата Олий Мажлиса Республики Узбекистан'
        },
        {
            title: 'Законодательная палата Олий Мажлиса Республики Узбекистан'
        },
    ])
</script>

<template>
    <div class="sponsors">
        <div class="container">
            <div class="sponsors__box">
                <Splide 
                    class="slider splide"
                    :options="{
                        type: 'loop',
                        rewind: true,
                        autoplay: true,
                        width: '100%',
                        gap: 20,
                        perPage: 6,
                        perMove: 1,
                        arrows: false,
                        classes: {
                            pagination: 'splide__pagination slider-pagination',
                            page: 'splide__pagination__page slider-page',
                        },
                        breakpoints: {
                            800: {
                                perPage: 4,
                            },
                            500: {
                                fixedWidth: 200
                            }
                        }
                    }">
                    <SplideSlide 
                        class="splide__slide slider__slide" 
                        v-for="item, index of sponsors" 
                        :key="index"
                    >
                        <div class="slider__img" >
                            <img data-not-lazy src="@/assets/img/sponsors/sponsors1.png">
                            <span>Законодательная палата Олий Мажлиса Республики Узбекистан</span>
                        </div>
                    </SplideSlide>
                </Splide>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/sponsors';
</style>