<template>
    <section class="font-sans number-fa bg_background_content">
        <Header />

        <section class="min_h_screen pt-4 pb-16">
            <slot />
        </section>

        <Footer />
    </section>
</template>

<script>
import Header from "~/components/Layout/Header/index.vue";
import Footer from "~/components/Layout/Footer/index.vue";
import {useCommon} from "~/store/index.js";

export default {
    name: "Paye1",
    components: {
        Header,
        Footer,
    },
    setup(){
        const commonStore = useCommon();
        const isDark = commonStore.darkMode;

        useHead({
            script: [{
                children: `
                if(${isDark}){
                    document.documentElement.classList.add("dark")
                } else {
                    document.documentElement.classList.remove("dark")
                }
                `}]
        })
    }
}
</script>