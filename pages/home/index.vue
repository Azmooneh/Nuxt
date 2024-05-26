<template>
    <!-- skeletons -->
    <section class="min_h_screen bg-white dark:bg-gray-900 pt-4" v-if="watchLoading">loading</section>
    <!-- if we have error -->
    <section v-else-if="error" class="flex-col w-full h-a gap-4 flex_center min_h_screen bg-white dark:bg-gray-900">
        <iframe src="https://lottie.host/embed/fa73d967-9d5d-40c4-ba37-d8dc01185d88/XVqCFf2DuQ.json"></iframe>
        <p class="text-base font-medium text-center caption_color"> ارور: {{ error }} </p>
    </section>
    <!-- data -->
    <section v-else
             class="min_h_screen scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-white dark:scrollbar-thumb-gray-800 dark:scrollbar-track-gray-900 pt-4">
        <!-- categories -->
        <Categories />

        <Advertises />
    </section>
</template>

<script>
import {useHomePage} from "~/store/index.js";
import Advertises from "~/components/Home/Advertises/index.vue";
import Categories from "~/components/Home/Categories/index.vue";

export default {
    name: "Home Page",
    components: {
        Advertises,
        Categories,
    },
    setup() {
        const homePageStore = useHomePage();
        const loading = ref(true);
        const error = ref(null);
        const watchLoading = ref(true);

        const loadAdvertises = async () => {
            try {
                loading.value = true;
                const response = await useFetch(`${useRuntimeConfig().public.apiBase}/ad/list`);
                    // console.log(response.data.value)
                if (response.data.value.status == 200) {
                    const list = response.data.value.data;
                    const pagination = response.data.value.pagination;
                    homePageStore.saveAdvertises(list, pagination);
                };
            } catch (err) {
                error.value = err.message || 'سرور به مشکل خورده است.';
            } finally {
                loading.value = false;
            }
        }

        watch(() => loading.value, (n, o) => {
            watchLoading.value = n;
        });

        loadAdvertises();

        return {
            watchLoading,
            error,
        }
    }
}
</script>