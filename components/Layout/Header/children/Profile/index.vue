<template>
    <Menu as="div" class="relative lg:ml-2">
        <MenuButton as="div" class="flex items-end cursor-pointer lg:size-12 lg:items-center lg:justify-center lg:border_primary_600 lg:border lg:rounded-lg lg:hover_bg_white">
            <i class="font-icomoon icon-user-outline text-2xl leading-6 font-normal icon-colors lg:icon_primary_700"></i>
            <i class="icon-chevron-down-outline font-icomoon text-base font-normal leading-4 icon-colors lg:hidden"></i>
        </MenuButton>
        <MenuItems class="absolute top-12 left-0 focus-visible:outline-none outline-none">
            <MenuItem as="div" @click.prevent class="bg_background_content border border_gray_200 flex flex-col rounded-lg w-56">
                <!-- log in -->
                <div class="h-10 flex items-center px-4 label_gray_700 text-sm font-semibold border-b border_gray_200">
                    <NuxtLink to="/"> ورود </NuxtLink>
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
                <!-- darkmode -->
                <div class="h-10 px-4 flex items-center justify-between">
                    <span class="text-sm font-normal label_gray_500" v-text="!isDark ? 'روز' : 'شب'"></span>
                    <!-- darkmode -->
                    <div class="h-8 w-14 rounded-2xl bg_background_header cursor-pointer px-1.5 flex relative items-center justify-between" @click="toggleDarkmode">
                        <!-- circle -->
                        <div :class="'bg_primary_700 rounded-full size-6 absolute top-1 ' + (isDark ? 'right-1' : 'right-7')"></div>
                        <!-- sun -->
                        <i class="font-icomoon icon-sun-outline text-lg label_primary_700"></i>
                        <!-- moon -->
                        <i class="font-icomoon icon-moon text-base label_primary_700"></i>
                    </div>
                </div>
            </MenuItem>
        </MenuItems>
    </Menu>
</template>

<script>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';
import {useCommon} from "~/store/index.js";

export default {
    name: 'Header Profile Button',
    components: {
        Menu,
        MenuButton,
        MenuItems,
        MenuItem,
    },
    setup(){
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