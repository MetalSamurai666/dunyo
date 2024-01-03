import { defineStore } from 'pinia'

export const useMainStore = defineStore('indexId', () => {
    const url = ref('https://api.dunyo.info')
    const mainUrl = ref('https://dunyo.info')
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
    
    const getOneCat = (slug, lang, page) => {
        console.log(slug, page, lang)
        return useFetch(url.value+`/api/category/get/${slug}/?page=${page}&lang=${lang}`)
        .catch(er => console.log(er))
    }
        
    const getNews = (slug, lang) => {
        // console.log(slug, lang)
        return useFetch(url.value+`/api/news/get/${slug}/?lang=${lang}`)
        .catch(er => console.log(er))
    }
    
    const getWeather = (lat, long) => {
        // console.log(lat, long)
        // return useFetch(url.value+`/api/weather/?lat=${lat}&long=${long}`)
        return useFetch(url.value+`/api/weather/`)
        .catch(er => console.log(er))
    }

/* Welcome Section */
    const getSliderNews = (lang) => {
        // console.log(lang);
        return useFetch(url.value+`/api/news/main/?lang=${lang}`)
        .catch(er => console.log(er))
    }
    
    const getActualNews = (lang) => {
        return useFetch(url.value+`/api/news/actuals/?lang=${lang}`)
        .catch(er => console.log(er))
    }
    
    const getLatestNews = (lang) => {
        return useFetch(url.value+`/api/news/latest/?lang=${lang}`)
        .catch(er => console.log(er))
    }

/* First Section */
    const getFirstCats = (lang) => {
        // console.log(slug);
        return useFetch(url.value+`/api/category/main/?lang=${lang}`)
        .catch(er => console.log(er))
    }
    
    const getRandNews = (slug, lang) => {
        // console.log(slug);
        return useFetch(url.value+`/api/category/latest/${slug}/?lang=${lang}`)
        .catch(er => console.log(er))
    }

    const getFirstTabs = (lang) => {
        // console.log(slug);
        return useFetch(url.value+`/api/news/tabs/?lang=${lang}`)
        .catch(er => console.log(er))
    }
    
/* Second Section */
    const getSecondCats = (slug, lang) => {
        // console.log(slug);
        return useFetch(url.value+`/api/category/tabs/${slug}/?lang=${lang}`)
        .catch(er => console.log(er))
    }
    
/* Slider Section */
    const getSlides = (lang) => {
        return useFetch(url.value+`/api/news/slider/?lang=${lang}`)
        .catch(er => console.log(er))
    }
/* World Map Filter */
    const getAllCountries = (lang) => {
        // console.log(id, lang)
        return useFetch(url.value+`/api/countries/?lang=${lang}`)
        .catch(er => console.log(er))
    }

    const getCountry = (id, lang) => {
        // console.log(id, lang)
        return useFetch(url.value+`/api/news/country/${id}/?lang=${lang}`)
        .catch(er => console.log(er))
    }

    const getVideos = (param = 1, page = 6) => {
        // console.log(param, page)
        return useFetch(url.value+`/api/youtube/?next=${param}&page=${page}`)
        .catch(er => console.log(er))
    }

    const getGallery = (lang, param = 1, page = 8) => {
        // console.log(param, page, lang)
        return useFetch(url.value+`/api/photos/?next=${param}&page=${page}&lang=${lang}`)
        .catch(er => console.log(er))
    }
    const getOneGallery = (id, lang) => {
        // console.log(id, lang)
        return useFetch(url.value+`/api/photos/${id}/?lang=${lang}`)
        .catch(er => console.log(er))
    }
    
    const getSearch = (title, lang, next) => {
        return useFetch(url.value+`/api/search/?title=${title}&lang=${lang}&next=${next}`)
        .catch(er => console.log(er))
    }

    const getSponsors = (lang) => {
        // console.log(lang);
        return useFetch(url.value+`/api/partners/?lang=${lang}`)
        .catch(er => console.log(er))
    }


        return { 
            url, 
            mainUrl,
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
            getAllCountries,
            getCountry,
            getVideos,
            getGallery,
            getOneGallery,
            getSearch,
            getSponsors
        }
    }
)