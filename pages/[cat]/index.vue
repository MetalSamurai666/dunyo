<script setup>
    import { storeToRefs } from "pinia";
    import { useMainStore } from "~/store/main"
    import { useLocaleStore } from "~/store/i18n";
    // import vueAwesomePaginate from "~/plugins/vue-awesome-paginate";

    const mainStore = useMainStore()
    const localeStore = useLocaleStore()
    const { locale } = useI18n()
    const { book } = storeToRefs(localeStore)

    const route = useRoute()

/* Getting CATegory🐈 */
    const cat = ref({
        count:0
    })

    const currentPage = ref(1)

    const getNext = (next) => {
        getData(locale.value,next)
    }
    
    const getData = async (lang) => {
        let res = await mainStore.getOneCat(route.params.cat, lang, currentPage.value)
        if (res.data.value) {
            cat.value = res.data.value
            console.log(cat.value)
        }
    }

    const onClickHandler = () => {
        getData(locale.value)
        window.scrollTo({ top: 70, behavior: 'smooth' })
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
        <div class="categories page">
            <Breadcrumbs  
                :breadObj="cat?.category"
            />
            <div class="categories__body">
                <div class="container">
                    <div class="categories__box">
                        <div class="categories__left">
                            <catWrapper 
                                :news="cat.news?.slice(0,2)"
                                :actual="cat.actual"
                            />
                            <catList 
                                :news="cat.news?.slice(2)"
                            />

                            <vue-awesome-paginate
                                :total-items="cat?.count"
                                :items-per-page="10"
                                :max-pages-shown="7"
                                v-model="currentPage"
                                :on-click="onClickHandler"
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

                            <!-- <paginate 
                                :data="cat?.count"
                                @next="getNext"
                            /> -->
                        </div>
                        <div class="categories__right">
                            <catMore
                                :moreTitle="book?.important_dates"
                                :moreData="cat?.important_dates"
                                class="categories__more"
                            />

                            <!-- <div class="categories__banner">
                                <img src="@/assets/img/economy/poster.jpg">
                            </div> -->

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

    @media (max-width: 768px) {
        &__box{
            flex-direction: column;
            padding: 20px 0px 40px;
        }
        &__left, &__right{
            width: 100%;
            flex-basis: unset;
            padding: 0;
        }
        &__right{
            margin-top: 20px;
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
        &__right{
            margin-top: 20px;
        }
    }
}


</style>