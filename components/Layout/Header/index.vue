<template>
    <header
        class="sticky top-0 z-[1]" id="main-header">
        <section class="hidden lg:block">
            <a href="#" class="w-full h-16">
                <img src="https://paye1.com/storage/media/land/files/jbHblglNPKeE2uMVXO2E1Ad8WcZWDVMt1eY84B70.png" class="w-full h-full" />
            </a>
        </section>
        <section class="border-b border-b-gray-200 dark:border-b-gray-700 bg_background_header h-12 sm:h-16 lg:h-20">
            <div class="container flex justify-between items-center h-full">
                <div class="flex items-center gap-4 lg:gap-2.5">
                    <!-- hamburger menu -->
                    <button type="button" class="size-6 cursor-pointer lg:hidden">
                        <i class="font-icomoon icon-bars text-2xl icon-colors"></i>
                    </button>

                    <NuxtLink to="/">
                        <Paye1Logo size="w-[72px] sm:w-[90px] h-8 sm:h-10" degree="fill-primary-700 dark:fill-primary-600" text="fill-gray-900 dark:fill-gray-50" />
                    </NuxtLink>

                    <!-- search in desktop -->
                    <div class="h-12 border_gray_200 rounded-lg"></div>
                </div>

                <div class="flex items-center lg:order-2 gap-1">
                    <button type="button" @click="toggleDarkmode"
                            class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none rounded-lg text-sm p-1.5">
                        <svg v-if="isDark" class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                fill-rule="evenodd" clip-rule="evenodd"></path>
                        </svg>

                        <svg v-else class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                        </svg>

                    </button>

                    <NuxtLink to="/price" class="hidden lg:flex text-sm font-medium label_gray_700 ml-4">
                        قیمت روز خودرو
                    </NuxtLink>
                    <!-- profile -->
                    <Profile />
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

export default {
    name: 'Header',
    components: {
        Paye1Logo,
        Profile,
    },
    setup() {
        const commonStore = useCommon();
        const openSidebar = ref(computed(() => commonStore.openSidebar));
        const toggleDarkmode = () => {
            commonStore.toggleDarkmode();
        }
        const toggleSidebar = () => {
            commonStore.toggleSidebar();
        }

        const isDark = ref(computed(() => commonStore.darkMode));

        return {
            openSidebar,
            toggleSidebar,
            toggleDarkmode,
            isDark,
        }
    }
}
</script>