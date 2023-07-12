import { defineStore } from 'pinia'
import { useMainStore } from '~~/store/main'

export const useLocaleStore = defineStore('i18nId', () => {
        const book = ref({})
        const main = useMainStore()

        const getTranslations = async (lang) => {
            // console.log(lang);
            const res = await useFetch(main.url+`/api/languages/all/?lang=${lang}`)
            if (res.data.value){
                book.value = res.data.value
            }
        }
        
        const getKeywords = async (lang) => {
            // console.log(lang);
            const res = await useFetch(main.url+`/api/keyword?lang=${lang}`)
            if (res.data.value){
                book.value = res.data.value
            }
        }


        return { book, getTranslations, getKeywords }
    }
)