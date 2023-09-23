<script setup>
    import { useMainStore } from "~/store/main"

    const mainStore = useMainStore()
    const { locale, t } = useI18n()
    
    const titlePrev = computed(() => {
        return t('gallery')
    }) 

    const gallery = ref({
        category: {
            title: titlePrev
        },
        list: []
    })

    const getData = async (lang) => {
        let res = await mainStore.getGallery(lang)
        if (res.data.value) {
            gallery.value.list = res.data.value
            // console.log(gallery.value)
        }
    }

    watch(
        () => locale.value,
        () => {
            getData(locale.value)
        }
    )

    onMounted(() => {
        getData(locale.value)
    })
</script>

<template>
    <div class="gallery">
        <div class="container">
            <div class="gallery__box">
                <div class="gallery__head">
                    <div class="gallery__title">{{ $t('gallery') }}</div>
                    
                    <NuxtLink class="gallery__more" :to="localePath('/gallery')">{{ $t('more') }}</NuxtLink>
                </div>

                <GalleryList 
                    :list="gallery?.list?.galeries"
                />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/gallery.scss';
</style>