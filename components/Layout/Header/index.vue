<template>
    <nav
        class="sticky top-0 start-0 end-0 bg-white border-b border-gray-200 px-4 py-2.5 dark:bg-gray-800 dark:border-gray-700">
        <div class="container mx-auto flex flex-wrap justify-between items-center">
            <div class="flex justify-start items-center">
                <button @click.prevent="toggleSidebar"
                        class="p-2 ltr:mr-2 rtl:ml-2 rtl:rotate-180 text-gray-600 rounded-lg cursor-pointer md:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <svg
                        aria-hidden="true"
                        :class="{'hidden': openSidebar}"
                        class="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                    <svg
                        aria-hidden="true"
                        :class="{'hidden': !openSidebar}"
                        class="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                    <span class="sr-only">Toggle sidebar</span>
                </button>

                <img
                    src="https://paye1.com/storage/media/land/files/zpYWsElFaU9L8QBd0pNKXTHPSncR59ljC0NSaXJ4.svg"
                    class="ltr:mr-3 rtl:ml-3 h-7 hidden dark:flex"
                    alt="Logo"
                />

                <img
                    src="https://paye1.com/storage/media/land/files/Z84oxhbvEB5EVqczASQgAyIeyuO8X8MFArFe5NUq.svg"
                    class="ltr:mr-3 rtl:ml-3 h-7 dark:hidden"
                    alt="Logo"
                />

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

                <button type="button" class="hidden sm:flex py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">قیمت روز خودرو</button>
                <NuxtLink to="/add" class="text-white bg-blue-700 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-all duration-200"> ثبت آگهی </NuxtLink>
            </div>
        </div>
    </nav>
</template>

<script>
import { useCommon } from '~/store/index.js';

export default {
    name: 'Header',
    setup(){
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