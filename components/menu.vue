<script setup>
/* Imports */
    import { storeToRefs } from 'pinia'
    import { useMainStore } from '~/store/main';
    import { useMenuStore } from '~/store/menu';

    import { useLocaleStore } from '~/store/i18n';

/* Consts */
    const router = useRouter()

    const mainStore = useMainStore()

    const menuStore = useMenuStore()
    const { menuState } = storeToRefs(menuStore)

    const { locale, locales, setLocale } = useI18n()
    const availableLocales = computed(() => {
        return (locales.value)
    })


/* Getting CATegorieS🐈 */
    const cats = ref([])
    const getData = async (val) => {
        let res = await mainStore.getCats(val)
        if (res.data.value) {
            cats.value = res.data.value
            // console.log(cats.value);
        } else {
            console.log('no cats');
        }
    }

    const benefitsv = ref(cats)
    const changeBenefit = ((id) => {
        benefitsv.value = benefitsv.value.map((status, index) => {
            if (index === id) {
                status.active = !status.active 
            } else {
                status.active = false
            }
            return status
        }) 
    })

/* Functions */
    function changeLang(val) {
        // localeStore.getTranslations(val)
        getData(val)
    }

    function closeMenu() {
        menuStore.menuChange()
    }

    async function changeRoute(slug) {
        console.log(slug);
        await router.push(`/${slug}`)
        menuStore.menuChange()
    }
    
    onMounted(() => {
        getData(locale.value)
    })

</script>

<template>
    <div :class="menuState ? 'menu show' : 'menu'">
        <div class="menu__box">
            <div class="menu__top">
                <div class="menu__close">
                    <button @click="closeMenu">
                        <img src="@/assets/logo/basic/close.svg">
                    </button>
                </div>
            </div>
            <div class="menu__mid">
                <ul class="menu__list">
                    <!-- :class="item.subs ? 'item listly' : 'item'" -->
                    <li 
                        v-for="item, index of benefitsv" :key="index"
                        :class="item?.active ? 'item active' : 'item'" 
                        >
                        <NuxtLink :class="item?.subs.length > 0 ? 'item__link listly' : 'item__link'"
                            @click="changeRoute(item?.slug)"
                            >
                            {{ item.title }}
                        </NuxtLink>

                        <span class="item__open"
                            v-if="item?.subs.length > 0" 
                            @click="item?.subs ? changeBenefit(index) : null">
                            <img src="@/assets/logo/basic/arrowRight.svg">
                        </span>

                        <ul class="item__list" v-if="item?.subs">
                            <li v-for="subItem, index of item?.subs" :key="index">
                                <NuxtLink 
                                    :to="subItem?.slug" 
                                    @click="closeMenu">
                                    {{ subItem?.title }}
                                </NuxtLink>
                            </li>
                        </ul>
                    </li>

                    <li class="item">
                        <NuxtLink class="item__link" @click="changeRoute('contacts')"> 
                            <span>{{ $t('contacts') }}</span>
                        </NuxtLink>
                    </li>
                </ul>
            </div>
            <div class="menu__bot">
                <ul class="menu__more">
                    <li class="item">
                        <div class="item__logo">
                            <img src="@/assets/logo/basic/globe.svg">
                        </div>
                        <div class="menu__lang">
                            <div class="item" 
                                v-for="lang in availableLocales"
                                :key="lang.code"
                            >
                                <button
                                    :class="lang.code == locale ? 'active' : ''"
                                    @click.prevent.stop="setLocale(lang.code), changeLang(lang.code)"
                                >
                                    <span>{{ lang.name }}</span>
                                </button>
                            </div>
                        </div>
                    </li>
                    <li class="item">
                        <div class="item__logo">
                            <img src="@/assets/logo/basic/calendar.svg">
                        </div>
                        <span class="item__title">13/06/2023</span>
                    </li>
                    <li class="item">
                        <div class="item__logo">
                            <img src="@/assets/logo/basic/cloudRizzel.svg">
                        </div>
                        <span class="item__title">Ташкент</span>
                        <span class="item__title">32°C</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/menu.scss';
</style>