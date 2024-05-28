<template>
    <client-only>
        <Popover as="div" class="relative">
            <PopoverButton class="py-2 px-4 hover_bg_gray_50 block focus-visible:outline-none outline-none"> انتخاب
                استان
            </PopoverButton>
            <transition enter-active-class="transition-all duration-200 ease-out"
                        enter-from-class="translate-x-56"
                        enter-to-class="-translate-x-0"
                        leave-active-class="transition-all duration-150 ease-in"
                        leave-from-class="-translate-x-0"
                        leave-to-class="translate-x-56">
                <PopoverPanel as="div" v-slot="{ close }"
                              class="fixed lg:hidden top-12 bottom-0 focus-visible:outline-none outline-none right-0">
                    <div class="bg_background_content pb-6 w-56 h-full">
                        <!-- top content -->
                        <div class="px-4 flex items-center h-10 w-full gap-3 border-b border_gray_200 mb-1">
                            <!-- back -->
                            <div @click.prevent="close()"
                                 class="size-6 flex-none cursor-pointer flex_center relative before:absolute before:content-[''] before:h-6 before:w-0 before:border-l before:border-gray-200 dark:before:border-gray-500 before:top-0 before:-left-1.5">
                                <i class="font-icomoon text-xl icon-chevron-right"></i>
                            </div>
                            <!-- search -->
                            <div class="relative label_gray_500 flex-1">
                                <label for="sm-search-state"
                                       class="absolute top-1 right-0 font-icomoon icon-search-outline1 text-xl leading-6"></label>
                                <input id="sm-search-state"
                                       class="border-0 h-8 pr-8 w-full placeholder:label_gray_300 text-xs font-normal bg-transparent tracking-wide"
                                       placeholder="جستجوی استان"/>
                            </div>
                        </div>
                        <!-- active state -->
                        <div class="h-10 flex items-center px-4 gap-2 border-b border_gray_200">
                            <p class="text-sm font-normal"> فعال: </p>
                            <!-- active all -->
                            <p class="px-2 h-6 content-center rounded-md text-xs font-normal label_primary_700 bg_primary_50 hidden"> همه
                                استان ها </p>
                            <!-- active state -->
                            <div class="flex px-1.5 items-center h-6 gap-1.5 bg_primary_50 label_primary_700 rounded-md">
                                <!-- reset -->
                                <p class="content-center h-full rounded-l text-xs font-normal">
                                    سیستان و بلوچستان </p>
                                <i class="font-icomoon icon-x-outline text-sm leading-4 cursor-pointer"></i>
                            </div>
                        </div>
                        <!-- state list -->
                        <ul class="list-none *:gap-2 *:flex *:items-center *:h-8 *:px-4 overflow-auto h-[calc(100%-96px)]">
                            <li class="hover_bg_gray_50"> همه استان ها</li>
                            <li class="hover_bg_gray_50"> تهران</li>
                            <li class="hover_bg_gray_50"> کرج</li>
                        </ul>
                    </div>
                </PopoverPanel>
            </transition>
        </Popover>
    </client-only>
</template>

<script>
import {Popover, PopoverButton, PopoverPanel} from '@headlessui/vue';
import SocialMedia from "~/components/Layout/Footer/Children/SocialMedia/index.vue";

export default {
    name: "Mobile Menu Select State",
    components: {
        Popover,
        PopoverButton,
        PopoverPanel,
    },
    setup() {
        const selectedStates = ref(null);

        return {
            selectedStates,
        }
    }
}
</script>