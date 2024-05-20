<template>
    <section>
        <Swiper class="mb-4">
            <SwiperSlide v-for="slide in gallery">
                <div class="relative pt-[100%] md:pt-[75%] w-full" @click="toggleModalStatus(true)">
                    <img class="object-cover absolute w-full h-full rounded top-0 left-0" :src="`${useRuntimeConfig().public.imageUrl}/storage/` + slide" alt="slide" />
                </div>
            </SwiperSlide>
        </Swiper>
        <!-- thumbnails -->
        <section class="hidden lg:flex items-center gap-2">
            <div class="size-24 rounded overflow-hidden cursor-pointer" @click="toggleModalStatus(true)" v-for="thumb in sliderImages">
                <img :src="`${useRuntimeConfig().public.imageUrl}/storage/` + thumb" class="size-full object-cover" />
            </div>
        </section>
    </section>
    <!-- modal layer -->
    <div class="fixed bg-gray-900/50 backdrop-blur-sm z-10 inset-0" @click="toggleModalStatus(false)" v-show="modalStatus"></div>

    <!-- modal content -->
    <div class="fixed top-0 left-0 w-full lg:top-1/2 lg:left-1/2 lg:w-auto lg:h-auto lg:-translate-y-1/2 lg:-translate-x-1/2 flex items-center justify-center h-full bg-black z-20" @click="toggleModalStatus(false)" v-show="modalStatus">
        <!-- close btn -->
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 cursor-pointer z-20 stroke-white absolute top-4 left-4" @click="toggleModalStatus(false)">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
        <Swiper class="w-full max-w-md lg:max-w-2xl">
            <SwiperSlide v-for="slide in gallery">
                <div class="relative pt-[100%] md:pt-[75%] w-full" @click="toggleModalStatus(true)">
                    <img class="object-contain absolute w-full h-full rounded top-0 left-0" :src="`${useRuntimeConfig().public.imageUrl}/storage/` + slide" alt="slide" />
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
</template>

<script>
import {Swiper, SwiperSlide} from 'swiper/vue';
import {usePayeYekAdvertiseSingle} from "~/store/index.js";

export default {
    name: 'Paye Yek Product Page',
    components: {
        Swiper,
        SwiperSlide,
    },
    setup(){
        const adSingleStore = usePayeYekAdvertiseSingle();
        const modalStatus = ref(false);
        const primaryImage = ref(computed(() => adSingleStore.primaryImage));
        const sliderImages = ref(computed(() => adSingleStore.thumbnailImages));
        const gallery = ref(computed(() => adSingleStore.sliderCompact));

        const toggleModalStatus = status => {
            modalStatus.value = status;
        }

        return {
            modalStatus,
            toggleModalStatus,
            primaryImage,
            sliderImages,
            gallery,
        }
    }
}
</script>