<script setup>
    import { Splide, SplideSlide } from '@splidejs/vue-splide';
    import { useMainStore } from '~/store/main'

    const mainStore = useMainStore()
    const { locale } = useI18n()

    const sponsors = ref([])
    const getData = async (lang) => {
        let res = await mainStore.getSponsors(lang)
        if (res.data.value) {
            console.log(res.data);
            sponsors.value = res.data.value
        }
    }

    onMounted(() => {
        getData(locale.value)
    })
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
                        <a :href="item?.link" target="_blank" class="slider__img">
                            <img data-not-lazy :src="`${mainStore.url}/${item?.img}`">
                            <span>{{ item?.title }}</span>
                        </a>
                    </SplideSlide>
                </Splide>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/sponsors';
</style>