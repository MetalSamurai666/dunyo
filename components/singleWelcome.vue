<script setup> 
    import { useMainStore } from "~/store/main"

    const mainStore = useMainStore()

    const route = useRoute()

    defineProps({
        news: Object
    })
</script>

<template>
    <div class="singleWelcome" :style="`background-image: url(${mainStore.url}/${news?.img})`">
        <div class="singleWelcome__box">
            <div class="container">
                <div class="singleWelcome__title">{{ news?.title }}</div>

                <ul class="singleWelcome__breadcrumbs">
                    <li class="item">
                        <NuxtLink to="/">Главная</NuxtLink>
                    </li>

                    <li class="item">
                        <NuxtLink :to="`/${route.fullPath.split('/')[1]}`">
                            {{ news.category?.title }}
                        </NuxtLink>
                    </li>

                    <li class="item">
                        <NuxtLink :to="`http://localhost:3000${route.fullPath}`">
                            {{ news?.title }}
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