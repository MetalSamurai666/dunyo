<script setup>

</script>

<template>
    <div class="catWrapper">
        <div class="catWrapper__box">
            <div class="catWrapper__top">
                <div class="catWrapper__left">
                    <div class="catWrapper__poster">
                        <div class="catWrapper__cat">Актуально</div>
                        <div class="catWrapper__date">13/06 22:46</div>
                    </div>
                    <div class="catWrapper__title">Информационное сообщение ИА «Дунё» по ситуации вокруг Тайваня</div>
                </div>
                <div class="catWrapper__right">
                    <ul class="catWrapper__list">
                        <li class="item">
                            <div class="item__img">
                                <NuxtLink to="/">
                                    <img src="@/assets/img/welcome/actual.jpg">
                                </NuxtLink>
                            </div>

                            <NuxtLink to="/" class="item__title">Узбекские дипломаты провели встречу с соотечественниками, находящими в китайской провинции Ляонин</NuxtLink>

                            <div class="item__date">13/06 22:46</div>
                        </li>
                        <li class="item">
                            <div class="item__img">
                                <NuxtLink to="/">
                                    <img src="@/assets/img/welcome/actual.jpg">
                                </NuxtLink>
                            </div>

                            <NuxtLink to="/" class="item__title">Узбекские дипломаты провели встречу с соотечественниками, находящими в китайской провинции Ляонин</NuxtLink>

                            <div class="item__date">13/06 22:46</div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="catWrapper__bot">
                <div class="catWrapper__banner">
                    <img src="https://images.squarespace-cdn.com/content/v1/5940f2725016e1c79e469470/1540004147826-C6ZIE42DALBW63ZAKEVJ/DSC09847+%282%29-min.JPG?format=800w">
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/catWrapper.scss';
</style>