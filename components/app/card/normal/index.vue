<script setup>
let { img, name, description, category, rate, isOnline, to,hasSield } = defineProps({
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
    rate: {
        type: Number,
        default: 0
    },
    category: {
        type: String,
        default: ''
    },
    isOnline: {
        type: Boolean,
        default: false
    },
    hasSield: {
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
    <NuxtLink
        class="flex flex-col z-10 items-center w-full relative transition-all rounded-4xl border-2 p-4 border-primary-tetha hover:shadow-hover"
        :to="to">
        <GenericOnline v-if="isOnline" />
        <img :src="img" class="w-[100px] h-[100px] rounded-lg mb-2.5" alt="">
        <div class="mb-8">
            <h2 class="text-primary mb-1 line-clamp-1 font-semibold text-center tx-xs">
                {{ name }}
            </h2>
            <p class="text-primary-beta line-clamp-1 leading-none text-center tx-xs">
                {{ description }}
            </p>
        </div>
        <div class="flex items-center text-primary-beta w-full tx-xs">
            {{ category }}
            <GenericRating theme="dark" :rate="rate" class="mr-auto" />
            <GenericIcon v-if="hasSield" name="shield_chek" class="text-success text-lg mr-2" />
        </div>
    </NuxtLink>
</template>