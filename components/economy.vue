<script setup>
    import cardCat from "@/components/cards/cardCat.vue"

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
                        <div class="economy__filter"></div>
                    </div>
                </div>
                <div class="economy__banner"></div>
            </div>
        </div>
    </div>
</template>

<style lang="scss"> 
@import '@/assets/styles/components/economy.scss';
</style>