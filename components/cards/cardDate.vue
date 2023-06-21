<script setup>
    const cardProps = defineProps({
        card: Object
    })
</script>

<template>
    <li class="cardDate">
        <div class="cardDate__box">
            <div class="cardDate__left">
                <div class="cardDate__date">{{ card?.day }} <span>{{ card?.month }}</span> </div>
            </div>
            <div class="cardDate__right">
                <NuxtLink class="cardDate__title" :to="card?.link">{{ card?.title }}</NuxtLink>
            </div>
        </div>
    </li>
</template>

<style lang="scss">
@import '@/assets/styles/components/cards/cardDate.scss';
</style>