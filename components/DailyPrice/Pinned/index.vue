<template>
    <section class="border-b border-b-gray-200 dark:border-b-gray-700 mb-8 text-gray-900 dark:text-white" v-if="pinnedList.length">
        <h3 class="font-medium text-base mb-2"> سنجاق شده ها </h3>
        <ul class="list-none">
            <li class="flex items-center gap-2 border-b-2 py-2 border-dashed border-gray-200 dark:border-gray-700 last:border-b-0" v-for="(item, andis) in pinnedList" :key="andis">
                <!-- pin icon -->
                <i class="font-icomoon text-lg sm:text-xl py-2 pl-2 flex-none cursor-pointer icon-thumbtack_5074129-1-2"></i>
                <!-- name -->
                <div class="flex flex-col gap-1 flex-1">
                    <h3 class="text-sm md:text-base font-medium line-clamp-1"> {{ item.product_name }} </h3>
                    <p class="text-sm font-normal"> مدل: &nbsp;<span class="font-medium"> {{ item.production_year }} </span> </p>
                </div>
                <!-- price -->
                <div class="flex flex-col items-end sm:flex-row sm:gap-8 md:gap-12 gap-1 flex-none">
                    <h3 class="text-sm sm:text-base font-medium line-clamp-1"> {{ numberWithCommas(item.price) }} <span class="hidden sm:inline-block text-sm"> تومان </span> </h3>
                    <p class="text-xs leading-5 sm:text-sm md:text-base font-normal"> تاریخ: &nbsp;<span class="font-medium"> {{ renderCurrentDate(item.updated_at) }} </span> </p>
                </div>
            </li>
        </ul>
    </section>
</template>

<script>
import {numberWithCommas, renderCurrentDate} from "~/helpers/index.js";
import {useDailyPrice} from "~/store/DailyPrice/index.js";

export default {
    name: "Daily Price Pinned",
    setup(){
        const dailyPriceStore = useDailyPrice();
        const pinnedList = ref(computed(() => dailyPriceStore.pinnedList));

        return {
            numberWithCommas,
            renderCurrentDate,
            pinnedList,
        }
    }
}
</script>