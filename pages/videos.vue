<script setup>
    import { useMainStore } from "~/store/main"
    import { getId } from '@/utils/video.js';
    
    const mainStore = useMainStore()
    const { t } = useI18n()

    const sexy = computed(() => {
        return t('videos')
    }) 

    const videos = ref({
        category: {
            title: sexy
        },
        list: [],
        count: 0
    })

    const currentPage = ref(1)
    
    const rightNews = ref({})
    const getData = async (next = 1) => {
        let res = await mainStore.getVideos(next)
        if (res.data.value) {
            rightNews.value = res.data.value
            // console.log(rightNews.value)
            videos.value.list = res.data.value.links.map(item => {
                item.link = getId(item.url)
                return item
            })
            videos.value.count = res.data.value.count
        }
    }

    const onClickHandler = (next) => {
        getData(next)
        window.scrollTo({ top: 70, behavior: 'smooth' })
    }

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
                            <VideoList 
                                :list="videos?.list"
                            />

                            <!-- <paginate 
                                :data="videos?.count"
                                @next="getData"
                            /> -->

                            <vue-awesome-paginate
                                :total-items="videos?.count"
                                :items-per-page="6"
                                :max-pages-shown="4"
                                v-model="currentPage"
                                :on-click="onClickHandler"
                                style="margin-top: 20px;"
                            >
                                <template #prev-button>
                                    <span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="black"
                                            width="8"
                                            height="8"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" />
                                        </svg>
                                    </span>
                                </template>

                                <template #next-button>
                                    <span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="black"
                                            width="8"
                                            height="8"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" />
                                        </svg>
                                    </span>
                                </template>
                            </vue-awesome-paginate>
                        </div>
                        <div class="categories__right">
                            <catMore
                                :moreTitle="$t('important_dates')"
                                :moreData="rightNews?.important_dates"
                                class="categories__more"
                            />

                            <div class="categories__banner">
                                <img src="@/assets/img/economy/poster.jpg">
                            </div>
                            
                            <catMore
                                v-if="rightNews?.news?.length > 0"
                                :moreTitle="$t('other_news')"
                                :moreData="rightNews?.news"
                                class="categories__more"
                            />
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
    &__pag{
            margin-top: 20px;
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