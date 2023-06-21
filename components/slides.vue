<script setup>
    import { Splide, SplideSlide } from '@splidejs/vue-splide';

    const slides = ref([
        {
            link: '/',
            img: 'https://picsum.photos/1920/1080',
            cat: 'Спорт',
            title: 'Сборная Узбекистана по велоспорту продолжает завоевывать медали на чемпионате Азии в Таиланде',
            text: 'Вчерашний день чемпионата Азии по велоспорту в Таиланде также оказался плодотворным для сборной Узбекистана, сообщает корреспондент ИА «Дунё» со ссылкой на данные Национального олимпийского комитета. В индивидуальной гонке среди спортсменок до 20 и 23 лет соотечественницы заняли призовые места.'
        },
        {
            link: '/',
            img: 'https://picsum.photos/1920/1079',
            cat: 'Природа',
            title: 'Восстановление лесов получает приоритет в российской экологической политике.',
            text: 'Сегодня в лесу произошло удивительное открытие! Ученые обнаружили редкое растение, которое считалось вымершим более 50 лет. Это открытие может помочь в сохранении уязвимых экосистем и биоразнообразия лесов. Эксперты призывают общественность заботиться о природе и сохранять наши ценные лесные ресурсы для будущих поколений.'
        },
        {
            link: '/',
            img: 'https://picsum.photos/1920/1078',
            cat: 'Природа',
            title: 'Восстановление лесов получает приоритет в российской экологической политике.',
            text: 'Сегодня в лесу произошло удивительное открытие! Ученые обнаружили редкое растение, которое считалось вымершим более 50 лет. Это открытие может помочь в сохранении уязвимых экосистем и биоразнообразия лесов. Эксперты призывают общественность заботиться о природе и сохранять наши ценные лесные ресурсы для будущих поколений.'
        },
    ])
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
                    classes: {
                        arrows: 'splide__arrows slider__arrows',
                        arrow : 'splide__arrow slider__arrow',
                        prev  : 'splide__arrow--prev slider__prev',
                        next  : 'splide__arrow--next slider__next',
                    },

                }">
                <SplideSlide class="splide__slide slider__slide" v-for="item, index of slides" :key="index">
                    <div class="slider__progress">{{ index+1 }}/{{ slides.length }}</div>

                    <img :src="item.img" :data-splide-lazy="item.img" class="slider__img">

                    <div class="slider__box">
                        <div class="slider__left">
                            <div class="slider__cat">{{ item.cat }}</div>
                            <div class="slider__title">{{ item.title }}</div>
                        </div>
                        <div class="slider__right">
                            <div class="slider__text">
                                <p>{{ item.text }}</p>
                            </div>
                            <div class="slider__more">
                                <NuxtLink to="/">
                                    <span>Подробне</span>
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