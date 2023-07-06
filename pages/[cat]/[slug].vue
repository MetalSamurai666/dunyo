<script setup>
    import { useMainStore } from "~/store/main"

    const mainStore = useMainStore()

    const route = useRoute()

    const scienceData = ref({
        title: 'Наука и Здравохранение',
        mode: '',
        list: [
            {
                link: '/',
                title: 'Узбекские дипломаты провели встречу с соотечественниками, находящими в китайской провинции Ляонин',
                date: '13/06 22:46'
            },
            {
                link: '/',
                title: 'Узбекские дипломаты провели встречу с соотечественниками, находящими в китайской провинции Ляонин',
                date: '13/06 22:46'
            },
            {
                link: '/',
                title: 'Узбекские дипломаты провели встречу с соотечественниками, находящими в китайской провинции Ляонин',
                date: '13/06 22:46'
            },
            {
                link: '/',
                title: 'Узбекские дипломаты провели встречу с соотечественниками, находящими в китайской провинции Ляонин',
                date: '13/06 22:46'
            },
            {
                link: '/',
                title: 'Узбекские дипломаты провели встречу с соотечественниками, находящими в китайской провинции Ляонин',
                date: '13/06 22:46'
            },
        ]
    })

    const sportData = ref({
        title: 'Спорт',
        mode: '',
        list: [
            {
                link: '/',
                title: 'Узбекские дипломаты провели встречу с соотечественниками, находящими в китайской провинции Ляонин',
                date: '13/06 22:46'
            },
            {
                link: '/',
                title: 'Узбекские дипломаты провели встречу с соотечественниками, находящими в китайской провинции Ляонин',
                date: '13/06 22:46'
            },
            {
                link: '/',
                title: 'Узбекские дипломаты провели встречу с соотечественниками, находящими в китайской провинции Ляонин',
                date: '13/06 22:46'
            },
            {
                link: '/',
                title: 'Узбекские дипломаты провели встречу с соотечественниками, находящими в китайской провинции Ляонин',
                date: '13/06 22:46'
            },
            {
                link: '/',
                title: 'Узбекские дипломаты провели встречу с соотечественниками, находящими в китайской провинции Ляонин',
                date: '13/06 22:46'
            },
        ]
    })

    /* Getting News👾 */
        const news = ref({})
        
        const getData = async () => {
            let res = await mainStore.getNews(route.params.slug)
            if (res.data.value) {
                news.value = res.data.value.news
                console.log(news.value)
            }
        }

    onMounted(() => {
        getData()
    })
</script>

<template>
    <NuxtLayout name="alt-header">
        <div class="single">
            <singleWelcome
                :news="news"
            />
            <div class="container">
                <div class="single__body">
                    <div class="single__left">
                        <SingleArticle 
                            :content="news?.content"
                        />
                    </div>
                    <div class="single__right">
                        <catMore 
                            :moreData="scienceData"
                            class="categories__more"
                        />

                        <div class="single__banner">
                            <img src="@/assets/img/economy/poster.jpg">
                        </div>

                        <catMore 
                            :moreData="sportData"
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
        display: flex;
        gap: 20px;
    }
    &__left{
        flex-basis: 66.6666%;
        width: 66.6666%;
        transform: translateY(-100px);
    }
    &__right{
        flex-basis: 33.3333%;
        width: 33.3333%;
        padding: 30px 0px;
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
    
    @media (max-width: 500px) {
        &__body{
            flex-direction: column;
        }
        &__left, &__right{
            width: 100%;
            flex-basis: unset;
        }
        &__left{
            transform: unset;
        }
    }
}
</style>