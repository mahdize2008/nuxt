<script setup>
let { items } = defineProps({
    items: {
        type: Array,
        default: []
    }
})
</script>
<template>
    <div class="flex items-center">
        <NuxtLink v-for="(item , index) in items" :to="item.to" :key="index" class="w-[70px] h-[70px] flex items-center justify-center rounded-4xl ml-2.5 last:ml-0 border-2 border-primary-tetha">
            <img :src="item.imgSrc">
        </NuxtLink>
    </div>
</template>