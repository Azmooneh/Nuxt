<template>
    <main class="size-full lg:h-screen flex_center">
        <PhoneStep v-if="loginStep == 1" />
    </main>
</template>

<script>
import PhoneStep from "~/components/Login/PhoneStep/index.vue";
import {useProfileLogin} from "~/store/Login";

export default {
    name: "Login",
    components: {
        PhoneStep,
    },
    setup(){
        definePageMeta({
            layout: 'landing',
        });
        const loginStore = useProfileLogin();
        const loginStep = ref(computed(() => loginStore.step));

        return {
            loginStep,
        }
    }
}
</script>