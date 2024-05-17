<script setup>
let { backgroundImgSrc, title, descriptoin, date,hasVideo } = defineProps({
    backgroundImgSrc: {
        type: String,
        default: ''
    },
    title: {
        type: String,
        default: ''
    },
    descriptoin: {
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
        <img :src="backgroundImgSrc" class="v-card-background">
        <div v-if="hasVideo" class="v-card-video-btn">
            <GenericBtn iconName="telegram" square rounded lightness/>
        </div>
        <div class="v-card-body">
            <h2 class="v-card-title tx-base">
                {{ title }}
            </h2>
            <p class="v-card-description tx-xs">
                {{ descriptoin }}
            </p>
            <div class="v-card-options tx-xs">
                <GenericIcon name="gamepad" :pathCount="4" class="ml-2"/>
                {{ date }}
                <GenericIcon name="game" class="!text-danger mr-6 ml-2"/>
                پارسی‌گیم
            </div>
        </div>
    </NuxtLink>
</template>

<style scoped>
.v-card {
    @apply h-[505px] w-full rounded-4xl overflow-hidden relative flex flex-col justify-between p-5;
}

.v-card-background {
    @apply absolute top-1/2 -translate-y-1/2 right-0 min-w-full min-h-full object-cover
}

.v-card-body {
    @apply rounded-lg bg-primary/70 px-5 py-7 relative z-10 w-full border-white border backdrop-blur-xl
}

.v-card-title {
    @apply text-white mb-4
}

.v-card-options {
    @apply text-white flex items-center
}

.v-card-description {
    @apply text-white/70 mb-4
}

.v-card-video-btn {
    @apply p-3.5 border-white border rounded-full mr-auto w-fit relative z-10 bg-primary/70 backdrop-blur-xl
}

</style>