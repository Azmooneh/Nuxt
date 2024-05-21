<template>
    <section class="custom-slider-mobile-arrows">
        <Swiper v-bind="settings" :modules="relatedModules" :navigation="true" :speed="750" class="mb-4">
            <SwiperSlide v-for="slide in 6">
                <NuxtLink to="/"
                          class="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-md dark:bg-gray-800 dark:border-gray-700 transition-all duration-300">
                    <div class="w-full md:w-36 lg:w-40 md:flex-none">
                        <div class="relative w-full pt-[75%] md:pt-[100%]">
                            <img class="object-cover size-full absolute top-0 right-0"
                                 :src="`${useRuntimeConfig().public.imageUrl}/storage/media/land/files/I4Lr2n1r1QUyaWmStOpxEMXc1AZSA0Y4tEqTgpkF.webp`"
                                 alt="" draggable="false"/>
                        </div>
                    </div>
                    <div
                        class="w-full p-4 flex flex-col justify-around md:justify-between space-y-5 md:space-y-0 md:py-2">
                        <div
                            class="flex items-start gap-4 justify-between md:flex-col md:justify-start md:gap-0">
                            <h2 class="mb-2 line-clamp-2 text-sm lg:text-base font-bold font-iran tracking-tight text-gray-900 dark:text-white">
                                برند &nbsp; مدل &nbsp; تایتل
                            </h2>
                            <span
                                class="text-nowrap bg-primary-100 text-primary-800 text-[0.7rem] font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200/75 dark:text-primary-800"> محمدشهر </span>
                        </div>

                        <div class="flex flex-row-reverse justify-between items-center ">
                                <span
                                    class="text-base md:text-sm inline-flex items-center font-medium text-primary-600 dark:text-primary-500">2000 تومان</span>
                            <span
                                class="text-sm line-clamp-1 text-gray-900 dark:text-gray-300"> تاریخ انتشار </span>
                        </div>
                    </div>
                </NuxtLink>
            </SwiperSlide>
        </Swiper>
    </section>
</template>

<script>
import {Swiper, SwiperSlide} from 'swiper/vue';
import {Navigation} from 'swiper/modules';

export default {
    name: 'Advertise Related Advertises',
    components: {
        Swiper,
        SwiperSlide,
    },
    setup(){
        const settings = {
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 16,
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 16,
                },
            }
        }

        return {
            settings,
            relatedModules: [Navigation],
        }
    }
}
</script>