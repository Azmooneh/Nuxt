<template>
    <main class="size-full lg:h-screen flex_center">
        <PhoneStep />
    </main>
</template>

<script>
import PhoneStep from "~/components/Login/PhoneStep/index.vue";

export default {
    name: "Login",
    components: {
        PhoneStep,
    },
    setup(){
        definePageMeta({
            layout: 'landing',
        });
    }
}
</script>