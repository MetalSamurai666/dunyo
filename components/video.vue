<script setup>
    import { useMainStore } from "~/store/main"
    import { getId } from '@/utils/video.js'

    const mainStore = useMainStore()

    const sexy = computed(() => {
        return t('videos')
    }) 

    const videos = ref({
        category: {
            title: sexy
        },
        list: []
    })

    const getData = async () => {
        let res = await mainStore.getVideos()
        if (res.data.value) {
            console.log(res.data.value)
            videos.value.list = res.data.value.links.map(item => {
                item.link = getId(item.url)
                return item
            })
            console.log(videos.value)
        }
    }

    onMounted(() => {
        getData()
    })
</script>

<template>
    <div class="video">
        <div class="container">
            <div class="video__box">
                <div class="video__head">
                    <div class="video__title">{{ $t('videos') }}</div>
                    
                    <NuxtLink class="video__more" to="/videos">{{ $t('more') }}</NuxtLink>
                </div>

                <div class="video__main">
                    <div class="video__grid">
                        <div 
                            class="video__item" 
                            v-for="item, index of videos?.list" 
                            :key="index"
                        >
                            <div v-html="item?.link"></div>
                            <!-- <iframe width="100%" height="100%" :src="item.link" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen data-not-lazy></iframe> -->
                        </div>
                    </div>

                    <div class="video__poster">
                        <img src="@/assets/img/video_poster.jpg">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss"> 
@import '@/assets/styles/components/video.scss';
</style>