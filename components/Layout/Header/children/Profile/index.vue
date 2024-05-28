<template>
    <client-only>
        <Popover as="div" v-slot="{ open }" class="relative lg:ml-2">
            <PopoverButton
                class="flex_center cursor-pointer size-8 lg:size-12 border_primary_600 border rounded-full lg:rounded-lg lg:hover_bg_white focus-visible:outline-none outline-none">
                <i class="font-icomoon icon-user text-2xl leading-6 label_primary_700"></i>
            </PopoverButton>
            <!-- layer -->
            <transition enter-active-class="transition duration-200 ease-out"
                        enter-from-class="opacity-0"
                        enter-to-class="opacity-100"
                        leave-active-class="transition duration-150 ease-in delay-200"
                        leave-from-class="opacity-100"
                        leave-to-class="opacity-0">
                <PopoverOverlay v-if="open" class="fixed lg:hidden inset-x-0 bottom-0 top-12 bg-gray-900/70"/>
            </transition>
            <!-- content -->
            <transition enter-active-class="transition-all duration-200 ease-out delay-200 lg:delay-0"
                        enter-from-class="-translate-x-56 lg:translate-x-0"
                        enter-to-class="translate-x-0"
                        leave-active-class="transition-all duration-150 ease-in"
                        leave-from-class="translate-x-0"
                        leave-to-class="-translate-x-56 lg:translate-x-0">
                <PopoverPanel as="div"
                    class="fixed lg:absolute top-12 bottom-0 lg:bottom-auto focus-visible:outline-none outline-none left-0">
                    <div
                        class="bg_background_content lg:border lg:border_gray_200 flex flex-col justify-between lg:justify-start pb-6 lg:pb-0 lg:rounded-lg w-56 h-full lg:h-auto">
                        <section>
                            <!-- log in -->
                            <div
                                class="h-10 flex items-center px-4 label_gray_700 text-sm font-semibold border-b border_gray_200">
                                <NuxtLink to="/"> ورود</NuxtLink>
                            </div>
                            <!-- menu list -->
                            <div class="flex flex-col label_gray_500 *:py-2 *:px-4 border-b border_gray_200">
                                <NuxtLink to="/" class="flex items-center gap-2 hover_bg_gray_50">
                                    <i class="font-icomoon icon-bookmark-outline text-base leading-5"></i>
                                    <span class="text-sm font-normal"> سنجاق شده ها </span>
                                </NuxtLink>
                                <NuxtLink to="/" class="flex items-center gap-2 hover_bg_gray_50">
                                    <i class="font-icomoon icon-search-outline text-base leading-5"></i>
                                    <span class="text-sm font-normal"> جستجو های اخیر </span>
                                </NuxtLink>
                                <NuxtLink to="/" class="flex items-center gap-2 hover_bg_gray_50">
                                    <i class="font-icomoon icon-folder-outline text-base leading-5"></i>
                                    <span class="text-sm font-normal"> بازدید های اخیر </span>
                                </NuxtLink>
                                <NuxtLink to="/" class="flex items-center gap-2 hover_bg_gray_50">
                                    <i class="font-icomoon icon-calendar-edit-outline text-base leading-5"></i>
                                    <span class="text-sm font-normal"> یادداشت ها </span>
                                </NuxtLink>
                                <div class="flex items-center gap-2 hover_bg_gray_50 cursor-pointer">
                                    <span class="text-sm font-normal"> خروج </span>
                                </div>
                            </div>
                        </section>
                        <!-- darkmode -->
                        <div class="h-10 px-6 lg:px-4 flex items-center justify-between">
                            <span class="text-sm font-normal label_gray_500" v-text="!isDark ? 'روز' : 'شب'"></span>
                            <!-- darkmode -->
                            <div
                                class="h-8 w-14 rounded-2xl bg_background_header cursor-pointer px-1.5 flex relative items-center justify-between"
                                @click="toggleDarkmode">
                                <!-- circle -->
                                <div
                                    :class="'bg_primary_700 rounded-full size-6 absolute top-1 ' + (isDark ? 'right-1' : 'right-7')"></div>
                                <!-- sun -->
                                <i class="font-icomoon icon-sun-outline text-lg label_primary_700"></i>
                                <!-- moon -->
                                <i class="font-icomoon icon-moon text-base label_primary_700"></i>
                            </div>
                        </div>
                    </div>
                </PopoverPanel>
            </transition>
        </Popover>
    </client-only>
</template>

<script>
import {Popover, PopoverButton, PopoverPanel} from '@headlessui/vue';
import {useCommon} from "~/store/index.js";

export default {
    name: 'Header Profile Button',
    components: {
        Popover,
        PopoverButton,
        PopoverPanel,
    },
    setup() {
        const commonStore = useCommon();
        const toggleDarkmode = () => {
            commonStore.toggleDarkmode();
        }

        const isDark = ref(computed(() => commonStore.darkMode));

        return {
            toggleDarkmode,
            isDark,
        }
    }
}
</script>