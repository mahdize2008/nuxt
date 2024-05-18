<script setup>
let { ImgSrc, title, description, date, hasVideo, to } = defineProps({
    ImgSrc: {
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
    hasVideo: {
        type: Boolean,
        default: false
    },
    to: {
        type: String,
        default: ''
    },
})
</script>

<template>
    <NuxtLink :to="to" class="w-full group flex items-start border-b-2 border-b-primary-tetha py-5 last:border-b-0 first:!pt-0 last:!pb-0">
        <div class="grow ml-5">
            <h2 class="text-primary font-semibold mb-2.5 group-hover:text-success transition-all tx-base">
                {{ title }}
            </h2>
            <div class="flex items-center tx-xs text-primary">
                <GenericIcon name="gamepad" :pathCount="4" class="ml-2 text-2xl"/>
                {{ date }}
            </div>
        </div>
        <div class="relative shrink-0">
            <img class="aspect-video h-[95px] rounded-xl" :src="ImgSrc">
            <GenericPlay size="sm" v-if="hasVideo"/>
        </div>
    </NuxtLink>
</template>