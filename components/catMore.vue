<script setup>
    import cardCat from "@/components/cards/cardCat.vue"

    const moreProps = defineProps({
        moreData: Object
    })
</script>

<template>
    <div class="catMore">
        <div class="catMore__box">
            <div class="catMore__title">{{ moreData?.title }}</div>

            <ul class="catMore__list">
                <cardCat
                    :class="moreData?.mode"
                    :card="item"
                    v-for="item, index of moreData?.list"
                    :key="index"
                />
            </ul>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/catMore.scss';
</style>