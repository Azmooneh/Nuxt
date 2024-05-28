<template>
    <div class="h-12 border_gray_200 rounded-lg w-[26rem] xl:w-[30rem] hidden shrink lg:flex items-center border border_gray_200 px-4 bg_background_footer">
        <!-- search -->
        <Search />
        <!-- location -->
        <Location />
    </div>
</template>

<script>
import Search from "~/components/Layout/Header/children/DesktopSearchAndState/Children/Search/index.vue";
import Location from "~/components/Layout/Header/children/DesktopSearchAndState/Children/Location/index.vue";

export default {
    name: 'Desktop Search',
    components: {
        Search,
        Location,
    }
}
</script>