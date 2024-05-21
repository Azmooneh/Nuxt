<template>
    <!-- skeletons -->
    <section class="min-h-[calc(100vh-61px)] bg-gray-50 dark:bg-gray-900 pt-4" v-if="watchLoading">loading</section>
    <!-- if we have error -->
    <section v-else-if="error" class="flex-col w-full h-screen gap-4 flex_center bg-gray-50 dark:bg-gray-900">
        <iframe src="https://lottie.host/embed/fa73d967-9d5d-40c4-ba37-d8dc01185d88/XVqCFf2DuQ.json"></iframe>
        <p class="text-base font-medium text-center caption_color"> ارور: {{ error }} </p>
    </section>
    <!-- data -->
    <section v-else
        class="bg-gray-50 dark:bg-gray-900 h-[calc(100vh-61px)] overflow-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-white dark:scrollbar-thumb-gray-800 dark:scrollbar-track-gray-900">
        <section class="p-4 mx-auto container lg:max-w-4xl">
            <!-- breadcrumbs -->
            <div class="text-gray-500 dark:text-gray-400 text-xs md:text-sm flex items-center gap-2 mb-4">
                <NuxtLink to="/"> پایه یک</NuxtLink>
                <NuxtLink to="/" class="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" class="size-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"/>
                    </svg>
                    <span> آگهی </span>
                </NuxtLink>
            </div>

            <main class="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-16 mb-12">
                <!-- slider -->
                <section class="order-1 md:order-2">
                    <Slider/>
                </section>

                <!-- information -->
                <Information />
            </main>

            <!-- related advertises -->
            <RelatedAdvertises />
        </section>
    </section>
</template>

<script>

import Slider from "~/components/AdvertiseSingle/Slider/index.vue";
import Information from "~/components/AdvertiseSingle/Information/index.vue";
import {useAdvertiseSingle} from "~/store/Advertise/index.js";
import RelatedAdvertises from "~/components/AdvertiseSingle/RelatedAdvertises/index.vue";

export default {
    name: 'Paye Yek Product Page',
    components: {
        Slider,
        Information,
        RelatedAdvertises,
    },
    setup() {
        const loading = ref(true);
        const error = ref(null);
        const watchLoading = ref(true);
        const route = useRoute();
        const advertiseStore = useAdvertiseSingle();
        const advertise = ref(route.params.advertise);
        const totalInfo = ref(computed(() => advertiseStore.information));

        const loadAdvertiseData = async (filter) => {
            const response = await useFetch(`${useRuntimeConfig().public.apiBase}/ad/${filter}`);
            console.log(response.data.value.data);
            if (response.data.value.status == 200) {
                try {
                    loading.value = true;
                    let imagesList = response.data.value.data.slider_images;
                    let imagesListCloned = [...response.data.value.data.slider_images];
                    let imageSingle = response.data.value.data.primary_image;
                    imagesListCloned.unshift(imageSingle)
                    advertiseStore.saveGallery(imageSingle, imagesList, imagesListCloned);
                    advertiseStore.saveInformation(response.data.value.data);
                } catch (e) {
                    error.value = err.message || 'سرور به مشکل خورده است.';
                } finally {
                    loading.value = false;
                }
            }
        }

        loadAdvertiseData(1);

        watch(() => loading.value, (n, o) => {
            watchLoading.value = n;
        });

        return {
            totalInfo,
            watchLoading,
            error,
        }
    }
}
</script>