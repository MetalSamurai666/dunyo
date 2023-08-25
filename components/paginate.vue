<template>
    <!-- <div v-for="item in data" :key="item.index">{{ item.value }}</div> -->
    <button @click="backPage">prev</button>
    <button v-for="item in Math.ceil(props?.data / perPage)" :key="item" @click="() => goToPage(item)">
        {{ item }}
    </button>
    <button @click="nextPage">next</button>
    <pre>{{ data }}</pre>
</template>

<script setup>

    let page = ref(1);

    const props = defineProps({
        data: Number
    })

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
        }
    };

    const backPage = () => {
        if (page.value !== 1) {
            page.value -= 1;
            emit('next',page.value)
        }
    };

    const goToPage = (numPage) => {
        page.value = numPage;
    };
</script>

<style>
</style>