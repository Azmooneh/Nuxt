<template>
    <client-only>
        <Popover v-slot="{ open }" class="relative flex-1 cursor-pointer">
            <PopoverButton class="flex items-center gap-2 w-full select-none outline-none focus-visible:outline-none">
                <i class="font-icomoon icon-search-outline text-xl leading-5 icon_gray_500"></i>
                <p class="text-sm font-normal label_gray_400"> جستجو کن </p>
            </PopoverButton>

            <PopoverOverlay class="fixed hidden lg:block inset-0 z-[1] bg-gray-900/70 cursor-default" v-if="open" />

            <PopoverPanel class="fixed top-0 inset-x-0 z-[2] cursor-default">
                <Advertise />

                <section class="bg_background_header h-12 sm:h-16 lg:h-20">
                    <section class="container flex gap-2.5 items-center h-full">
                        <NuxtLink to="/">
                            <Paye1Logo size="w-[72px] sm:w-[90px] h-8 sm:h-10" degree="fill-primary-700 dark:fill-primary-600" text="fill-gray-900 dark:fill-gray-50" />
                        </NuxtLink>

                        <div class="h-12 border_gray_200 rounded-lg w-[26rem] xl:w-[30rem] hidden relative lg:flex items-center border border_gray_200 px-4 bg_gray_50">
                            <label for="desktop-search" class="font-icomoon absolute icon-search-outline text-xl leading-5 icon_gray_500 cursor-pointer"></label>
                            <input type="text" id="desktop-search" class="placeholder:label_gray_400 border-0 text-sm font-normal pr-7 w-full bg-transparent" placeholder="جستجو کن" />

                            <!-- dropdown -->
                            <div class="rounded-lg border border_gray_200 pt-2 bg_gray_50 absolute inset-x-0 top-12 overflow-hidden">
                                <div class="border-b border_gray_200 last:border-b-0">
                                    <p class="px-4 text-sm font-extrabold py-3 block"> جستجو در آگهی های ماشین سنگین </p>
                                    <NuxtLink to="/" class="px-4 text-sm font-medium label_gray_600 py-2 block cursor-pointer hover_bg_white_2"> آگهی های کامیون جک </NuxtLink>
                                </div>
                                <div class="border-b border_gray_200 last:border-b-0">
                                    <p class="px-4 text-sm font-extrabold py-3 block"> جستجوی جک در آگهی ها </p>
                                    <NuxtLink to="/" class="px-4 text-sm font-medium label_gray_600 py-2 block cursor-pointer hover_bg_white_2"> آگهی های کامیون جک </NuxtLink>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </PopoverPanel>
        </Popover>
    </client-only>
</template>

<script>
import { Popover, PopoverButton, PopoverPanel, PopoverOverlay } from '@headlessui/vue';
import Advertise from "~/components/Layout/Header/children/Advertise/index.vue";
import Paye1Logo from "assets/icons/website/paye1.vue";

export default {
    name: 'Desktop Main Search',
    components: {
        Paye1Logo,
        Popover,
        PopoverButton,
        PopoverPanel,
        Advertise,
        PopoverOverlay,
    }
}
</script>