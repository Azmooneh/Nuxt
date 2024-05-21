<template>
    <section class="font-iran order-2 md:order-1 cursor-default">
        <!-- title & publish date -->
        <div class="border-b border-b-gray-200 dark:border-b-gray-700 pb-2">
            <h1 class="text-gray-900 dark:text-white text-2xl leading-9 font-normal mb-2"> {{totalInfo.title}} </h1>
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
                <h3 class="text-sm font-medium" v-if="totalInfo.price != 0"> {{ numberWithCommas(totalInfo.price) }} <span class="text-xs"> تومان </span></h3>
                <h3 class="text-sm font-medium" v-else> ناموجود </h3>
            </div>
        </div>
        <!-- specifications -->
        <ul class="list-none mb-4 text-gray-900 dark:text-white text-base font-normal lg:leading-7">
            <Phone :phone="phone" />
            <li v-for="item in spec" class="flex items-start justify-between gap-4 border-b border-b-gray-200 dark:border-b-gray-700 py-2">
                <p class="flex-none"> {{ item.title }} </p>
                <p class=""> {{ item.spec }} </p>
            </li>
        </ul>
        <!-- description -->
        <div class="text-gray-900 dark:text-white">
            <p class="text-lg font-semibold mb-1 lg:mb-2"> توضیحات </p>
            <p class="text-sm lg:text-base lg:leading-8 font-medium leading-7"> {{ totalInfo.description }} </p>
        </div>
    </section>
</template>

<script>
import {useAdvertiseSingle} from "~/store/Advertise/index.js";
import {getHoursPast, numberWithCommas} from "~/helpers/index.js";
import Phone from "~/components/AdvertiseSingle/Information/Children/Phone/index.vue";

const staticSpecs = {
    fuel_ype: "نوع سوخت",
    engine_condition: "وضعیت موتور",
    chassis_condition: "وضعیت شاسی",
    body_condition: "وضعیت بدنه",
    third_party_insurance_date: "تاریخ بیمه شخص ثالث",
    gearbox_type: "نوع گیربکس",
    usage: "نوع کاربری",
    car_condition: "وضعیت خودرو",
    // communication_mobile: "تلفن تماس",
}

export default {
    name: 'Information',
    components: {
        Phone,
    },
    setup(){
        const advertiseStore = useAdvertiseSingle();
        const totalInfo = ref(computed(() => advertiseStore.information));
        const spec = ref([]);

        // console.log(totalInfo.value)

        for (const key in totalInfo.value) {
            if (staticSpecs.hasOwnProperty(key) && totalInfo.value[key] != null) {
                const obj = {
                    title: staticSpecs[key],
                    spec: totalInfo.value[key],
                }
                spec.value.push(obj);
            }
        }

        return {
            totalInfo,
            getHoursPast,
            numberWithCommas,
            spec,
            phone: totalInfo.value.communication_mobile,
        }
    }
}
</script>