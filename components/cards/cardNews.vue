<script setup>
    const cardProps = defineProps({
        card: Object
    })
</script>

<template>
    <li class="cardNews">
        <div class="cardNews__box">
            <div class="cardNews__top">
                <NuxtLink class="cardNews__title" :to="localePath(`/${card?.category?.slug}/${card?.slug}`)">{{ card?.title }}</NuxtLink>
            </div>
            <div class="cardNews__bot">
                <div class="cardNews__date">{{ card?.date.slice(0, 10) }}</div>
                <div class="cardNews__cat">{{ card?.cat }}</div>
            </div>
        </div>
    </li>
</template>

<style lang="scss">
@import '@/assets/styles/components/cards/cardNews.scss';
</style>