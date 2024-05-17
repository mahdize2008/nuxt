<script setup>
let { ImgSrc, title, descriptoin, date, hasVideo, to } = defineProps({
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
    <NuxtLink :to="to" class="v-card">
        <div class="v-card-body">
            <h2 class="v-card-title tx-base">
                {{ title }}
            </h2>
            <div class="flex items-center tx-xs text-primary">
                <GenericIcon name="gamepad" :pathCount="4" class="ml-2"/>
                {{ date }}
            </div>
        </div>
        <div class="v-card-image">
            <img :src="ImgSrc">
            <div v-if="hasVideo" class="v-card-video-btn">
                <div class="">
                    <GenericIcon name="telegram" size="sm" />
                </div>
            </div>
        </div>
    </NuxtLink>
</template>

<style scoped>
.v-card {
    @apply w-full flex items-start border-b-2 border-b-primary-tetha py-5 last:border-b-0 first:!pt-0 last:!pb-0;
}

.v-card:hover .v-card-title {
    @apply text-success transition-all;
}

.v-card-image {
    @apply relative max-w-[170px] w-fit shrink-0
}

.v-card-image img {
    @apply max-w-full h-[95px] rounded-xl
}

.v-card-title {
    @apply text-primary font-semibold mb-2.5
}

.v-card-body {
    @apply grow ml-5
}

.v-card-video-btn {
    @apply p-1 border-white border rounded-full mr-auto w-fit bg-primary/70 backdrop-blur-xl absolute z-10 top-1 left-1
}

.v-card-video-btn div {
    @apply w-[18px] h-[18px] bg-white rounded-full
}
</style>