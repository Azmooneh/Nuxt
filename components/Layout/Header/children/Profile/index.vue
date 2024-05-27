<template>
    <Menu as="div" class="relative lg:ml-2">
        <MenuButton as="div" class="flex items-end cursor-pointer lg:size-12 lg:items-center lg:justify-center lg:border_primary_600 lg:border lg:rounded-lg hover_bg_white">
            <i class="font-icomoon icon-user-outline text-2xl leading-6 font-normal icon-colors lg:icon_primary_700"></i>
            <i class="icon-chevron-down-outline font-icomoon text-base font-normal leading-4 icon-colors lg:hidden"></i>
        </MenuButton>
        <MenuItems class="absolute -bottom-10 left-0">
            <MenuItem as="div" class="p-4 bg-red-500"></MenuItem>
        </MenuItems>
    </Menu>
</template>

<script>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';

export default {
    name: 'Header Profile Button',
    components: {
        Menu,
        MenuButton,
        MenuItems,
        MenuItem,
    }
}
</script>