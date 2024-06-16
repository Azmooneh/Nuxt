<template>
    <header
        class="sticky top-0 z-[2]" id="main-header">
<!--        <Advertise />-->
        <section class="border-b border-b-gray-200 dark:border-b-gray-700 bg_background_header h-12 sm:h-16 lg:h-20">
            <div class="container flex justify-between items-center h-full">
                <div class="flex items-center gap-4 lg:gap-2.5">
                    <!-- hamburger menu -->
                    <MobileMenu />

                    <NuxtLink to="/">
                        <Paye1Logo size="w-[72px] sm:w-[90px] h-8 sm:h-10" degree="fill-primary-700 dark:fill-primary-600" text="fill-gray-900 dark:fill-gray-50" />
                    </NuxtLink>

                    <!-- search in desktop -->
                    <DesktopSearchAndState />
                </div>

                <div class="flex items-center lg:order-2 gap-1">
                    <NuxtLink to="/price" class="hidden lg:flex text-sm font-medium label_gray_700 ml-4">
                        قیمت روز خودرو
                    </NuxtLink>
                    <!-- profile -->
                    <Profile />
                    <!-- advertise -->
                    <NuxtLink to="/add" class="hidden h-12 px-5 lg:flex items-center gap-2 text-white text-base hover_bg_primary_750 font-medium bg_primary_700 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        <span> ثبت آگهی </span>
                    </NuxtLink>

                </div>
            </div>
        </section>
    </header>
</template>

<script>
import { useCommon } from '~/store/index.js';
import Paye1Logo from "assets/icons/website/paye1.vue";
import Profile from "~/components/Layout/Header/children/Profile/index.vue";
import MobileMenu from "~/components/Layout/Header/children/MobileMenu/index.vue";
import DesktopSearchAndState from "~/components/Layout/Header/children/DesktopSearchAndState/index.vue";
import Advertise from "~/components/Layout/Header/children/Advertise/index.vue";

export default {
    name: 'Header',
    components: {
        Paye1Logo,
        Profile,
        MobileMenu,
        DesktopSearchAndState,
        Advertise,
    },
    setup() {
        const commonStore = useCommon();
        const openSidebar = ref(computed(() => commonStore.openSidebar));
        const toggleSidebar = () => {
            commonStore.toggleSidebar();
        }

        return {
            openSidebar,
            toggleSidebar,
        }
    }
}
</script>