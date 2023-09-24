<script setup>
    import { useMainStore } from "@/store/main.js"

    const mainStore = useMainStore()
    const { t, locale } = useI18n()
    const route = useRoute()

    const gallObj = ref({
        category: {
            title: t('gallery'),
            slug: 'gallery',
        },
        album: {}
    })

    const images = ref([])

    const getData = async (lang) => {
        let res = await mainStore.getOneGallery(route.params.id, lang)
        if (res.data.value) {
            gallObj.value.album = res.data.value
            res.data.value.galery.img.map((item) => {
                images.value.push(mainStore.url+'/'+item)
                return images
            })
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
    <NuxtLayout name="alt-header">
        <div class="singleGallery">
            <singleWelcome
                :category="gallObj?.category"
                :news="gallObj?.album?.galery"
            />
            <div class="single__body">
                <div class="container">
                    <div class="single__left">
                        <GallerySingle
                            :images="images"
                            :album="gallObj?.album?.galery?.img"
                            :prop="'say hey'"
                        />
                    </div>
                    <div class="single__right">
                        <catMore 
                            :moreTitle="$t('important_dates')"
                            :moreData="gallObj?.album?.important_dates"
                            class="categories__more"
                        />
                        <catMore 
                            :moreTitle="$t('other_news')"
                            :moreData="gallObj?.album?.news"
                            class="categories__more"
                        />
                    </div>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>

<style lang="scss">
.single{
    &__body{
        position: relative;
        z-index: 4;
        .container{
            display: flex;
            gap: 20px;
        }
    }
    &__left{
        flex-basis: 66.6666%;
        width: 66.6666%;
        // transform: translateY(-100px);
        margin-top: 30px;
        padding-bottom: 40px;
    }
    &__right{
        flex-basis: 33.3333%;
        width: 33.3333%;
        padding: 30px 0px;
        margin: -15px 0px;
    }
    &__banner{
        height: 130px;
        padding: 15px 0px;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
        }
    }
    
    @media (max-width: 800px) {
        &__body{
            .container{
                flex-direction: column;
            }
        }
        &__left, &__right{
            width: 100%;
            flex-basis: unset;
        }
        &__left{
            // transform: translateY(-50px);
        }
    }
    @media (max-width: 500px) {
        &__body{
            .container{
                flex-direction: column;
            }
        }
        &__left, &__right{
            width: 100%;
            flex-basis: unset;
        }
        &__left{
            padding-bottom: 0;
        }
    }
}
</style>