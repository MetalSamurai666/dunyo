<script setup>
    import cardCat from "@/components/cards/cardCat.vue"

    const listProps = defineProps({
        news: Array
    })

</script>

<template>
    <div class="catList">
        <div class="catList__box">
            <ul class="catList__list">
                <cardCat
                    :class="`big`"
                    :card="item"
                    v-for="item, index of news"
                    :key="index"
                />
            </ul>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/catList.scss';
</style>