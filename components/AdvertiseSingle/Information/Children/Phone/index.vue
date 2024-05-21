<template>
    <li class="flex items-center justify-between gap-4 border-b border-b-gray-200 dark:border-b-gray-700 h-14">
        <p class="flex-none"> شماره تماس </p>
        <p class="" v-if="showMobile"> {{ phone }} </p>
        <div v-else class="h-8 w-24 flex_center bg-orange-500 rounded cursor-pointer text-white" @click="showPhone">
            <span v-if="!showSpinner"> تلفن تماس </span>
            <span v-else class="size-5 border-[3px] rounded-full border-x-white border-t-white border-b-orange-500 bg-transparent animate-spin"></span>
        </div>
    </li>
</template>

<script>
export default {
    name: "Advertise Single Phone",
    props: {
        phone: [String, Number],
    },
    setup(){
        const showMobile = ref(false);
        const showSpinner = ref(false);

        const showPhone = () => {
            showSpinner.value = true;
            setTimeout(() => {
                showMobile.value = true;
                showSpinner.value = true;
            }, 1000);
        }

        return {
            showMobile,
            showPhone,
            showSpinner,
        }
    }
}
</script>