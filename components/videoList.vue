<script setup>
    import cardVideo from './cards/cardVideo.vue';

    defineProps({
        list: Array
    })


</script>

<template>
    <div class="videoList">
        <div class="videoList__box">
            <ul class="videoList__list">
                <li class="item" v-for="item of list" :key="item._id">
                    <cardVideo
                        :card="item"
                    />
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss">
    @import '@/assets/styles/components/videoList.scss';
</style>