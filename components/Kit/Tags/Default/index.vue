<template>
    <div class="flex items-center h-6 rounded-md bg_primary_50 label_primary_700">
        <span class="pr-2 pl-1 font-medium text-sm" v-text="text"></span>
        <i v-if="hasClose" @click="onCloseTag" class="font-icomoon icon-x-outline size-5 flex_center text-sm leading-4 cursor-pointer"></i>
    </div>
</template>

<script>
export default {
    name: "Kit Tag Default",
    props: {
        text: {
            type: String,
            default: 'همه استان ها',
        },
        hasClose: {
            type: Boolean,
            default: false,
        },
        onCloseTag: {
            type: Function,
            default: null,
        }
    }
}
</script>