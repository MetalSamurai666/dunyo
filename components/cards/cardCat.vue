<script setup>
    import { useMainStore } from "~/store/main"

    const mainStore = useMainStore()

    defineProps({
        card: Object,
        notLazy: Boolean
    })

</script>

<template>
    <li class="cardCat">
        <div class="cardCat__box">
            <div class="cardCat__left">
                <NuxtLink class="cardCat__img" :to="localePath(`/${card?.category?.slug}/${card?.slug}`)">
                    <img :src="`${mainStore.url}/${encodeURI(card?.img)}`" data-not-lazy>
                </NuxtLink>
            </div>
            <div class="cardCat__right">
                <NuxtLink class="cardCat__title" :to="localePath(`/${card?.category?.slug}/${card?.slug}`)">
                    <span>{{ card?.title }}</span>
                </NuxtLink>
                <div class="cardCat__date">{{ card?.date?.slice(0, 10) }}</div>
            </div>
        </div>
    </li>
</template>

<style lang="scss">
@import '@/assets/styles/components/cards/cardCat.scss';
</style>