<script setup>
    import cardCat from "@/components/cards/cardCat.vue"

    const listProps = defineProps({
        listData: Object
    })

</script>

<template>
    <div class="catList">
        <div class="catList__box">
            <ul class="catList__list">
                <cardCat
                    :class="listData.mode"
                    :card="item"
                    v-for="item, index of listData?.list"
                    :key="index"
                />
            </ul>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/catList.scss';
</style>