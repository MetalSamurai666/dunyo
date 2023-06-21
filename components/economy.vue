<script setup>
    import cardCat from "@/components/cards/cardCat.vue"
    import cardNews from "./cards/cardNews.vue"

    const cards = ref([
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
    ])

    const tabFilter = ref('latest')
    const tabList = ref([
        {
            title: 'Последние',
            slug: 'latest',
            news: [
                {
                    link: '/',
                    title: 'Узбекские дипломаты провели встречу с соотечественниками, находящими в китайской провинции Ляонин',
                    date: '13/06 22:46',
                    cat: 'Событие'
                },
                {
                    link: '/',
                    title: 'Узбекские дипломаты провели встречу с соотечественниками, находящими в китайской провинции Ляонин',
                    date: '13/06 22:46',
                    cat: 'Событие'
                },
                {
                    link: '/',
                    title: 'Узбекские дипломаты провели встречу с соотечественниками, находящими в китайской провинции Ляонин',
                    date: '13/06 22:46',
                    cat: 'Событие'
                },
                {
                    link: '/',
                    title: 'Узбекские дипломаты провели встречу с соотечественниками, находящими в китайской провинции Ляонин',
                    date: '13/06 22:46',
                    cat: 'Событие'
                },
                {
                    link: '/',
                    title: 'Узбекские дипломаты провели встречу с соотечественниками, находящими в китайской провинции Ляонин',
                    date: '13/06 22:46',
                    cat: 'Событие'
                },
                {
                    link: '/',
                    title: 'Узбекские дипломаты провели встречу с соотечественниками, находящими в китайской провинции Ляонин',
                    date: '13/06 22:46',
                    cat: 'Событие'
                },
            ]
        },
        {
            title: 'Популярные',
            slug: 'popular',
            news: [
                {
                    link: '/',
                    title: 'Узбекские дипломаты провели встречу с соотечественниками, находящими в китайской провинции Ляонин',
                    date: '13/06 22:46',
                    cat: 'Спорт'
                },
                {
                    link: '/',
                    title: 'Узбекские дипломаты провели встречу с соотечественниками, находящими в китайской провинции Ляонин',
                    date: '13/06 22:46',
                    cat: 'Спорт'
                },
                {
                    link: '/',
                    title: 'Узбекские дипломаты провели встречу с соотечественниками, находящими в китайской провинции Ляонин',
                    date: '13/06 22:46',
                    cat: 'Спорт'
                },
                {
                    link: '/',
                    title: 'Узбекские дипломаты провели встречу с соотечественниками, находящими в китайской провинции Ляонин',
                    date: '13/06 22:46',
                    cat: 'Спорт'
                },
                {
                    link: '/',
                    title: 'Узбекские дипломаты провели встречу с соотечественниками, находящими в китайской провинции Ляонин',
                    date: '13/06 22:46',
                    cat: 'Спорт'
                },
                {
                    link: '/',
                    title: 'Узбекские дипломаты провели встречу с соотечественниками, находящими в китайской провинции Ляонин',
                    date: '13/06 22:46',
                    cat: 'Спорт'
                },
            ]
        },
        {
            title: 'Срочные',
            slug: 'breaking',
            news: [
                {
                    link: '/',
                    title: 'Узбекские дипломаты провели встречу с соотечественниками, находящими в китайской провинции Ляонин',
                    date: '13/06 22:46',
                    cat: 'Политика'
                },
                {
                    link: '/',
                    title: 'Узбекские дипломаты провели встречу с соотечественниками, находящими в китайской провинции Ляонин',
                    date: '13/06 22:46',
                    cat: 'Политика'
                },
                {
                    link: '/',
                    title: 'Узбекские дипломаты провели встречу с соотечественниками, находящими в китайской провинции Ляонин',
                    date: '13/06 22:46',
                    cat: 'Политика'
                },
                {
                    link: '/',
                    title: 'Узбекские дипломаты провели встречу с соотечественниками, находящими в китайской провинции Ляонин',
                    date: '13/06 22:46',
                    cat: 'Политика'
                },
                {
                    link: '/',
                    title: 'Узбекские дипломаты провели встречу с соотечественниками, находящими в китайской провинции Ляонин',
                    date: '13/06 22:46',
                    cat: 'Политика'
                },
                {
                    link: '/',
                    title: 'Узбекские дипломаты провели встречу с соотечественниками, находящими в китайской провинции Ляонин',
                    date: '13/06 22:46',
                    cat: 'Политика'
                },
            ]
        },
    ])
</script>

<template>
    <div class="economy">
        <div class="container">
            <div class="economy__box">
                <div class="economy__row">
                    <div class="economy__small">
                        <div class="economy__title">Экономика</div>
                        <ul class="economy__news">
                            <cardCat 
                                class="economy__card"
                                :card="item"
                                v-for="item, index of cards"
                                :key="index"
                            />
                        </ul>
                        <div class="economy__more">
                            <NuxtLink to="/">Больше новостей</NuxtLink>
                        </div>
                    </div>

                    <div class="economy__big">
                        <div class="economy__poster poster">
                            <div class="economy__title">Политика</div>

                            <div class="poster__text">
                                <div class="poster__date">13/06 22:46</div>
                                <div class="poster__title">Информационное сообщение ИА «Дунё» по ситуации вокруг Тайваня</div>
                            </div>
                        </div>
                    </div>

                    <div class="economy__small">
                        <div class="economy__tabs">
                            <ul class="btns">
                                <li v-for="item of tabList" :key="item.slug">
                                    <button @click="tabFilter = item.slug" :class="tabFilter == item.slug ? 'active' : ''">{{ item.title }}</button>
                                </li>
                            </ul>

                            <ul class="news">
                                <div v-for="item of tabList" :key="item.slug" :class="`news__content ${tabFilter == item.slug ? 'active' : ''}`">
                                    <cardNews 
                                        :class="
                                            tabFilter == 'latest' ? 'latest news__item' 
                                            : tabFilter == 'popular' ? 'popular news__item' 
                                            : tabFilter == 'breaking' ? 'breaking news__item' 
                                            : 'news__item'
                                        "
                                        :card="item"
                                        v-for="item, index of item.news"
                                        :key="index"
                                    />
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="economy__banner">
                    <img src="https://images.squarespace-cdn.com/content/v1/5940f2725016e1c79e469470/1540004147826-C6ZIE42DALBW63ZAKEVJ/DSC09847+%282%29-min.JPG?format=800w">
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss"> 
@import '@/assets/styles/components/economy.scss';
</style>