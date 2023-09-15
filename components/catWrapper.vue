<script setup>
    import { storeToRefs } from "pinia"
    import { useLocaleStore } from "~/store/i18n"
    import { useMainStore } from "~/store/main"
    import cardCat from "@/components/cards/cardCat.vue";

    const { locale } = useI18n()
    const mainStore = useMainStore()
    const localeStore = useLocaleStore()
    const { book } = storeToRefs(localeStore)

    const getBook = async (lang) => {
        await localeStore.getKeywords(lang)
    }

    defineProps({
        news: Array,
        actual: Object
    })

    watch(
        () => locale.value,
        () => {
            getBook(locale.value)
        }
    )

    onMounted(() => {
        getBook(locale.value)
    })
</script>

<template>
    <div :class="actual ? 'catWrapper' : 'catWrapper no-actual'" v-if="news?.length > 0">
        <div class="catWrapper__box">
            <div class="catWrapper__top">
                <div class="catWrapper__left" v-if="actual">
                    <div class="catWrapper__poster" :style="`background-image: url(${mainStore.url}/${encodeURI(actual?.img)})`">
                        <div class="catWrapper__cat">Актуально</div>
                        <div class="catWrapper__date">{{ actual?.date.slice(0, 10) }}</div>
                    </div>
                    <div class="catWrapper__title">
                        <NuxtLink :to="localePath(`/${actual?.category?.slug}/${actual?.slug}`)">{{ actual?.title }}</NuxtLink>
                    </div>
                </div>
                <div class="catWrapper__right">
                    <ul class="catWrapper__list">
                        <li class="item" v-for="item, index of news" :key="item?.id">
                            <cardCat
                                :class="actual ? 'vertical' : 'big'"
                                :card="item"
                                :key="index"
                            />
                            <!-- <div class="item__img">
                                <NuxtLink :to="`${item?.category?.slug}/${item?.slug}`">
                                    <img :src="`${mainStore.url}/${item?.img}`">
                                </NuxtLink>
                            </div>

                            <NuxtLink 
                                :to="`${item?.category?.slug}/${item?.slug}`" 
                                class="item__title"
                            >
                                {{ item?.title }}
                            </NuxtLink>

                            <div class="item__date">{{ item?.date.slice(0, 10) }}</div> -->
                        </li>
                    </ul>
                </div>
            </div>
            <div class="catWrapper__bot">
                <div class="catWrapper__banner">
                    <img src="@/assets/img/poster.png">
                </div>
            </div>
        </div>
    </div>
    <div class="catWrapper__none" v-else>
        {{ book?.no_news }}
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/catWrapper.scss';
</style>