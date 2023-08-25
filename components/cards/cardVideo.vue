<script setup>
    defineProps({
        card: Object
    })
    
</script>

<template>
    <div class="cardVideo">
        <div class="cardVideo__box">
            <div v-html="card?.link" class="cardVideo__video"></div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/cards/cardVideo.scss';
</style>