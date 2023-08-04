import { defineStore } from 'pinia'

export const useMainStore = defineStore('indexId', () => {
    const url = ref('https://dunyoapi.gsoft.uz')
    const cats = ref([])

    const getCats = (lang) => {
        return useFetch(url.value+`/api/category/all/?lang=${lang}`)
        .catch(er => console.log(er))
    }

    const getSuperCats = async (lang) => {
        const res = await useFetch(url.value+`/api/category/all/?lang=${lang}`)
        if (res.data.value) {
            cats.value = res.data.value
            // console.log(cats.value)
        }
    }
    
    const getOneCat = (slug, lang) => {
        // console.log(slug, lang);
        return useFetch(url.value+`/api/category/get/${slug}/?lang=${lang}`)
        .catch(er => console.log(er))
    }
    
    const getNews = (slug, lang) => {
        console.log(slug, lang);
        return useFetch(url.value+`/api/news/get/${slug}/?lang=${lang}`)
        .catch(er => console.log(er))
    }
    
    const getWeather = (lat, long) => {
        // console.log(lat, long);
        return useFetch(url.value+`/api/weather/?lat=${lat}/?long=${long}`)
        .catch(er => console.log(er))
    }

/* Welcome Section */
    const getSliderNews = (lang) => {
        console.log(lang);
        return useFetch(url.value+`/api/news/main/?lang=${lang}`)
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
    
    const getRandNews = (slug) => {
        // console.log(slug);
        return useFetch(url.value+`/api/category/latest/${slug}`)
        .catch(er => console.log(er))
    }

    const getFirstTabs = () => {
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
    const getSlides = (slug) => {
        return useFetch(url.value+`/api/news/slider/${slug}`)
        .catch(er => console.log(er))
    }


        return { 
            url, 
            // getArraySlider, 
            cats,
            getCats, 
            getSuperCats,
            getOneCat, 
            getNews, 
            getWeather, 
            getSliderNews, 
            getActualNews, 
            getLatestNews,
            getFirstCats,
            getRandNews,
            getFirstTabs,
            getSecondCats,
            getSlides,
        }
    }
)