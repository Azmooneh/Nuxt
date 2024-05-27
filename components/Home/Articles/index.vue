<template>
    <section class="hidden lg:block" id="articles_list">
        <!-- header in desktop -->
        <div class="hidden lg:flex items-end justify-between container mb-4">
            <h4 class="text-3xl font-black label_gray_900"> اخبار و مقالات </h4>
            <NuxtLink to="/" class="flex items-center gap-2 label_primary_700 hover_label_primary_750">
                <span> همه مقالات </span>
                <i class="font-icomoon icon-arrow-left-outline text-2xl"></i>
            </NuxtLink>
        </div>
        <!-- articles -->
        <section class="grid grid-cols-3 xl:grid-cols-4 gap-4 relative container">
            <NuxtLink v-for="article in 9" to="/" class="p-2 border border-gray-200 dark:border-gray-700 rounded-lg hover_bg_gray_50">
                <!-- image -->
                <div class="w-full relative pt-[56%] rounded-md overflow-hidden mb-4">
                    <NuxtImg src="https://paye1.com/storage/media/land/files/DC7BfkM2ZBQKeFZxrY8UffJ9SyvWssqECbsu0Te3.webp" format="webp" class="absolute top-0 left-0 w-full h-full" />
                </div>
                <!-- information -->
                <article class="px-2">
                    <h2 class="label_gray_900 text-lg h-14 xl:text-xl font-medium line-clamp-2 mb-2"> همایش سالانه نمایندگی‌های شرکت آرین دیزل در اردیبهشت 1403 </h2>
                    <p class="line-clamp-3 font-normal text-base leading-7 mb-2">
                        همایش سالیانه  نمایندگی‌های فروش   شرکت آرین دیزل در روز پنجشنبه 6 اردیبهشت 1403 در تهران برگزار شد. آرین دیزل هر ساله طی این مراسم   به منظور قدردانی و همراهی از نمایندگان فروش و خدمات پس از فروش،  با اهدا هدایایی ارزنده  تقدیر به عمل می‌آورد.  در سال  1403 نمایندگی   شرکت آراسب پیشتاز با کد 2111 تهران، توانست رتبه اول بازاریابی و فروش خودروهای جک را از آن خود کند. این نمایندگی با مدیریت  آقایان مجتبی نوروزی و سعید عباسی، به عنوان  برترین نمایندگی‌ فروش شرکت آرین دیزل  در شهر تهران به فعالیت می‌پردازد.
                    </p>
                    <p class="font-normal text-base label_primary_600"> 15 فروردین 1403 </p>
                </article>
            </NuxtLink>
        </section>
    </section>
</template>

<script>
export default {
    name: "Home Articles List",
}
</script>