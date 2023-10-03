<script setup>
/* Imports */
    import { useMainStore } from '~/store/main';
    // import { doCount } from '~/utils/counter';

/* Сonsts */
    const mainStore = useMainStore()
    const { locale } = useI18n()

    const cats = ref([])
    const getData = async (val) => {
        let res = await mainStore.getCats(val)
        if (res.data.value) {
            // console.log(res.data.value)
            res.data.value = res.data.value.filter(val => val.subs.length > 0)
            cats.value = res.data.value
            // console.log(cats.value);
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
    <footer class="footer">
        <div class="footer__top">
            <div class="container">
                
                <div class="footer__nav">
                    <ul class="footer__list" v-for="list, index of cats?.slice(0, 3)" :key="index">
                        <li>
                            <NuxtLink class="footer__title" 
                                :to="localePath(`/${list?.slug}`)"
                            >    
                                {{ list?.title }}
                            </NuxtLink>
                        </li>

                        <li v-for="item, index of list?.subs" :key="index">
                            <NuxtLink :to="localePath(`/${item?.slug}`)" class="footer__link">
                                {{ item?.title }}
                            </NuxtLink>
                        </li>
                    </ul>

                    <ul class="footer__list contacts">
                        <li><span class="footer__title">{{ $t('contacts') }}</span></li>

                        <li class="footer__link">
                            <span>{{ $t('address_title') }}</span>
                            <a href="#">
                                <b>{{ $t('address') }}</b>
                            </a>
                        </li>
                        <li class="footer__link">
                            <span>{{ $t('phone_number') }}</span>
                            <a href="tel:+998712391776">
                                <b>+99871-239-17-76</b>
                            </a>
                        </li>
                        <li class="footer__link">
                            <span>E-mail</span>
                            <a href="mailto:jahon@mfa.uz">
                                <b>Dunyo@mfa.uz</b>
                            </a>
                        </li>

                        <!-- <a style="margin-top: 15px;" href="https://www.uz/ru/res/visitor/index?id=45601" target=_top>
                            <img height=31 src="https://cnt0.www.uz/counter/collect?id=45601&pg=https%3A//uzinfocom.uz&&col=0063AF&amp;t=ffffff&amp;p=E6850F" width=88 border=0 alt="Топ рейтинг www.uz">
                        </a> -->
                    </ul>

                </div>
            </div>
        </div>

        <div class="footer__bot">
            <div class="container">
                <div class="footer__copyright">
                    <p>{{ $t('copyright') }}</p>
                </div>

                <div class="footer__socials">
                    <ul>
                        <li>
                            <a target="_blank" href="https://www.youtube.com/channel/UCwHXdaoLTPBkaEQBMCDp6yQ">
                                <img src="@/assets/logo/socials/youtube.svg">
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/Dunyo_IA" target="_blank">
                                <img src="@/assets/logo/socials/twitter.svg">
                            </a>
                        </li>
                        <li v-if="false">
                            <NuxtLink to="/">
                                <img src="@/assets/logo/socials/instagram.svg">
                            </NuxtLink>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/DunyoIA/">
                                <img src="@/assets/logo/socials/facebook.svg">
                            </a>
                        </li>
                        <li>
                            <a href="https://t.me/iadunyo_uz" target="_blank">
                                <img src="@/assets/logo/socials/telegram.svg">
                            </a>
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