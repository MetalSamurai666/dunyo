<script setup>
    import { useMainStore } from '~/store/main';
    import { useSearchStore } from '~/store/search';
    import { storeToRefs } from 'pinia'
    
    const mainStore = useMainStore()
    const searchStore = useSearchStore()
    const { searchState } = storeToRefs(searchStore)
    const { locale } = useI18n()

    const currentPage = ref(1)

    const getNext = (next) => {
        getData(locale.value,next)
    }


    // const getData = async (lang) => {
    //     let res = await mainStore.getSearch(route.params.cat, lang, currentPage.value)
    //     if (res.data.value) {
    //         cat.value = res.data.value
    //         console.log(cat.value)
    //     }
    // }


    const searchIn = ref('')
    const results = ref()
    const count = ref(0)
    const loading = ref(false)
    const doSearch = async (item) => {
        console.log(item);
        searchIn.value = item
        if (item.length > 2) {
            loading.value = true
            let res = await mainStore.getSearch(item, locale.value, currentPage.value)
            if (res.data.value) {
                console.log(res.data.value);
                results.value = res.data.value.news
                count.value = res.data.value.count
                loading.value = false
                console.log(results.value)
            }
        }
    }


    const onClickHandler = () => {
        doSearch(searchIn.value, locale.value, currentPage.value)
        window.scrollTo({ top: 70, behavior: 'smooth' })
    }
</script>   

<template>
    <div class="searchBox">
        <div class="container">
            <div class="searchBox__wrap">
                <div class="searchBox__title">{{ $t('search') }}</div>

                <div class="searchBox__input">
                    <input type="text" v-model="searchIn" @keydown.enter="doSearch(searchIn)">
                    <button @click="doSearch(searchIn)">
                        <img src="~/assets/logo/basic/magnifier.svg">
                    </button>
                </div>

                <div class="searchBox__results">{{ $t('results') }}: {{ count ? count : '0' }}</div>
                
                <ul class="searchBox__list" v-if="results?.length > 0">
                    <li class="item" v-for="item of results" :key="item?._id">
                        <CardsCardCat
                            :class="'big'"
                            :card="item"
                        />
                    </li>
                </ul>

                <div class="searchBox__pagination">
                    <vue-awesome-paginate
                        :total-items="count"
                        :items-per-page="20"
                        :max-pages-shown="7"
                        v-model="currentPage"
                        :on-click="onClickHandler"
                        v-if="count > 20"
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
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '~/assets/styles/components/searchBox.scss';
</style>