import {defineStore} from 'pinia';

export const useDailyPrice = defineStore('DailyPrice', {
    state: () => {
        return {
            priceList: [],
            unpinnedPriceList: [],
            clonedPriceList: [],
            pinnedList: [],
        }
    },
    actions: {
        initializePinnedList() {
            if (typeof window !== 'undefined') {
                this.pinnedList = JSON.parse(localStorage.getItem('pinnedItems') || '[]');
            }
        },
        savePriceList(list) {
            this.priceList = list;
            // add isPinned to response to check if item is pinned or not
            this.clonedPriceList = this.priceList.map(category => {
                const categoryOBJ = {
                    title_fa: category.category_fa,
                    title_en: category.category_en,
                    list: category.priceLists.map(item => ({
                        ...item,
                        isPinned: this.pinnedList.includes(item.id),
                    }))
                }

                return categoryOBJ;
            });
            // I made an unpinned list so them who isPinned are false will push to upPinned Array
            this.clonedPriceList.map(category => {
                category.list.map(item => {
                    if (item.isPinned) {
                        this.unpinnedPriceList.push(item);
                    }
                })
            })
        },
        updatePinnedList(newPinnedList) {
            this.pinnedList = newPinnedList;
            if (typeof window !== 'undefined') {
                localStorage.setItem('pinnedItems', JSON.stringify(newPinnedList));
                this.clonedPriceList = this.priceList.map(category => {
                    const categoryOBJ = {
                        title_fa: category.category_fa,
                        title_en: category.category_en,
                        list: category.priceLists.map(item => ({
                            ...item,
                            isPinned: this.pinnedList.includes(item.id),
                        }))
                    }

                    return categoryOBJ;
                });


                this.unpinnedPriceList = [];
                this.clonedPriceList.map(category => {
                    category.list.map(item => {
                        if (item.isPinned) {
                            this.unpinnedPriceList.push(item);
                        }
                    })
                })
            }
        },
        togglePin(id) {
            const index = this.pinnedList.indexOf(id);
            if (index === -1) {
                this.pinnedList.push(id);
            } else {
                this.pinnedList.splice(index, 1);
            }
            this.updatePinnedList(this.pinnedList);
        },
        // togglePin2(id) {
        //     const index = this.pinnedList.indexOf(id);
        //     if (index === -1) {
        //         this.pinnedList.push(id);
        //     } else {
        //         this.pinnedList.splice(index, 1);
        //     }
        //     localStorage.setItem('pinnedItems', JSON.stringify(this.pinnedList));
        //     this.testPriceList = this.testPriceList.map(item => ({
        //         ...item,
        //         isPinned: this.pinnedList.includes(item.id)
        //     }));
        // }
    },
})