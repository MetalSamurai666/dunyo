<script setup>
    defineProps({
        card: Object
    })
</script>

<template>
    <li class="cardDate">
        <div class="cardDate__box">
            <div class="cardDate__left">
                <!-- {{ card }} -->
                <div class="cardDate__date">{{ card?.date?.slice(8, 10) }} <span>{{ card?.date?.slice(5, 7) }}</span> </div>
            </div>
            <div class="cardDate__right">
                <NuxtLink class="cardDate__title" :to="`${card?.category?.slug}/${card?.slug}`">{{ card?.title }}</NuxtLink>
            </div>
        </div>
    </li>
</template>

<style lang="scss">
@import '@/assets/styles/components/cards/cardDate.scss';
</style>