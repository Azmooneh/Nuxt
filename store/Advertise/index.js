import { defineStore } from 'pinia';

export const useAdvertiseSingle = defineStore('AdvertiseSingle', {
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

export const useAdvertiseSingleCommon = defineStore('AdvertiseSingleCommon', {
    state: () => {
        return {
            openSliderModal: false,
        }
    },
    actions: {
        toggleSliderModal(status){
            this.openSliderModal = status;
        }
    },
})