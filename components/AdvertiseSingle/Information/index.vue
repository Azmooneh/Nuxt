<template>
    <section class="font-iran order-2 md:order-1 cursor-default">
        <!-- title & publish date -->
        <div class="border-b border-b-gray-200 dark:border-b-gray-700 pb-2">
            <h1 class="text-gray-900 dark:text-white text-2xl font-normal mb-2"> {{totalInfo.title}} </h1>
            <!--            <span class="text-sm line-clamp-1 text-gray-900 dark:text-gray-300"> {{getHoursPast()}} </span>-->
        </div>
        <!-- triple data -->
        <div class="flex items-center border-b mb-4 border-b-gray-200 dark:border-b-gray-700 pb-2 text-gray-900 dark:text-white">
            <!-- category -->
            <div class="flex flex-col flex-1 h-24 px-1 items-center justify-start pt-7 gap-1">
                <p class="text-xs font-light"> دسته بندی </p>
                <h3 class="text-sm font-medium"> {{ totalInfo.category }} </h3>
            </div>
            <!-- usage -->
            <div class="flex flex-col h-24 px-1 flex-1 items-center justify-start pt-7 gap-1">
                <p class="text-xs font-light"> کاربری </p>
                <h3 class="text-sm font-medium"> {{ totalInfo.usage }} </h3>
            </div>
            <!-- price -->
            <div class="flex flex-col h-24 px-1 flex-1 items-center justify-start pt-7 gap-1">
                <p class="text-xs font-light"> قیمت </p>
                <h3 class="text-sm font-medium"> {{ numberWithCommas(totalInfo.price) }} <span class="text-xs"> تومان </span> </h3>
            </div>
        </div>
        <!-- specifications -->
        <ul class="list-none mb-4 text-gray-900 dark:text-white text-base font-normal lg:leading-7">
            <li v-for="item in spec" class="flex items-start justify-between gap-4 border-b border-b-gray-200 dark:border-b-gray-700 py-2">
                <p class=""> {{ item.title }} </p>
                <p class=""> {{ item.spec }} </p>
            </li>
        </ul>
        <!-- description -->
        <div class="text-gray-900 dark:text-white">
            <p class="text-lg font-semibold mb-1 lg:mb-2"> توضیحات </p>
            <p class="text-sm lg:text-base lg:leading-8 font-medium leading-7"> فروش فوری تحویل سی روزه
                امیکو تک باری شاستی خالی ۳۹۰۰۰
                با اتاق ۴۱۰۰ موتور ۴۰۰ پر قدرت ترین تک باری
                احمدی ، </p>
        </div>
    </section>
</template>

<script>
import {useAdvertiseSingle} from "~/store/Advertise/index.js";
import {getHoursPast, numberWithCommas} from "~/helpers/index.js";

export default {
    name: 'Information',
    setup(){
        const advertiseStore = useAdvertiseSingle();
        const totalInfo = ref(computed(() => advertiseStore.information));
        const spec = ref([]);

        console.log(totalInfo.value);

        for (const [key, value] of Object.entries(totalInfo.value.specifications)) {
            const obj = {
                title: key,
                spec: value,
            };
            spec.value.push(obj);
        }

        return {
            totalInfo,
            getHoursPast,
            numberWithCommas,
            spec,
        }
    }
}
</script>