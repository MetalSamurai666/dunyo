import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menuId', () => {
    const menuState = ref(false)

    function menuChange(){
        menuState.value = !menuState.value
    }

        return { menuState, menuChange }
    }
)