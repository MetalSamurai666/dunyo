<script setup>
    import { storeToRefs } from "pinia";
    import { useMainStore } from "~/store/main"
    import { useLocaleStore } from "~/store/i18n";
    import cardVideo from "@/components/cards/cardVideo.vue";
    import {getId} from '@/utils/video'
    const mainStore = useMainStore()
    const localeStore = useLocaleStore()
    const { book } = storeToRefs(localeStore)
    // const { locale } = useI18n()
    // const route = useRoute()


    const videos = ref({
        category: {
            title: 'Видео'
        },
        list: []
    })
    
    const getData = async () => {
        let res = await mainStore.getVideos()
        if (res.data.value) {
            videos.value.list = res.data.value.map(item => {
                item.link = getId(item.url)
                return item
            })
            console.log(videos.value.list)

        }
    }

    // watch(
    //     () => locale.value,
    //     () => {
    //         getData(locale.value)
    //     }
    // )

    onMounted(() => {
        getData()
    })
</script>

<template>
    <NuxtLayout name="alt-header">
        <div class="categories page">
            <Breadcrumbs  
                :breadObj="videos?.category"
            />
            <div class="categories__body">
                <div class="container">
                    <div class="categories__box">
                        <div class="categories__left">
                            <!-- <catWrapper 
                                :news="cat.news?.slice(0,2)"
                                :actual="cat.actual"
                            /> -->
                            <card-video 
                                v-for="item, index of videos?.list"
                                :card="item"
                                :key="index"
                            />
                        </div>
                        <div class="categories__right">
                            <!-- <catMore
                                :moreTitle="book?.important_dates"
                                :moreData="cat?.important_dates"
                                class="categories__more"
                            />

                            <div class="categories__banner">
                                <img src="@/assets/img/economy/poster.jpg">
                            </div>

                            <catMore
                                v-if="cat?.rand_category?.length > 0"
                                :moreTitle="cat?.rand_category?.title"
                                :moreData="cat?.rand_news"
                                class="categories__more"
                            />
                            
                            <catMore
                                v-if="cat?.other_news?.length > 0"
                                :moreTitle="'Другие новости'"
                                :moreData="cat?.other_news"
                                class="categories__more"
                            /> -->
                        </div>
                    </div>
                </div>
            </div>
            <Sponsors />
        </div>
    </NuxtLayout>
</template>

<style lang="scss">
.categories{
    &__box{
        padding: 40px 0px 90px;
        display: flex;
    }
    &__left{
        flex-basis: 66.6666%;
        width: 66.6666%;
        padding-right: 20px;
    }
    &__right{
        flex-basis: 33.3333%;
        width: 33.3333%;
        margin: -15px 0px;
    }
    &__more{
        padding: 15px 0px;
    }
    &__banner{
        height: 130px;
        padding: 15px 0px;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
        }
    }

    @media (max-width: 500px) {
        &__box{
            flex-direction: column;
            padding: 20px 0px 40px;
        }
        &__left, &__right{
            width: 100%;
            flex-basis: unset;
            padding: 0;
        }
    }
}
</style>