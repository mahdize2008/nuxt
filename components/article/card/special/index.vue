<script setup>
let { bgImg, title, description, date,hasVideo,to } = defineProps({
    bgImg: {
        type: String,
        default: ''
    },
    title: {
        type: String,
        default: ''
    },
    description: {
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
    <NuxtLink :to="to" class="h-[505px] w-full rounded-4xl overflow-hidden relative flex flex-col justify-end p-5">
        <img :src="bgImg" class="absolute top-1/2 -translate-y-1/2 right-0 min-w-full min-h-full object-cover">
        <GenericPlay v-if="hasVideo"/>
        <div class="rounded-lg bg-primary-beler px-5 py-7 relative z-10 w-full">
            <h2 class="text-white mb-4 tx-base">
                {{ title }}
            </h2>
            <p class="text-white/70 mb-4 tx-xs">
                {{ description }}
            </p>
            <div class="text-white flex items-center tx-xs">
                <GenericIcon name="gamepad" :pathCount="4" class="ml-2 tex2xl"/>
                {{ date }}
            </div>
        </div>
    </NuxtLink>
</template>
