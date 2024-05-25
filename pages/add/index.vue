<template>
    <!-- skeletons -->
<!--    <section class="min-h-[calc(100vh-61px)] bg-gray-50 dark:bg-gray-900 pt-4" v-if="watchLoading">loading</section>-->
    <!-- if we have error -->
<!--    <section v-else-if="error" class="flex-col w-full h-screen gap-4 flex_center bg-gray-50 dark:bg-gray-900">-->
<!--        <iframe src="https://lottie.host/embed/fa73d967-9d5d-40c4-ba37-d8dc01185d88/XVqCFf2DuQ.json"></iframe>-->
<!--        <p class="text-base font-medium text-center caption_color"> ارور: {{ error }} </p>-->
<!--    </section>-->
    <!-- data -->
    <section
             class="bg-gray-50 dark:bg-gray-900 h-[calc(100vh-61px)] overflow-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-white dark:scrollbar-thumb-gray-800 dark:scrollbar-track-gray-900">
        <section class="p-4 mx-auto container flex items-center justify-center h-full">
            <div class="flex items-center justify-center gap-4 flex-col">
                <div class="mb-4 relative h-[300px]">
                    <client-only>
                        <lottie-player
                            src="https://lottie.host/988b194d-ac9c-4570-a46a-b158aba5661c/bv07GNWfNj.json"
                            background="transparent"
                            speed="1"
                            style="width: 500px; height: 300px;"
                            loop
                            autoplay>
                        </lottie-player>
                    </client-only>
                </div>
                <p class="text-base font-medium text-gray-900 dark:text-white"> این صفحه در حال راه اندازی می باشد. </p>
            </div>
        </section>
    </section>
</template>

<script>

export default {
    name: "Add Advertise",
    components: {
    },
    setup(){
        return {
        }
    }
}
</script>