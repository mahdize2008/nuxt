<script setup>
let { bgImg, name, description, to } = defineProps({
    bgImg: {
        type: String,
        default: ''
    },
    imgs: {
        type: Array,
        default: []
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
    }
})
</script>


<template>
    <NuxtLink class="block" :to="to">
        <img :src="bgImg" class="w-full h-[213px] object-cover object-center mb-4">
        <div class="flex items-center px-2.5">
            <div class="ml-auto">
                <h2 class="text-primary mb-1 line-clamp-1 font-semibold tx-xs" :to="to">
                    {{ name }}
                </h2>
                <p class="text-primary-beta line-clamp-1 leading-none tx-xs">
                    {{ description }}
                </p>
            </div>
            <ul class="flex items-center -mx-[5px]">
                <li v-for="(img , index) in imgs" :key="index" class="px-[5px]">
                    <img :src="img" class="w-11 h-11 rounded-md">
                </li>
            </ul>
        </div>
    </NuxtLink>
</template>