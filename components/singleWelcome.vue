<script setup> 
const route = useRoute()
</script>

<template>
    <div class="singleWelcome" >
        <div class="singleWelcome__box">
            <div class="container">
                <div class="singleWelcome__title">В Польше состоялось мероприятие, посвященное Посланию Президента Узбекистана Олий Мажлису и народу</div>

                <ul class="singleWelcome__breadcrumbs">
                    <li class="item">
                        <NuxtLink to="/">Главная</NuxtLink>
                    </li>

                    <li class="item">
                        <NuxtLink :to="`/${route.fullPath.split('/')[1]}`">Категория</NuxtLink>
                    </li>

                    <li class="item">
                        <NuxtLink :to="`http://localhost:3000${route.fullPath}`">Сингл</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss"> 
@import '@/assets/styles/components/singleWelcome.scss';
</style>