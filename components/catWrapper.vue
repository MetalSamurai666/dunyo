<script setup>
import { useMainStore } from "~/store/main"

const mainStore = useMainStore()

defineProps({
    news: Array,
    actual: Object
})
</script>

<template>
    <div class="catWrapper">
        <div class="catWrapper__box">
            <div class="catWrapper__top">
                <div class="catWrapper__left">
                    <div class="catWrapper__poster" :style="`background-image: url(${mainStore.url}/${actual?.img})`">
                        <div class="catWrapper__cat">Актуально</div>
                        <div class="catWrapper__date">{{ actual?.date }}</div>
                    </div>
                    <div class="catWrapper__title">
                        <NuxtLink :to="`${actual?.category?.slug}/${actual?.slug}`">{{ actual?.title }}</NuxtLink>
                    </div>
                </div>
                <div class="catWrapper__right">
                    <ul class="catWrapper__list">
                        <li class="item" v-for="item of news" :key="item?.id">
                            <div class="item__img">
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

                            <div class="item__date">{{ item?.date }}</div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="catWrapper__bot">
                <div class="catWrapper__banner">
                    <img src="https://images.squarespace-cdn.com/content/v1/5940f2725016e1c79e469470/1540004147826-C6ZIE42DALBW63ZAKEVJ/DSC09847+%282%29-min.JPG?format=800w">
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/catWrapper.scss';
</style>