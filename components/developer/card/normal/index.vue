<script setup>
let { img, name, description, to, gradient } = defineProps({
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
    to: {
        type: String,
        default: ''
    },
    gradient: {
        type: Object,
        default: {}
    }
})
</script>


<template>
    <NuxtLink class="block" :to="to">
        <div class="v-card flex items-center justify-center h-[120px] w-full p-4 rounded-4xl mb-4" :style="`background:linear-gradient(180deg ,${gradient.from} 0%,${gradient.to} 100%)`">
            <img :src="img" class="max-w-full max-h-full" alt="">
        </div>
        <h2 class="text-primary mb-1 line-clamp-1 font-semibold text-center tx-xs" :to="to">
            {{ name }}
        </h2>
        <p class="text-primary-beta line-clamp-1 leading-none text-center tx-xs">
            {{ description }}
        </p>
    </NuxtLink>
</template>