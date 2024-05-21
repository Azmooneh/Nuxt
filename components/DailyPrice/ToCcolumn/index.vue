<template>
    <section class="sticky top-4">
        <p class="text-sm font-medium text-orange-500 mb-4"> آخرین بروزرسانی: {{ renderCurrentDate() }} </p>
        <h1 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white"> قیمت روز خودرو سنگین </h1>
        <!-- <div class="h-12 rounded border border-gray-200 dark:border-gray-700 overflow-hidden flex items-center mb-4"> -->
        <!-- <i class="font-icomoon text-gray-400 icon-search text-3xl px-2 cursor-default"></i> -->
        <!-- <input type="text" class="size-full bg-transparent outline-none focus:ring-0 border-0 pr-0 text-xs placeholder:text-gray-400" placeholder="جستجوی برند و مدل ماشین" /> -->
        <!-- </div> -->
        <ul class="list-none text-sm font-normal space-y-2 text-gray-400">
            <li class=""> قیمت کایون و کامیونت </li>
            <li class="text-primary-800 dark:text-primary-400 font-medium"> قیمت ماشین آلات کشاورزی </li>
        </ul>
    </section>
</template>

<script>
import {renderCurrentDate} from "~/helpers/index.js";

export default {
    name: 'Daily Price ToC Column',

    setup(){


        return {
            renderCurrentDate,
        }
    }
}
</script>