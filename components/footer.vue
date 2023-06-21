<script setup>
    const nav = ref([
        {
            title: 'Политика',
            list: [
                {
                    link: '/',
                    title: 'Президент'
                },
                {
                    link: '/',
                    title: 'Правительство'
                },
                {
                    link: '/',
                    title: 'Парламент'
                },
                {
                    link: '/',
                    title: 'Год заботы о человеке и качественного образования'
                },
                {
                    link: '/',
                    title: 'Председательство Узбекистана в ШОС'
                },
            ]
        },
        {
            title: 'Экономика',
            list: [
                {
                    link: '/',
                    title: 'Инвестиции'
                },
                {
                    link: '/',
                    title: 'Экспорт'
                },
                {
                    link: '/',
                    title: 'ИА “Дунё” представляет экспортеров '
                },
                {
                    link: '/',
                    title: 'Узбекистан'
                },
                {
                    link: '/',
                    title: 'Точка роста'
                },
            ]
        },
        {
            title: 'Актуально',
            list: [
                {
                    link: '/',
                    title: 'Знакомьтесь: Узбекистан'
                },
                {
                    link: '/',
                    title: 'Деятельность ИА "Дунё"'
                },
                {
                    link: '/',
                    title: 'Культура'
                },
                {
                    link: '/',
                    title: 'Туризм'
                },
                {
                    link: '/',
                    title: 'Аналитика'
                },
            ]
        },
    ])
</script>

<template>
    <footer class="footer">
        <div class="footer__top">
            <div class="container">
                <div class="footer__nav">
                    <ul class="footer__list" v-for="list, index of nav" :key="index">
                        <li><span class="footer__title">{{ list?.title }}</span></li>

                        <li v-for="item, index of list.list" :key="index">
                            <NuxtLink :to="item?.link" class="footer__link">
                                {{ item?.title }}
                            </NuxtLink>
                        </li>
                    </ul>

                    <ul class="footer__list contacts">
                        <li><span class="footer__title">Контакты</span></li>

                        <li class="footer__link">
                            <span>Адрес</span>
                            <a href="#">
                                <b>100000, Ташкент, ул. Амира Темура, 3</b>
                            </a>
                        </li>
                        <li class="footer__link">
                            <span>Телефон</span>
                            <a href="tel:+998712331410">
                                <b>+99871-233-14-10</b>
                            </a>
                        </li>
                        <li class="footer__link">
                            <span>Email</span>
                            <a href="mailto:jahon@mfa.uz">
                                <b>jahon@mfa.uz</b>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="footer__bot">
            <div class="container">
                <div class="footer__copyright">
                    <p>© 2023 Официальный веб-сайт Информационного агентства «Дунё» Министерства иностранных дел Республики Узбекистан. Авторские права защищены.</p>
                </div>

                <div class="footer__socials">
                    <ul>
                        <li>
                            <NuxtLink to="/">
                                <img src="@/assets/logo/socials/youtube.svg">
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/">
                                <img src="@/assets/logo/socials/twitter.svg">
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/">
                                <img src="@/assets/logo/socials/instagram.svg">
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/">
                                <img src="@/assets/logo/socials/facebook.svg">
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/">
                                <img src="@/assets/logo/socials/telegram.svg">
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss">
@import '@/assets/styles/components/footer.scss';
</style>