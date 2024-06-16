<template>
    <client-only>
        <Popover as="div" class="relative">
            <PopoverButton class="py-2 px-4 hover_bg_gray_50 block focus-visible:outline-none outline-none">جستجو</PopoverButton>
            <transition enter-active-class="transition-all duration-200 ease-out"
                        enter-from-class="translate-x-56"
                        enter-to-class="-translate-x-0"
                        leave-active-class="transition-all duration-150 ease-in"
                        leave-from-class="-translate-x-0"
                        leave-to-class="translate-x-56">
                <PopoverPanel as="div" v-slot="{ close }"
                              class="fixed lg:hidden top-12 bottom-0 focus-visible:outline-none outline-none inset-x-0">
                    <div class="bg_background_content pb-6 w-full h-full">
                        <section class="flex_between px-4 h-12 text_gray_500 border-b border_gray_200 mb-4 gap-4">
                            <!-- input -->
                            <label for="mobile_search" class="relative flex-1 h-10">
                                <i class="font-icomoon text-xl absolute top-2 right-0 cursor-default"></i>
                                <input type="text" id="mobile_search" class="pr-8 border-0 size-full placeholder:text-gray-300 placeholder:text-xs text-sm font-normal text-gray-700" placeholder="جستجو" />
                            </label>
                            <!-- close -->
                            <button type="button" class="size-10 flex_center flex-none" @click.prevent="close()">
                                <i class="font-icomoon text-xl"></i>
                            </button>
                        </section>
                    </div>
                </PopoverPanel>
            </transition>
        </Popover>
    </client-only>
</template>

<script>
import {Popover, PopoverButton, PopoverPanel} from "@headlessui/vue";

export default {
    name: "Mobile Menu Search",
    components: {Popover, PopoverButton, PopoverPanel},
}
</script>