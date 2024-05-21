<template>
    <section>
        <div class="custom-slider-mobile-arrows">
            <Swiper :navigation="true" :speed="750" class="mb-4" :modules="mainModules">
                <SwiperSlide v-for="slide in gallery">
                    <div class="relative pt-[100%] md:pt-[75%] w-full" @click="toggleSliderModalStatus(true)">
                        <img class="object-cover absolute w-full h-full rounded top-0 left-0" :src="slide" alt="slide" />
                    </div>
                </SwiperSlide>
            </Swiper>
            <!-- thumbnails -->
            <section class="hidden lg:flex items-center gap-2">
                <div class="size-24 rounded overflow-hidden cursor-pointer" @click="toggleSliderModalStatus(true)" v-for="thumb in sliderImages">
                    <img :src="thumb" class="size-full object-cover" />
                </div>
            </section>
        </div>

        <ModalSlider />
    </section>

</template>

<script>
import {Swiper, SwiperSlide} from 'swiper/vue';
import {useAdvertiseSingle, useAdvertiseSingleCommon} from "~/store/Advertise/index.js";
import { Navigation } from 'swiper/modules';
import ModalSlider from "~/components/AdvertiseSingle/Slider/Children/ModalSlider/index.vue";

export default {
    name: 'Paye Yek Product Page',
    components: {
        Swiper,
        SwiperSlide,
        ModalSlider,
    },
    setup(){
        const advertiseStore = useAdvertiseSingle();
        const advertiseStoreCommon = useAdvertiseSingleCommon();
        const primaryImage = ref(computed(() => advertiseStore.primaryImage));
        const sliderImages = ref(computed(() => advertiseStore.thumbnailImages));
        const gallery = ref(computed(() => advertiseStore.sliderCompact));

        const toggleSliderModalStatus = status => {
            advertiseStoreCommon.toggleSliderModal(status);
        }

        return {
            primaryImage,
            sliderImages,
            gallery,
            toggleSliderModalStatus,
            mainModules: [Navigation],
        }
    }
}
</script>