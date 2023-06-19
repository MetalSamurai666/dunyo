import { defineStore } from 'pinia'

export const useMainStore = defineStore('indexId', () => {
    const url = ref('https://umft-merch.of-astora.uz/abroor')

    const getArray = async () => {
        return await useFetch(url)
    }

        return { url, getArray }
    }
)