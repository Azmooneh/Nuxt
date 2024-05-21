import { defineStore } from 'pinia';

export const useDailyPrice = defineStore('DailyPrice', {
    state: () => {
        return {
            priceList: [],
            pinnedList: [],
        }
    },
    actions: {
        savePriceList(list){
            this.priceList = list;
        }
    },
})