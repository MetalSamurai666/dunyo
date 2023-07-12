<script setup>
    import { storeToRefs } from "pinia"
    import { useLocaleStore } from "~/store/i18n"


    const { locale } = useI18n()
    const localeStore = useLocaleStore()
    const { book } = storeToRefs(localeStore)

    const bread = defineProps({
        breadObj: Object,
    }) 

    const route = useRoute()
    const getBook = async (lang) => {
        await localeStore.getKeywords(lang)
    }

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
    <div class="breadcrumbs">
        <div class="container">
            <div class="breadcrumbs__box">
                <div class="breadcrumbs__left">
                    <div class="breadcrumbs__title">{{ breadObj?.title }}</div>
                    
                    <!-- <pre>{{ route.fullPath.split('/') }}</pre> -->
                </div>
                <div class="breadcrumbs__right">
                    <ul class="breadcrumbs__list">
                        <li class="item">
                            <nuxt-link to="/"><span>{{ book?.main }}</span></nuxt-link>
                        </li>
                        <li 
                            v-for="item, index of route.fullPath.split('/')"
                            :key="index" 
                            class="item"
                            v-show="item.length > 0"
                        >
                            <nuxt-link :to="item">
                                <span>{{ bread.breadObj?.title }}</span>
                            </nuxt-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/breadcrumbs.scss';
</style>