<template>
    <div :class="'flex items-center gap-6 ' + classNames">
        <a href="#" class="font-icomoon icon-linkedin text-xl"></a>
        <a href="#" class="font-icomoon icon-instagram text-xl"></a>
        <a href="#" class="font-icomoon icon-twitter text-xl"></a>
    </div>
</template>

<script>
export default {
    name: 'Footer Social Media',
    props: {
        classNames: {
            type: String,
            default: "",
        },
    }
}
</script>