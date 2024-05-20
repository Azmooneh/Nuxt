<template>
    <!-- modal layer -->
    <div class="fixed bg-gray-900/50 backdrop-blur-sm z-10 inset-0" @click="toggleSliderModalStatus(false)" v-show="modalStatus"></div>

    <!-- modal content -->
    <div class="fixed top-0 left-0 w-full lg:top-1/2 lg:left-1/2 h-full lg:max-w-2xl lg:h-auto lg:-translate-y-1/2 lg:-translate-x-1/2 flex items-center justify-center bg-black z-20" @click="toggleSliderModalStatus(false)" v-show="modalStatus">
        <!-- close btn -->
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 cursor-pointer z-20 stroke-white absolute top-4 left-4" @click="toggleSliderModalStatus(false)">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>

        <Swiper :modules="modalModules" class="w-full lg:max-w-2xl">
            <SwiperSlide v-for="slide in gallery">
                <div class="relative pt-[100%] md:pt-[75%] w-full" @click="toggleSliderModalStatus(true)">
                    <img class="object-contain absolute w-full h-full rounded top-0 left-0" :src="`${useRuntimeConfig().public.imageUrl}/storage/` + slide" alt="slide" />
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
</template>

<script>
import {Swiper, SwiperSlide} from 'swiper/vue';
import {useAdvertiseSingle, useAdvertiseSingleCommon} from "~/store/Advertise/index.js";
import { Navigation, Keyboard } from 'swiper/modules';

export default {
    name: "Advertise Slider Modal",
    components: {
        Swiper,
        SwiperSlide,
    },
    setup(){
        const advertiseStore = useAdvertiseSingle();
        const advertiseStoreCommon = useAdvertiseSingleCommon();
        const modalStatus = ref(computed(() => advertiseStoreCommon.openSliderModal));
        const gallery = ref(computed(() => advertiseStore.sliderCompact));

        const toggleSliderModalStatus = status => {
            advertiseStoreCommon.toggleSliderModal(status);
        }

        return {
            toggleSliderModalStatus,
            modalStatus,
            gallery,
            modalModules: [Navigation, Keyboard],
        }
    }
}
</script>