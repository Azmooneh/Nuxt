<template>
    <Menu as="div" class="relative">
        <MenuButton as="div" class="flex items-end cursor-pointer">
            <i class="font-icomoon icon-user-outline text-2xl leading-6 font-normal icon-colors"></i>
            <i class="icon-chevron-down-outline font-icomoon text-base font-normal leading-4 icon-colors"></i>
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