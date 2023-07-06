<script setup>

    defineProps({
        content: String
    })

</script>

<template>
    <div class="article">
        <div class="article__box" v-html="content">
            
        </div>

        <div class="article__poster">
            <img src="@/assets/img/economy/poster.jpg">
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/singleArticle.scss';
</style>