<script setup>
    import { useMainStore } from "~/store/main"
    import { storeToRefs } from 'pinia'

    const mainStore = useMainStore()

    defineProps({
        card: Object
    })
</script>

<template>
    <div class="cardGallery">
        <NuxtLink class="cardGallery__box" 
            :to="localePath(`/gallery/${card?._id}`)" 
            :style="`background-image: url('${mainStore.url}/${encodeURI(card?.img)}')`">
            <span class="cardGallery__gradient"></span>
            <div class="cardGallery__title">
                {{ card?.title }}
            </div>
        </NuxtLink>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/cards/cardGallery.scss';
</style>