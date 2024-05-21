<template>
    <section class="text-gray-900 dark:text-white">
        <div class="flex items-center justify-between mb-4">
            <h3 class="text-xl font-medium"> لیست قیمت روز خودرو ها </h3>
            <span class="text-sm font-normal"> تومان </span>
        </div>
        <ul class="list-none">
            <li class="flex items-center gap-2">
                <!-- pin icon -->
                <i class="font-icomoon text-lg sm:text-xl py-2 pl-2 flex-none cursor-pointer icon-thumbtack_5074129-1-2"></i>
                <!-- name -->
                <div class="flex flex-col gap-1 flex-1">
                    <h3 class="text-sm md:text-base font-medium line-clamp-1"> کامیون کمپرسی جفت محور X5000D </h3>
                    <p class="text-sm font-normal"> مدل: &nbsp;<span class="font-medium"> 1403 </span> </p>
                </div>
                <!-- price -->
                <div class="flex flex-col items-end sm:flex-row sm:gap-8 md:gap-12 gap-1 flex-none">
                    <h3 class="text-sm sm:text-base font-medium line-clamp-1"> {{ numberWithCommas(250000000) }} </h3>
                    <p class="text-xs leading-5 sm:text-sm md:text-base font-normal"> تاریخ: &nbsp;<span class="font-medium"> 1403 </span> </p>
                </div>
            </li>
        </ul>
    </section>
</template>

<script>
import {numberWithCommas} from "~/helpers/index.js";

export default {
    name: "Daily Price List",
    setup(){

        return {
            numberWithCommas,
        }
    }
}
</script>