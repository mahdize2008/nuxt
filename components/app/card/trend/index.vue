<script setup>
let { bgImg, img, name, description, rate, isOnline, to } = defineProps({
    bgImg: {
        type: String,
        default: ''
    },
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
    isOnline: {
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
    <NuxtLink class="w-full group block relative" :to="to">
        <!-- <div class="h-[175px] overflow-hidden"> -->
            <img :src="bgImg" class="h-[175px] w-full rounded-4xl object-top object-cover">
        <!-- </div> -->
        <div class="rounded-lg relative z-10 w-full flex items-end px-4 -mt-5">
            <img :src="img" class="w-[75px] h-[75px] rounded-lg ml-4" alt="">
            <div class="w-full">
                <h2 class="text-primary mb-1 line-clamp-1 font-semibold tx-xs group-hover:text-success">
                    {{ name }}
                </h2>
                <p class="text-primary-beta line-clamp-1 leading-none tx-xs">
                    {{ description }}
                </p>
            </div>
            <GenericRating dark :rate="rate" class="mr-auto" />
        </div>
    </NuxtLink>
</template>
