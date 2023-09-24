<script setup>
    import { useMainStore } from '~/store/main';
    import { useSearchStore } from '~/store/search';
    import { storeToRefs } from 'pinia'
    
    const mainStore = useMainStore()
    const searchStore = useSearchStore()
    const { searchState } = storeToRefs(searchStore)
    const { locale } = useI18n()

    const searchIn = ref('')
    const results = ref()
    const loading = ref(false)
    const doSearch = async (item) => {
        searchIn.value = item
        if (item.length > 2) {
            loading.value = true
            let res = await mainStore.getSearch(item, locale.value)
            if (res.data.value) {
                results.value = res.data.value
                loading.value = false
                console.log(results.value)
            }
        }
    }

    function closeSearch() {
        searchStore.searchChange()
    }
</script>

<template>
    <div :class="searchState ? 'search show' : 'search'">
        <div class="search__box">
            <div class="search__input">
                <input type="text" @input="doSearch($event.target.value)">
            </div>

            <div class="search__results">
                <div :class="loading ? 'search__loading show' : 'search__loading'"></div>

                <ul class="search__list" v-if="searchIn.length > 0">
                    <li class="item" v-for="item of results" :key="item?._id">
                        <div class="item__box">
                            <div class="item__left">
                                <NuxtLink @click="closeSearch" :to="localePath(`/${item?.category}/${item?.slug}`)" class="item__img">
                                    <img :src="`${mainStore.url}/${item?.img}`">
                                </NuxtLink>
                            </div>  
                            <div class="item__right">
                                <NuxtLink @click="closeSearch" :to="localePath(`/${item?.category}/${item?.slug}`)" class="item__title">
                                    {{ item?.title }}
                                </NuxtLink>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="search__close">
                <button @click="closeSearch">
                    <img src="@/assets/logo/basic/close.svg">
                </button>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/search.scss';
</style>