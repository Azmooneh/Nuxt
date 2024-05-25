<template>
    <template v-for="(category, index) in clonedPriceList" :key="index">
        <section class="text-gray-900 dark:text-white mb-10" :id="`section-${category.title_en}`">
            <div class="flex items-center justify-between mb-4">
                <h3 class="text-xl font-medium"> لیست قیمت روز {{ category.title_fa }} </h3>
                <span class="text-sm font-normal sm:hidden"> تومان </span>
            </div>
            <ul class="list-none">
                <template v-for="item in category.list">
                    <li v-if="!item.isPinned" class="flex items-center gap-2 border-b-2 py-2 border-dashed border-gray-200 dark:border-gray-700 last:border-b-0">
                        <!-- pin icon -->
                        <i @click="togglePin(item.id)" class="font-icomoon text-lg sm:text-xl py-2 pl-2 flex-none cursor-pointer icon-thumbtack_5074129-1-2"></i>
                        <!-- name -->
                        <div class="flex flex-col gap-1 flex-1">
                            <h3 class="text-sm md:text-base font-medium line-clamp-1"> {{ item.product_name }} </h3>
                            <p class="text-sm font-normal"> مدل: &nbsp;
                                <span class="font-medium" v-if="item.production_year"> {{ item.production_year }} </span>
                                <span class="font-medium" v-else> ---- </span>
                            </p>
                        </div>
                        <!-- price -->
                        <div class="flex flex-col items-end sm:flex-row sm:gap-8 md:gap-12 gap-1 flex-none">
                            <h3 class="text-sm sm:text-base font-medium line-clamp-1" v-if="item.price != 0"> {{ numberWithCommas(item.price) }} <span class="hidden sm:inline-block text-sm"> تومان </span> </h3>
                            <h3 class="text-sm sm:text-base font-medium line-clamp-1" v-else> ناموجود </h3>
                            <p class="text-xs leading-5 sm:text-sm md:text-base font-normal"> تاریخ: &nbsp;<span class="font-medium"> {{ renderCurrentDate(item.updated_at) }} </span> </p>
                        </div>
                    </li>
                </template>
                <!-- if all items are pinned -->
                <li v-if="allPinned[index]" class="flex items-center gap-2 py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
                    </svg>
                    <p class="text-sm md:text-base font-medium"> تمام خودرو ها نشان شده اند. </p>
                </li>

            </ul>
        </section>
    </template>
</template>

<script>
import {numberWithCommas, renderCurrentDate} from "~/helpers/index.js";
import {useDailyPrice} from "~/store/DailyPrice/index.js";

export default {
    name: "Daily Price List",
    setup(){
        const dailyPriceStore = useDailyPrice();
        const clonedPriceList = ref(computed(() => dailyPriceStore.clonedPriceList));
        const togglePin = dailyPriceStore.togglePin;

        const pinPrice = id => {
            console.log(id)
        }

        // Computed property to check if all items in a category are pinned
        const allPinned = computed(() => {
            return clonedPriceList.value.map(category => {
                return category.list.every(item => item.isPinned);
            });
        });

        return {
            numberWithCommas,
            renderCurrentDate,
            pinPrice,
            togglePin,
            clonedPriceList,
            allPinned,
        }
    }
}
</script>