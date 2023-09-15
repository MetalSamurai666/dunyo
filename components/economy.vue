<script setup>
    import { storeToRefs } from "pinia"
    import cardCat from "@/components/cards/cardCat.vue"
    import cardNews from "./cards/cardNews.vue"
    import { useMainStore } from "~/store/main"
    import { useLocaleStore } from "~/store/i18n"

    const { t, locale } = useI18n()
    const mainStore = useMainStore()
    const localeStore = useLocaleStore()

    const tabFilter = ref('latest')
    
/* First Category */
    const cards = ref([])
    const getFirst = async (lang) => {
        let res = await mainStore.getFirstCats(lang)
        if (res.data.value) {
            cards.value = res.data.value
            // console.log(cards.value)
        }
    }

    const rand = ref({})
    const getRand = async (slug, lang) => {
        let res = await mainStore.getRandNews(slug, lang)
        if (res.data.value) {
            rand.value = res.data.value
            // console.log(rand.value);
        }
    }

    const tabs = ref([])
    const getTabs = async (lang) => {
        let res = await mainStore.getFirstTabs(lang)
        if (res.data.value) {
            tabs.value = res.data.value
            // console.log(tabs.value)
            tabList.value.map((listItem) => {
                if (listItem.slug == "important") {
                    listItem.news = tabs.value.important
                } else if(listItem.slug == "latest") {
                    listItem.news = tabs.value.latest
                } else if(listItem.slug == "popular") {
                    listItem.news = tabs.value.popular
                }

                return listItem
            })
        }
    }

    const tabList = computed(()=>{
        return [
            {
                title: t('latest_news'),
                slug: 'latest',
                news: tabs.value.latest
            },
            {
                title: t('actual_news'),
                slug: 'important',
                news: tabs.value.important
            },
            {
                title: t('most_viewed'),
                slug: 'popular',
                news: tabs.value.popular
            },
        ]
    })

    watch(
        () => locale.value,
        () => {
            getFirst(locale.value)
            getRand('politics', locale.value)
            getTabs(locale.value)
        }
    )
    
    onMounted(() => {
        getFirst(locale.value)
        getRand('politics', locale.value)
        getTabs(locale.value)
    })
</script>

<template>
    <div class="economy">
        <div class="container">
            <div class="economy__box">
                <div class="economy__row">
                    <div class="economy__small">
                        <div class="economy__title">{{ cards?.category?.title }}</div>
                        <ul class="economy__news">
                            <cardCat 
                                class="economy__card"
                                :card="item"
                                v-for="item, index of cards?.news"
                                :key="index"
                            />
                        </ul>
                        <div class="economy__more">
                            <NuxtLink :to="localePath(`/${cards?.category?.slug}`)">{{ $t('more_news') }}</NuxtLink>
                        </div>
                    </div>

                    <div class="economy__big">
                        <div class="economy__poster poster" :style="`background-image: url(${mainStore.url}/${rand?.news?.img})`">
                            <div class="economy__title">{{ rand?.category?.title }}</div>

                            <div class="poster__text">
                                <div class="poster__date">{{ rand?.news?.date.slice(0, 10) }}</div>
                                <NuxtLink :to="localePath(`/${rand?.category?.slug}/${rand?.news?.slug}`)" class="poster__title">{{ rand?.news?.title }}</NuxtLink>
                            </div>
                        </div>
                    </div>

                    <div class="economy__small">
                        <div class="economy__tabs">
                            <ul class="btns">
                                <li v-for="item of tabList" :key="item">
                                    <button 
                                        @click="tabFilter = item.slug" 
                                        :class="tabFilter == item.slug 
                                        ? 'active' 
                                        : '' "
                                    >
                                        {{ item?.title }}
                                    </button>
                                </li>
                            </ul>

                            <ul class="news">
                                <div 
                                    v-for="item of tabList" :key="item.slug" 
                                    :class="`news__content ${tabFilter == item.slug ? 'active' : ''}`">
                                    <cardNews 
                                        :class="
                                            tabFilter == 'latest' ? 'latest news__item' 
                                            : tabFilter == 'important' ? 'popular news__item' 
                                            : tabFilter == 'popular' ? 'breaking news__item' 
                                            : 'news__item'
                                        "
                                        :card="item"
                                        v-for="item, index of item?.news"
                                        :key="index"
                                    />
                                </div>
                            </ul>


                        </div>
                    </div>
                </div>
                <div class="economy__banner">
                    <img src="@/assets/img/poster.png">
                </div>
            </div>
        </div>
        
    </div>
</template>

<style lang="scss"> 
@import '@/assets/styles/components/economy.scss';
</style>