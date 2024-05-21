<template>
    <!-- skeletons -->
    <!--    <section class="min-h-[calc(100vh-61px)] bg-gray-50 dark:bg-gray-900 pt-4" v-if="watchLoading">loading</section>-->
    <!-- if we have error -->
    <!--    <section v-else-if="error" class="flex-col w-full h-screen gap-4 flex_center bg-gray-50 dark:bg-gray-900">-->
    <!--        <iframe src="https://lottie.host/embed/fa73d967-9d5d-40c4-ba37-d8dc01185d88/XVqCFf2DuQ.json"></iframe>-->
    <!--        <p class="text-base font-medium text-center caption_color"> ارور: {{ error }} </p>-->
    <!--    </section>-->
    <!-- data -->
    <section
        class="bg-gray-50 dark:bg-gray-900 h-[calc(100vh-61px)] overflow-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-white dark:scrollbar-thumb-gray-800 dark:scrollbar-track-gray-900">
        <section class="px-4 mx-auto container grid grid-cols-1 lg:grid-cols-4 h-full">
            <!-- desktop tToC -->
            <section class="hidden lg:block border-l border-l-gray-200 dark:border-l-gray-700 p-4">
                <p class="text-sm font-medium text-orange-500 mb-4"> آخرین بروزرسانی: {{ renderCurrentDate() }} </p>
                <h1 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white"> قیمت روز خودرو سنگین </h1>
                <div class="h-12 rounded border border-gray-200 dark:border-gray-700 overflow-hidden flex items-center mb-4">
                    <i class="font-icomoon icon-search text-4xl cursor-default"></i>
                    <input type="text" class="size-full bg-transparent border-0 pr-0 text-xs placeholder:text-gray-400" placeholder="جستجوی برند و مدل ماشین" />
                </div>
                <ul class="list-none text-sm font-normal space-y-2 text-gray-400">
                    <li class=""> قیمت کایون و کامیونت </li>
                    <li class="text-primary-800 dark:text-primary-400 font-medium"> قیمت ماشین آلات کشاورزی </li>
                </ul>
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
import {renderCurrentDate} from "~/helpers/index.js";

export default {
    name: 'Daily Price',
    components: {
        Pinned,
        PriceList,
    },
    setup(){



        return {
            renderCurrentDate,
        }
    }
}
</script>