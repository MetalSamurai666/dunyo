<script setup>
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
</script>

<template>
    <NuxtLayout name="alt-header">
        <div class="single">
            <singleWelcome />
            <div class="container">
                <div class="single__body">
                    <div class="single__left">
                        <SingleArticle />
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
    }
    &__left{
        flex-basis: 66.6666%;
        width: 66.6666%;
        transform: translateY(-100px);
        padding-right: 20px;
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
}
</style>