<script setup>
let { img, title, date, to } = defineProps({
    img: {
        type: String,
        default: ''
    },
    title: {
        type: String,
        default: ''
    },
    date: {
        type: String,
        default: ''
    },
    to: {
        type: String,
        default: ''
    },
})
</script>

<template>
    <NuxtLink :to="to" class="w-full group">
        <img class="aspect-video object-contain h-[230px] rounded-xl mb-5" :src="img">
        <h2 class="text-primary font-semibold line-clamp-2 mb-3 group-hover:text-success transition-all tx-base">
            {{ title }}
        </h2>
        <div class="flex items-center tx-xs text-primary">
            <GenericIcon name="gamepad" :pathCount="4" class="ml-2 text-2xl" />
            {{ date }}
        </div>
    </NuxtLink>
</template>