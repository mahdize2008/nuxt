<script setup>
let { title,img,to } = defineProps({
    title: {
        type:String ,
        default: ''
    },
    img: {
        type:String ,
        default: ''
    },
    to: {
        type:String ,
        default: ''
    }
})
</script>

<template>
    <NuxtLink :to="to" class="block pb-2.5">
        <img :src="img" class="mb-4 rounded-xl w-full h-[138px] object-cover object-center"/>
        <h2 class="tx-sm text-primary font-medium px-2.5">
            {{ title }}
        </h2>
    </NuxtLink>
</template>