<template>
    <header
        class="sticky top-0 bg-white z-[1]" id="main-header">
        <section class="bg-gray-50 h-12">
            <div class="container flex justify-between items-center h-full">
                <div class="flex items-center gap-4">
                    <button type="button" class="size-6 cursor-pointer">
<!--                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">-->
<!--                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />-->
<!--                        </svg>-->
                        <i class="font-icomoon icon-bars text-2xl icon-colors"></i>
                    </button>

                    <NuxtLink to="/" class="">
                        <Paye1Logo size="w-[72px] h-8" />
                    </NuxtLink>
                </div>

                <div class="flex items-center lg:order-2 gap-1">
                    <button type="button" @click="toggleDarkmode"
                            class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none rounded-lg text-sm p-1.5 hidden">
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

                    <NuxtLink to="/price"
                              class="hidden sm:flex py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                        قیمت روز خودرو
                    </NuxtLink>
                    <NuxtLink to="/add"
                              class="hidden text-white bg-blue-700 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-all duration-200">
                        ثبت آگهی
                    </NuxtLink>

                    <!-- profile -->
                    <button type="button" class="flex items-end cursor-pointer">
                        <i class="font-icomoon icon-user-outline text-2xl leading-6 icon-colors"></i>
                        <i class="icon-chevron-down-outline font-icomoon text-base leading-5 icon-colors"></i>
                    </button>
                </div>
            </div>
        </section>
    </header>
</template>

<script>
import { useCommon } from '~/store/index.js';
import Paye1Logo from "assets/icons/website/paye1.vue";

export default {
    name: 'Header',
    components: {
        Paye1Logo,
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