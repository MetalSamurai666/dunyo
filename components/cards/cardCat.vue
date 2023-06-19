<script setup>
    const cardProps = defineProps({
        card: Object
    })
</script>

<template>
    <li class="cardCat">
        <div class="cardCat__box">
            <div class="cardCat__left">
                <NuxtLink class="cardCat__img" :to="card?.link">
                    <img src="@/assets/img/welcome/actual.jpg">
                </NuxtLink>
            </div>
            <div class="cardCat__right">
                <NuxtLink class="cardCat__title" :to="card?.link"><span>{{ card?.title }}</span></NuxtLink>
                <div class="cardCat__date">{{ card?.date }}</div>
            </div>
        </div>
    </li>
</template>

<style lang="scss">
@import '@/assets/styles/components/cards/cardCat.scss';
</style>