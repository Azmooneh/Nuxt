<template>
    <section class="lg:pb-24" id="advertises_list">
        <!-- header in desktop -->
        <div class="hidden lg:flex items-end justify-between container mb-4">
            <h4 class="text-3xl font-black label_gray_900"> به روزترین آگهی ها </h4>
            <NuxtLink to="/" class="flex items-center gap-2 label_primary_700 hover_label_primary_750">
                <span> همه آگهی ها </span>
                <i class="font-icomoon icon-arrow-left-outline text-2xl"></i>
            </NuxtLink>
        </div>
        <!-- advertises -->
        <section class="grid grid-cols-1 lg:grid-cols-2 gap-4 relative container">
            <NuxtLink v-for="(ad, index) in advertises" :key="index" :to="'/advertises/' + ad.id"
                      class="flex hover_bg_gray_50 border border-gray-200 hover_bg_white rounded-lg overflow-hidden dark:border-gray-700">
                <!-- image -->
                <div class="w-36 sm:w-40 lg:w-48 xl:w-52 flex-none">
                    <div class="relative w-full pt-[100%]">
                        <img class="object-cover size-full absolute top-0 right-0"
                             :src="ad.primary_image" :alt="ad.title" draggable="false" />
                    </div>
                </div>
                <!-- information -->
                <div class="flex-1 p-2 sm:px-4 xl:py-4 flex flex-col overflow-hidden justify-between">
                    <!-- state & release date & name -->
                    <div class="flex flex-col gap-2.5 lg:gap-4">
                        <div class="flex items-center justify-between gap-2">
                            <p class="label_primary_600 text-xs lg:text-sm lg:leading-4 font-medium line-clamp-1"> {{ ad.province }} </p>
                            <p class="label_gray_500 text-xs font-normal line-clamp-1"> {{ getHoursPast(ad.published_date) }} </p>
                        </div>
                        <h2 class="line-clamp-2 tracking-wide label_gray_600 text-sm lg:text-base lg:leading-7 leading-6 font-normal">
                            {{ ad.brand }} &nbsp; {{ ad.model }} &nbsp; {{ ad.title }}
                        </h2>
                    </div>
                    <!-- price & tags -->
                    <div class="flex flex-col gap-2">
                            <!-- tags -->
                        <div class="grid overflow-auto scrollbar-none">
                            <div class="flex items-center gap-2 text-xs font-medium *:label_primary_600 *:h-5 lg:*:h-6 lg:*:text-sm lg:*:leading-4 *:flex-none *:px-2 *:rounded-md *:bg_primary_100 *:flex *:items-center">
                                <p class=""> معاوضه </p>
                                <p class=""> فوری </p>
                            </div>
                        </div>
                        <div class="flex justify-between items-center gap-2">
                            <div class="flex items-center gap-2 label_gray_500">
                                <i class="font-icomoon icon-store-outline text-xl lg:text-2xl lg:leading-5 leading-4"></i>
                                <p class="hidden xs:box text-xs font-normal line-clamp-1"> نمایشگاه </p>
                            </div>
                            <div
                                class="text-xs xs:text-sm lg:text-base inline-flex items-center font-medium label_primary_600 flex-none">
                                <p v-if="ad.agreement == 0"> {{ numberWithCommas(ad.price) }} <span class="text-xs sm:text-sm xl:text-base"> تومان </span> </p>
                                <span v-else> توافقی </span>
                            </div>
                        </div>
                    </div>
                </div>
            </NuxtLink>

            <!-- toggle load more items -->
            <div v-if="!isLastLoaded"
                class="flex justify-center items-center w-full h-12 bg-gradient-to-b from-transparent lg:via-white lg:to-white to-white dark:to-gray-900 dark:via-gray-900 absolute -bottom-2 inset-x-0 z-[1] *:flex_center *:w-20 sm:*:w-40 lg:*:w-56 *:h-8 sm:*:h-10 lg:*:h-12 *:font-medium *:text-sm lg:*:text-base *:text-white *:bg_primary_700 *:hover_bg_primary_750 *:rounded">
                <button v-if="!loadMoreStatus" @click.prevent="registerCheckScrollPosition" type="button"> بیشتر</button>
                <button v-else @click.prevent="burnCheckScrollPosition" type="button"> توقف</button>
            </div>
        </section>
    </section>
</template>

<script>
import {useHomePage} from "~/store/index.js";
import {numberWithCommas, getHoursPast} from "~/helpers/index.js";

const higherElements = ['home-categories', 'main-header'];

export default {
    name: 'Advertises',
    setup() {
        const homePageStore = useHomePage();
        const advertises = ref(computed(() => homePageStore.advertises));
        const pagination = ref(computed(() => homePageStore.advertisePagination));
        const advertisesList = ref(null);
        const loadMoreStatus = ref(false);
        const isLastLoaded = ref(advertises.value.length >= pagination.value.total);
        const scrollDebounce = ref(null);
        const haveHigherElements = ref([]);

        onMounted(() => {
            higherElements.map(element => {
                const el = document.getElementById(element);
                if(el){
                    haveHigherElements.value.push(element);
                }
            })
            advertisesList.value = document.getElementById('advertises_list');
        })

        // get next page data on scroll to end.
        const checkScrollPosition = () => {
            clearTimeout(scrollDebounce.value);
            scrollDebounce.value = setTimeout(() => {
                let scrollY = window.scrollY;
                let innerHeight = window.innerHeight;
                let higherElementsHeight = 0;
                haveHigherElements.value.map(item => {
                    higherElementsHeight += document.getElementById(item).offsetHeight;
                })
                console.log(higherElementsHeight);
                if ((scrollY + innerHeight) - 32 - higherElementsHeight >= advertisesList.value.offsetHeight) {
                    if(pagination.value.currentPage < pagination.value.totalPages){
                        let currentPagination = ref(pagination.value.currentPage);
                        currentPagination.value += 1;
                        loadMoreAdvertises(currentPagination.value);
                    }
                }
            }, 300);
        }

        // push new items to prev list Array
        const loadMoreAdvertises = async (page) => {
            try {
                const response = await $fetch(`${useRuntimeConfig().public.apiBase}/ad/list?page=${page}`);
                if (response.status == 200) {
                    const list = response.data;
                    const listPagination = response.pagination;
                    homePageStore.updateAdvertises(list, listPagination);
                    if(advertises.value.length == pagination.value.total){
                        burnCheckScrollPosition();
                        isLastLoaded.value = true;
                    }
                }
            } catch (e) {

            } finally {

            }
        }

        // stop onScroll function
        const burnCheckScrollPosition = () => {
            window.removeEventListener('scroll', checkScrollPosition);
            loadMoreStatus.value = false;
        }

        // start onScroll function
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
            pagination,
            isLastLoaded,
        }
    }
}
</script>