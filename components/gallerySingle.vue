<script setup>
    import { Splide, SplideSlide} from '@splidejs/vue-splide';
    import VueEasyLightbox, { useEasyLightbox } from 'vue-easy-lightbox'
    import { useMainStore } from '~/store/main'

    const mainStore = useMainStore()

    const props = defineProps({
        album: {
            type: Array
        },
        images: {
            type: Array
        }
    })

    const main   = ref();
    const thumbs = ref();

    const mainOptions = {
        type      : 'slide',
        perPage   : 1,
        perMove   : 1,
        gap       : '1rem',
        pagination: false,
        height: 540,
        start: 2,
        breakpoints: {
            500: {
                height: 350
            }
        }
    }

    const thumbsOptions = {
        type        : 'slide',
        rewind      : true,
        gap         : '10px',
        pagination  : false,
        fixedWidth  : 110,
        fixedHeight : 70,
        cover       : true,
        focus       : 'center',
        isNavigation: true,
        updateOnMove: true,
        arrows: false
    }

    const gal = toRef(props)

    const {
        show, onHide, changeIndex, 
        visibleRef, indexRef, imgsRef
    } = useEasyLightbox({
        imgs: gal.value.images,
        initIndex: 0
    })

    function showImg(index) {
        indexRef.value = index
        visibleRef.value = true
    }

    onMounted(() => {
        const thumbsSplide = thumbs.value?.splide

        if ( thumbsSplide ) {
            main.value?.sync( thumbsSplide )
        }
    })
</script>

<template>
    <div class="gallerySingle">
        <div class="gallerySingle__box">
            <!-- <div class="gallerySingle__head">
            </div> -->
            <div class="gallerySingle__body">
                <div class="gallerySingle__slider">
                    <Splide
                        :options="mainOptions"
                        ref="main"
                    >
                        <SplideSlide v-for="slide, index in images" :key="index">
                            <div class="splide__box" @click="show, showImg(index)">
                                <img :src="`${slide}`">
                            </div>
                        </SplideSlide>
                    </Splide>
                </div>

                <div class="gallerySingle__thumb">
                    <Splide
                        :options="thumbsOptions"
                        ref="thumbs"
                    >
                        <SplideSlide v-for="slide, index in images" :key="index">
                            <div class="splide__box" >
                                <img :src="`${slide}`">
                            </div>
                        </SplideSlide>
                    </Splide>
                </div>
            </div>
            
            <div class="gallerySingle__light">
                <vue-easy-lightbox
                    :visible="visibleRef"
                    :imgs="imgsRef"
                    :index="indexRef"
                    @hide="onHide"
                />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/gallerySingle.scss';
</style>