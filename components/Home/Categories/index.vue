<template>
    <section class="px-4 mb-6 overflow-auto grid lg:flex gap-6 scrollbar-none lg:container lg:overflow-hidden" id="home-categories">
        <p class="hidden lg:flex flex-none label_gray_700 text-sm font-medium items-center h-10 cursor-default lg:h-6"> پرکاربرد ها: </p>
        <div
            class="flex items-center lg:flex-wrap gap-4 *:px-6 *:h-10 *:rounded-md *:bg_primary_100 *:text-sm *:font-medium *:cursor-pointer *:flex_center *:lg:h-6 *:border *:border-transparent lg:mb-4">
            <NuxtLink to="/" class="hover_border_primary_400 hover_label_primary_700 label_primary_600"> کامیون</NuxtLink>
            <NuxtLink to="/" class="hover_border_primary_400 hover_label_primary_700 label_primary_600"> کامیون</NuxtLink>
            <NuxtLink to="/" class="hover_border_primary_400 hover_label_primary_700 label_primary_600"> کامیون</NuxtLink>
            <NuxtLink to="/" class="hover_border_primary_400 hover_label_primary_700 label_primary_600"> کامیون</NuxtLink>
            <NuxtLink to="/" class="hover_border_primary_400 hover_label_primary_700 label_primary_600"> کامیون</NuxtLink>
            <NuxtLink to="/" class="hover_border_primary_400 hover_label_primary_700 label_primary_600"> کامیون</NuxtLink>
            <NuxtLink to="/" class="hover_border_primary_400 hover_label_primary_700 label_primary_600"> کامیون</NuxtLink>
            <NuxtLink to="/" class="hover_border_primary_400 hover_label_primary_700 label_primary_600"> کامیون</NuxtLink>
        </div>
    </section>
</template>

<script>
export default {
    name: "Home Categories",
}
</script>