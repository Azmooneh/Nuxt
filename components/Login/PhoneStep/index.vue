<template>
    <section class="bg-white size-full lg:h-auto px-4 py-10 text-gray-900 max-w-sm sm:max-w-[26rem] xs:w-full xs:border xs:border_gray_200 xs:rounded-lg xs:mt-10 sm:mt-20 lg:mt-0">
        <h2 class="text-xl font-semibold mb-4"> ورود به پایه یک </h2>

        <!-- phone -->
        <div class="mb-4">
            <label for="phone_number" class="text-sm font-medium mb-2 block"> شماره همراه خود را وارد کنید </label>
            <input class="rounded-lg h-10 w-full border border_gray_200 focus:border_gray_200 placeholder:font-normal px-4 bg-gray-50 focus:ring-0 outline-none text-sm" placeholder="شماره خود را وارد کنید" />
        </div>

        <!-- laws -->
        <label for="accept_laws" class="flex items-center gap-4 cursor-pointer mb-12">
            <input type="checkbox" id="accept_laws" class="size-4 border border_gray_200 focus:border_gray_200 bg-gray-50 focus:ring-0 outline-none rounded" />
            <span class="text-sm font-medium text-gray-900"> قوانین و مقررات </span>
        </label>

        <button type="button" @click="nextStep(2)" class="h-10 w-full flex_center text-white text-sm font-medium rounded-lg bg_primary_700"> ارسال کد </button>
    </section>
</template>

<script>
import {useProfileLogin} from "~/store/Login/index.js";

export default {
    name: "Login Phone Step",
    setup(){
        const loginStore = useProfileLogin();
        const phone = reactive(null);

        const nextStep = (step) => {
            loginStore.switchStep(step);
        }

        wat

        return {
            nextStep,
        }
    }
}
</script>