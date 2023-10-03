<script setup>
    import { useMainStore } from "~/store/main"

    const mainStore = useMainStore()
    const { locale, t } = useI18n()

    const titlePrev = computed(() => {
        return t('gallery')
    }) 

    const gallery = ref({
        category: {
            title: titlePrev
        },
        list: [],
    })

    const counter = ref(0)

    const currentPage = ref(1)
    
    const rightNews = ref({})
    const getData = async (next = 1, page = 50) => {
        let res = await mainStore.getGallery(locale.value, next, page)
        if (res.data.value) {
            gallery.value.list = res.data.value
            rightNews.value = res.data.value
            // console.log(gallery.value)
            counter.value = gallery.value.list.count
        }
    }

    const onClickHandler = () => {
        getData()
        window.scrollTo({ top: 70, behavior: 'smooth' })
    }

    watch(
        () => locale.value,
        () => {
            getData()
        }
    )

    onMounted(() => {
        getData()
    })
</script>

<template>
    <NuxtLayout name="alt-header">
        <div class="gallery">
            <Breadcrumbs  
                :breadObj="gallery?.category"
            />
            <div class="categories__body">
                <div class="container">
                    <div class="categories__box">
                        <div class="categories__left">
                            <GalleryList 
                                :list="gallery?.list?.galeries"
                            />
                            <!-- <paginate 
                                :data="counter"
                                @next="getData"
                            /> -->

                            <vue-awesome-paginate
                                :total-items="counter"
                                :items-per-page="10"
                                :max-pages-shown="7"
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
    @media (max-width: 500px) {
        .categories__right{
            margin-top: 15px;
        }
    }
</style>