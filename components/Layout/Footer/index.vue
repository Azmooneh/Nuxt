<template>
    <footer class="fixed bottom-0 inset-x-0 bg_background_footer lg:bg_gray_900 z-[1] lg:static">
        <div class="h-16 w-full grid grid-cols-5 text-gray-800 dark:text-gray-50 xs:max-w-md xs:mx-auto lg:hidden">
            <NuxtLink to="/" class="flex_center flex-col gap-2 h-full">
                <i class="font-icomoon icon-search text-xl leading-6"></i>
                <span class="text-xs font-normal"> جستجو </span>
            </NuxtLink>
            <NuxtLink to="/" class="flex_center flex-col gap-2 h-full">
                <i class="font-icomoon icon-chart text-xl leading-6"></i>
                <span class="text-xs font-normal"> قیمت روز </span>
            </NuxtLink>
            <NuxtLink to="/add" class="flex_center flex-col gap-2 h-full">
                <div class="size-8 rounded-full flex_center bg-gray-800 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </div>
                <span class="text-xs font-normal"> ثبت آگهی </span>
            </NuxtLink>
            <NuxtLink to="/" class="flex_center flex-col gap-2 h-full">
                <i class="font-icomoon icon-file-lines text-xl leading-6"></i>
                <span class="text-xs font-normal"> مجله خودرو </span>
            </NuxtLink>
            <NuxtLink to="/" class="flex_center flex-col gap-2 h-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 rotate-180">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
                <span class="text-xs font-normal"> آگهی ها </span>
            </NuxtLink>
        </div>

        <div class="hidden label_primary_50 lg:flex items-center justify-between h-16 container">
            <section class="flex items-center h-full gap-8 xl:gap-12 text-sm font-normal">
                <NuxtLink to="/" class=""> آگهی ها </NuxtLink>
                <NuxtLink to="/" class=""> دست اول ها </NuxtLink>
                <NuxtLink to="/" class=""> مجله خودرو </NuxtLink>
                <NuxtLink to="/" class=""> پرسش های شما </NuxtLink>
                <NuxtLink to="/" class=""> تماس با ما </NuxtLink>
                <NuxtLink to="/" class=""> درباره ما </NuxtLink>
            </section>

            <section class="flex items-center h-full gap-20 xl:gap-40">
                <!-- social media -->
                <div class="flex items-center gap-6">
                    <a href="#" class="font-icomoon icon-linkedin text-xl"></a>
                    <a href="#" class="font-icomoon icon-instagram text-xl"></a>
                    <a href="#" class="font-icomoon icon-twitter text-xl"></a>
                </div>
                <!-- enamads -->
                <div class="flex items-center gap-4">
                    <a href="#" class="size-9 rounded-lg bg-white flex_center">
                        <img src="https://paye1.com/storage/media/land/files/VX6CRV7yWLIIibmAVpkwJatp0ZtwHNiYfpHBwxV6.png" class="h-7" />
                    </a>
                    <a href="#" class="size-9 rounded-lg bg-white flex_center">
                        <img src="https://paye1.com/storage/media/land/files/S0oDAMuHlguOSmKFJwE7aK5wSHp47b34T6a2hpEM.png" class="h-7" />
                    </a>
                    <a href="#" class="size-9 rounded-lg bg-white flex_center">
                        <img src="https://paye1.com/storage/media/land/files/gacJhtV1jOzMss9k47bB9F7IK3MXbHYOWIPlPdVQ.png" class="h-7" />
                    </a>
                </div>
            </section>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Layout Footer',
}
</script>