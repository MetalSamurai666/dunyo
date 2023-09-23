<script setup>
    import cardGallery from './cards/cardGallery.vue';

    defineProps({
        list: Array
    })
</script>

<template>
    <div class="galleryList">
        <div class="galleryList__box">
            <ul class="galleryList__list">
                <li class="item" v-for="item of list" :key="item?._id">
                    <cardGallery
                        :card="item"
                    />
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss">
    @import '@/assets/styles/components/galleryList.scss';
</style>