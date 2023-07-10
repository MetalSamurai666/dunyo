<script setup> 
    import { useMainStore } from "~/store/main"

    const mainStore = useMainStore()

    const route = useRoute()

    defineProps({
        news: Object
    })
</script>

<template>
    <div 
        class="singleWelcome" 
        >
        <div 
            class="singleWelcome__back" 
            :style="`background-image: url(${mainStore.url}/${news?.img})`">
        </div>
        <div class="singleWelcome__box">
            <div class="container">
                <div class="singleWelcome__title">{{ news?.title }}</div>

                <ul class="singleWelcome__breadcrumbs">
                    <li class="item">
                        <NuxtLink to="/"><span>Главная</span></NuxtLink>
                    </li>

                    <li class="item">
                        <NuxtLink :to="`/${route.fullPath.split('/')[1]}`">
                            <span>{{ news?.category?.title }}</span>
                        </NuxtLink>
                    </li>

                    <li class="item">
                        <NuxtLink :to="`http://localhost:3000${route.fullPath}`">
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