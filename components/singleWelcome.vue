<script setup> 
    import { storeToRefs } from "pinia"
    import { useLocaleStore } from "~/store/i18n"
    import { useMainStore } from "~/store/main"


    const route = useRoute()
    const { locale } = useI18n()
    const localeStore = useLocaleStore()
    const { book } = storeToRefs(localeStore)

    const mainStore = useMainStore()

    const getBook = async (lang) => {
        await localeStore.getKeywords(lang)
    }

    defineProps({
        news: Object,
        category: Object
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
    <div 
        class="singleWelcome" 
        >
        <!-- <div 
            class="singleWelcome__back" 
            :style="`background-image: url(${mainStore.url}/${news?.img})`">
        </div> -->
        <div class="singleWelcome__box">
            <div class="container">
                <div class="singleWelcome__title">{{ news?.title }}</div>

                <ul class="singleWelcome__breadcrumbs">
                    <!-- <pre>{{ news }}</pre> -->
                    <li class="item">
                        <NuxtLink to="/"><span>{{ book?.main }}</span></NuxtLink>
                    </li>

                    <li class="item">
                        <NuxtLink :to="`/${route.fullPath.split('/')[1]}`">
                            <span>{{ category?.title }}</span>
                        </NuxtLink>
                    </li>

                    <li class="item">
                        <NuxtLink :to="`${route.fullPath}`">
                            <span>{{ news?.title }}</span>
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss"> 
@import '@/assets/styles/components/singleWelcome.scss';
</style>