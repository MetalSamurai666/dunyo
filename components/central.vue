<script setup>
    import cardCat from './cards/cardCat.vue';
    import cardDate from './cards/cardDate.vue';
    import { useMainStore } from "~/store/main"

    const mainStore = useMainStore()
    const { locale } = useI18n()

    const tabFilter = ref('president')
    const tabList = ref([
        {
            title: 'Президент',
            slug: 'president',
            news: []
        },
        {
            title: 'Год заботы о человеке и качественного образования',
            slug: 'god_zaboti_o_cheloveke_i_kachestvennogo_obrazovaniya',
            news: []
        },
        {
            title: 'Правительство',
            slug: 'pravitelystvo',
            news: []
        },
    ])

    const second = ref([])
    const tabs = ref([])

    const getSecond = async (slug, lang) => {
        let res = await mainStore.getSecondCats(slug, lang)
        if (res.data.value) {
            second.value = res.data.value
            // console.log(second.value)

            tabs.value = res.data.value.categories
            // console.log(tabs.value);
            tabList.value.map((listItem) => {
                if (listItem.slug == "president") {
                    listItem.news = tabs.value[0]
                } else if(listItem.slug == "god_zaboti_o_cheloveke_i_kachestvennogo_obrazovaniya") {
                    listItem.news = tabs.value[1]
                } else if(listItem.slug == "pravitelystvo") {
                    listItem.news = tabs.value[2]
                }

                return listItem
            })
        }
    }

    watch(
        () => locale.value,
        () => getSecond('prezident', locale.value)
    )

    onMounted(() => {
        getSecond('prezident', locale.value)
    })
</script>

<template>
    <div class="central">
        <div class="container">
            <div class="central__box">
                <div class="central__left">
                    <div class="central__title">{{ second?.parent_category?.title }}</div>

                    <div class="central__main">
                        <div class="central__poster poster" 
                            :style="`background-image: url(${mainStore.url}/${encodeURI(second?.main_news?.img)})`"
                        >
                            <div class="poster__date">
                                {{ second?.main_news?.date?.slice(0, 10) }}
                            </div>
                            <NuxtLink 
                                :to="localePath(`/${second?.parent_category?.slug}/${second?.main_news?.slug}`)" 
                                class="poster__title"
                            >
                                {{ second?.main_news?.title }}
                            </NuxtLink>
                        </div>
                        
                        <ul class="central__cards">
                            <cardCat 
                                class="central__card"
                                :card="item"
                                v-for="item, index of second?.category_news"
                                :key="index"
                            />
                        </ul>
                    </div>
                </div>
                <div class="central__right">
                    <ul class="btns">
                        <li v-for="item of tabList" :key="item.slug">
                            <button 
                                @click="tabFilter = item.slug" 
                                :class="tabFilter == item.slug ? 'active' : ''"
                            >
                                {{ item.title }}
                            </button>
                        </li>
                    </ul>

                    <ul class="news">
                        <div v-for="item of tabList" :key="item.slug" :class="`news__content ${tabFilter == item.slug ? 'active' : ''}`">
                            <cardDate
                                :class="
                                    tabFilter == 'president' ? 'president news__item' 
                                    : tabFilter == 'god_zaboti_o_cheloveke_i_kachestvennogo_obrazovaniya' ? 'god_zaboti_o_cheloveke_i_kachestvennogo_obrazovaniya news__item' 
                                    : tabFilter == 'pravitelystvo' ? 'pravitelystvo news__item' 
                                    : 'news__item'
                                "
                                :card="item"
                                v-for="item, index of item?.news?.news"
                                :key="index"
                            />
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/central.scss';
</style>