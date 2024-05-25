<template>
    <section class="sticky top-4">
        <p class="text-sm font-medium text-orange-500 mb-4"> آخرین بروزرسانی: {{ renderCurrentDate() }} </p>
        <h1 class="text-xl font-semibold mb-6 text-gray-900 dark:text-white"> قیمت روز خودرو سنگین </h1>
        <!-- <div class="h-12 rounded border border-gray-200 dark:border-gray-700 overflow-hidden flex items-center mb-4"> -->
        <!-- <i class="font-icomoon text-gray-400 icon-search text-3xl px-2 cursor-default"></i> -->
        <!-- <input type="text" class="size-full bg-transparent outline-none focus:ring-0 border-0 pr-0 text-xs placeholder:text-gray-400" placeholder="جستجوی برند و مدل ماشین" /> -->
        <!-- </div> -->
        <div class="flex flex-col gap-4 text-base font-normal text-gray-400 toc-titles-container">
            <a :href="'#section-' + category.title_en" :id="`toc-title-${category.title_en}`" @click.prevent="scrollToElement(`toc-title-${category.title_en}`)" class="text-gray-700 dark:text-gray-400" v-for="(category, index) in clonedPriceList" :key="index"> قیمت {{ category.title_fa }} </a>
<!--            <a href="#" class="text-primary-800 dark:text-primary-400 font-medium"> قیمت ماشین آلات کشاورزی </a>-->
        </div>
    </section>
</template>

<script>
import {renderCurrentDate} from "~/helpers/index.js";
import {useDailyPrice} from "~/store/DailyPrice/index.js";

export default {
    name: 'Daily Price ToC Column',

    setup(){
        const dailyPriceStore = useDailyPrice();
        const clonedPriceList = ref(computed(() => dailyPriceStore.clonedPriceList));
        console.log(clonedPriceList.value);

        const scrollToElement = (event) => {
            const targetId = document.getElementById(event).getAttribute("href");
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
            console.log(targetElement.getBoundingClientRect());
        }

        return {
            renderCurrentDate,
            clonedPriceList,
            scrollToElement,
        }
    }
}
</script>