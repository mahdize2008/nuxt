<script setup>
let { teaserSrc, logoSrc, name, descriptoin, point, particular } = defineProps({
    teaserSrc: {
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
    <NuxtLink class="v-card" :to="to">
        <div class="v-card-teaser">
            <img :src="teaserSrc" class="v-card-teaser-img">
        </div>
        <div class="v-card-body">
            <!-- <div v-if="particular" class="v-card-particular">
                <GenericIcon name="signal" :pathCount="3" size="sm" />
            </div> -->
            <img :src="logoSrc" class="v-card-logo" alt="">
            <div class="w-full">
                <h2 class="v-card-name tx-xs">
                    {{ name }}
                </h2>
                <p class="v-card-description tx-xs">
                    {{ descriptoin }}
                </p>
            </div>
            <GenericPoint dark :point="point" class="mr-auto" />
        </div>
    </NuxtLink>
</template>

<style scoped>
.v-card {
    @apply w-full block relative;
}
/*  */
.v-card-teaser {
    @apply w-full h-[175px] rounded-4xl overflow-hidden
}
.v-card-teaser-img {
    @apply w-fit h-fit object-contain
}

.v-card-body {
    @apply rounded-lg relative z-10 w-full flex items-end px-4 -mt-5
}

.v-card-logo {
    @apply w-[75px] h-[75px] rounded-lg ml-4
}

.v-card-name {
    @apply text-primary mb-1 line-clamp-1 font-semibold
}

.v-card-description {
    @apply text-primary-beta line-clamp-1 leading-none
}
</style>