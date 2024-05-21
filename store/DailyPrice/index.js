import { defineStore } from 'pinia';

export const useDailyPrice = defineStore('DailyPrice', {
    state: () => {
        return {
            priceList: [],
            unpinnedPriceList: [],
            testPriceList2: [],
            pinnedList: [],
        }
    },
    actions: {
        initializePinnedList() {
            if (typeof window !== 'undefined') {
                this.pinnedList = JSON.parse(localStorage.getItem('pinnedItems') || '[]');
            }
        },
        savePriceList(list){
            this.priceList = list;
            // this.testPriceList = list.flatMap(category => category.priceLists.map(item => ({
            //     ...item,
            //     // category_fa: category.category_fa, // Optional: track category
            //     isPinned: this.pinnedList.includes(item.id)
            // })));
            this.testPriceList2 = this.priceList.map(category => {
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

            this.testPriceList2.map(category => {
                category.list.map(item => {
                    if(item.isPinned){
                        this.unpinnedPriceList.push(item);
                    }
                })
            })
        },
        updatePinnedList(newPinnedList) {
            this.pinnedList = newPinnedList;
            if (typeof window !== 'undefined') {
                localStorage.setItem('pinnedItems', JSON.stringify(newPinnedList));
                this.testPriceList2 = this.priceList.map(category => {
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


                // setTimeout(() => {
                //     console.log("fgd")
                    this.unpinnedPriceList = [];
                    this.testPriceList2.map(category => {
                        category.list.map(item => {
                            // console.log(item)
                            if(item.isPinned){
                                this.unpinnedPriceList.push(item);
                            }
                        })
                    })
                // }, 100)
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
        togglePin2(id) {
            const index = this.pinnedList.indexOf(id);
            if (index === -1) {
                this.pinnedList.push(id);
            } else {
                this.pinnedList.splice(index, 1);
            }
            localStorage.setItem('pinnedItems', JSON.stringify(this.pinnedList));
            this.testPriceList = this.testPriceList.map(item => ({
                ...item,
                isPinned: this.pinnedList.includes(item.id)
            }));
        }
    },
})