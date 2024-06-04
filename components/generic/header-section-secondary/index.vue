<script setup>
let { title, subtitle, category, grouping, link, iconName, iconPathCount } = defineProps({
    title: {
        type: String,
        default: ''
    },
    link: {
        type: String,
        default: ''
    }
})
</script>
<template>
    <div class="flex items-center relative z-10 mb-5">
        <div class="flex items-center" @click="show = !show">
            <div class="w-1.5 h-1.5 rounded-full bg-success ml-2"></div>
            <h2 class="text-primary tx-base font-medium">
                {{ title }}
            </h2>
        </div>
        <NuxtLink v-if="link" :to="link"
            class="tx-xs text-primary hover:text-success transition-all group flex items-center mr-auto">
            مشاهده بیشتر
            <GenericIcon name="left" class="text-primary-beta transition-all group-hover:text-success text-4xs mr-2" />
        </NuxtLink>
    </div>
</template>