<template>
    <section class="text-gray-900 dark:text-white mb-10" v-for="(category, index) in priceList" :key="index">
        <div class="flex items-center justify-between mb-4">
            <h3 class="text-xl font-medium"> لیست قیمت روز {{ category.category_fa }} </h3>
            <span class="text-sm font-normal sm:hidden"> تومان </span>
        </div>
        <ul class="list-none">
            <li class="flex items-center gap-2 border-b-2 py-2 border-dashed border-gray-200 dark:border-gray-700 last:border-b-0" v-for="(item, andis) in category.priceLists" :key="andis">
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
    name: "Daily Price List",
    setup(){
        const dailyPriceStore = useDailyPrice();
        const priceList = ref(computed(() => dailyPriceStore.priceList));

        console.log(priceList.value);

        return {
            numberWithCommas,
            priceList,
            renderCurrentDate,
        }
    }
}
</script>