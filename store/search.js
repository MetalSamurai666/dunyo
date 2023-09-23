import { defineStore } from 'pinia'

export const useSearchStore = defineStore('searchId', () => {
    const searchState = ref(false)

    function searchChange(){
        searchState.value = !searchState.value
    }

        return { searchState, searchChange }
    }
)