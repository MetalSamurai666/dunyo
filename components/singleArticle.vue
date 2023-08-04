<script setup>
    import { Splide, SplideSlide } from '@splidejs/vue-splide';
    import cardCat from "@/components/cards/cardCat.vue"

    defineProps({
        content: String,
        mostViewed: Array
    })

</script>

<template>
    <div class="article">
        <div class="article__box" v-html="content">
        </div>

        <div class="article__most">
            <div class="article__subtitle">{{ $t('most_viewed') }}</div>
            <Splide 
                class="slider splide"
                :options="{
                    perPage: 2,
                    gap: 20,
                    pagination: false,
                    breakpoints: {
                    }
                }">
                <SplideSlide class="splide__slide slider__slide" v-for="(item, index) of mostViewed" :key="index" >
                    <cardCat
                        :card="item"
                    />
                </SplideSlide>
            </Splide>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/singleArticle.scss';
</style>