<script setup>
let { bgImg, img, name, description, category, isMode, rate, isOnline, hasShild, to } = defineProps({
    bgImg: {
        type: String,
        default: ''
    },
    img: {
        type: String,
        default: ''
    },
    name: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        default: ''
    },
    category: {
        type: String,
        default: ''
    },
    isMode: {
        type: Boolean,
        default: false
    },
    rate: {
        type: Number,
        default: 0
    },
    isOnline: {
        type: Boolean,
        default: false
    },
    hasShild: {
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
    <NuxtLink :to="to" class="h-[320px] w-full rounded-4xl overflow-hidden relative flex items-end p-3">
        <img :src="bgImg" class="absolute top-0 right-0 w-full h-full object-cover object-top">
        <div class="rounded-lg bg-primary-beler p-4 relative z-10 w-full flex items-center">
            <GenericOnline v-if="isOnline" />
            <img :src="img" class="w-[75px] h-[75px] rounded-lg ml-4" alt="">
            <div class="w-full">
                <h2 class="text-white mb-1 line-clamp-1 tx-base">
                    {{ name }}
                </h2>
                <p class="text-white/70 mb-0.5 line-clamp-1 tx-xs">
                    {{ description }}
                </p>
                <div class="flex items-end text-white tx-xs">
                    <GenericIcon v-if="hasShild" name="shield_chek" class="text-success text-lg ml-2" />
                    <span class="block">
                        {{ category }}
                    </span>
                    <span v-if="isMode" class="bg-black/50 py-0.5 block text-white rounded-full px-2 mr-2">
                        مود شده
                    </span>
                    <GenericRating :rate="rate" class="mr-auto" />
                </div>
            </div>
        </div>
    </NuxtLink>
</template>
