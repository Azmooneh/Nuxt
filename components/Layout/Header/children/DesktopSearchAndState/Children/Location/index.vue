<template>
    <client-only>
        <Popover v-slot="{ open }">
            <PopoverButton class="flex items-center border-r border_gray_200 flex-none gap-2 pr-2 select-none cursor-pointer">
                <i class="font-icomoon icon-map-pin-outline text-xl leading-6 icon_gray_500"></i>
                <p class="text-sm font-medium label_gray_500"> همه استان ها </p>
                <i class="font-icomoon icon-chevron-down-outline text-lg leading-4 icon_gray_500"></i>
            </PopoverButton>

            <PopoverOverlay class="fixed hidden lg:block inset-0 z-[1] bg-gray-900/70 cursor-default" v-if="open" />

            <PopoverPanel class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2] cursor-default flex_center">
                <section class="bg_background_header rounded-lg overflow-hidden w-[28rem] xl:w-[30rem] px-4 py-6">
                    <p class="text-base font-medium label_gray_900 block mb-6"> انتخاب استان </p>
                    <!-- tag -->
                    <div class="flex mb-2">
                        <DefaultTag text="سیستان و بلوچستان" :hasClose="true" :onCloseTag="() => console.log('close')" />
                    </div>
                    <!-- search states -->
                    <label for="Desktop-search-state" class="relative mb-4 block focus-within:icon_primary_700 w-full border border_gray_200 rounded-lg overflow-hidden bg_gray_50 label_gray_500 h-12">
                        <i class="font-icomoon icon-search-outline text-2xl leading-5 absolute top-3 right-3 cursor-default"></i>
                        <input id="Desktop-search-state" type="text" class="h-full w-full pr-10 border-0 text-sm font-normal placeholder:label_gray_400 label_gray_700" placeholder="جستجو در استان ها" />
                    </label>
                    <!-- state list -->
                    <ul class="flex flex-col list-none label_gray_600 text-sm font-medium h-48 overflow-auto">
                        <li class="min-h-8 block content-center hover_bg_gray_50 cursor-pointer"> تهران </li>
                        <li class="min-h-8 block content-center hover_bg_gray_50 cursor-pointer"> کرج </li>
                    </ul>
                </section>
            </PopoverPanel>
        </Popover>
    </client-only>
</template>

<script>
import { Popover, PopoverButton, PopoverPanel, PopoverOverlay } from '@headlessui/vue';
import DefaultTag from "~/components/Kit/Tags/Default/index.vue";

export default {
    name: "Desktop Main Location",
    components: {
        Popover,
        PopoverButton,
        PopoverPanel,
        PopoverOverlay,
        DefaultTag,
    },
    setup(){

    }
}
</script>