<script setup>

    defineProps({
        list: Array
    })


</script>

<template>
    <div class="catList">
        <div class="catList__box">
            <ul class="catList__list">
                <cardVideo
                v-for="item, index of list"
                    :card="item"
                    :key="index"
                />
            </ul>
        </div>
    </div>
</template>

<style lang="scss">
    @import '@/assets/styles/components/catList.scss';
</style>