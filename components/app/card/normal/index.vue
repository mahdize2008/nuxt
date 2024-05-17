<script setup>
let { logoSrc, name, descriptoin, category, point, particular } = defineProps({
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
    category: {
        type: String,
        default: ''
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
        <div class="v-card-body">
            <img :src="logoSrc" class="v-card-logo" alt="">
            <div class="mb-8">
                <h2 class="v-card-name tx-xs">
                    {{ name }}
                </h2>
                <p class="v-card-description tx-xs">
                    {{ descriptoin }}
                </p>
            </div>
            <div class="v-card-option tx-xs">
                {{ category }}
                <GenericPoint dark :point="point" class="mr-auto" :class="{'ml-2':particular}" />
                <GenericParticular v-if="particular" />
            </div>
        </div>
    </NuxtLink>
</template>

<style scoped>
.v-card {
    @apply block w-full relative rounded-4xl border-2 p-4 border-primary-tetha hover:shadow-hover;
}

.v-card-body {
    @apply rounded-lg z-10 w-full flex flex-col items-center
}

.v-card-logo {
    @apply w-[100px] h-[100px] rounded-lg mb-2.5
}

.v-card-name {
    @apply text-primary mb-1 line-clamp-1 font-semibold text-center
}

.v-card-option {
    @apply flex items-center text-primary-beta w-full
}

.v-card-description {
    @apply text-primary-beta line-clamp-1 leading-none text-center
}
</style>