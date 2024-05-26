<script setup>
import { ref } from 'vue'
let { title, text, number } = defineProps({
    title: {
        type: String,
        default: ''
    },
    text: {
        type: String,
        default: ''
    },
    number: {
        type: Number,
        default: 1
    },
})
let show = ref(false)
</script>

<template>
    <div class="v-accordion border-primary-tetha border-2 rounded-4xl" :class="{ 'v-accordion-active': show }">
        <div @click="show = !show" class="v-accordion-header p-4 pb-0 cursor-pointer">
            <div class="border-b-2 pb-4 border-b-primary-tetha flex items-center border-opacity-0">
                <div
                    class="v-accordion-number w-11 h-11 tx-base rounded-full text-primary ml-4 border-2 border-primary-tetha flex items-center justify-center">
                    {{ number }}
                </div>
                <h2 class="tx-base font-medium text-primary">
                    {{ title }}
                </h2>
                <GenericBtn v-if="show" iconName="up" lightness rounded square class="mr-auto !text-2xs" />
                <GenericBtn v-if="!show" iconName="down" lightness rounded square class="mr-auto !text-2xs" />
            </div>
            <div class="pt-4 pb-9" v-if="show">
                <p>
                    {{ text }}
                </p>
            </div>
        </div>

    </div>
</template>

<style scoped>
.v-accordion.v-accordion-active .v-accordion-header h2 {
    @apply !text-success transition-all
}
.v-accordion.v-accordion-active .v-accordion-header .v-accordion-number {
    @apply !bg-success !text-white transition-all
}
.v-accordion.v-accordion-active .v-accordion-header div {
    @apply border-opacity-100 transition-all
}
</style>