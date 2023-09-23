<script setup>
    let page = ref(1);

    const props = defineProps({
        data: Number
    })

    const count = computed(()=> Math.ceil(parseInt(props.data) / perPage))
    const emit = defineEmits(['next'])

    // const data = Array.from(Array(24).keys()).map((item) => {
    //     return {
    //         index: item,
    //         value: `this_${item}`
    //     };
    // });

    const perPage = 6;


    const nextPage = () => {
        if (page.value !== Math.ceil(props.data / perPage)) {
            page.value += 1;
            emit('next',page.value)
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const backPage = () => {
        if (page.value !== 1) {
            page.value -= 1;
            emit('next',page.value)
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const active = ref()

    const goToPage = (numPage) => {
        page.value = numPage;
        emit('next',page.value)
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    onMounted(() => {
        active.value = page
    })
</script>

<template>
    <div class="paginate">
        <button @click="backPage">
            <img src="@/assets/logo/basic/arrowRight.svg">
        </button>
    
        <button v-for="item in count" :key="item" @click="() => goToPage(item)" :class="page == item ? 'paginate__btn active' : 'paginate__btn'" >
            {{ item }}
        </button>
        <button @click="nextPage">
            <img src="@/assets/logo/basic/arrowRight.svg">
        </button>
    </div>
    <!-- <div v-for="item in data" :key="item.index">{{ item.value }}</div> -->
</template>

<style lang="scss">
@import '@/assets/styles/main.scss';

.paginate{
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    button{
        width: 30px;
        height: 30px;
        color: #000;
        background-color: #ccc;
        @include df-aic-jcc;
        @include tr(.2s);
        font-weight: 500;
        img{
            @include tr(.2s);
            filter: brightness(0);
        }
        &:first-child{
            img{
                transform: rotate(180deg);
            }
        }
        &:hover{
            background-color: $colorLightBlue;
            color: #fff;
            img{
                filter: brightness(1);
            }
        }
    }
    &__btn{
        &.active{
            background-color: $colorLightBlue;
            color: #fff;
        }
    }
}
</style>