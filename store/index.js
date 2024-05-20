import { defineStore } from 'pinia';
import UniversalCookie from 'universal-cookie';

export const useCommon = defineStore('PayeYek', {
    state: () => {
        const theme = useCookie('darkmode');
        return {
            openSidebar: false,
            darkMode: theme.value != null ? theme.value : false,
        }
    },
    actions: {
        toggleSidebar() {
            this.openSidebar = !this.openSidebar;
        },
        toggleDarkmode(){
            this.darkMode = !this.darkMode;
            const cookies = new UniversalCookie();
            cookies.set('darkmode', this.darkMode);
            if (this.darkMode) {
                document.documentElement.classList.add("dark")
            } else {
                document.documentElement.classList.remove("dark")
            }
        }
    },
})

export const useHomePage = defineStore('HomePage', {
    state: () => {
        return {
            advertises: [],
        }
    },
    actions: {
        saveAdvertises(list){
            this.advertises = list;
        }
    },
})

export const usePayeYekAdvertiseSingle = defineStore('PayeYekAdvertiseSingle', {
    state: () => {
        return {
            primaryImage: null,
            thumbnailImages: null,
            sliderCompact: null,
            information: null,
        }
    },
    actions: {
        saveGallery(image, images, gallery){
            this.primaryImage = image;
            this.thumbnailImages = images;
            this.sliderCompact = gallery;
        },
        saveInformation(info){
            this.information = info;
        }
    },
})
