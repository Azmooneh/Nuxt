<template>
    <section class="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <NuxtLink v-for="(ad, index) in advertises" :key="index" :to="'/advertises/' + ad.id"
                  class="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-md dark:bg-gray-800 dark:border-gray-700 transition-all duration-300">
            <div class="w-full md:w-36 lg:w-48 xl:w-40 md:flex-none">
                <div class="relative w-full pt-[75%] md:pt-[100%]">
                    <img class="object-cover size-full absolute top-0 right-0"
                         :src="`${useRuntimeConfig().public.imageUrl}/storage/` + ad.primary_image"
                         alt="" draggable="false"/>
                </div>
            </div>
            <div
                class="w-full p-4 flex flex-col justify-around md:justify-between space-y-5 md:space-y-0 md:py-2">
                <div class="flex items-start gap-4 justify-between md:flex-col md:justify-start md:gap-0">
                    <h2 class="mb-2 line-clamp-2 text-sm md:text-base font-bold font-iran tracking-tight text-gray-900 dark:text-white">
                        {{ ad.brand }} &nbsp; {{ ad.model }} &nbsp; {{ ad.title }}
                    </h2>
                    <div class="flex items-center gap-1">
                    <span
                        class="text-nowrap bg-primary-100 text-primary-800 text-[0.7rem] font-medium inline-flex items-center px-1.5 py-0.5 rounded dark:bg-primary-200/75 dark:text-primary-800"> {{ ad.province
                        }} </span>
                        <span
                            class="text-nowrap bg-primary-100 text-primary-800 text-[0.7rem] font-medium inline-flex items-center px-1.5 py-0.5 rounded dark:bg-primary-200/75 dark:text-primary-800"> {{ ad.city
                            }} </span>
                    </div>
                </div>

                <div class="flex flex-row-reverse justify-between items-center ">
                    <div
                        class="text-xs md:text-sm inline-flex items-center font-medium text-primary-600 dark:text-primary-500">
                        <span v-if="ad.agreement"> {{ numberWithCommas(ad.price) }} تومان </span>
                        <span v-else> توافقی </span>
                    </div>
                    <span
                        class="text-[0.7rem] line-clamp-1 text-gray-900 dark:text-gray-300"> {{ getHoursPast(ad.published_date)
                        }} </span>
                </div>
            </div>
        </NuxtLink>
    </section>
</template>

<script>
import {useHomePage} from "~/store/index.js";
import {numberWithCommas, getHoursPast} from "~/helpers/index.js";

export default {
    name: 'Advertises',
    setup() {
        const homePageStore = useHomePage();
        const advertises = ref(computed(() => homePageStore.advertises));


        return {
            advertises,
            numberWithCommas,
            getHoursPast,
        }
    }
}
</script>