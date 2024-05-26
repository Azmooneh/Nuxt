<template>
    <section class="grid grid-cols-1 gap-4 relative container mb-10" id="advertises_list">
        <NuxtLink v-for="(ad, index) in advertises" :key="index" :to="'/advertises/' + ad.id"
                  class="flex hover:bg-gray-200 border border-gray-200 bg-white rounded-lg overflow-hidden dark:bg-gray-900 dark:border-gray-700">
            <!-- image -->
            <div class="w-36 flex-none">
                <div class="relative w-full pt-[100%]">
                    <img class="object-cover size-full absolute top-0 right-0"
                         :src="ad.primary_image" :alt="ad.title" draggable="false" />
                </div>
            </div>
            <!-- information -->
            <div class="flex-1 p-2 sm:p-4 flex flex-col overflow-hidden justify-between">
                <!-- state & release date & name -->
                <div class="flex flex-col gap-2.5">
                    <div class="flex items-center justify-between gap-2">
                        <p class="label_primary_600 text-xs font-medium line-clamp-1"> {{ ad.province }} </p>
                        <p class="label_gray_500 text-xs font-normal line-clamp-1"> {{ getHoursPast(ad.published_date) }} </p>
                    </div>
                    <h2 class="line-clamp-2 tracking-wide label_gray_600 text-sm leading-6 font-normal">
                        {{ ad.brand }} &nbsp; {{ ad.model }} &nbsp; {{ ad.title }}
                    </h2>
                </div>
                <!-- price & tags -->
                <div class="flex flex-col gap-2">
                        <!-- tags -->
<!--                    <div class="grid overflow-auto scrollbar-none">-->
<!--                        <div class="flex items-center gap-2 text-xs font-medium *:label_primary_600 *:h-5 *:flex-none *:px-2 *:rounded-md *:bg_primary_100 *:flex *:items-center">-->
<!--                            <p class=""> معاوضه </p>-->
<!--                            <p class=""> فوری </p>-->
<!--                        </div>-->
<!--                    </div>-->
                    <div class="flex justify-between items-center gap-2">
                        <div class="flex items-center gap-2 icon_gray_500">
                            <i class="font-icomoon icon-store-outline text-xl leading-4"></i>
                            <p class="hidden xs:block text-xs font-normal"> نمایشگاه </p>
                        </div>
                        <div
                            class="text-xs xs:text-sm inline-flex items-center font-medium label_primary_600">
                            <span v-if="ad.agreement == 0"> {{ numberWithCommas(ad.price) }} تومان </span>
                            <span v-else> توافقی </span>
                        </div>
                    </div>
                </div>
            </div>
        </NuxtLink>

        <!-- toggle load more items -->
        <div v-if="!isLastLoaded"
            class="flex justify-center items-center w-full h-12 bg-gradient-to-b from-transparent to-white dark:to-gray-900 absolute -bottom-2 inset-x-0 z-[1] *:flex_center *:w-20 *:h-8 *:font-medium *:text-sm *:text-white *:bg-blue-500 *:rounded">
            <button v-if="!loadMoreStatus" @click.prevent="registerCheckScrollPosition" type="button"> بیشتر</button>
            <button v-else @click.prevent="burnCheckScrollPosition" type="button"> توقف</button>
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
        const pagination = ref(computed(() => homePageStore.advertisePagination));
        const advertisesList = ref(null);
        const mainHeader = ref(null);
        const mainCategories = ref(null);
        const loadMoreStatus = ref(false);
        const isLastLoaded = ref(advertises.value.length >= pagination.value.total);
        const scrollDebounce = ref(null);

        onMounted(() => {
            advertisesList.value = document.getElementById('advertises_list');
            mainHeader.value = document.getElementById('main-header');
            mainCategories.value = document.getElementById('home-categories');
        })

        // get next page data on scroll to end.
        const checkScrollPosition = () => {
            clearTimeout(scrollDebounce.value);
            scrollDebounce.value = setTimeout(() => {
                let scrollY = window.scrollY;
                let innerHeight = window.innerHeight;
                if ((scrollY + innerHeight) - 32 - mainHeader.value.offsetHeight - mainCategories.value.offsetHeight >= advertisesList.value.offsetHeight) {
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