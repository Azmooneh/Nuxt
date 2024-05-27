<template>
    <Menu as="div" class="relative lg:ml-2">
        <MenuButton as="div" class="flex items-end cursor-pointer lg:size-12 lg:items-center lg:justify-center lg:border_primary_600 lg:border lg:rounded-lg hover_bg_white">
            <i class="font-icomoon icon-user-outline text-2xl leading-6 font-normal icon-colors lg:icon_primary_700"></i>
            <i class="icon-chevron-down-outline font-icomoon text-base font-normal leading-4 icon-colors lg:hidden"></i>
        </MenuButton>
        <MenuItems class="absolute -bottom-11 left-0">
            <MenuItem as="div" @click.prevent class="bg_background_content border border_gray_200 flex flex-col rounded-lg w-56">
                <div class="h-10 px-2 flex items-center justify-end gap-0.5 label_primary_700">
                    <!-- sun -->
                    <div class="p-1 cursor-pointer" v-if="!isDark" @click="toggleDarkmode">
                        <i class="font-icomoon icon-sun-outline text-xl"></i>
                    </div>

                    <!-- moon -->
                    <div class="p-1 cursor-pointer" v-if="isDark" @click="toggleDarkmode">
                        <i class="font-icomoon icon-moon text-xl"></i>
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