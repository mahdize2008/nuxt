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
    <NuxtLink :to="to" class="block relative">
        <img :src="img" class="rounded-xl w-full h-[245px] object-cover object-center"/>
        <h2 class="tx-sm text-white font-medium px-4 absolute bottom-4">
            {{ title }}
        </h2>
        <GenericPlay class="!top-1/2 !left-1/2 -translate-x-1/2 -translate-y-1/2"/>
    </NuxtLink>
</template>