<template>
    <section
        class="bg-gray-50 dark:bg-gray-900 h-[calc(100vh-61px)] overflow-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-white dark:scrollbar-thumb-gray-800 dark:scrollbar-track-gray-900">
        <section class="p-4 mx-auto container lg:max-w-4xl">
            <!-- breadcrumbs -->
            <div class="text-gray-500 dark:text-gray-400 text-xs md:text-sm flex items-center gap-2 mb-4">
                <NuxtLink to="/homepage"> پایه یک</NuxtLink>
                <NuxtLink to="/homepage" class="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" class="size-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"/>
                    </svg>
                    <span> آگهی </span>
                </NuxtLink>
            </div>

            <main class="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-16">
                <!-- slider -->
                <section class="order-1 md:order-2">
                    <Slider/>
                </section>

                <!-- information -->
                <Information v-if="totalInfo"/>
            </main>

            <!-- related advertises -->
            <section>
                <Swiper class="mb-4">
                    <SwiperSlide v-for="slide in 6">
                        <NuxtLink to="/homepage/advertises"
                                  class="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-md dark:bg-gray-800 dark:border-gray-700 transition-all duration-300">
                            <div class="w-full md:w-36 lg:w-48 xl:w-40 md:flex-none">
                                <div class="relative w-full pt-[75%] md:pt-[100%]">
                                    <img class="object-cover size-full absolute top-0 right-0"
                                         :src="`${useRuntimeConfig().public.imageUrl}/storage/media/land/files/I4Lr2n1r1QUyaWmStOpxEMXc1AZSA0Y4tEqTgpkF.webp`"
                                         alt="" draggable="false"/>
                                </div>
                            </div>
                            <div
                                class="w-full p-4 flex flex-col justify-around md:justify-between space-y-5 md:space-y-0 md:py-2">
                                <div
                                    class="flex items-start gap-4 justify-between md:flex-col md:justify-start md:gap-0">
                                    <h2 class="mb-2 line-clamp-2 text-sm md:text-base font-bold font-iran tracking-tight text-gray-900 dark:text-white">
                                        برند &nbsp; مدل &nbsp; تایتل
                                    </h2>
                                    <span
                                        class="text-nowrap bg-primary-100 text-primary-800 text-[0.7rem] font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200/75 dark:text-primary-800"> محمدشهر </span>
                                </div>

                                <div class="flex flex-row-reverse justify-between items-center ">
                                <span
                                    class="text-xs md:text-sm inline-flex items-center font-medium text-primary-600 dark:text-primary-500">2000 تومان</span>
                                    <span
                                        class="text-[0.7rem] line-clamp-1 text-gray-900 dark:text-gray-300"> تاریخ انتشار </span>
                                </div>
                            </div>
                        </NuxtLink>
                    </SwiperSlide>
                </Swiper>
            </section>
        </section>
    </section>
</template>

<script>
import {Swiper, SwiperSlide} from 'swiper/vue';
import Slider from "~/components/AdvertiseSingle/Slider/index.vue";
import Information from "~/components/AdvertiseSingle/Information/index.vue";
import {usePayeYekAdvertiseSingle} from "~/store/index.js";

export default {
    name: 'Paye Yek Product Page',
    components: {
        Slider,
        Information,
        Swiper,
        SwiperSlide,
    },
    setup() {
        // definePageMeta({
        //     layout: 'paye1',
        // })
        const route = useRoute();
        const adSingleStore = usePayeYekAdvertiseSingle();
        const advertise = ref(route.params.advertise);
        const totalInfo = ref(computed(() => adSingleStore.information));

        // console.log(route.params.advertise);

        const information = ref(null);

        const loadAdvertiseData = async (filter) => {
            const response = await useFetch(`${useRuntimeConfig().public.apiBase}/ad/${filter}`);
            if (response.data.value.status == 200) {
                // console.log(response.data.value)
                let imagesList = response.data.value.data.slider_images;
                let imagesListCloned = [...response.data.value.data.slider_images];
                let imageSingle = response.data.value.data.primary_image;
                imagesListCloned.unshift(imageSingle)
                adSingleStore.saveGallery(imageSingle, imagesList, imagesListCloned);
                adSingleStore.saveInformation(response.data.value.data);
            }
            // console.log(response.data.value);
        }

        loadAdvertiseData(1);

        return {
            totalInfo,
        }
    }
}
</script>