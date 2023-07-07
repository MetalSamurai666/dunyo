import { defineStore } from 'pinia'

export const useMainStore = defineStore('indexId', () => {
    const url = ref('https://dunyo-back.doom.uz')

    const getArraySlider = async () => {
        return await useFetch('https://umft-merch.of-astora.uz/abroor')
    }

    const getCats =  (lang) => {
        console.log(lang);
        return  useFetch(url.value+`/api/category/all/?lang=${lang}`)
        .catch(er => console.log(er))
    }

    const getOneCat =  (slug) => {
        // console.log(slug);
        return  useFetch(url.value+`/api/category/get/${slug}`)
        .catch(er => console.log(er))
    }

    const getNews =  (slug) => {
        // console.log(slug);
        return  useFetch(url.value+`/api/news/${slug}`)
        .catch(er => console.log(er))
    }

        return { url, getArraySlider, getCats, getOneCat, getNews }
    }
)