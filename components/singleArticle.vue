<script setup>
    import { storeToRefs } from 'pinia';
    import { Splide, SplideSlide } from '@splidejs/vue-splide';
    
    import cardCat from "@/components/cards/cardCat.vue"
    import { useMainStore } from '@/store/main';
    
    const mainStore = useMainStore()
    const { mainUrl } = storeToRefs(mainStore)
    const route = useRoute()

    defineProps({
        news: Object,
        mostViewed: Array
    })

    

</script>

<template>
    <div class="article" v-if="mostViewed?.length > 0">
        <div class="article__box" v-html="news?.content">
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
                        500: {
                            perPage: 1,
                            arrows: false
                        }
                    }
                }">

                <SplideSlide class="splide__slide slider__slide" v-for="(item, index) of mostViewed" :key="index" >
                    <cardCat
                        :card="item"
                    />
                </SplideSlide>
            </Splide>
        </div>
        
        <ul class="article__send">
            <ShareNetwork
                class="item telegram"
                network="telegram"
                :url="`${mainUrl}${route.fullPath}`"
                :title="news?.title || ''"
                description=""
                quote=""
                hashtags=""
            >
                <img src="@/assets/logo/socials/telegram.svg">
            </ShareNetwork>
            <ShareNetwork
                class="item instagram"
                network="facebook"
                :url="`${mainUrl}${route.fullPath}`"
                :title="news?.title || ''"
                description=""
                quote=""
                hashtags=""
            >
                <img src="@/assets/logo/socials/facebook.svg">
            </ShareNetwork>
            <ShareNetwork
                class="item twitter"
                network="twitter"
                :url="`${mainUrl}${route.fullPath}`"
                :title="news?.title || ''"
                description=""
                quote=""
                hashtags=""
            >
                <img src="@/assets/logo/socials/twitter.svg">
            </ShareNetwork>
            <ShareNetwork
                class="item vk"
                network="vk"
                :url="`${mainUrl}${route.fullPath}`"
                :title="news?.title || ''"
                description=""
                quote=""
                hashtags=""
            >
                <img src="@/assets/logo/socials/vk.svg">
            </ShareNetwork>
        </ul>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/singleArticle.scss';
</style>