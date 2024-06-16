<template>
    <client-only>
        <Popover as="div" v-slot="{ open }" class="relative lg:hidden">
            <PopoverButton class="size-6 cursor-pointer focus-visible:outline-none outline-none">
                <i class="font-icomoon icon-bars text-2xl icon-colors"></i>
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
                        enter-from-class="translate-x-56 lg:translate-x-0"
                        enter-to-class="-translate-x-0"
                        leave-active-class="transition-all duration-150 ease-in"
                        leave-from-class="-translate-x-0"
                        leave-to-class="translate-x-56 lg:translate-x-0">
                <PopoverPanel as="div"
                              class="fixed lg:hidden top-12 bottom-0 focus-visible:outline-none outline-none right-0">
                    <div
                        class="bg_background_content lg:hidden flex flex-col justify-between pb-6 w-56 h-full">
                        <section class="label_gray_500 text-sm font-normal">
                            <!-- log in -->
                            <NuxtLink to="/" class="h-10 flex gap-2 items-center px-4 border-b border_gray_200 hover_bg_gray_50">
                                <i class="font-icomoon icon-grid-outline text-base leading-5"></i>
                                <span class="text-sm font-normal"> دسته بندی </span>
                            </NuxtLink>
                            <Search />
<!--                            <NuxtLink to="/" class="py-2 px-4 hover_bg_gray_50 block"> پشتیبانی </NuxtLink>-->
                            <!-- <SelectState /> -->
                            <NuxtLink to="/" class="py-2 px-4 hover_bg_gray_50 block"> پرسش های شما </NuxtLink>
                            <NuxtLink to="/" class="py-2 px-4 hover_bg_gray_50 block"> درباره ما </NuxtLink>
<!--                            <NuxtLink to="/" class="py-2 px-4 hover_bg_gray_50 block"> تماس با ما </NuxtLink>-->
                        </section>

                        <!-- social media -->
                        <SocialMedia classNames="justify-center label_gray_500" />
                    </div>
                </PopoverPanel>
            </transition>
        </Popover>

    </client-only>
</template>

<script>
import {Popover, PopoverButton, PopoverPanel} from '@headlessui/vue';
// import SelectState from "~/components/Layout/Header/children/MobileMenu/Children/SelectState/index.vue";
import SocialMedia from "~/components/Layout/Footer/Children/SocialMedia/index.vue";
import Search from "~/components/Layout/Header/children/MobileMenu/Children/Search/index.vue";

export default {
    name: 'Header Mobile Menu',
    components: {
        Popover,
        PopoverButton,
        PopoverPanel,
        // SelectState,
        SocialMedia,
        Search,
    },
    setup() {

    }
}
</script>