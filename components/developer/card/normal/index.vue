<script setup>
let { logoSrc, name, descriptoin, to, gradientFrom, gradientTo } = defineProps({
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
    to: {
        type: String,
        default: ''
    },
    gradientFrom: {
        type: String,
        default: ''
    },
    gradientTo: {
        type: String,
        default: ''
    }
})
</script>


<template>
    <NuxtLink class="v-card" :style="[`--gradient-from:${gradientFrom}`, `--gradient-to:${gradientTo}`]" :to="to">
        <img src="/img/brand.png" class="v-card-brand" alt="">
    </NuxtLink>
    <NuxtLink class="v-card-name tx-xs" :to="to">
        {{ name }}
    </NuxtLink>
    <p class="v-card-description tx-xs">
        {{ descriptoin }}
    </p>
</template>

<style scoped>
.v-card {
    @apply flex items-center justify-center h-[120px] w-full p-4 rounded-4xl mb-4;
    background: linear-gradient(180deg, var(--gradient-from) 0%, var(--gradient-to) 100%);
}

.v-card-brand {
    @apply max-w-full max-h-full
}

.v-card-name {
    @apply text-primary mb-1 line-clamp-1 font-semibold text-center
}

.v-card-description {
    @apply text-primary-beta line-clamp-1 leading-none text-center
}
</style>