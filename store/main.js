import { defineStore } from 'pinia'

export const useMainStore = defineStore('indexId', () => {
    const url = ref('https://dunyo-back.doom.uz')

    // const getArraySlider = async () => {
    //     return await useFetch('https://umft-merch.of-astora.uz/abroor')
    // }

    const getCats = (lang) => {
        return useFetch(url.value+`/api/category/all/?lang=${lang}`)
        .catch(er => console.log(er))
    }
    
    const getOneCat = (slug, lang) => {
        // console.log(slug);
        return useFetch(url.value+`/api/category/get/${slug}/?lang=${lang}`)
        .catch(er => console.log(er))
    }
    
    const getNews = (slug, lang) => {
        // console.log(slug);
        return useFetch(url.value+`/api/news/get/${slug}/?lang=${lang}`)
        .catch(er => console.log(er))
    }
    
    const getWeather = (position) => {
        // console.log(position);
        return useFetch(url.value+`/api/waether/?=${position}`)
        .catch(er => console.log(er))
    }

/* Welcome Section */
    const getSliderNews = () => {
        return useFetch(url.value+`/api/news/main`)
        .catch(er => console.log(er))
    }
    
    const getActualNews = () => {
        return useFetch(url.value+`/api/news/actuals`)
        .catch(er => console.log(er))
    }
    
    const getLatestNews = () => {
        return useFetch(url.value+`/api/news/latest`)
        .catch(er => console.log(er))
    }

/* First Section */
    const getFirstCats = (slug) => {
        // console.log(slug);
        return useFetch(url.value+`/api/category/main/${slug}`)
        .catch(er => console.log(er))
    }

    const getFirstTabs = (slug) => {
        // console.log(slug);
        return useFetch(url.value+`/api/news/tabs`)
        .catch(er => console.log(er))
    }
    
/* Second Section */
    const getSecondCats = (slug) => {
        // console.log(slug);
        return useFetch(url.value+`/api/category/tabs/${slug}`)
        .catch(er => console.log(er))
    }
    
/* Slider Section */
    const getSlides = () => {
        return useFetch(url.value+`/api/news/slider`)
        .catch(er => console.log(er))
    }
    
        return { 
            url, 
            // getArraySlider, 
            getCats, 
            getOneCat, 
            getNews, 
            getWeather, 
            getSliderNews, 
            getActualNews, 
            getLatestNews,
            getFirstCats,
            getFirstTabs,
            getSecondCats,
            getSlides
        }
    }
)