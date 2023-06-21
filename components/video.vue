<script setup>
    const videos = ref([
        { link: 'https://www.youtube.com/embed/B9cC2_V7JwE?controls=0' },
        { link: 'https://www.youtube.com/embed/fuFbQ-Mewfw?controls=0' },
        { link: 'https://www.youtube.com/embed/B9cC2_V7JwE?controls=0' },
        { link: 'https://www.youtube.com/embed/fuFbQ-Mewfw?controls=0' },
        { link: 'https://www.youtube.com/embed/B9cC2_V7JwE?controls=0' },
        { link: 'https://www.youtube.com/embed/fuFbQ-Mewfw?controls=0' },
    ])
</script>

<template>
    <div class="video">
        <div class="container">
            <div class="video__box">
                <div class="video__head">
                    <div class="video__title">Видео</div>
                </div>

                <div class="video__main">
                    <div class="video__grid">
                        <div 
                            class="video__item" 
                            v-for="item, index of videos" 
                            :key="index"
                        >
                            <iframe width="100%" height="100%" :src="item.link" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </div>

                    <div class="video__poster">
                        <img src="https://www.lottehotelmagazine.com/resources/642a5cf2-ff9c-4ff2-ac23-1adde49c285d_img_art_tashkent_detail01.jpg">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss"> 
@import '@/assets/styles/components/video.scss';
</style>