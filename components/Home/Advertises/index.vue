<template>
    <!-- md:grid-cols-2 xl:grid-cols-3 -->
    <section class="grid grid-cols-1 gap-4 relative" id="advertises_list">
        <NuxtLink v-for="(ad, index) in advertises.slice(0, 8)" :key="index" :to="'/advertises/' + ad.id"
                  class="flex flex-row bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-md dark:bg-gray-800 dark:border-gray-700 transition-all duration-300">
            <div class="w-48 sm:w-72 md:w-36 lg:w-44 xl:w-40 md:flex-none">
                <div class="relative w-full pt-[100%]">
                    <img class="object-cover size-full absolute top-0 right-0"
                         :src="ad.primary_image"
                         alt="" draggable="false"/>
                </div>
            </div>
            <div
                class="w-full p-2 sm:p-4 flex flex-col justify-between space-y-5 md:space-y-0 md:py-2">
                <div class="flex items-start gap-2 justify-between flex-col md:justify-start md:gap-2">
                    <h2 class="line-clamp-1 tracking-wide xs:line-clamp-2 text-sm leading-6 sm:text-base sm:leading-7 md:text-sm md:leading-6 lg:text-lg lg:leading-8 xl:text-base xl:leading-7 font-semibold tracking-tight text-gray-900 dark:text-white">
                        {{ ad.brand }} &nbsp; {{ ad.model }} &nbsp; {{ ad.title }}
                    </h2>
                    <span
                        class="text-nowrap bg-primary-100 text-primary-800 text-[0.7rem] font-medium inline-flex items-center px-1.5 py-0.5 rounded dark:bg-primary-200/75 dark:text-primary-800"> {{ ad.province
                        }} ، {{ ad.city }} </span>
                </div>

                <div class="flex flex-row-reverse justify-between items-center ">
                    <div
                        class="text-xs xs:text-sm md:text-xs lg:text-sm inline-flex items-center font-medium text-primary-600 dark:text-primary-500">
                        <span v-if="ad.agreement == 0"> {{ numberWithCommas(ad.price) }} تومان </span>
                        <span v-else> توافقی </span>
                    </div>
                    <span
                        class="text-[0.7rem] line-clamp-1 text-gray-900 dark:text-gray-300"> {{ getHoursPast(ad.published_date)
                        }} </span>
                </div>
            </div>
        </NuxtLink>

        <!-- toggle load more items -->
        <div class="flex justify-center items-center w-full h-12 bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-900 absolute -bottom-2 inset-x-0 z-[1]">
            <button v-if="!loadMoreStatus" @click.prevent="registerCheckScrollPosition" type="button" class="px-6 h-8 font-medium text-sm text-white bg-blue-500 rounded"> بیشتر </button>
            <button v-else @click.prevent="burnCheckScrollPosition" type="button" class="px-6 h-8 font-medium text-sm text-white bg-blue-500 rounded"> توقف </button>
        </div>
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
        const advertisesList = ref(null);
        const mainHeader = ref(null);
        const loadMoreStatus = ref(false);

        onMounted(() => {
            advertisesList.value = document.getElementById('advertises_list');
            mainHeader.value = document.getElementById('main-header');
        })

        const checkScrollPosition = () => {
            let scrollY = window.scrollY;
            let innerHeight = window.innerHeight;
            if((scrollY + innerHeight) - 32 - mainHeader.value.offsetHeight >= advertisesList.value.offsetHeight){
                console.log("over")
            }
        }

        const loadMoreAdvertises = async () => {
            try {
                const response = await useFetch(`${useRuntimeConfig().public.apiBase}/ad/list`);
                if (response.data.value.status == 200) {
                    homePageStore.updateAdvertises(response.data.value.data);
                };
            } catch (e) {

            } finally {

            }
        }

        const burnCheckScrollPosition = () => {
            window.removeEventListener('scroll', checkScrollPosition);
            loadMoreStatus.value = false;
        }

        const registerCheckScrollPosition = () => {
            window.addEventListener('scroll', checkScrollPosition);
            checkScrollPosition();
            loadMoreStatus.value = true;
        }




        return {
            advertises,
            numberWithCommas,
            getHoursPast,
            burnCheckScrollPosition,
            registerCheckScrollPosition,
            loadMoreStatus,
        }
    }
}
</script>