<script setup>
let { backgroundImgSrc, logoSrc, name, descriptoin, category, moded, point, particular } = defineProps({
    backgroundImgSrc: {
        type: String,
        default: ''
    },
    logoSrc: {
        type: String,
        default: ''
    },
    name: {
        type: String,
        default: ''
    },
    descriptoin: {
        type: String,
        default: ''
    },
    category: {
        type: String,
        default: ''
    },
    moded: {
        type: Boolean,
        default: false
    },
    point: {
        type: Number,
        default: 0
    },
    particular: {
        type: Boolean,
        default: false
    },
    to: {
        type: String,
        default: ''
    }
})
</script>

<template>
    <NuxtLink :to="to" class="v-card">
        <img :src="backgroundImgSrc" class="v-card-background">
        <div class="v-card-body">
            <!-- <div v-if="particular" class="v-card-particular">
                <GenericIcon name="signal" :pathCount="3" size="sm" />
            </div> -->
            <img :src="logoSrc" class="v-card-logo" alt="">
            <div class="w-full">
                <h2 class="v-card-name tx-base">
                    {{ name }}
                </h2>
                <p class="v-card-description tx-xs">
                    {{ descriptoin }}
                </p>
                <div class="v-card-option tx-xs">
                    <GenericParticular v-if="particular" :point="point" class="mr-auto" />
                    <span class="block" :class="{'mr-2':particular}">
                        {{ category }}
                    </span>
                    <span v-if="moded" class="v-card-tag">
                        مود شده
                    </span>
                    <GenericPoint :point="point" class="mr-auto" />
                </div>
            </div>
        </div>
    </NuxtLink>
</template>

<style scoped>
.v-card {
    @apply h-[320px] w-full rounded-4xl overflow-hidden relative flex items-end p-3;
}

.v-card-background {
    @apply absolute top-1/2 -translate-y-1/2 right-0 min-w-full min-h-full object-cover
}

.v-card-body {
    @apply rounded-lg bg-primary/70 p-4 relative z-10 w-full border-white border backdrop-blur-xl flex items-center
}

.v-card-logo {
    @apply w-[75px] h-[75px] rounded-lg ml-4
}

.v-card-name {
    @apply text-white mb-1 line-clamp-1
}

.v-card-description {
    @apply text-white/70 mb-0.5 line-clamp-1
}

.v-card-option {
    @apply flex items-center text-white
}

.v-card-tag {
    @apply bg-black/50 py-0.5 block text-white rounded-full px-2 mr-2
}
</style>