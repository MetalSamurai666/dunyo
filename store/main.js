import { defineStore } from 'pinia'

export const useMainStore = defineStore('indexId', () => {
    const url = ref('https://dunyo-back.doom.uz')

    const getArraySlider = async () => {
        return await useFetch('https://umft-merch.of-astora.uz/abroor')
    }

    const getCats =  (lang) => {
        return  useFetch(url.value+`/api/category/all/?lang=${lang}`)
        .catch(er => console.log(er))
    }

    const getOneCat =  (slug, lang) => {
        // console.log(slug);
        return  useFetch(url.value+`/api/category/get/${slug}/?lang=${lang}`)
        .catch(er => console.log(er))
    }

    const getNews =  (slug, lang) => {
        console.log(slug);
        return  useFetch(url.value+`/api/news/${slug}/?lang=${lang}`)
        .catch(er => console.log(er))
    }

        return { url, getArraySlider, getCats, getOneCat, getNews }
    }
)