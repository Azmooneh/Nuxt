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
        <section class="px-4 mx-auto container grid grid-cols-1 lg:grid-cols-4 h-full">
            <!-- desktop tToC -->
            <section class="hidden lg:block border-l border-l-gray-200 dark:border-l-gray-700 p-4">
                <ToCcolumn />
            </section>
            <!-- main column -->
            <section class="lg:col-span-3 p-4">
                <!-- breadcrumbs -->
                <div class="text-gray-500 dark:text-gray-400 text-xs md:text-sm flex items-center gap-2 mb-4">
                    <NuxtLink to="/"> پایه یک</NuxtLink>
                    <NuxtLink to="/" class="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" class="size-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"/>
                        </svg>
                        <span> قیمت روز خودرو </span>
                    </NuxtLink>
                </div>

                <!-- pinned -->
                <Pinned />

                <!-- price list -->
                <PriceList />
            </section>
        </section>
    </section>
</template>

<script>
import Pinned from "~/components/DailyPrice/Pinned/index.vue";
import PriceList from "~/components/DailyPrice/PriceList/index.vue";
import {useDailyPrice} from "~/store/DailyPrice/index.js";
import ToCcolumn from "~/components/DailyPrice/ToCcolumn/index.vue";

export default {
    name: 'Daily Price',
    components: {
        Pinned,
        PriceList,
        ToCcolumn,
    },
    setup(){
        const dailyPriceStore = useDailyPrice();
        const loading = ref(true);
        const error = ref(null);
        const watchLoading = ref(true);

        // localStorage.setItem('pinnedItems', 1);

        const loadPrices = async () => {
            try {
                loading.value = true;
                const response = await useFetch(`${useRuntimeConfig().public.apiBase}/ad/price/list`);
                if (response.data.value.status == 200) {
                    dailyPriceStore.savePriceList(response.data.value.data);
                }
            } catch (e) {
                error.value = err.message || 'سرور به مشکل خورده است.';
            } finally {
                loading.value = false;
            }
        }

        watch(() => loading.value, (n, o) => {
            watchLoading.value = n;
        });

        loadPrices();

        onMounted(() => {
            dailyPriceStore.initializePinnedList();
        })


        return {
            watchLoading,
            error,
        }
    }
}
</script>