<script setup>
let { img, name, subtitle, rate } = defineProps({
    img: {
        type: String,
        default: ''
    },
    name: {
        type: String,
        default: ''
    },
    subtitle: {
        type: String,
        default: ''
    },
    rate: {
        type: Number,
        default: 0
    }
})
</script>

<template>
    <NuxtLink to="to" class="py-5 flex border-b-2 border-b-primary-tetha last:border-b-0">
        <div class="grow ml-4 flex flex-col justify-between">
            <div class="font-medium tx-xs text-primary-alpha">
                <h2 class="mb-0.5 text-primary font-medium">
                    {{ name }}
                </h2>
                {{ subtitle }}
            </div>
            <GenericRating :rate="rate" theme="dark" class="mr-auto w-fit" />
        </div>
        <img :src="img" class="w-[70px] h-[70px] rounded-lg" />
    </NuxtLink>
</template>