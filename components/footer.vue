<script setup>
/* Imports */
    import { useMainStore } from '~/store/main';

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
                            <a href="tel:+998712331410">
                                <b>+99871-239-17-76</b>
                            </a>
                        </li>
                        <li class="footer__link">
                            <span>E-mail</span>
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
                    <p>{{ $t('copyright') }}</p>
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