<script setup>
    import { useMainStore } from "~/store/main"

    const mainStore = useMainStore()
    const { locale } = useI18n()

    const route = useRoute()

/* Getting News👾 */
    const newsObj = ref({})
    
    const getData = async (lang) => {
        let res = await mainStore.getNews(route.params.slug, lang)
        if (res.data.value) {
            newsObj.value = res.data.value
            // console.log(newsObj.value, 'news')
        }
    }

    watch(
        () => locale.value,
        () => {
            getData(locale.value)
        }
    )

    onMounted(() => {
        getData(locale.value)
    })
</script>

<template>
    <NuxtLayout name="alt-header">
        <div class="single page">
            <singleWelcome
                :category="newsObj?.category"
                :news="newsObj?.news"
            />
            <div class="single__body">
                <div class="container">
                    <div class="single__left">
                        <SingleArticle 
                            :news="newsObj?.news"
                            :mostViewed="newsObj?.most_viewed"
                        />
                    </div>
                    <div class="single__right">
                        <catMore 
                            :moreTitle="$t('actual_news')"
                            :moreData="newsObj?.actual"
                            class="categories__more"
                        />
                        
                        <catMore 
                            v-if="newsObj?.latest.length > 0"
                            :moreTitle="$t('latest_news')"
                            :moreData="newsObj?.latest"
                            class="categories__more"
                        />
                    </div>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>

<style lang="scss">
.single{
    &__body{
        position: relative;
        z-index: 4;
        .container{
            display: flex;
            gap: 20px;
        }
    }
    &__left{
        flex-basis: 66.6666%;
        width: 66.6666%;
        // transform: translateY(-100px);
        margin-top: 30px;
        padding-bottom: 40px;
    }
    &__right{
        flex-basis: 33.3333%;
        width: 33.3333%;
        padding: 30px 0px;
        margin: -15px 0px;
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
    
    @media (max-width: 800px) {
        &__body{
            .container{
                flex-direction: column;
            }
        }
        &__left, &__right{
            width: 100%;
            flex-basis: unset;
        }
        &__left{
            // transform: translateY(-50px);
        }
    }
    @media (max-width: 500px) {
        &__body{
            .container{
                flex-direction: column;
            }
        }
        &__left, &__right{
            width: 100%;
            flex-basis: unset;
        }
        &__left{
            padding-bottom: 0;
        }
    }
}
</style>