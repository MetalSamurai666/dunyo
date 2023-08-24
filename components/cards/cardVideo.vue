<script setup>
    defineProps({
        card: Object
    })

    
    

    
</script>

<template>
    <li class="cardVideo">
        <div class="cardVideo__box">
            <div v-html="card?.link">

            </div>
            <!-- <iframe width="100%" height="100%" :src="card?.url" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen data-not-lazy></iframe> -->
        </div>
    </li>
</template>

<style lang="scss">
@import '@/assets/styles/components/cards/cardVideo.scss';
</style>